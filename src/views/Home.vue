<template>
    <div class="home">
        <rdb-hero></rdb-hero>
        
        <section class="section featured-1">
            <rdb-featured-product
                :product="getProducts[0]"
                :is-left="true"
            ></rdb-featured-product>
        </section>

        <section class="section services">
            <rdb-services></rdb-services>
        </section>

        <section class="section product-list">
            <rdb-products 
                :column="4"
                :productData="getProducts"
            >
            </rdb-products>
        </section>

        <section class="section feature is-paddingless">
            <rdb-feature></rdb-feature>
        </section>

        <section class="section testimonials">
            <rdb-testimonials :column="6"></rdb-testimonials>
        </section>

        <section class="section contact">
            <rdb-contact-form></rdb-contact-form>
        </section>

    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Hero from '@/components/Hero';
import FeaturedProduct from '@/components/Products/FeaturedProducts';
import Services from '@/components/Services/Services';
import Products from '@/components/Products/Products';
import Feature from '@/components/Feature/Feature';
import Testimonials from '@/components/Testimonials/Testimonials';
import ContactForm from '@/components/ContactForm/Contact';

export default {
    name: 'Home',
    components: {
        'rdb-hero': Hero,
        'rdb-featured-product': FeaturedProduct,
        'rdb-services': Services,
        'rdb-products': Products,
        'rdb-feature': Feature,
        'rdb-testimonials': Testimonials,
        'rdb-contact-form': ContactForm,
    },

    data() {
        return {
        }
    },

    computed: {
        ...mapGetters('product', ['getProducts']),
    },
}
</script>

<style lang="scss" scoped>
    .featured-1 {

    }

    .featured-2 {
        background: #f9f8f7;
    }

    .services {
        background: #f1f1f1;
    }

    .feature {
    }

    .testimonials {
        // height: 70vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .contact {
        background: #424242;
    }

</style>
