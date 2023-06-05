<template>
    <NpolicyKVComp />
    <NprofileComp />
    <NContactComp />
</template>

<script>
import NpolicyKVComp from '@/components/new-solvide-policy/NpolicyKVComp.vue'
import NContactComp from '@/components/solvide/NContactComp.vue';
import NprofileComp from '@/components/new-solvide-policy/NProfileComp.vue';

export default {
    name: 'policy-page',
    components: {
        NpolicyKVComp,
        NprofileComp,
        NContactComp,
    },
};
</script>

<style scoped>
.Contactback {
    background: transparent linear-gradient(109deg, #8524D9 0%, #C348FA 23%, #31C4E6 100%) 0% 0% no-repeat padding-box;
}
</style>