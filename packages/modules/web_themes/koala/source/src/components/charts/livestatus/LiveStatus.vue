<template>
  <div class="custom-width">
    
      <div class="card-container">
        <!-- PV Card -->
        <q-card class="item pv" flat>
            <div class="header">PV</div>
            <div class="row">
              <div class="col text-value">
           {{ formatValue(pvPower*-1) }}W
              </div>
              <div class="col icon-container">
                <q-badge rounded class="pv-background">
                  <q-icon name="solar_power" style="font-size: 24px;" class="pv-color" />
                  <q-tooltip class="bg-primary">Phasenanzahl</q-tooltip>
                </q-badge>
              </div>
            </div>
        </q-card>

        <!-- Grid Card -->
        <q-card class="item grid" flat >
            <div class="header" >Netz</div>
            <div class="row">
              <div class="col text-value" >
                {{ formatValue(gridPower) }}W
              </div>
              <div class="col icon-container">
                <q-badge rounded class="grid-background">
                  <q-icon name="power" style="font-size: 24px;" class="grid-color"/>
                  <q-tooltip class="bg-primary">EVU</q-tooltip>
                </q-badge>
              </div>
            </div>

        </q-card>

        <!-- House Card -->
        <q-card class="item house" flat >
            <div class="header" >Haus</div>
            <div class="row">
              <div class="col text-value">
                {{ formatValue(homePower)}}W
              </div>
              <div class="col icon-container">
                <q-badge rounded class="house-background">
                  <q-icon name="home" style="font-size: 24px;" class="house-color" />
                  <q-tooltip class="bg-primary">gesamter Hausverbrauch heute:<br></q-tooltip>
                </q-badge>
              </div>
            </div>
        </q-card>

        <!-- Battery Card -->
        <q-card class="item battery" flat >
            <div class="header" >Speicher</div>
            <div class="row">
              <div class="col text-value" style="font-size: 14px;">
                {{ formatValue(batteryPower) }}W<br />
                {{ (batterySoc * 100).toFixed(0) }}%
              </div>
              <div class="col icon-container">
                <q-badge rounded class="battery-background">
                  <q-icon name="battery_charging_full" style="font-size: 24px;" class="battery-color" />
                  <q-tooltip class="bg-primary">Speicher</q-tooltip>
                </q-badge>
              </div>
            </div>
        </q-card>

        <!-- EV Card -->
        <q-card class="item ev" flat >
            <div class="header">Ladepunkte</div>
            <div class="row">
              <div class="col text-value">
                {{ formatValue(evPower) }}W
              </div>
              <div class="col icon-container">
                <q-badge rounded class="ev-background">
                  <q-icon name="ev_station" style="font-size: 24px;" class="ev-color" />
                  <q-tooltip class="bg-primary">Ladepunkte</q-tooltip>
                </q-badge>
              </div>
            </div>
        </q-card>
      </div>
    
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue';
import { QCard, QIcon } from 'quasar';
import { useMqttStore } from 'src/stores/mqtt-store';
const mqttStore = useMqttStore();

const gridPower = computed(
  () => mqttStore.getGridPower('value') as number,
);

mqttStore

const batteryPower = computed(() => mqttStore.batteryTotalPower('value') as number);
const batterySoc = computed(() => Number(mqttStore.batterySocTotal) / 100);
const homePower = computed(
  () => mqttStore.getHomePower('value') as number,
);
const pvPower = computed(() => mqttStore.getPvPower('value') as number);
const evPower = computed(() => mqttStore.chargePointSumPower('value') as number);

const formatValue = (value: number) => {
  if (Math.abs(value) >= 1000) {
    return (value / 1000).toFixed(1) + 'k';
  }
  return value.toString();
};

onMounted(() => {
  //const interval = setInterval(fetchData, 5000);
  //onUnmounted(() => clearInterval(interval));
});
</script>

<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 10px;
}

.item {
  flex: 1 1 calc(50% - 20px); /* Adjust the width of the cards */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 5px;
}

.item.pv {
  flex: 1 1 100%; /* Make the PV card span the entire row */
}

.header {
  font-size: 14px;
  color: #888;
  text-align: left;
  width: 100%;
}

.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.text-value {
  font-size: 24px;
  font-weight: bold;
  text-align: left;
}

.icon-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.icon-background {
  background-color: #f0f0f0;
  border-radius: 50%;
  padding: 10px;
}

.q-icon {
  font-size: 20px;
}

.custom-width {
  width: 100%;
  max-width: 600px;
  margin: 0 auto; /* Center the card horizontally */
}

/* Define color classes */
.pv-background {
  background-color: rgba(144, 238, 144, 0.2);
}

.pv-color {
  color: green;
}

.grid-background {
  background-color: rgba(239, 182, 188, 0.2);
}

.grid-color {
  color: #a33c42;
}

.house-background {
  background-color: rgba(148, 154, 161, 0.2);
}

.house-color {
  color: #949aa1;
}

.battery-background {
  background-color: rgba(181, 166, 71, 0.2);
}

.battery-color {
  color: #b5a647;
}

.ev-background {
  background-color: rgba(71, 102, 181, 0.2);
}

.ev-color {
  color: #4766b5;
}
</style>