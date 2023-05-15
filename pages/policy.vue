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