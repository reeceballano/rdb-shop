<template>
    <div class="home">
        <rdb-hero></rdb-hero>
        
        <section class="section featured-1">
            <rdb-featured-product
                :product-img="products[0].img"
                :product-name="products[0].name"
                :product-desc="products[0].desc"
                :is-left="true"
            ></rdb-featured-product>
        </section>

        <section class="section services">
            <rdb-services></rdb-services>
        </section>

        <section class="section product-list">
            <rdb-products 
                :column="4"
                :data="products"
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
            products: [
                {
                    id: 1,
                    name: 'Chair 1',
                    desc: 'Chair 1 built to last, the safety of you laptop and instruments is guaranteed.',
                    price: 25,
                    img: 'chair-2.png'
                },

                {
                    id: 2,
                    name: 'Chair 2',
                    desc: 'Chair 2 built to last, the safety of you laptop and instruments is guaranteed.',
                    price: 35,
                    img: 'chair-1.png'
                },

                {
                    id: 3,
                    name: 'Chair 3',
                    desc: 'Chair 3 built to last, the safety of you laptop and instruments is guaranteed.',
                    price: 45,
                    img: 'chair-3.png'
                },

                                {
                    id: 4,
                    name: 'Chair 4',
                    desc: 'Chair 4 built to last, the safety of you laptop and instruments is guaranteed.',
                    price: 25,
                    img: 'chair-1.png'
                },

                {
                    id: 5,
                    name: 'Chair 5',
                    desc: 'Chair 5 built to last, the safety of you laptop and instruments is guaranteed.',
                    price: 35,
                    img: 'chair-1.png'
                },

                {
                    id: 6,
                    name: 'Chair 6',
                    desc: 'Chair 6 built to last, the safety of you laptop and instruments is guaranteed.',
                    price: 45,
                    img: 'chair-1.png'
                }
            ]
        }
    }
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
