<template>
    <BlogComp />
    <NContactComp />
</template>

<script>
import BlogComp from '@/components/blog/BkvComp.vue';
import NContactComp from '@/components/solvide/NContactComp.vue';

export default {
    name: 'blog-page',
    components: {
        BlogComp,
        NContactComp,
    },
};
</script>

<style scoped>
.Contactback {
    background: transparent linear-gradient(109deg, #8524D9 0%, #C348FA 23%, #31C4E6 100%) 0% 0% no-repeat padding-box;
}
</style>