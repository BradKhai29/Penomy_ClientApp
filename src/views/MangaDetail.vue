<template>
  <div class="container-fluid mt-3">
    <BreadcrumbNavVue></BreadcrumbNavVue>
    <ArtworkGeneralDetail></ArtworkGeneralDetail>
    <ArtworkDetailSection></ArtworkDetailSection>
    <ChapterAndCommentSection></ChapterAndCommentSection>
  </div>
</template>
<script>
import BreadcrumbNavVue from "@/components/shared/BreadcrumbNav.vue";
import ArtworkGeneralDetail from "@/components/feats/MangaDetail/ArtworkGeneralDetail.vue";
import ArtworkDetailSection from "../components/feats/MangaDetail/ArtworkDetailSection.vue";
import ChapterAndCommentSection from "../components/feats/MangaDetail/ChapterAndCommentSection.vue";
export default {
  components: { BreadcrumbNavVue, ArtworkGeneralDetail, ArtworkDetailSection, ChapterAndCommentSection },
};
</script>
