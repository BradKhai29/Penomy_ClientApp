<template>
    <div class="d-flex flex-column col-2 vh-100">
        <section class="d-flex px-3 py-2 my-bg-primary align-items-center">
            <button class="btn my-bg-light-2 my-text-primary btn-floating">
                <i class="fas fa-bars fa-lg"></i>
            </button>
            <span class="ms-2 fw-bold my-text-light">Penomy</span>
        </section>
        <section class="d-flex flex-column p-3 my-bg-light-2 h-100">
            <section class="d-flex flex-column">
                <button class="mb-1 d-flex align-items-center btn p-2 my-bg-primary text-light rounded-1">
                    <i class="fas fa-house fa-lg"></i>
                    <span class="ms-3">Trang chủ</span>
                </button>
                <button class="d-flex align-items-center btn btn-link p-2 text-muted rounded-1">
                    <i class="fas fa-clock-rotate-left fa-lg"></i>
                    <span class="ms-3">Lịch sử xem</span>
                </button>
            </section>
            <section class="mt-4 d-flex flex-column">
                <header class="d-flex p-2 align-items-center section-border-bottom mb-2">
                    <span class="me-auto mb-0 h5">Dành cho bạn</span>
                    <i class="fas fa-circle-chevron-down fa-lg"></i>
                </header>
                <button class="d-flex align-items-center btn p-2 mb-2 my-bg-primary text-light rounded-1">
                    <i class="fas fa-arrow-up-from-bracket fa-lg"></i>
                    <span class="ms-3">Đăng tải tác phẩm</span>
                </button>
                <p class="p-2 m-0">
                    Đăng nhập để khám phá thêm nhiều tính năng khác nữa.
                </p>
                <button class="d-flex align-items-center mt-2 btn border border-dark p-2 text-muted rounded-1">
                    <i class="fas fa-arrow-right-to-bracket fa-lg"></i>
                    <span class="ms-3">Đăng nhập ngay</span>
                </button>
            </section>
            <section class="mt-4 d-flex flex-column mb-auto">
                <header class="d-flex p-2 align-items-center section-border-bottom mb-2">
                    <span class="me-auto mb-0 h5">Hỗ trợ</span>
                    <i class="fas fa-circle-chevron-down fa-lg"></i>
                </header>
                <button class="mb-1 d-flex align-items-center btn btn-link p-2 text-muted rounded-1">
                    <i class="far fa-circle-question fa-lg"></i>
                    <span class="ms-3">Hướng dẫn</span>
                </button>
                <button class="d-flex align-items-center btn btn-link p-2 text-muted rounded-1">
                    <i class="fas fa-message fa-lg"></i>
                    <span class="ms-3">Gửi phản hồi</span>
                </button>
            </section>
        </section>
    </div>
</template>

<style scoped>
.section-border-bottom {
    border-bottom: 2px solid;
    border-radius: 4px;
}
</style>