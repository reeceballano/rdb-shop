<template>
    <div class="add-to-cart">
        <button @click.prevent="addToCart" class="button is-rounded is-outlined" :disabled="isDisabled">
            <span class="icon">
                <i class="fas fa-shopping-cart"></i>
            </span>
        </button>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    props: {
        id: {
            type: Number,
            required: true
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
        ...mapGetters('cart', ['getCartItems'])
    },

    watch: {
        // You need to add this if the you have multiple wrap component(parent/child)
        '$route': 'checkItem',

        getCartItems() {
            this.checkItem();
        }
    },

    created() {
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
            this.$store.dispatch('cart/setCartStatus', true);
            console.log('added to cart ');
        },

        checkItem() {
            const item = this.getCartItems.find(item => item.id === this.id);

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
    .button {
        padding-top: 8px !important;
        padding-bottom: 8px !important;
    }
</style>