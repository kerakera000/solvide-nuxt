<template>
    <section class="Nwork">
        <div class="Nwork__title">
            <div class="Ntitle">
                <h2>WORKS</h2>
                <p>制作実績</p>
                <span></span>
            </div>
        </div>
        <div class="Nwork__cnt">
            <div v-for="article in data.contents.filter(item => item.category.name === 'サイト制作').slice(0, 2)" :key="article.id" class="Nwork__cnt--card">
                <div class="Nwork__cnt--card--img">
                    <img :src="article.eyecatch.url" alt="">
                </div>
                <div class="Nwork__cnt--card--day">
                    <p class="Nwork__cnt--card--day--text"><span>・</span>{{article.category.name}}</p>
                </div>
                <h3 class="Nwork__cnt--card--title">{{ article.title }}</h3>
            </div>
        </div>
        <div class="Nwork__text">
            <p>他の実績はお問い合わせにてご覧いただけます。</p>
            <p>お気軽にご連絡ください。</p>
        </div>
        <div class="Nwork__button">
            <div class="main-contact-btn">
                <router-link to="/contact" class="Mbutton">CONTACT</router-link>
            </div>
        </div>
    </section>
</template>

<script setup>

    const formatDate = (date) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return new Date(date).toLocaleDateString('ja-JP', options).replace(/\//g, '/');
    };

    const { data } = await useFetch(`/blogs`, {
        baseURL: "https://solvide.microcms.io/api/v1",
        headers: {
            "X-MICROCMS-API-KEY": "A8OTP6XIr8kNjkXW5MENxUSGvneZXO1mfO29",
        },
    });
</script>

<style></style>