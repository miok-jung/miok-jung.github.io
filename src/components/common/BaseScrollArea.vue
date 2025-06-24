<template>
  <q-scroll-area :class="scrollClass" :thumb-style="thumbStyle" :bar-style="barStyle">
    <slot />
  </q-scroll-area>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { QScrollArea } from "quasar";

interface Props {
  horizontal?: boolean;
  vertical?: boolean;
  thumbStyle?: Record<string, string>;
  barStyle?: Record<string, string>;
}

const props = withDefaults(defineProps<Props>(), {
  horizontal: false,
  vertical: true,
  thumbStyle: () => ({
    right: "2px",
    borderRadius: "5px",
    backgroundColor: "red",
    width: "5px",
    opacity: "0.7",
  }),
  barStyle: () => ({
    right: "2px",
    borderRadius: "5px",
    backgroundColor: "blue",
    width: "5px",
    opacity: "0.3",
  }),
});

const scrollClass = computed(() => {
  return {
    "scroll-x": props.horizontal,
    "scroll-y": props.vertical,
  };
});

function getCenteredBarStyle(direction: "horizontal" | "vertical") {
  if (direction === "horizontal") {
    return {
      left: "50%",
      transform: "translateX(-50%)",
      bottom: "2px",
      height: "6px",
      backgroundColor: "lime",
      borderRadius: "3px",
    };
  } else {
    return {
      top: "50%",
      transform: "translateY(-50%)",
      right: "2px",
      width: "6px",
      backgroundColor: "green",
      borderRadius: "3px",
    };
  }
}
const barStyle = computed(() => {
  if (props.horizontal && !props.vertical) {
    return getCenteredBarStyle("horizontal");
  } else if (props.vertical && !props.horizontal) {
    return getCenteredBarStyle("vertical");
  } else {
    // 둘 다 true인 경우엔 기본 스타일 유지
    return {
      right: "2px",
      bottom: "2px",
      backgroundColor: "#ccc",
      borderRadius: "3px",
      width: "6px",
    };
  }
});
</script>

<style scoped lang="scss">
.scroll-x {
  overflow-x: auto;
}
.scroll-y {
  overflow-y: auto;
}
</style>
