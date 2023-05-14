
    //.env 加工
    import axios from 'axios';

    const client = axios.create({
        serviceDomain: 'solvide',
        baseURL: process.env.VUE_APP_API_URL_BASE, // 'X-API-KEY': process.env.MICROCMS_API_KEY APIのURLを設定します。
        headers: {
            'X-API-KEY': process.env.VUE_APP_MICROCMS_API_KEY, // マイクロCMSのAPIキーを設定します。
        },
    });

    export const getPosts = async () => {
        const { data } = await client.get('/works'); // コンテンツのエンドポイントを指定して、コンテンツを取得します。
        return data.contents;
    };

    //cms script呼び出し

    // import { getPosts } from '@/microcms.js';
    // export default {
    //     name: 'WorksComp',

    //     data() {
    //         return {
    //             posts: [],
    //         };
    //     },
    //     async created() {
    //         this.posts = await getPosts();
    //     },
    //     components: {
    //         Swiper,
    //         SwiperSlide,
    //     },
    //     setup() {
    //         return {
    //             modules: [Pagination, Navigation],
    //         };
    //     },
    // }


    // htmlでの呼び出し

    // <swiper-slide class="swiper-cnt" v-for="post in posts" :key="post.id">
    //     <div class="swiper-img">
    //         <img :src="post.img.url" alt="post.image.title">
    //     </div>
    //     <div class="swiper-cnt__text">
    //         <h2>{{ post.title }}</h2>
    //         <p>{{ post.text }}</p>
    //     </div>
    // </swiper-slide>