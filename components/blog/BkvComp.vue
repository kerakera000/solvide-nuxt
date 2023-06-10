<template>
    <section id="Newtop" class="Nblogs Bblog">
        <div class="Nblogs__title Bkvtitle">
            <div class="Ntitle">
                <h2>{{ getCategoryTitle(selectedCategory) }}</h2>
                <p>{{ getCategoryText(selectedCategory) }}</p>
                <span></span>
            </div>
        </div>
        <div class="Nblogs__cnt">
            <div class="Nblogs__cnt--text-box">
                <p class="p" @click="handleCategoryClick('all')">すべて</p>
                <router-link to="/news" class="p">ニュース</router-link>
                <p class="p" @click="handleCategoryClick('blog')">ブログ</p>
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
                    <button class="previous" @click="previousPageALL" :disabled="currentPageALL === 1 || !hasPreviousPageALL"></button>
                    <div class="number">
                        <button v-for="page in totalPagesALL" :key="page" @click="setCurrentPageALL(page)" :disabled="currentPageALL === page">{{ page }}</button>
                    </div>
                    <button class="nextpage" @click="nextPageALL" :disabled="!hasNextPageALL"></button>
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
                <div v-for="article in slicedArticles" :key="article.id" class="Nblogs__cnt--box">
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
                    <button class="previous" @click="previousPage" :disabled="currentPage === 1 || !hasPreviousPage"></button>
                    <div class="number">
                        <button v-for="page in totalPages" :key="page" @click="setCurrentPage(page)" :disabled="currentPage === page">{{ page }}</button>
                    </div>
                    <button class="nextpage" @click="nextPage" :disabled="!hasNextPage"></button>
                </div>
            </div>

        </div>
    </section>
</template>

<script setup>
    import { ref } from 'vue';

    const selectedCategory = ref('blog'); // 初期値を 'blog' に設定
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
        baseURL: config.public['baseUrl'],
        headers: {
        'X-MICROCMS-API-KEY': config.public['apiKey'],
        },
    });
</script>


<script>

export default{
    data() {
        return {
            currentPageALL: 1,
            currentPage: 1,
            itemsPerPage: 5,
            data: {
                contents: [], // 初期値として空の配列を指定する
            },
        };
    },
    computed: {
        //NUXT-BLog用のページネーション
        slicedArticles() {
            const startIndex = (this.currentPage - 1) * this.itemsPerPage;
            const endIndex = startIndex + this.itemsPerPage;

            return this.data.contents
            .filter(item => item.category.name === 'NUXT-blog')
            .slice(startIndex, endIndex);
        },
        totalPages() {
            const totalArticles = this.data.contents.filter(item => item.category.name === 'NUXT-blog').length;
            return Math.ceil(totalArticles / this.itemsPerPage);
        },
        hasNextPage() {
            const startIndex = this.currentPage * this.itemsPerPage;
            return startIndex < this.data.contents.filter(item => item.category.name === 'NUXT-blog').length;
        },
        hasPreviousPage() {
            return this.currentPage > 1;
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
        //blog記事用ページネーション
        setCurrentPage(page) {
            this.currentPage = page;
        },
        nextPage() {
            if (this.hasNextPage) {
            this.currentPage++;
            }
        },
        previousPage() {
            if (this.hasPreviousPage) {
            this.currentPage--;
            }
        },
    }
}

</script>


<style>



</style>