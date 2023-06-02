<template>
    <section class="Nblogs">
        <div class="Nblogs__title">
            <div class="Ntitle">
                <h2>{{ getCategoryTitle(selectedCategory) }}</h2>
                <p>{{ getCategoryText(selectedCategory) }}</p>
                <span></span>
            </div>
        </div>
        <div class="Nblogs__cnt">
            <div class="Nblogs__cnt--text-box">
                <p class="p" @click="handleCategoryClick('all')">すべて</p>
                <p class="p" @click="handleCategoryClick('news')">ニュース</p>
                <p class="p" @click="handleCategoryClick('blog')">ブログ</p>
            </div>
            <div v-show="selectedCategory === '' || selectedCategory === 'all'" class="blogsapibox blogs">
                <div v-for="article in data.contents.slice(0, 4)" :key="article.id" class="Nblogs__cnt--box">
                    <nuxt-link :to="`/${article.id}`" class="Nblogs__cnt--box--blog-col">
                        <div class="Nblogs-img">
                            <img :src="article.eyecatch.url" alt="">
                        </div>
                        <div class="Nblogs-text">
                            <p class="Nblogs-text--day">{{ formatDate(article.publishedAt) }}</p>
                            <p>{{ article.title }}</p>
                        </div>
                    </nuxt-link>
                </div>
            </div>
            <div v-show="selectedCategory === '' || selectedCategory === 'news'" class="blogsapibox news">
                <div v-for="article in data.contents.filter(item => item.category.name === 'ニュース').slice(0, 4)" :key="article.id" class="Nblogs__cnt--box">
                    <nuxt-link :to="`/${article.id}`" class="Nblogs__cnt--box--blog-col">
                        <div class="Nblogs-img">
                            <img :src="article.eyecatch.url" alt="">
                        </div>
                        <div class="Nblogs-text">
                            <p class="Nblogs-text--day">{{ formatDate(article.publishedAt) }}</p>
                            <p>{{ article.title }}</p>
                        </div>
                    </nuxt-link>
                </div>
            </div>
            <div v-show="selectedCategory === '' || selectedCategory === 'blog'" class="blogsapibox blogs">
                <div v-for="article in data.contents.filter(item => item.category.name === 'NUXT-blog').slice(0, 4)" :key="article.id" class="Nblogs__cnt--box">
                    <nuxt-link :to="`/${article.id}`" class="Nblogs__cnt--box--blog-col">
                        <div class="Nblogs-img">
                            <img :src="article.eyecatch.url" alt="">
                        </div>
                        <div class="Nblogs-text">
                            <p class="Nblogs-text--day">{{ formatDate(article.publishedAt) }}</p>
                            <p>{{ article.title }}</p>
                        </div>
                    </nuxt-link>
                </div>
            </div>
        </div>
        <div class="Nblogs__button">
            <div class="main-contact-btn">
                <router-link to="/blog" class="Mbutton">VIEW MORE</router-link>
            </div>
        </div>
    </section>
</template>

<script setup>
    import { ref } from 'vue';

    const selectedCategory = ref('blog'); // 初期値を 'blog' に設定

    const formatDate = (date) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return new Date(date).toLocaleDateString('ja-JP', options).replace(/\//g, '/');
    };

    const getCategoryTitle = (category) => {
        if (category === 'news') {
            return 'NEWS';
        } else if (category === 'blog') {
            return 'BLOGS';
        } else {
            return 'ALL'; // カテゴリーが未選択または 'all' の場合も 'BLOGS' を表示
        }
    };
    
    const getCategoryText = (category) => {
        if (category === 'news') {
            return 'ニュース記事';
        } else if (category === 'blog') {
            return 'ブログ記事';
        } else {
            return '記事一覧'; // カテゴリーが未選択または 'all' の場合も 'BLOGS' を表示
        }
    };

    const handleCategoryClick = (category) => {
        selectedCategory.value = category; // 選択されたカテゴリーを更新
    };

    const config = useRuntimeConfig();

    const { data } = await useFetch(`/blogs`, {
        baseURL: config.baseUrl,
        headers: {
            "X-MICROCMS-API-KEY": config.apiKey,
        },
    });

</script>

<style lang="scss"></style>