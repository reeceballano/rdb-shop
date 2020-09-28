<template>
    <div class="container">
        <div v-if="isLeft" class="columns is-vcentered is-multiline">
            <div class="column is-6 has-text-centered">
                <img class="featured-products" :src="require(`@/assets/images/${product.img}`) " alt="" />
            </div>
            <div class="column is-6">
                <h2 class="title is-2">{{ product.name }}</h2>
                <h2 class="subtitle">{{ product.desc }}</h2>

                <div class="columns is-vcentered">
                    <div class="column is-2">
                        <h3 class="title is-3 item-price">${{ product.price }}</h3>
                    </div>
                    <div class="column">
                        <app-add-to-cart
                            :id="product.id"
                            :name="product.name"
                            label="Add To Cart"
                            @addToCart="addToCart"
                            :isDisabled="isDisabled"
                        ></app-add-to-cart>
                    </div>
                </div>
            </div>
        </div>

        <div v-else class="columns is-vcentered is-multiline">
            <div class="column is-6 has-text-right">
                <h2 class="title is-2">{{ productName }}</h2>
                <h2 class="subtitle">{{ productDesc }}</h2>
                
                <app-add-to-cart
                    :id="productId"
                    :name="productName"
                    label="Add To Cart"
                ></app-add-to-cart>
            </div>
            <div class="column is-6  has-text-centered">
                <img class="featured-products" :src="require(`@/assets/images/${productImg}`) " alt="" />
            </div>
        </div>
    </div>
</template>

<script>
import AddToCart from '@/components/Cart/AddToCart';
import { mapGetters } from 'vuex';

export default {
    components: {
        'app-add-to-cart': AddToCart,
    },

    props: {
        product: {
            type: Array
        },

        isLeft: {
            type: Boolean,
            default: true
        }
    },

    data() {
        return {
            isDisabled: false,
        }
    },

    computed: {
        ...mapGetters('cart', ['getCartItems'])
    },

    mounted() {
        this.checkItem();
    },

    methods: {
        addToCart() {
            const product = {
                id: this.product.id,
                name: this.product.name,
                price: this.product.price,
                productImage: this.product.productImage
            }

            this.$store.dispatch('cart/addCart', product);
            console.log('added to cart ');
            this.checkItem();
        },

        checkItem() {
            const item = this.getCartItems.find(item => item.id === this.product.id);

            if(item) {
                this.isDisabled = true;
            } else {
                this.isDisabled = false;
            }
        },
    }
}
</script>

<style lang="scss" scoped>
    h2 {
        margin-top: 20px !important;
        margin-bottom: 30px !important;
    }

    .subtitle {
        font-size: 1.55rem;
        line-height: 1.55;
    }

    .featured-products{
        width: 500px;
    }

    .columns {
        padding-top: 50px;
        padding-bottom: 50px;
        // border-bottom: 1px solid #b5b5b5;
    }
</style>