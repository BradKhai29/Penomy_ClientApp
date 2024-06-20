<template>
  <div class="container-fluid">
    <div class="row p-4">
      <div class="col-2">sidebar</div>
      <div class="col-10">
        <h4 style="font-size: 1.5rem">Lịch sử xem gần đây</h4>
        <div
          style="background-color: #ffbb51; font-weight: 700"
          class="alert alert-dismissible fade show"
          role="alert"
          v-if="showAlert"
        >
          Đăng nhập để lưu lại lịch sử xem của bạn
          <button
            type="button"
            class="btn-close"
            @click="dismissAlert"
            aria-label="Close"
          ></button>
        </div>
        <div class="row g-3">
          <div class="col-lg-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showAlert: true,
    };
  },
  methods: {
    dismissAlert() {
      this.showAlert = false; // Set showAlert to false to hide the alert
    },
  },
};
</script>
