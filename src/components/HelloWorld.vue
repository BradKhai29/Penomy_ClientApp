<template>
  <div>
    <button type="button" class="btn btn-primary" data-mdb-ripple-init>
      Notifications<span class="badge badge-danger ms-2">8</span>
    </button>
  </div>
  <CategoryTag></CategoryTag>
</template>

<script>
import CategoryTag from "./shared/CategoryTag.vue";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: { CategoryTag },
};
</script>
