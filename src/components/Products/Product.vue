<template>
    <div :class="`is-${column}`" class="column">
        <router-link :to="{ name: 'Product', params: { id: product.id } }">
            <div class="card">
                <div class="card-image">
                    <figure class="image">
                        <img :src="require(`@/assets/images/${product.img}`) " alt="Placeholder image">
                    </figure>
                </div>
                <div class="card-content ">
                    <div class="columns is-vcentered is-variable is-3">
                        <div class="column is-8">
                            <h4 class="title is-4 item-title">{{ product.name }}</h4>
                            <h4 class="title is-4">${{ product.price }}</h4>
                        </div>
                        <div class="column is-4">
                            <p class="buttons">
                                <app-add-to-wishlist
                                    :id="product.id"
                                    :name="product.name"
                                    label="Add To Wishlist"
                                    :wishButton="true"
                                ></app-add-to-wishlist>

                                <app-add-to-cart
                                    :id="product.id"
                                    label="Add To Cart"
                                    :name="product.name"
                                    @addToCart="addToCart"
                                    :isDisabled="isDisabled"
                                ></app-add-to-cart>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </router-link>
    </div>
</template>

<script>
import AddToCart from '@/components/Cart/AddToCart';
import AddToWishlist from '@/components/Wishlist/AddToWishlist';
import { mapGetters } from 'vuex';

export default {
    name: 'Product',
    
    components: {
        'app-add-to-cart': AddToCart,
        'app-add-to-wishlist': AddToWishlist,
    },

    props: {
        column: {
            type: Number,
            default: 4
        },

        product: {
            type: Object,
            required: true
        }
    },

    data() {
        return {
            isDisabled: false,
        }
    },

    computed: {
        ...mapGetters('cart', ['getCartItems']),
    },

    mounted() {
        this.checkItem();
    },

    watch: {
        getCartItems() {
            this.checkItem();
        }
    },

    methods: {
        checkItem() {
            const item = this.getCartItems.find(item => item.id === this.product.id);

            if(item) {
                this.isDisabled = true;
            } else {
                this.isDisabled = false;
            }
        },
        
        addToCart() {
            const product = {
                id: this.product.id,
                name: this.product.name,
                price: this.product.price,
                productImage: this.product.productImage
            }

            this.$store.dispatch('cart/addCart', product);
            console.log('added to cart ');
        }
    }
}
</script>

<style lang="scss" scoped>
    .card {
        box-shadow: none;
        padding: 30px;

        &:hover {
            background: #dde6ef;
            box-shadow: 3px 3px 2px rgba(0, 0, 0, 0.03);
        }

        figure {
            display: flex;
            align-items: center;
            justify-content: center;

            img {
                width: 55%;
            }
        }
    }

    .item-title {
        font-size: 17px !important;
        border-bottom: 1px solid #797c80;
        padding-bottom: 15px;
        margin-bottom: 15px;
    }
</style>