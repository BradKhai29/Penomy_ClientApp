<template>
    <section>
        <LeftSidebar />
    </section>
    <section>
        <MangaSlider />
    </section>
    <button class="btn my-bg-primary m-2 text-light">Đề xuất</button>
    <button class="btn my-bg-primary m-2 text-light">Con trai</button>
    <button class="btn my-bg-primary m-2 text-light">Con gái</button>
    <button class="btn my-bg-primary m-2 text-light">Hành động</button>
    <button class="btn my-bg-primary m-2 text-light">Viễn tưởng</button>
    <button class="btn my-bg-primary m-2 text-light">hài hước</button>
    <button class="btn my-bg-primary m-2 text-light">Đời thường</button>
    <section class="container">
        <div class="row">
            <CardItem class="col-md" />
            <CardItem class="col-md" />
            <CardItem class="col-md" />
            <CardItem class="col-md" />
            <CardItem class="col-md" />
            <CardItem class="col-md" />
        </div>
    </section>
</template>

<script>
import MangaSlider from "@/components/feats/home_page/MangaSlider.vue";
import CardItem from "@/components/shared/CardItem.vue"
import LeftSidebar from "@/components/shared/LeftSidebar.vue"

export default {
    components: {
        MangaSlider,
        CardItem,
        LeftSidebar
    },
};
</script>
