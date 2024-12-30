<template>
  <div>
    <div class="row">
      <!--
        <q-btn icon="mdi-undo" />
        <q-btn icon="mdi-redo" />
      -->
      <q-btn flat />
      <q-btn flat />
      <q-separator vertical />
      <q-select
        v-model="headingValue"
        :options="headingOptions"
        label="제목 선택"
        style="width: 200px"
        @update:model-value="updateHeadingValue"
        clearable
        dense
        filled
      >
        <template #option="scope">
          <q-item v-bind="scope.itemProps">
            <q-item-section>
              <q-item-label v-html="scope.opt.label" />
            </q-item-section>
          </q-item>
        </template>
      </q-select>
      <q-separator class="q-mx-sm" vertical />
      <q-btn icon="mdi-format-bold" />
      <q-btn icon="mdi-format-bold" unelevated />
    </div>
    <q-separator />

    <div style="border: 1px solid red" v-html="editValue" />
    <textarea v-model="editValue" @update:model-value="editUpdate" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { QSelect, QSelectOption } from 'quasar';

const headingValue = ref<QSelectOption | null>(null);
const headingOptions = [
  {
    label: '<h1>Heading 1</h1>',
    value: '1',
  },
  {
    label: '<h2>Heading 2</h2>',
    value: '2',
  },
  {
    label: '<h3>Heading 3</h3>',
    value: '3',
  },
  {
    label: '<h4>Heading 4</h4>',
    value: '4',
  },
  {
    label: '<h5>Heading 5</h5>',
    value: '5',
  },
  {
    label: '<h6>Heading 6</h6>',
    value: '6',
  },
];
function updateHeadingValue(newValue: QSelectOption | null) {
  if (newValue) {
    // HTML 태그 제거
    // FIXME: 앞으로 다른 곳에서도 쓰이는가?
    const removeHTML = newValue.label.replace(/<\/?[^>]+(>|$)/g, '');
    headingValue.value = { ...newValue, label: removeHTML };
  } else {
    headingValue.value = null;
  }
}

// NOTE: 에디터
const editValue = ref<string>('');
function editUpdate(value: string) {
  console.log('update', value);
  console.log('heading value: ', headingValue.value);
  if (headingValue.value) {
    // 제목 선택 설정
    editValue.value = `<h${headingValue.value.value}>` + value + `</h${headingValue.value.value}>`;
  } else {
    editValue.value = value;
  }
}
</script>
