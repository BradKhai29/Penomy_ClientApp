<template>
    <div
        class="mx-auto col-12 col-sm-8 d-flex justify-content-center flex-column"
    >
        <figure v-for="i in images" :key="i" class="text-center w-100">
            <img class="w-100" src="https://i.pinimg.com/736x/27/3e/2d/273e2d6bc7405b4c320851e17d1ba0bb.jpg" />
        </figure>
    </div>
</template>

<script>
export default {
    data() {
        return {
            images: [],
        };
    },
    mounted() {
        for (let i = 0; i < 5; i++) {
            this.images.push(i);
        }
    },
};
</script>