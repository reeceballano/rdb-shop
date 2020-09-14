<template>
    <div :class="`is-${column}`" class="column">
        <router-link :to="{ name: 'Product', params: { id: id, name: name, price: price, image: productImage } }">
            <div class="card">
                <div class="card-image">
                    <figure class="image">
                        
                        <img :src="require(`@/assets/images/${productImage}`) " alt="Placeholder image">
                    </figure>
                </div>
                <div class="card-content ">
                    <div class="columns is-vcentered is-variable is-3">
                        <div class="column is-8">
                            <h4 class="title is-4 item-title">{{ name }}</h4>
                            <h4 class="title is-4">${{ price }}</h4>
                        </div>
                        <div class="column is-4">
                            <p class="buttons">
                                <app-add-to-wishlist
                                    :id="id"
                                    :name="name"
                                    label="Add To Wishlist"
                                ></app-add-to-wishlist>
                                <app-add-to-cart
                                    :id="id"
                                    :name="name"
                                    label="Add To Cart"
                                    @addToCart="addToCart"
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

        id: {
            type: Number,
        },

        name: {
            type: String,
        },

        price: {
            type: Number,
        },

        productImage: {
            type: String,
        }
    },

    methods: {
        addToCart() {
            const product = {
                id: this.id,
                name: this.name,
                price: this.price,
                productImage: this.productImage
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