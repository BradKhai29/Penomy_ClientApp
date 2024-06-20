<template>
    <section class="container-fluid bg-dark">
        <div class="container bg-light p-3 h-100 pb-5">
            <section id="breadcrumb" class="row m-0">
                <ChapterDetailBreadCrumb />
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
import ChapterNavigationBar from "@/components/feats/artwork_manga_chapters/ChapterNavigationBar.vue";
import ChapterImages from "@/components/feats/artwork_manga_chapters/ChapterImages.vue";
import ChapterDetailFooter from "@/components/feats/artwork_manga_chapters/ChapterDetailFooter.vue";

export default {
    components: {
        ChapterDetailBreadCrumb,
        ChapterNavigationBar,
        ChapterImages,
        ChapterDetailFooter
    },
};
</script>