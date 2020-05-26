<template>
    <div class="single-product">
        <section class="section product-header">
            <div class="container">
                <div class="columns is-variable is-8">
                    <div class="column is-7">
                        <nav class="breadcrumb" aria-label="breadcrumbs">
                            <ul>
                                <li><a href="#">Bulma</a></li>
                                <li><a href="#">Documentation</a></li>
                                <li><a href="#">Components</a></li>
                                <li class="is-active"><a href="#" aria-current="page">Breadcrumb</a></li>
                            </ul>
                        </nav>
                        <div class="media">
                            <img :src="require(`@/assets/images/${getProduct.img}`)" alt="" />
                        </div>
                    </div>

                    <div class="column product-details">
                        <h2 class="title is-2">{{ getProduct.name }}</h2>
                        <h4 class="title is-4">${{ getProduct.price }}</h4>
                        <p>{{ getProduct.desc }}</p>                    
                        <div class="buttons">
                            <app-add-to-cart
                                :id="Number(product.id)"
                                :name="product.name"
                                :price="product.price"                        
                            >
                            </app-add-to-cart>

                            <app-add-to-wishlist
                                :id="Number(product.id)"
                                :name="product.name"
                                :price="product.price"                        
                            >
                            </app-add-to-wishlist>

                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section product-main-desc">
            <div class="container">
                <div class="product-main-content">
                    <app-product-tabs :product-tabs="getProduct"></app-product-tabs>
                </div>
            </div>            
        </section>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import AddToCart from '@/components/Cart/AddToCart';
import AddToWishlist from '@/components/Wishlist/AddToWishlist';
import ProductTabs from '@/components/ProductTabs/Tabs';

export default {
    name: 'ProductView',

    components: {
        'app-add-to-cart': AddToCart,
        'app-add-to-wishlist': AddToWishlist,
        'app-product-tabs': ProductTabs
    },

    data() {
        return {
            product: this.$route.params,
            tabs: {
                link: 0,
                content: 0,
                isActive: false,
            }
        }
    },

    computed: {
        ...mapGetters('product', ['getProduct']),
    },

    created() {
        this.$store.dispatch('product/getSingleProduct', Number(this.product.id));
    },

    mounted() {
        console.log(this.getProduct)
    },



}
</script>

<style lang="scss" scoped>
    .single-product {
        background: #e8e8e87a;
    }

    .product-header {
        padding-top: 75px !important;
    }

    .breadcrumb {
        margin-bottom: 45px !important;
    }

    .media {
        box-shadow: 1px 2px 27px rgba(0, 0, 0, 0.11);

        img {
            padding: 50px;
        }
    }

    .product-details {
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    .buttons {
        margin-top: 45px;

        div {
            margin-right: 15px;
        }
    }

    .product-main-desc {
        background: #fff;
    }

</style>