<template>
    <section class="container-fluid p-0 bg-dark position-relative">
        <BugReportModal v-show="displayModal" @close-modal="closeModal" @submit-report="closeModal"/>
        <div class="container bg-light p-3 h-100 pb-5">
            <section id="breadcrumb" class="row m-0">
                <ChapterDetailBreadCrumb @show-modal="showModal" />
            </section>

            <!-- Main content start -->
            <section class="row mt-3 m-0">
                <ChapterNavigationBar />
            </section>
            <section class="row mt-3 m-0">
                <ChapterImages />
            </section>
            <section class="row mt-3 m-0">
                <ChapterNavigationBar />
            </section>
            <!-- Main content end -->

            <section class="row mt-3 m-0">
                <ChapterDetailFooter />
            </section>
        </div>
    </section>
</template>

<script>
import ChapterDetailBreadCrumb from "@/components/feats/artwork_manga_chapters/ChapterDetailBreadCrumb.vue";
import BugReportModal from '@/components/feats/artwork_manga_chapters/BugReportModal.vue';
import ChapterNavigationBar from "@/components/feats/artwork_manga_chapters/ChapterNavigationBar.vue";
import ChapterImages from "@/components/feats/artwork_manga_chapters/ChapterImages.vue";
import ChapterDetailFooter from "@/components/feats/artwork_manga_chapters/ChapterDetailFooter.vue";

export default {
    data() {
        return {
            displayModal: false,
        }
    },
    components: {
        BugReportModal,
        ChapterDetailBreadCrumb,
        ChapterNavigationBar,
        ChapterImages,
        ChapterDetailFooter
    },
    methods: {
        showModal() {
            this.displayModal = true;
        },
        closeModal() {
            this.displayModal = false;
        }
    }
};
</script>