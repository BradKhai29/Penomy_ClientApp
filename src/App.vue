<template>
    <ChapterCreateBreadCrumb>
    </ChapterCreateBreadCrumb>
    <ChapterCreateForm>
    </ChapterCreateForm>
</template>

<script>
import ChapterCreateBreadCrumb from "./components/feats/ChapterCreateBreadCrumb.vue";
import ChapterCreateForm from "./components/feats/ChapterCreateForm.vue";
export default {
    name: "App",
    components: {
        ChapterCreateBreadCrumb,
        ChapterCreateForm
    },
};
</script>
<style>
html,
body,
#app {
    height: 100%;
}
</style>