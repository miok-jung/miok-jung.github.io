<template>
  <h6>QTable default</h6>
  <q-table
    class="no-shadow"
    :columns="tableColumns"
    :rows="tableRows"
    :rows-per-page-options="[0]"
    :card-style="{
      width: '100%',
      border: '1px solid green',
    }"
    :table-style="{ width: 'inherit', border: '1px solid orange' }"
    :table-header-style="{ border: '1px solid green', background: '' }"
    :square="false"
    hide-pagination
  >
    <template v-slot:body="props">
      <q-tr :props="props" :key="props.row.id">
        <q-td class="text-no-wrap" style="width: 5%">
          {{ props.row.id }}
        </q-td>
        <q-td style="width: 25%; white-space: normal">
          {{ props.row.lowText }}
        </q-td>
        <q-td style="width: 70%; white-space: normal">
          <div class="one-line-ellipsis" :title="props.row.longText">
            {{ props.row.longText }}
          </div>
        </q-td>
      </q-tr>
    </template>
  </q-table>
  <div>{{ $q.screen.width }}</div>
  <h6>QTable grid style</h6>
  <q-table
    class="no-shadow"
    :columns="tableColumns"
    :rows="tableRows"
    :rows-per-page-options="[0]"
    :card-container-style="{ background: 'grey', border: '1px solid purple' }"
    :card-style="{
      width: '100%',

      background: 'yellow',
      border: '1px solid green',
    }"
    :square="true"
    hide-pagination
    grid
  >
    <template v-slot:body="props">
      <q-tr :props="props" :key="props.row.id">
        <q-td>{{ props.row.id }}</q-td>
        <q-td>
          {{ props.row.lowText }}
        </q-td>
        <q-td>{{ props.row.longText }}</q-td>
      </q-tr>
    </template>
  </q-table>
  <p>QTable Test Result</p>
  <ul>
    <li>최상단 style === card-style 속성, 클래스명: q-table__container</li>
    <li>table-style은 pagination을 뺀 테이블만 지정, 클래스명: q-table__middle</li>
    <li>table-header-style은 thead > tr에 적용</li>
    <li>card-container-style, card-style의 경우 grid 속성 추가시 사용 가능</li>
    <li>
      grid 일 때에는 card-container-style이 최상단 스타일, card-style은 grid로 된 각 카드가 row임
    </li>
    <li>Columns안에 있는 headerStyle, style은 width 적용이 X</li>
    <li>Header BG만 적용됨...?</li>
    <li>
      card-style에 width 100% 설정, %로 변경시 white-space: nowrap은 필수<br />
      즉, 줄바꿈이 필수
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import type { QTableColumn } from 'quasar';

const $q = useQuasar();

type tableType = {
  id: number;
  lowText: string;
  longText: string;
};

const tableColumns: QTableColumn[] = [
  {
    name: 'id',
    label: 'No',
    field: (row: tableType) => row.id,
    align: 'left',
    headerStyle: `width: calc(${$q.screen.width}px * 0.2); background: red`,
    style: `border: 1px solid blue; width: calc(${$q.screen.width}px * 0.2); background: red`,
  },
  {
    name: 'lowText',
    label: 'Low TEXT',
    field: (row: tableType) => row.lowText,
    align: 'left',
    headerStyle: `width: calc(${$q.screen.width}px * 0.4)`,
    style: `border: 1px solid blue; width: calc(${$q.screen.width}px * 0.4)`,
  },
  {
    name: 'longText',
    label: 'Long TEXT',
    field: (row: tableType) => row.longText,
    align: 'left',
    headerStyle: `width: calc(${$q.screen.width}px * 0.4)`,
    style: `border: 1px solid blue; width: calc(${$q.screen.width}px * 0.4)`,
  },
];
const tableRows = ref<tableType[]>([
  {
    id: 1546584658464,
    lowText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, accusamus.',
    longText:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam vel quis earum tempora nobis quae alias, et unde mollitia officia consectetur reiciendis? Consequatur ipsa vel id nam mollitia facilis non voluptas dolores sed commodi nemo sint, velit qui illo ipsum voluptates fugiat aut temporibus. Adipisci reiciendis totam odit veritatis rem.',
  },
  {
    id: 1,
    lowText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, accusamus.',
    longText:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam vel quis earum tempora nobis quae alias, et unde mollitia officia consectetur reiciendis? Consequatur ipsa vel id nam mollitia facilis non voluptas dolores sed commodi nemo sint, velit qui illo ipsum voluptates fugiat aut temporibus. Adipisci reiciendis totam odit veritatis rem.',
  },
]);
</script>
