<template>
    <BlogComp/>
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

<style>
</style>