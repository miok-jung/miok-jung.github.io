<template>
  <div class="row">
    <template v-for="item in dummyGift.vietnam.gift" :key="item.id">
      <!-- SECTION: 선물 리스트 -->
      <q-card v-if="pathArray[2] === 'gift'" bordered>
        <q-card-section class="q-pb-none">
          <p>
            <b>{{ item.ko_name }}</b>
            &nbsp; ( <span>{{ item.en_name }}</span> )
          </p>
          <p>
            <b>
              {{ Intl.NumberFormat('VN', { style: 'currency', currency: 'VND' }).format(parseInt(item.vn)) }}
            </b>
            &nbsp; (
            <span>{{
              Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(
                Math.floor(parseInt(item.vn) / 20)
              )
            }}</span>
            )
          </p>
        </q-card-section>
        <q-card-section class="q-pb-none">
          <q-img v-if="item.img_url !== ''" :src="item.img_url" />
          <p v-html="item.description" />
        </q-card-section>
      </q-card>
    </template>
    <!-- !SECTION -->
    <!-- SECTION: 맛집 리스트 -->
    <template v-for="item in dummyNahtrang.vietnam.nahtrang" :key="item.id">
      <q-card v-if="pathArray[2] === 'nahtrang'" bordered>
        <q-card-section class="q-pb-none">
          <p>
            <b>{{ item.ko_name }}</b>
            &nbsp; ( <span>{{ item.en_name }}</span> )
          </p>
          <p>
            <q-icon name="mdi-map-marker-outline" />
            <span> {{ item.address }}</span>
          </p>
          <p>
            <q-icon name="mdi-clock-time-ten-outline" />
            <span> {{ item.open }} - {{ item.close }}</span>
          </p>
        </q-card-section>
        <q-card-section class="q-pb-none">
          <p v-html="item.description" />
        </q-card-section>
      </q-card>
    </template>
    <!-- !SECTION -->
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import dummyGift from 'assets/dummy/data/gift.json';
import dummyNahtrang from 'assets/dummy/data/area.json';

const route = useRoute();
const pathArray = ref<string[]>([]);

// NOTE: life-cycle
onMounted(() => {
  pathArray.value = route.path.split('/').filter(Boolean);
});
</script>

<style scoped></style>
