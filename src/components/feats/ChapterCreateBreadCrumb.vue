<template>
  <div class="rounded-2 m-2 p-2 header-container">
    <div class="breadcrumb">
      <small>Trang chủ </small>
      <span class="ms-2 me-2">/</span>
      <small>Kênh của bạn </small>
      <span class="ms-2 me-2">/</span>
      <small>Tạo mới tác phẩm </small>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BreadCrumb'
};
</script>

<style scoped>
.header-container {
  background-color: #4d6f52; /* Adjust the color to match your design */
  display: flex; /* Use Flexbox */
  align-items: center; /* Center items vertically */
}

.breadcrumb {
  color: #ffffff;
  font-weight: bold;
  margin: 0; /* Ensure no margin */
  padding: 0; /* Ensure no padding */
}
</style>
