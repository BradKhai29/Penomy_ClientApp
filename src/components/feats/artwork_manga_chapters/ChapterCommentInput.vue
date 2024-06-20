<template>
    <div class="d-flex px-3 py-2 my-bg-light rounded-2">
        <div class="d-flex align-items-center me-3">
            <i class="fas fa-circle-user fa-2xl"></i>
        </div>
        <div class="d-flex flex-fill flex-column">
            <textarea
                v-model="comment"
                @click="showButtonGroup = true"
                rows="1"
                class="my-bg-light flex-fill my-textarea"
                id="textAreaExample"
                placeholder="Hãy bình luận một cách văn minh để tránh bị khóa tài khoản"
            ></textarea>
            <div
                :class="{
                    'd-flex': showButtonGroup,
                    'd-none': !showButtonGroup,
                }"
                class="justify-content-end mt-2"
            >
                <button
                    class="btn btn-danger px-3 py-2"
                    @click="showButtonGroup = false"
                >
                    Hủy
                </button>
                <button
                    @click="createComment"
                    class="ms-2 btn my-bg-primary px-3 py-2 text-light"
                >
                    Gửi
                </button>
            </div>
        </div>
    </div>
</template>

<script>
const emitEvent = "createComment";

export default {
    emits: [emitEvent],
    data() {
        return {
            comment: null,
            showButtonGroup: false,
        };
    },
    methods: {
        createComment() {
            this.$emit(emitEvent, this.comment);
            this.comment = null;
            this.showButtonGroup = false;
        },
    },
};
</script>

<style scoped>
.my-bg-primary {
    background-color: #4f6f52;
}

.my-bg-light {
    background-color: #eeeeee;
}

.my-textarea {
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid black !important;
}
</style>