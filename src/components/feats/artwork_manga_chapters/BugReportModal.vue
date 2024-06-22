<template>
    <section class="container-fluid bug-report-modal">
        <section class="row">
            <div class="mx-auto mt-5 col-12 col-sm-8 col-md-6">
                <section
                    class="mt-3 p-3 my-bg-light-2 rounded border border-dark border-2"
                >
                    <div id="modal-header">
                        <h5 class="fw-bold text-center">Báo lỗi</h5>
                    </div>
                    <section id="modal-main">
                        <div class="mt-2">
                            <label for="bug-type" class="fw-bold"
                                >Chọn loại lỗi</label
                            >
                            <select id="bug-type" class="form-select">
                                <option selected>-- Loại lỗi --</option>
                                <option value="1">Trang không tải được</option>
                                <option value="2">
                                    Hình ảnh bị lỗi hiển thị
                                </option>
                                <option value="3">Sai nội dung truyện</option>
                                <option value="3">Giao diện bị lỗi</option>
                            </select>
                        </div>
                        <div class="mt-3">
                            <label for="bug-description" class="fw-bold"
                                >Mô tả về lỗi</label
                            >
                            <textarea
                                id="bug-description"
                                class="form-control"
                                placeholder="Mô tả chi tiết về lỗi để giúp admin hỗ trợ sớm nhất"
                            ></textarea>
                        </div>
                        <div class="mt-3">
                            <label for="bug-images" class="fw-bold"
                                >Ảnh lỗi (nếu có)</label
                            >
                            <div class="rounded bg-light d-flex flex-wrap">
                                <figure
                                    v-for="i in [1, 2, 3, 4, 5, 6]"
                                    :key="i"
                                    class="rounded bug-image border border-dark position-relative"
                                >
                                    <button
                                        class="btn btn-dark rounded-1 p-1 text-danger position-absolute top-0 end-0"
                                    >
                                        <i
                                            class="fas fa-circle-xmark fa-lg"
                                        ></i>
                                    </button>
                                    <img
                                        class="img-fluid w-100"
                                        src="https://i.pinimg.com/736x/11/b4/1a/11b41a9b29d84bcf176dc2dcd0f08661.jpg"
                                    />
                                </figure>
                                <button
                                    class="bug-image d-flex btn btn-light p-4 my-text-primary border border-dark border-2"
                                >
                                    <span class="py-2 px-1">
                                        <i class="fas fa-circle-plus fa-lg"></i>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </section>
                    <div
                        id="modal-footer"
                        class="d-flex justify-content-end mt-3"
                    >
                        <button @click="closeModal" class="btn btn-danger px-3 py-2 me-2 fw-bold">
                            Hủy
                        </button>
                        <button
                            @click="submitReport"
                            class="btn my-bg-primary p-2 fw-bold my-text-light"
                        >
                            Gửi báo lỗi
                        </button>
                    </div>
                </section>
            </div>
        </section>
    </section>
</template>

<script>
const closeModalEmitEvent = "close-modal";
const submitReportEmitEvent = "submit-report";

export default {
    emits: [closeModalEmitEvent, submitReportEmitEvent],
    methods: {
        closeModal() {
            this.$emit(closeModalEmitEvent);
        },
        submitReport() {
            this.$emit(submitReportEmitEvent);
        },
    },
};
</script>

<style scoped>
.bug-image {
    display: flex;
    margin: 4px;
    height: 86px;
    width: 75px;
}

.bug-report-modal {
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 9999;
    min-height: 100vh;
    max-width: 100vw;
    background-color: rgba(140, 139, 139, 0.4);
}
</style>