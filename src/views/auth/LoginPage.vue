<template>
    <section style="min-height: 100vh" class="container-fluid bg-dark pt-3 pt-md-5">
        <section class="container w-100 h-100 pt-5">
            <div class="row h-100 py-5">
                <div class="mx-auto mt-1 col-12 col-sm-8 col-md-6">
                    <header class="mb-4 w-100 p-2 my-bg-primary rounded">
                        <h5 class="text-center fw-bold m-0">
                            <router-link class="my-text-light" to="/"
                                >Penomy</router-link
                            >
                        </h5>
                    </header>
                    <main class="w-100 p-3 my-bg-primary rounded">
                        <form class="w-100" @submit.prevent="">
                            <section id="header">
                                <h5 class="text-center fw-bold my-text-light">
                                    Đăng nhập
                                </h5>
                                <button
                                    class="w-100 btn btn-link my-bg-light-2 my-text-primary"
                                >
                                    <i class="fab fa-google fa-xl"></i>
                                </button>
                            </section>
                            <section
                                id="separator"
                                class="my-text-light d-flex align-items-center py-2"
                            >
                                <span
                                    class="flex-fill border border-light"
                                ></span>
                                <span class="mx-auto px-2 fw-bold">Hoặc</span>
                                <span
                                    class="flex-fill border border-light"
                                ></span>
                            </section>
                            <section id="input">
                                <div id="email-input">
                                    <label
                                        class="form-label my-text-light mb-0"
                                        for="email"
                                    >
                                        Email hoặc tên đăng nhập
                                    </label>
                                    <input
                                        type="text"
                                        id="email"
                                        class="form-control"
                                    />
                                </div>
                                <div id="password-input" class="mt-3">
                                    <section class="d-flex justify-content-between">
                                        <label
                                            class="form-label my-text-light mb-0"
                                            for="password"
                                        >
                                            Mật khẩu
                                        </label>
                                        <a href="#" class="my-text-light fw-bold">Quên mật khẩu?</a>
                                    </section>
                                    <div
                                        class="d-flex align-items-center bg-light rounded"
                                    >
                                        <input
                                            :type="passwordInputType"
                                            id="password"
                                            class="border-0 form-control bg-light"
                                        />
                                        <button
                                            @click="showPasswordInput"
                                            class="px-3 btn btn-link my-text-primary"
                                        >
                                            <i
                                                v-show="showPassword"
                                                class="fas fa-eye fa-lg"
                                            ></i>
                                            <i
                                                v-show="!showPassword"
                                                class="fas fa-eye-slash fa-lg"
                                            ></i>
                                        </button>
                                    </div>
                                </div>
                                <div class="mt-4">
                                    <button
                                    class="w-100 btn btn-link my-bg-light-2 fw-bold fs-6 my-text-primary"
                                    >
                                        Đăng nhập
                                    </button>
                                </div>
                            </section>
                            <section id="footer" class="mt-3 d-flex justify-content-center">
                                <span class="d-flex my-text-light fw-bold">
                                    Người dùng mới?
                                    <a href="#" class="ms-2 my-text-light">Đăng ký ngay</a>
                                </span>
                            </section>
                        </form>
                    </main>
                </div>
            </div>
        </section>
    </section>
</template>

<script>
export default {
    data() {
        return {
            showPassword: false,
            passwordInputType: "password",
        };
    },
    methods: {
        showPasswordInput() {
            this.showPassword = !this.showPassword;

            this.passwordInputType = this.showPassword ? "text" : "password";
        },
    },
};
</script>