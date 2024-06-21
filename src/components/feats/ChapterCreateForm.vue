<template>
    <div class="h-auto m-2 p-2 border border-primary rounded form-container">
        <div class="row">
            <div class="col-4 m-0">
                <i class="fa fa-arrow-left " aria-hidden="true"></i>
                <span class="ps-2 title">Tạo tác phẩm mới</span>
            </div>
            <div class="col-8 text-end">
                <button class="btn btn-custom rounded-2">Hủy</button>
            </div>
        </div>
        <hr class="m-0 my-2 p-0">
        <div class="container row h-auto">
            <div class="col-4 m-0 p-0">
                <div class="container m-0 p-0">
                    <div class="row w-75">
                        <span style="font-size:10px" class="">Ảnh bìa <i style="font-size:15px"
                                class="fa ms-2">&#xf06a;</i></span>
                    </div>
                    <img :src="imageUrl" alt="Artwork Image"
                        class="row img-fluid border rounded-2 border-dark m-0 p-0 w-75">
                </div>
            </div>
            <div class="col-8 rounded-2 create-form">
                <form class="container m-0 pt-2">
                    <h5 class="text-black row">Thông tin chung</h5>
                    <div class="row">
                        <label for="title" class="m-0 p-0 col-4 form-label"> Tên tác phẩm<i style="font-size:15px"
                                class="fa col-2 m-0 ps-2">&#xf06a;</i></label>
                        <p class="col-8 m-0 p-0 text-end">12/200 ký tự</p>
                    </div>
                    <div class="row">
                        <input class="rounded-2" type="text" placeholder="Tiêu đề 12 ký tự">
                    </div>
                    <div class="row">
                        <p class="m-0 p-0">Chọn tên liên quan đến nội dung tác phẩm của bạn để đọc giả có thể dễ tìm
                            (tối đa 200 ký tự)
                        </p>
                    </div>
                    <div class="row">
                        <label for="title" class="m-0 p-0 col-4 form-label">Thể loại<i style="font-size:15px"
                                class="fa col-2 m-0 ps-2">&#xf06a;</i></label>
                        <p class="col-8 m-0 p-0 text-end">4 thể loại</p>
                    </div>
                    <div class="row bg-white">
                        <div class="col-2 p-1">
                            <button
                                class="btn bg-success rounded p-1 px-2 bg-tertiary border border-2 border-dark d-flex align-items-center">
                                <span class="ms-2 fs-6 fw-bold">Hành động</span>
                                <i style="font-size:24px" class="fa ms-2">&#xf00d;</i>
                            </button>
                        </div>
                        <div class="col-2 p-1">
                            <button
                                class="btn bg-success rounded p-1 px-2 bg-tertiary border border-2 border-dark d-flex align-items-center">
                                <span class="ms-2 fs-6 fw-bold">Hành động</span>
                                <i style="font-size:24px" class="fa ms-2">&#xf00d;</i>
                            </button>
                        </div>
                        <div class="col-2 p-1">
                            <button
                                class="btn bg-success rounded p-1 px-2 bg-tertiary border border-2 border-dark d-flex align-items-center">
                                <span class="ms-2 fs-6 fw-bold">Hành động</span>
                                <i style="font-size:24px" class="fa ms-2">&#xf00d;</i>
                            </button>
                        </div>
                        <div class="col-2 p-1">
                            <button
                                class="btn bg-success rounded p-1 px-2 bg-tertiary border border-2 border-dark d-flex align-items-center">
                                <span class="ms-2 fs-6 fw-bold">Hành động</span>
                                <i style="font-size:24px" class="fa ms-2">&#xf00d;</i>
                            </button>
                        </div>
                    </div>
                    <div class="row">
                        <p class="m-0 p-0">Chọn các thể loại liên quan đến tác phẩm của bạn để các tác giả có thể lựa
                            chọn
                        </p>
                    </div>
                    <div class="row my-2">
                        <label for="title" class="m-0 p-0 col-4 form-label">Tên tác giả<i style="font-size:15px"
                                class="fa col-2 m-0 ps-2">&#xf06a;</i></label>
                        <p class="col-8 m-0 p-0 text-end">12/300 ký tự</p>
                    </div>
                    <div class="row">
                        <input class="rounded-2" type="text" placeholder="Murata Yusuka">
                    </div>
                    <div class="row">
                        <p class="m-0 p-0">Cung cấp tên tác giả của tác phẩm nếu thực hiện việc đăng tải lại nội dung từ
                            một nguồn khác (nếu nhiều hơn một tác giả , phân cách ra bằng dấu phẩy). Nếu bạn là tác giả
                            của tác phẩm, nhấn vào nút <a class="fw-bold">Tôi là tác giả</a>
                        </p>
                    </div>
                    <div class="row">
                        <label for="title" class="m-0 p-0 col-4 form-label">Mô tả tác phẩm<i style="font-size:15px"
                                class="fa col-2 m-0 ps-2">&#xf06a;</i></label>
                        <p class="col-8 m-0 p-0 text-end">12/2000 ký tự</p>
                    </div>
                    <div class="row">
                        <input class="rounded-2" type="text" placeholder="Mô tả 12 ký tự">
                    </div>
                    <div class="row">
                        <p class="m-0 p-0">Cung cấp mô tả liên quan đến tác phẩm của bạn (tối đa 2000 ký tự)
                        </p>
                    </div>
                    <div class="row">
                        <label for="title" class="m-0 p-0 col-4 form-label">Cho phép bình luận<i style="font-size:15px"
                                class="fa col-2 m-0 ps-2">&#xf06a;</i></label>
                    </div>
                    <div class="row">
                        <div class="col-3 p-0">
                            <p><i class="px-1 fa-regular fa-circle"></i>Không cho phép</p>
                        </div>
                        <div class="col-3 p-0">
                            <p><i class="px-1 fa-solid fa-circle"></i>Cho phép</p>
                        </div>
                    </div>
                </form>
                <div class="row">
                    <p><i style="font-size:40px" class="fa-light fa-square"></i>Tôi xác nhận nội dung đăng tải tuân thủ
                        <span class="text-success">điều khoản nội dung.</span>
                        <a class="ms-2 btn btn-warning">Xem điều khoản nội dung</a>
                    </p><button>Tạo tác phẩm</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "CreateForm",
    data() {
        return {
            imageUrl: require('@/assets/images/img.png'), // replace 'image.jpg' with your actual image file name
        };
    },
}
</script>
<style scoped>
.form-container {
    border: 1px solid;
    background-color: #f8f9fa;
}

.btn-custom {
    background-color: #dc5834;
    color: #ffffff;
}

hr {
    border: none;
    height: 7px;
    background-color: #4f6f52;
}

.title {
    color: #1a4d2e
}

.create-form {
    background-color: #f2e7d6
}

label {
    color: #4f6f52
}
</style>