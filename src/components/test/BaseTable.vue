<template>
  <div>
    <table class="table-1">
      <caption v-if="props.caption !== ''">
        {{
          props.caption
        }}
      </caption>
      <thead>
        <tr>
          <template v-for="header in props.thead" :key="header">
            <th scope="col">{{ header }}</th>
          </template>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Chris</th>
          <td>HTML tables</td>
          <td>22</td>
        </tr>
        <tr>
          <th scope="row">Dennis</th>
          <td>Web accessibility</td>
          <td>45</td>
        </tr>
        <tr>
          <th scope="row">Sarah</th>
          <td>JavaScript frameworks</td>
          <td>29</td>
        </tr>
        <tr>
          <th scope="row">Karen</th>
          <td>Web performance</td>
          <td>36</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th scope="row" colspan="2">Average age</th>
          <td>33</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    caption?: string;
    thead: string[];
    tbody: string[];
  }>(),
  {
    caption: '',
    thead: () => [],
    tbody: () => [],
  },
);
</script>

<style scoped lang="scss">
table.table-1 {
  border: 1px solid red;
  width: 100%;
  caption {
    border: 1px solid orange;
    margin-bottom: 2px;
  }
  thead {
    tr {
      th {
        border: 1px solid pink;
      }
    }
  }
  tbody {
    tr {
      th {
        border: 1px solid goldenrod;
      }
      td {
        border: 1px solid blueviolet;
      }
    }
  }
  tfoot {
    tr {
      th {
        border: 1px solid gainsboro;
      }
      td {
        border: 1px solid grey;
      }
    }
  }
}
</style>
