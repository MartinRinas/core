<template>
  <q-card class="custom-width bg-light">
    <q-card-section>
      <div class="card-container">
        <!-- PV Card -->
        <q-card class="item pv" flat bordered>

            <div class="header">Produktion</div>
            <div class="row">
              <div class="col text-value">
           {{ data.pv }}&nbsp;W
              </div>
              <div class="col icon-container">
                <q-icon name="solar_power" class="icon-background text-yellow-600" />
              </div>
            </div>
        </q-card>

        <!-- Grid Card -->
        <q-card class="item grid" flat bordered>
          
            <div class="header">Grid</div>
            <div class="row">
              <div class="col text-value">
                {{ data.grid }}&nbsp;W
              </div>
              <div class="col icon-container">
                <q-icon name="power" class="icon-background text-blue-600" />
              </div>
            </div>

        </q-card>

        <!-- House Card -->
        <q-card class="item house" flat bordered>
            <div class="header">House</div>
            <div class="row">
              <div class="col text-value">
                {{ data.house }}&nbsp;W
              </div>
              <div class="col icon-container">
                <q-icon name="home" class="icon-background text-gray-600" />
              </div>
            </div>
        </q-card>

        <!-- Battery Card -->
        <q-card class="item battery" flat bordered>
            <div class="header">Battery</div>
            <div class="row">
              <div class="col text-value">
                {{ data.battery }}&nbsp;W
              </div>
              <div class="col">
                <span v-if="data.battery > 0">Aufladen</span>
                <span v-else>Entladen</span>
              </div>
              <div class="col icon-container">
                <q-icon name="battery_charging_full" class="icon-background text-green-600" />
              </div>
            </div>
        </q-card>

        <!-- EV Card -->
        <q-card class="item ev" flat bordered>
            <div class="header">EV</div>
            <div class="row">
              <div class="col text-value">
                {{ data.ev }}&nbsp;W
              </div>
              <div class="col icon-container">
                <q-icon name="ev_station" class="icon-background text-purple-600" />
              </div>
            </div>
        </q-card>
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { QCard, QCardSection, QIcon } from 'quasar';

const data = ref({
  pv: 0,
  house: 0,
  grid: 0,
  battery: 0,
  ev: 0,
});

const fetchData = () => {
  data.value = {
    pv: Math.floor(Math.random() * 5000),
    house: Math.floor(Math.random() * 4000),
    grid: Math.floor(Math.random() * 2000) - 1000, // Negative for export
    battery: Math.floor(Math.random() * 2000) - 1000, // Negative for discharging
    ev: Math.floor(Math.random() * 7000),
  };
};

onMounted(() => {
  const interval = setInterval(fetchData, 5000);
  onUnmounted(() => clearInterval(interval));
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

</style>