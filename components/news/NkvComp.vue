<template>
    <section id="Newtop" class="Nblogs Nblog">
        <div class="Nblogs__title Nkvtitle">
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
                <router-link to="/blog" class="p">ブログ</router-link>
            </div>
            <div v-show="selectedCategory === '' || selectedCategory === 'all'" class="blogsapibox blogs">
                <div v-for="article in data.contents" :key="article.id" class="Nblogs__cnt--box">
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
                <div v-for="article in data.contents.filter(item => item.category.name === 'ニュース')" :key="article.id" class="Nblogs__cnt--box">
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
                <div v-for="article in data.contents.filter(item => item.category.name === 'NUXT-blog')" :key="article.id" class="Nblogs__cnt--box">
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
    </section>
</template>

<script setup>
    import { ref } from 'vue';

    const selectedCategory = ref('news'); // 初期値を 'blog' に設定
    const config = useRuntimeConfig();

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

    const { data } = await useFetch(`/blogs`, {
        baseURL: config.baseUrl,
        headers: {
            "X-MICROCMS-API-KEY": config.apiKey,
        },
    });
</script>