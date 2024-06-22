<template>
    <div
        class="mx-auto col-12 col-sm-8 d-flex justify-content-center flex-column"
    >
        <figure v-for="i in images" :key="i" class="text-center w-100">
            <img class="w-100" src="https://i.pinimg.com/736x/11/b4/1a/11b41a9b29d84bcf176dc2dcd0f08661.jpg" />
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