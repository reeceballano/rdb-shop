<template>
  <div id="app">
    <rdb-nav></rdb-nav>
    <router-view/>
    <rdb-footer></rdb-footer>
  </div>
</template>

<script>
import Nav from '@/components/Navigation';
import Footer from '@/components/Footer/Footer';

export default {
    components: {
        'rdb-nav': Nav,    
        'rdb-footer': Footer,    
    },

    created() {
        this.$store.dispatch('product/getAllProducts');
    }
}
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Jost:wght@200;300;400;500;600;700&display=swap');

    .button,
    .navbar-menu a,
    h1, h2, h3, h4, h5, h6 {
        font-family: 'Jost', sans-serif;
    }

    h2 {
        font-weight: 300 !important;
    }

    .navbar-menu a {
        text-transform: uppercase;
    }

    .button {
        padding-top: 13px !important;
        padding-bottom: 13px !important;
        padding-left: 30px !important;
        padding-right: 30px !important;
        height: auto !important;
    }

    .section {
        padding-top: 130px !important;
        padding-bottom: 130px !important;
    }
</style>
