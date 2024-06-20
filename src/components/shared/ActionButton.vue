<template>
  <p
    :style="{ backgroundColor: btnColor, color: textColor }"
    class="badge text-center p-2 text-capitalize custom-button"
  >
    <i :class="icon" style="font-size: medium"></i>
    <span class="p-2">{{ title }}</span>
  </p>
</template>
<style>
.custom-button {
  /* color: #f1e6d6 ; */
  /* background-color: #4f6f52; */
  height: 35px;
  font-family: Arial;
  font-weight: bold;
  font-size: medium !important;
  border: 1px solid;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
<script>
export default {
  name: "ActionButton",
  props: {
    title: String,
    icon: String,
    backgroundColor: String,
    color: String,
  },
  computed: {
    btnColor() {
      if (this.backgroundColor) {
        return this.backgroundColor;
      } else {
        return "#4f6f52";
      }
    },
    textColor() {
      if (this.color) {
        return this.color;
      } else {
        return "#f1e6d6";
      }
    },
  },
};
</script>
