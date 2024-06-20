<template>
  <div class="mt-3 rounded">
    <div class="row" style="margin: 0">
      <div class="col-xl-2 col-lg-3 col-md-3">
        <div class="row">
          <div class="col-xl-3 col-md-4">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/standard/city/047.webp"
              class="img-fluid rounded-circle"
              alt="Townhouses and Skyscrapers"
              style="height: 90%; width: 100%"
            />
          </div>
          <div class="col-8 text-bold">
            <strong>
              <span>Penomy Official</span>
              <p>1N người theo dõi</p>
            </strong>
          </div>
        </div>
      </div>
      <div class="col-xl-8 col-lg-6 col-md-7 col-8">
        <action-button
          class="compenent-gap"
          :title="'Theo dõi'"
          :backgroundColor="'#F1E6D6'"
          :color="'#4f6f52'"
        ></action-button>
        <action-button
          class="compenent-gap"
          :title="'Truy cập với quyền tác giả'"
          :backgroundColor="'#FFBB51'"
          :color="'black'"
          :icon="'fas fa-user-cog'"
        ></action-button>
      </div>
      <div
        class="col-xl-2 col-lg-3 col-md-2 col"
        style="display: flex; justify-content: flex-end; padding-right: 0"
      >
        <!-- <div class="row"> -->
        <action-button
          class="compenent-gap"
          :title="'100K'"
          :icon="'fas fa-eye'"
        ></action-button>
        <action-button
          class="compenent-gap"
          :backgroundColor="'#F1E6D6'"
          :color="'#4f6f52'"
          :icon="'far fa-heart'"
        ></action-button>
        <!-- </div> -->
      </div>
    </div>
  </div>
  <div class="mt-3 rounded p-2 background">
    <div class="row gx-2">
      <div class="col">
        <action-button
          class="compenent-gap"
          :backgroundColor="'#D2E3C8'"
          :color="'#4f6f52'"
          :icon="'fas fa-calendar-alt'"
          :title="'Cập nhật: 12/05/2003'"
        ></action-button>
        <action-button
          class="compenent-gap"
          :backgroundColor="'#D2E3C8'"
          :color="'#4f6f52'"
          :icon="'fas fa-sync-alt'"
          :title="'Còn cập nhật'"
        ></action-button>
        <action-button
          class="compenent-gap"
          :backgroundColor="'#D2E3C8'"
          :color="'#4f6f52'"
          :icon="'fas fa-star'"
          :title="'4.5 / 5.0 (5234 lượt đánh giá)'"
        ></action-button>
        <action-button
          class="compenent-gap"
          :backgroundColor="'#D2E3C8'"
          :color="'#4f6f52'"
          :icon="'fas fa-film'"
          :title="'Đã chuyển thể anime'"
        ></action-button>
        <p style="font-weight: 700">
          Vào tương lai, lúc mà con người với những sức mạnh siêu nhiên là điều
          thường thấy quanh thế giới. Đây là câu chuyện về Izuku Midoriya, từ
          một kẻ bất tài trở thành một siêu anh hùng. Tất cả ta cần là mơ ước.
        </p>
      </div>
    </div>
  </div>
</template>
<style>
.bottom {
  background-color: #f1e6d6;
}
@media screen and (max-width: 767px) {
  .img-fluid {
    max-width: 20% !important;
  }
}
</style>
<script>
import ActionButton from "@/components/shared/ActionButton.vue";
export default {
  components: { ActionButton },
};
</script>
