<template>
    <div class="single-product">
        <section class="section product-header">
            <div class="container">
                <div class="columns is-variable is-8">
                    <div class="column is-7">
                        <app-breadcrumb 
                            :product-breadcrumb="breadcrumb"
                            :current-page-name="getProduct.name"
                        >
                        </app-breadcrumb>
                        <div class="media">
                            <img ref="bigImage" :src="require(`@/assets/images/${getProduct.img}`)" alt="" />
                        </div>
                        <div class="columns is-multiline gallery-container">
                            <div 
                                class="column is-2 gallery-thumb"
                                v-for="product in getProduct.gallery"
                                :key="product.id"
                            >
                                <img @mouseover="changeImage(product)" @click.prevent="changeImage(product)" :src="require(`@/assets/images/${product}`)" />
                            </div>
                        </div>
                    </div>

                    <div class="column product-details">
                        <h2 class="title is-2">{{ getProduct.name }}</h2>
                        <h4 class="title is-4">${{ getProduct.price }}</h4>
                        <p>{{ getProduct.desc }}</p>                    
                        <div class="buttons">
                            <app-add-to-cart
                                :id="Number(getProduct.id)"
                                :name="getProduct.name"
                                :price="getProduct.price"  
                                @addToCart="addToCart"                      
                            >
                            </app-add-to-cart>

                            <app-add-to-wishlist
                                :id="Number(getProduct.id)"
                                :name="getProduct.name"
                                :price="getProduct.price"                        
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

        <section class="section related-products">
            <app-related-products :data="getProducts" :count="3" ></app-related-products>
        </section>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import AddToCart from '@/components/Cart/AddToCart';
import AddToWishlist from '@/components/Wishlist/AddToWishlist';
import ProductTabs from '@/components/ProductTabs/Tabs';
import RelatedProducts from '@/components/Products/RelatedProducts';
import Breadcrumb from '@/components/Breadcrumb';

export default {
    name: 'ProductView',

    components: {
        'app-add-to-cart': AddToCart,
        'app-add-to-wishlist': AddToWishlist,
        'app-product-tabs': ProductTabs,
        'app-related-products': RelatedProducts,
        'app-breadcrumb': Breadcrumb,
    },

    data() {
        return {
            tabs: {
                link: 0,
                content: 0,
                isActive: false,
            },

            breadcrumb: [
                { 
                    link: `/product/${Number(this.$route.params.id)}`, 
                }
            ]
            
        }
    },

    watch: {
        // call again the method if the route changes
        '$route': 'fetchData'
    },

    computed: {
        ...mapGetters('product', ['getProduct', 'getProducts']),

        productName() {
            return this.getProduct.name;
        }
    },

    created() {
        this.fetchData();
    },

    methods: {
        fetchData() {
            console.log('id: ', this.$route.params)
            this.$store.dispatch('product/getSingleProduct', Number(this.$route.params.id));
        },

        changeImage(img) {
            let image = this.$refs.bigImage.src = require(`@/assets/images/${img}`);
            return  image;
        },

        addToCart() {
            const product = {
                id: this.getProduct.id,
                name: this.getProduct.name,
                price: this.getProduct.price,
                productImage: this.getProduct.productImage
            }

            this.$store.dispatch('cart/addCart', product);
            console.log('added to cart ');
        }

    }
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
            // padding: 50px;
        }
    }

    .gallery-container {
        margin-top: 10px;
        margin-left: 0;
        margin-right: 0;
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

    .gallery-thumb {
        cursor: pointer;
        background: #fdfdfd;
        margin-bottom: 1px;
        position: relative;
        -webkit-transition: all ease-in-out 0.3s;
        -moz-transition: all ease-in-out 0.3s;
        transition: all ease-in-out 0.3s;

        &:hover {
            background: #cccccc;
        }

        &:after {
            content: '';
            position: absolute;
            right: 0;
            top: 0;
            width: 1px;
            height: 100%;
            background: #f4f4f4;
        }
    }

</style>