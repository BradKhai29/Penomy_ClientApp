<template>
    <!-- Action button group start -->
    <div id="action-button-group" class="p-0 d-flex justify-content-between">
        <div id="left-side" class="d-flex">
            <button
                class="btn btn-light my-bg-secondary p-2 me-2 my-text-primary"
            >
                <i class="fas fa-heart fa-lg"></i>
                <span class="ms-2">Yêu thích</span>
            </button>
            <button class="btn btn-light my-bg-secondary p-2 my-text-primary">
                <i class="fas fa-thumbs-up fa-lg"></i>
                <span class="ms-2">100</span>
            </button>
        </div>
        <div id="right-side" class="d-flex">
            <button class="btn btn-light my-bg-primary p-2 me-2 my-text-light">
                <i class="fas fa-comment fa-lg"></i>
                <span class="ms-2">Bình luận (20)</span>
            </button>
            <button
                class="btn btn-light p-2 my-text-primary border border-dark"
            >
                <i class="fas fa-circle-check fa-lg"></i>
                <span class="ms-2">Đề xuất</span>
            </button>
        </div>
    </div>
    <!-- Action button group end -->

    <!-- Comment section start -->
    <section id="comment-section" class="p-0 mt-3">
        <ChapterCommentInput @createComment="createComment" />

        <ul class="mt-3 d-flex flex-column p-0 m-0">
            <ChapterCommentItem
                v-for="comment in comments"
                :key="comment"
                :comment="comment.content"
            />
        </ul>
    </section>
    <!-- Comment section end -->
</template>

<script>
import ChapterCommentInput from "./ChapterCommentInput.vue";
import ChapterCommentItem from "./ChapterCommentItem.vue";

export default {
    data() {
        return {
            comments: [],
        };
    },
    components: {
        ChapterCommentInput,
        ChapterCommentItem,
    },
    mounted() {
        for (let i = 0; i < 1; i++) {
            this.comments.push(i);
        }
    },
    methods: {
        createComment(comment) {
            this.comments.push({ content: comment });
        },
    },
};
</script>

<style scoped>
.my-text-light {
    color: #f1e6d6;
}

.my-bg-secondary {
    background-color: #f1e6d6;
    border: 2px solid #4f6f52 !important;
}

.my-text-primary {
    color: #4f6f52;
}

.my-bg-primary {
    background-color: #4f6f52;
}
</style>