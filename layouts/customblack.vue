<template>
    <div>
        <HeaderBlackComp />
        <slot />
        <FooterComp />
    </div>
</template>

<script>
// new-solvideになってるから直せ
import HeaderBlackComp from '~/components/solvide/HeaderBlackComp.vue';
import FooterComp from '~/components/solvide/FooterComp.vue';

export default {
    components: {
        HeaderBlackComp,
        FooterComp,
    }
}
</script>