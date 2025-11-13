<template>
  <q-card>
    <q-card-section>
      <h2>Button</h2>
    </q-card-section>
    <q-card-section class="flex row">
      <div class="flex col-6" style="gap: 8px">
        <q-btn>Quasar Btn</q-btn>
        <q-btn flat>Flat</q-btn>
        <q-btn icon="mdi-gesture-tap-button">Left Icon</q-btn>
        <q-btn right-icon="mdi-gesture-tap-button">Right Icon</q-btn>
      </div>
      <div class="flex col-6" style="gap: 8px">
        <button class="j-btn">Custom Btn</button>
        <button class="j-btn flat">Flat</button>
        <button class="j-btn left-icon">
          <span class="mdi mdi-gesture-tap-button"></span>
          <span>Left Icon</span>
        </button>
        <button class="j-btn right-icon">
          <span>Right Icon</span>
          <span class="mdi mdi-gesture-tap-button"></span>
        </button>
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts"></script>

<style scoped></style>
