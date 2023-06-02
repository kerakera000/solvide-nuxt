<!-- pages/[slug]/index.vue -->

<template>
    <section id="Newtop" class="blogslug">
        <div class="blogslug__main">
            <div class="blogslug__main--kv">
                <img :src="article.eyecatch.url" alt="">
            </div>
            <h1>{{article.title}}</h1>
            <p class="blogslug__main--cate">{{article.category.name}}</p>
            <div class="blogslug__main--day">
                <div class="blogslug__main--day--timeicon">
                    <img src="../../assets/new-solvide-images/icons/blogtimeicon.svg" alt="">
                </div>
                <time :datetime="formatDate(article.publishedAt)" v-text="formatDate(article.publishedAt)" />
            </div>
            <div class="blogslug__main--post" v-html="article.body"></div>
        </div>

        <div class="blogslug__sub">
            <div v-for="articles in data.contents.filter(item => item.category.name === 'NUXT-blog')" :key="articles.id" class="Nblogs__cnt--box">
                <nuxt-link :to="`/${articles.id}`" class="Nblogs__cnt--box--blog-col">
                    <div class="Nblogs-img">
                        <img :src="articles.eyecatch.url" alt="">
                    </div>
                    <div class="Nblogs-text">
                        <p class="Nblogs-text--day">{{ formatDate(articles.publishedAt) }}</p>
                        <p>{{ articles.title }}</p>
                    </div>
                </nuxt-link>
            </div>
        </div>
    </section>
</template>

<script setup>
    import { onMounted } from 'vue';

    const route = useRoute();
    const slug = route.params.slug;
    const config = useRuntimeConfig();
    const formatDate = (date) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return new Date(date).toLocaleDateString('ja-JP', options).replace(/\//g, '/');
    };

    const { data: article } = await useFetch(`/blogs/${slug}`, {
        baseURL: config.baseUrl,
        headers: {
            "X-MICROCMS-API-KEY": config.apiKey,
        },
    });
    const { data } = await useFetch(`/blogs`, {
        baseURL: config.baseUrl,
        headers: {
            "X-MICROCMS-API-KEY": config.apiKey,
        },
    });

    onMounted(() => {
        // imgタグを囲む処理
        const imgTags = document.querySelectorAll('.blogslug__main--post img');
        imgTags.forEach(imgTag => {
            const imgBox = document.createElement('div');
            imgBox.classList.add('imgbox');
            imgTag.parentNode.insertBefore(imgBox, imgTag);
            imgBox.appendChild(imgTag);
        });
    });
</script>

<style scoped>
</style>