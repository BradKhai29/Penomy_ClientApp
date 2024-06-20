<template>
  <p
    style="
      color: #4f6f52;
      font-family: Arial;
      font-weight: 700;
      background-color: #eeeeee;
      font-size: small;
      border: 1px solid;
    "
    class="badge text-center p-1 text-capitalize"
  >
    {{ category }}
  </p>
</template>
<script>
export default {
  name: "CategoryTag",
  props: {
    category: String,
  },
};
</script>