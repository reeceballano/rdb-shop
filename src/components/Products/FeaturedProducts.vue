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
                            :product="product"
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
                    :id="product.id"
                    :product="product"
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

export default {
    components: {
        'app-add-to-cart': AddToCart,
    },

    props: {
        product: {
            type: Object
        },

        isLeft: {
            type: Boolean,
            default: true
        }
    },

    data() {
        return {
        }
    },


    methods: {
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