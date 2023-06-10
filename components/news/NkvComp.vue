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

            <div v-show="selectedCategory === '' || selectedCategory === 'all'" class="blogsapibox all">
                <div v-for="article in slicedArticlesALL" :key="article.id" class="Nblogs__cnt--box">
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

                <div class="pagenation">
                    <button class="previous" @click="previousPageALL" :disabled="currentPage === 1 || !hasPreviousPageALL"></button>
                    <div class="number">
                        <button v-for="page in totalPagesALL" :key="page" @click="setCurrentPageALL(page)" :disabled="currentPageALL === page">{{ page }}</button>
                    </div>
                    <button class="nextpage" @click="nextPageALL" :disabled="!hasNextPageALL"></button>
                </div>
            </div>

            <div v-show="selectedCategory === '' || selectedCategory === 'news'" class="blogsapibox news">
                <div v-for="article in slicedArticlesNews" :key="article.id" class="Nblogs__cnt--box">
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

                <div class="pagenation">
                    <button class="previous" @click="previousPageNews" :disabled="currentPage === 1 || !hasPreviousPageALL"></button>
                    <div class="number">
                        <button v-for="page in totalPagesNews" :key="page" @click="setCurrentPageALL(page)" :disabled="currentPage === page">{{ page }}</button>
                    </div>
                    <button class="nextpage" @click="nextPageNews" :disabled="!hasNextPageALL"></button>
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
        'X-MICROCMS-API-KEY': config.apiKey,
        },
    });
</script>

<script>

export default{
    data() {
        return {
            currentPageALL: 1,
            currentPageNews:1,
            itemsPerPage: 5
        };
    },
    computed: {
        //NEWS用のページネーション
        slicedArticlesNews() {
            const startIndex = (this.currentPageNews - 1) * this.itemsPerPage;
            const endIndex = startIndex + this.itemsPerPage;

            return this.data.contents
            .filter(item => item.category.name === 'ニュース')
            .slice(startIndex, endIndex);
        },
        totalPagesNews() {
            const totalArticles = this.data.contents.filter(item => item.category.name === 'ニュース').length;
            return Math.ceil(totalArticles / this.itemsPerPage);
        },
        hasNextPageNews() {
            const startIndex = this.currentPageNews * this.itemsPerPage;
            return startIndex < this.data.contents.filter(item => item.category.name === 'ニュース').length;
        },
        hasPreviousPageNews() {
            return this.currentPageNews > 1;
        },

        //ALL用のページネーション
        slicedArticlesALL() {
            const startIndex = (this.currentPageALL - 1) * this.itemsPerPage;
            const endIndex = startIndex + this.itemsPerPage;

            return this.data.contents
            .filter(item => item.category.name === 'NUXT-blog' || item.category.name === 'ニュース')
            .slice(startIndex, endIndex);
        },
        totalPagesALL() {
            const totalArticles = this.data.contents.filter(item => item.category.name === 'NUXT-blog' || item.category.name === 'ニュース').length;
            return Math.ceil(totalArticles / this.itemsPerPage);
        },
        hasNextPageALL() {
            const startIndex = this.currentPageALL * this.itemsPerPage;
            return startIndex < this.data.contents.filter(item => item.category.name === 'NUXT-blog' || item.category.name === 'ニュース').length;
        },
        hasPreviousPageALL() {
            return this.currentPageALL > 1;
        },
    },
    methods: {
        // all記事用ページネーション
        setCurrentPageALL(page) {
            this.currentPageALL = page;
        },
        nextPageALL() {
            if (this.hasNextPageALL) {
            this.currentPageALL++;
            }
        },
        previousPageALL() {
            if (this.hasPreviousPageALL) {
            this.currentPageALL--;
            }
        },
        //news記事用ページネーション
        setCurrentPageNews(page) {
            this.currentPageNews = page;
        },
        nextPageNews() {
            if (this.hasNextPageNews) {
            this.currentPageNews++;
            }
        },
        previousPageNews() {
            if (this.hasPreviousPageNews) {
            this.currentPageNews--;
            }
        },
    }
}

</script>