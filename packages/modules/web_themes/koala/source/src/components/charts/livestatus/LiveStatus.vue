<template>
    <div class="custom-width">
        <canvas id="sankeyChart"></canvas>
    </div>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue';
import { useMqttStore } from 'src/stores/mqtt-store';

const mqttStore = useMqttStore();

// Get raw power values with their signs preserved
const gridPower = computed(() => mqttStore.getGridPower('value') as number);
const pvPower = computed(() => mqttStore.getPvPower('value') as number);
const batteryPower = computed(() => mqttStore.batteryTotalPower('value') as number);
const homePower = computed(() => mqttStore.getHomePower('value') as number);
const evPower = computed(() => mqttStore.chargePointSumPower('value') as number);

onMounted(() => {
    // We need to explicitly import Chart.js and the Sankey plugin with full paths
    Promise.all([
        import('chart.js/auto'),
        import('chartjs-chart-sankey')
    ]).then(([ChartJS, SankeyPlugin]) => {
        const { Chart } = ChartJS;
        const { SankeyController, Flow } = SankeyPlugin;
        
        // Register the sankey components
        Chart.register(SankeyController, Flow);
        
        const ctx = document.getElementById('sankeyChart') as HTMLCanvasElement;

        // Create the chart
        const createChart = () => {
            // Extract the raw values
            // Note: In OpenWB, power values have specific sign conventions:
            // - Grid: positive = consumption from grid, negative = feed-in to grid
            // - PV: positive = consumption, negative = production
            // - Battery: positive = charging, negative = discharging
            const gridPowerValue = gridPower.value || 0;
            const pvPowerValue = pvPower.value || 0;
            const batteryPowerValue = batteryPower.value || 0;
            const housePowerValue = homePower.value || 0;
            const evPowerValue = evPower.value || 0;
            
            // Calculate house consumption (excluding EV)
            const houseConsumption = Math.max(0.1, housePowerValue - evPowerValue);
            
            // Initialize the flows array
            const flows = [];
            
            // Energy Sources
            
            // 1. PV as source
            if (pvPowerValue < 0) {
                const pvProduction = -pvPowerValue; // Convert to positive
                
                // PV -> House direct consumption
                const pvToHouse = Math.min(pvProduction, houseConsumption);
                if (pvToHouse > 0.5) {
                    flows.push({ from: 'PV', to: 'Haus', flow: pvToHouse });
                }
                
                // PV -> EV direct consumption
                const pvToEV = Math.min(pvProduction - pvToHouse, evPowerValue);
                if (pvToEV > 0.5) {
                    flows.push({ from: 'PV', to: 'Ladepunkte', flow: pvToEV });
                }
                
                // PV -> Battery (if battery is charging)
                if (batteryPowerValue > 0) {
                    const pvToBattery = Math.min(pvProduction - pvToHouse - pvToEV, batteryPowerValue);
                    if (pvToBattery > 0.5) {
                        flows.push({ from: 'PV', to: 'Speicher', flow: pvToBattery });
                    }
                }
                
                // PV -> Grid (if excess production)
                const pvToGrid = Math.max(0, pvProduction - pvToHouse - pvToEV - (batteryPowerValue > 0 ? batteryPowerValue : 0));
                if (pvToGrid > 0.5) {
                    flows.push({ from: 'PV', to: 'Netz', flow: pvToGrid });
                }
            }
            
            
            // 2. Grid as source (importing)
            if (gridPowerValue > 0) {
                // Grid -> House
                const gridToHouse = Math.min(gridPowerValue, Math.max(0, houseConsumption - (pvPowerValue < 0 ? -pvPowerValue : 0) - (batteryPowerValue < 0 ? -batteryPowerValue : 0)));
                if (gridToHouse > 0.5) {
                    flows.push({ from: 'Netz', to: 'Haus', flow: gridToHouse });
                }
                
                // Grid -> EV
                const gridToEV = Math.min(gridPowerValue - gridToHouse, Math.max(0, evPowerValue - (pvPowerValue < 0 ? -pvPowerValue - houseConsumption : 0) - (batteryPowerValue < 0 ? -batteryPowerValue - houseConsumption : 0)));
                if (gridToEV > 0.5) {
                    flows.push({ from: 'Netz', to: 'Ladepunkte', flow: gridToEV });
                }
                
                // Grid -> Battery (charging from grid)
                const gridToBattery = Math.max(0, gridPowerValue - gridToHouse - gridToEV);
                if (gridToBattery > 0.5 && batteryPowerValue > 0) {
                    flows.push({ from: 'Netz', to: 'Speicher', flow: gridToBattery });
                }
            }
            // 3. Battery as source (discharging)
            if (batteryPowerValue < 0) {
                const batteryDischarge = -batteryPowerValue; // Convert to positive
                
                // Battery -> House
                const batteryToHouse = Math.min(batteryDischarge, Math.max(0, houseConsumption - (pvPowerValue < 0 ? -pvPowerValue : 0)));
                if (batteryToHouse > 0.5) {
                    flows.push({ from: 'Speicher', to: 'Haus', flow: batteryToHouse });
                }
                
                // Battery -> EV
                const batteryToEV = Math.min(batteryDischarge - batteryToHouse, Math.max(0, evPowerValue - (pvPowerValue < 0 ? -pvPowerValue - houseConsumption : 0)));
                if (batteryToEV > 0.5) {
                    flows.push({ from: 'Speicher', to: 'Ladepunkte', flow: batteryToEV });
                }
                
                // Battery -> Grid (unlikely but possible)
                const batteryToGrid = Math.max(0, batteryDischarge - batteryToHouse - batteryToEV);
                if (batteryToGrid > 0.5) {
                    flows.push({ from: 'Speicher', to: 'Netz', flow: batteryToGrid });
                }
            }
            
            // Removed "Haus -> Hausverbrauch" flow as they represent the same thing

            new Chart(ctx, {
                type: 'sankey',
                data: {
                    datasets: [{
                        label: 'Energy Flow',
                        data: flows,
                        // Use CSS variables from quasar.variables.scss
                        colorFrom: (c) => {
                            // Map German terms to English CSS variable names
                            const colorMap: {[key: string]: string} = {
                                'Netz': getComputedStyle(document.documentElement).getPropertyValue('--grid-color').trim(),
                                'PV': getComputedStyle(document.documentElement).getPropertyValue('--pv-color').trim(),
                                'Speicher': getComputedStyle(document.documentElement).getPropertyValue('--battery-color').trim(),
                                'Haus': getComputedStyle(document.documentElement).getPropertyValue('--house-color').trim(),
                                'Ladepunkte': getComputedStyle(document.documentElement).getPropertyValue('--ev-color').trim()
                            };
                            const sourceNode = c.dataset.data[c.dataIndex].from;
                            return colorMap[sourceNode] || '#757575'; // Default gray
                        },
                        colorTo: (c) => {
                            // Map German terms to English CSS variable names
                            const colorMap: {[key: string]: string} = {
                                'Netz': getComputedStyle(document.documentElement).getPropertyValue('--grid-color').trim(),
                                'PV': getComputedStyle(document.documentElement).getPropertyValue('--pv-color').trim(),
                                'Speicher': getComputedStyle(document.documentElement).getPropertyValue('--battery-color').trim(),
                                'Haus': getComputedStyle(document.documentElement).getPropertyValue('--house-color').trim(),
                                'Ladepunkte': getComputedStyle(document.documentElement).getPropertyValue('--ev-color').trim()
                            };
                            const targetNode = c.dataset.data[c.dataIndex].to;
                            return colorMap[targetNode] || '#757575'; // Default gray
                        },
                        // Disable gradient/alpha to avoid color issues
                        colorMode: 'from',
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    layout: {
                        padding: 20
                    },
                    plugins: {
                        tooltip: {
                            callbacks: {
                                label: (context) => {
                                    const data = context.raw as {from: string, to: string, flow: number};
                                    return `${data.from} → ${data.to}: ${data.flow.toFixed(0)}W`;
                                }
                            }
                        },
                        legend: {
                            display: false
                        }
                    },
                    // Disable animation
                    animation: false
                }
            });
        };

        // Create initial chart
        createChart();

        // Set up periodic refresh every 5 seconds
        setInterval(() => {
            // Clear previous chart instance
            const chartInstance = Chart.getChart(ctx);
            if (chartInstance) {
                chartInstance.destroy();
            }
            // Create new chart with fresh data
            createChart();
        }, 5000);
    });
});
</script>

<style scoped>
.custom-width {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    height: 100%;
}
</style>