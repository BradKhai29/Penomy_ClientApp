<template>
    this is home page
    <CategoryTag></CategoryTag>
    <breadcrumb-nav></breadcrumb-nav>
</template>

<script>
import CategoryTag from "../components/shared/CategoryTag.vue";
import BreadcrumbNav from "../components/shared/BreadcrumbNav.vue";
export default {
    components: { CategoryTag, BreadcrumbNav },
}
</script>