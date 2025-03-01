<template>
  <q-card class="custom-width bg-light">
    <q-card-section>
      <div class="relative-container">
        <!-- PV at the top -->
        <div class="item pv">
          <q-icon name="solar_power" class="mx-auto text-yellow-600" />
          <p>{{ data.pv }} W</p>
          <q-icon v-if="data.pv > 0" :name="mdiArrowDown" class="mx-auto text-yellow-600" />
        </div>

        <!-- Grid on the left -->
        <div class="item grid">
          <div class="icon-container">
            <q-icon name="power" class="text-blue-600" />
            <q-icon v-if="data.grid > 0" :name="mdiArrowLeft" class="text-blue-600" />
            <q-icon v-else :name="mdiArrowRight" class="text-red-600" />
          </div>
          <p>{{ data.grid }} W</p>
        </div>

        <!-- House in the middle -->
        <div class="item house">
          <q-icon name="home" class="mx-auto text-gray-600" />
          <p>{{ data.house }} W</p>
        </div>

        <!-- Battery on the right -->
        <div class="item battery">
          <div class="icon-container">
            <q-icon name="battery_charging_full" class="text-green-600" />
            <q-icon v-if="data.battery > 0" :name="mdiArrowLeft" class="text-blue-600" />
            <q-icon v-else :name="mdiArrowRight" class="text-red-600" />
          </div>
          <p>{{ data.battery }} W</p>
        </div>

        <!-- EV Chargers at the bottom -->
        <div class="item ev">
          <q-icon :name="mdiArrowUp" class="mx-auto text-purple-600" />
          <q-icon name="ev_station" class="mx-auto text-purple-600" />
          <p>{{ data.ev }} W</p>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { QCard, QCardSection, QIcon } from 'quasar';
import { mdiArrowRight, mdiArrowLeft, mdiArrowUp, mdiArrowDown } from '@mdi/js';

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
.relative-container {
  position: relative;
  width: 100%;
  height: 400px; /* Adjust height as needed */
}

.item {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.icon-container {
  display: flex;
  align-items: center;
}

.q-icon {
  font-size: 50px;
}

.pv {
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
}

.grid {
  top: 100px;
  left: 10px;
  display: flex;
  align-items: center;
}

.house {
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
}

.battery {
  top: 100px;
  right: 10px;
  display: flex;
  align-items: center;
}

.ev {
  top: 200px;
  left: 50%;
  transform: translateX(-50%);
}

.custom-width {
  width: 100%;
  max-width: 600px;
  margin: 0 auto; /* Center the card horizontally */
}

@media (max-width: 600px) {
  .q-icon {
    font-size: 40px;
  }

  .item p {
    font-size: 14px;
  }
}

@media (max-width: 400px) {
  .q-icon {
    font-size: 30px;
  }

  .item p {
    font-size: 12px;
  }
}
</style>