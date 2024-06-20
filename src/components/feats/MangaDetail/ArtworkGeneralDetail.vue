<template>
  <div class="background mt-3 rounded p-2">
    <div class="row gx-2 inner-artwork-detail-container">
      <div class="col-xl-2">
        <img
          class="rounded artwork-img"
          src="https://im.uniqlo.com/global-cms/spa/resc68f7bbffe187158e13a1e24c9907db1fr.jpg"
          alt=""
        />
      </div>
      <div class="col">
        <div class="bg-white rounded right-panel">
          <p class="manga-title text-capitalize">my hero academy</p>
          <div class="row">
            <div class="col-6">
              <p>
                <strong class="text-capitalize">tên khác:</strong> Học viện anh
                hùng
              </p>
              <p>
                <strong class="text-capitalize">tác giả:</strong> Horikoshi
                Kōhei
              </p>
            </div>
            <div class="col-6">
              <p>
                <strong class="text-capitalize">phát hành:</strong> Tháng 7,
                2024
              </p>
              <p>
                <strong class="text-capitalize">Series:</strong> Học viện anh
                hùng
              </p>
            </div>
          </div>
          <div>
            <category-tag-vue
              class="compenent-gap"
              :category="'Hành động'"
            ></category-tag-vue>
            <category-tag-vue
              class="compenent-gap"
              :category="'Phiêu lưu'"
            ></category-tag-vue>
            <category-tag-vue
              class="compenent-gap"
              :category="'Viễn tưởng'"
            ></category-tag-vue>
            <category-tag-vue
              class="compenent-gap"
              :category="'Hài hước'"
            ></category-tag-vue>
            <category-tag-vue
              class="compenent-gap"
              :category="'Đời thường'"
            ></category-tag-vue>
          </div>
          <div class="mt-3">
            <action-button
              class="compenent-gap"
              :title="'Đọc từ đầu'"
              :backgroundColor="'#4f6f52'"
            ></action-button>
            <action-button
              class="compenent-gap"
              :title="'Đọc tiếp'"
              :backgroundColor="'#4f6f52'"
            ></action-button>
            <action-button
              class="compenent-gap"
              :title="'100k'"
              :icon="'fas fa-thumbs-up'"
              :backgroundColor="'#4f6f52'"
            ></action-button>
            <action-button
              class="compenent-gap"
              :title="'4.0 / 5.0'"
              :icon="'fas fa-star'"
              :backgroundColor="'#4f6f52'"
            ></action-button>
            <action-button
              class="compenent-gap"
              :title="'Đã báo cáo'"
              :icon="'fas fa-exclamation-circle'"
              :backgroundColor="'#4f6f52'"
            ></action-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.background {
  background-color: #f1e6d6;
}
.inner-artwork-detail-container {
  height: max-content;
}
.artwork-img {
  max-width: 100%;
  height: 100%;
}
.manga-title {
  font-size: 1.4rem;
  font-weight: bold;
  font-family: Arial;
}
.compenent-gap {
  margin-right: 7px;
}
.right-panel {
  padding: 10px;
  height: 100%;
}
</style>
<script>
import CategoryTagVue from "../../shared/CategoryTag.vue";
import ActionButton from "../../shared/ActionButton.vue";
export default {
  components: { CategoryTagVue, ActionButton },
};
</script>
