<template>
    <section id="servicetop" class="NserviceKV">
        <div id="Newtop" class="NserviceKV__title">
            <div class="Ntitle">
                <h2>SERVICE</h2>
                <p>サービス内容</p>
                <span></span>
            </div>
        </div>
        <div class="NserviceKV__content">
            <div class="NserviceKV__content--text">
                <h2 data-txt="MAKE WEBSITE AS COMPANY'S “FACE”">MAKE WEBSITE<br>AS COMPANY'S “FACE”</h2>
                <h3>会社の”<span>顔</span>”となるサイトをつくる。</h3>
                <p>
                    私たちは、常にお客様の視点に立ってWebサイト制作を行っています。
                    お客様が抱える問題を解決し、ビジネスを成長させるために、私たちは創意工夫を重ね、
                    最新の技術やトレンドを取り入れたウェブサイトを提供しています。
                </p>
            </div>
        </div>
        <div class="NserviceKV__nav">
            <ul class="NserviceKV__nav--list">
                <li @click="scrollTo('servicetop')">TOP</li>
                <li @click="scrollTo('servicescnt')">サービス内容</li>
                <li @click="scrollTo('serviceflow')">制作フロー</li>
            </ul>
        </div>
    </section>
</template>

<script>
    export default {
        methods: {
            scrollTo(id) {
            const element = document.getElementById(id);
            if (element) {
                window.scrollTo({
                top: element.offsetTop - 80, // 上部から5remの余白を考慮
                behavior: 'smooth'
                });
            }
            }
        }
    };
</script>

<style lang="scss">

</style>