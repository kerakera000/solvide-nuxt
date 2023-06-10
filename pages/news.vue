<template>
    <NewsComp />
    <NContactComp/>
</template>

<script>
import NewsComp from '@/components/news/NkvComp.vue';
import NContactComp from '@/components/solvide/NContactComp.vue';

export default {
    name: 'blog-page',
    components: {
        NewsComp,
        NContactComp,
    },
};
</script>

<style>
</style>