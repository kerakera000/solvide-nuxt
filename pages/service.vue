<template>
    <NServiceComp />
    <NServicePointComp />
    <NServiceContentComp />
    <NServiceFlowComp />
    <NContactComp />
</template>

<script>
import NContactComp from '@/components/solvide/NContactComp.vue';
import NServiceComp from '@/components/new-solvide-service/NewserviceKVComp.vue';
import NServiceFlowComp from '@/components/new-solvide-service/NewserviceFlowComp.vue';
import NServicePointComp from '@/components/new-solvide-service/NservicePointComp.vue';
import NServiceContentComp from '@/components/new-solvide-service/NewserviceContentComp.vue';

export default {
    name: 'Home-page',
    components: {
        NContactComp,
        NServiceContentComp,
        NServiceFlowComp,
        NServiceComp,
        NServicePointComp,
    },
};
</script>

<style scoped>
.Contactback {
    background: transparent linear-gradient(109deg, #8524D9 0%, #C348FA 23%, #31C4E6 100%) 0% 0% no-repeat padding-box;
}
</style>