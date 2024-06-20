<template>
    <li class="d-flex p-0 m-0 mb-3">
        <div class="px-3">
            <i class="fas fa-circle-user fa-2xl"></i>
        </div>
        <section class="d-flex w-100 flex-column">
            <div class="d-flex flex-column my-bg-light p-2 rounded-2">
                <div
                    class="d-flex comment-header align-items-center my-border pb-2"
                >
                    <span class="me-auto fs-6 fw-bold">Tên người dùng</span>
                    <button class="btn p-2 my-bg-primary btn-floating text-light">
                        <i class="fas fa-ellipsis-vertical fa-lg"></i>
                    </button>
                </div>
                <p class="m-0 mt-2">
                    {{ commentContent }}
                </p>
            </div>
            <!-- Action buttons start -->
            <section class="d-flex mt-2 justify-content-between">
                <div class="d-flex">
                    <button class="btn btn-light p-2 text-dark border border-dark">
                        <i class="fas fa-thumbs-up fa-lg"></i>
                        <span class="ms-2 fw-bold">100</span>
                    </button>
                    <button class="btn btn-link fw-bold px-3 my-text-primary">Phản hồi</button>
                </div>
                <div class="d-flex">
                    <button class="btn btn-link fw-bold px-2 my-text-primary">
                        <span class="me-2">2 phản hồi</span>
                        <i class="fas fa-circle-chevron-down fa-lg"></i>
                    </button>
                </div>
            </section>
            <!-- Action buttons end -->
        </section>
    </li>
</template>

<script>
export default {
    props: {
        comment: String,
    },
    computed: {
        commentContent() {
            if (this.comment == null) {
                return `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus suscipit iusto amet, ab, voluptates maxime
                facilis itaque quod iure molestiae consequuntur libero laborum
                error aut reiciendis, deleniti repellat eos. Nisi.`;
            }

            return this.comment;
        },
    },
};
</script>
<style scoped>
.my-border {
    border-bottom: 2px solid #4f6f52 !important;
}

.my-bg-light {
    background-color: #f1e6d6;
}

.my-text-primary {
    color: #4f6f52;
}

.my-bg-primary {
    background-color: #4f6f52;
}
</style>