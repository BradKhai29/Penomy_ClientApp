<template>
    <div class="p-3 my-bg-light rounded-2">
        <!-- Breadcrumb start -->
        <div class="d-flex align-items-center">
            <nav class="d-flex align-items-center" aria-label="breadcrumb">
                <ol class="breadcrumb m-0 fw-bold fs-5">
                    <li class="breadcrumb-item">
                        <router-link class="my-text-primary" :to="{name: 'home'}">Học viện anh hùng</router-link>
                    </li>
                    <li class="breadcrumb-item active my-text-primary" aria-current="page">
                        Tập 425
                    </li>
                </ol>
            </nav>
            <div class="ms-auto">
                <button class="btn rounded p-1 px-2 bg-tertiary border border-2 border-dark d-flex align-items-center">
                    <i class="fa-solid fa-lg fa-bug"></i>
                    <span class="ms-2 fs-6 fw-bold">Báo lỗi</span>
                </button>
            </div>
        </div>
        <!-- Breadcrumb end -->
        <div class="mt-3 my-bg-primary text-center p-2 rounded">
            <p class="m-0 my-text-light fw-bold">
                Vui lòng nhấn nút <span class="text-tertiary">báo lỗi</span> để cung cấp thông tin cho admin nếu không xem được truyện
            </p>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.bg-tertiary {
    background-color: #FFBB51;
}

.my-text-light {
    color: #F1E6D6;
}

.text-tertiary {
    color: #FFBB51!important;
}

.my-bg-light {
    background-color: #EEEEEE;
}

.my-text-primary {
    color: #4F6F52;
}

.my-text-primary::before {
    color: #4F6F52;
}

.my-bg-primary {
    background-color: #4F6F52;
}
</style>