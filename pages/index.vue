<template>
    <NKVComp/>
    <NAbout/>
    <NAService/>
    <NWorkComp/>
    <NBlogsComp/>
    <NContactComp/>
</template>

<script>
    import NKVComp from '@/components/solvide/NKVComp.vue';
    import NAbout from '@/components/solvide/NAboutComp.vue';
    import NAService from '@/components/solvide/NServiceComp.vue';
    import NWorkComp from '@/components/solvide/NWorkComp.vue';
    import NBlogsComp from '@/components/solvide/NBlogsComp.vue';
    import NContactComp from '@/components/solvide/NContactComp.vue';
    

export default {
    name: 'solvide-page',
    components: {
        NKVComp,
        NAbout,
        NAService,
        NWorkComp,
        NBlogsComp,
        NContactComp,
    },
};
</script>