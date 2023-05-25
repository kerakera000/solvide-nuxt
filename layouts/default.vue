<template>
    <HeaderComp/>
    <slot/>
    <FooterComp/>
</template>

<script>
// new-solvideになってるから直せ
import HeaderComp from '~/components/solvide/HeaderComp.vue';
import FooterComp from '~/components/solvide/FooterComp.vue';

export default {
    components: {
        HeaderComp,
        FooterComp,
    }
}
</script>