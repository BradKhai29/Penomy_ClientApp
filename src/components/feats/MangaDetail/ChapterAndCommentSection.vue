<template>
  <div class="mt-3 rounded p-2">
    <div class="row">
      <div class="col-xl-10 col-md-9 col-sm-9">
        <action-button
          class="button-gap"
          :title="'Danh sách tập'"
          :icon="'fas fa-book'"
        ></action-button>
        <action-button
          class="button-gap"
          :title="'Bình luận (50)'"
          :icon="'fas fa-comment'"
          :backgroundColor="'#EEEEEE'"
          :color="'#4f6f52'"
        ></action-button>
        <action-button
          class="button-gap"
          :title="'Đề xuất'"
          :icon="'fas fa-check-circle'"
          :backgroundColor="'#EEEEEE'"
          :color="'#4f6f52'"
        ></action-button>
      </div>
      <div class="col" style="display: flex">
        <action-button
          class="button-gap"
          :title="'Sắp xếp'"
          :icon="'fas fa-sort'"
          :backgroundColor="'#EEEEEE'"
          :color="'#4f6f52'"
          style="margin-left: auto"
        ></action-button>
      </div>
    </div>
  </div>

  <!-- chapters -->
  <div class="rounded border">
    <ul class="px-4 list-group list-group-light">
      <li class="list-group-item">Chap 1: Sự kiện ở thành phố Z nào đó</li>
      <li class="list-group-item">Chap 1: Sự kiện ở thành phố Z nào đó</li>
      <li class="list-group-item">Chap 1: Sự kiện ở thành phố Z nào đó</li>
      <li class="list-group-item">Chap 1: Sự kiện ở thành phố Z nào đó</li>
      <li class="list-group-item">Chap 1: Sự kiện ở thành phố Z nào đó</li>
      <li class="list-group-item">Chap 1: Sự kiện ở thành phố Z nào đó</li>
      <li class="list-group-item">Chap 1: Sự kiện ở thành phố Z nào đó</li>
      <li class="list-group-item">Chap 1: Sự kiện ở thành phố Z nào đó</li>
    </ul>
  </div>
</template>
<style>
.list-group {
  max-height: 35vh;
  overflow-y: scroll;
}
/* Chọn thanh cuộn dọc của div */
.list-group::-webkit-scrollbar {
  width: 8px; /* Độ rộng của thanh cuộn */
}

/* Định dạng nút mũi tên */
.list-group::-webkit-scrollbar-thumb {
  background-color: #4f6f52; /* Màu sắc của phần thanh cuộn */
  border-radius: 4px; /* Độ cong góc */
}

/* Định dạng track của thanh cuộn */
.list-group::-webkit-scrollbar-track {
  background-color: #f1f1f1; /* Màu nền của track */
  border-radius: 4px; /* Độ cong góc */
}
ul.list-group-light li {
  color: #4f6f52;
  font-weight: 700;
  font-family: Arial, Helvetica, sans-serif;
  font-size: medium;
}
.button-gap {
  margin-right: 10px;
}
</style>
<script>
import ActionButton from "@/components/shared/ActionButton.vue";
export default {
  components: { ActionButton },
};
</script>
