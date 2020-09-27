<template>
    <div :class="{ 'cart-active': getCartWidgetStatus }" class="cart-widget">
        <div class="close-btn" @click.prevent="closeCart()">x</div>
        <h3 class="title is-3">
            Cart Items
        </h3>
        <ul>
            <li v-for="cart in cartItems" :key="cart.id">
                {{ cart.name }} | Price: ${{ cart.price }} | Qty: {{ cart.qty }} <a href="#" @click.prevent="decreaseItem(cart)">-</a> <a href="#" @click.prevent="increaseItem(cart)">+</a>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    props: {
        cartItems: {
            type: Array,
            required: true
        }
    },

    computed: {
        ...mapGetters('cart', ['getCartWidgetStatus']),
    },

    methods: {
        closeCart() {
            this.$store.dispatch('cart/setCartStatus', false);
        },

        updateItem(payload) {
            switch(payload.action) {
                case 'increase':
                    this.$store.dispatch('cart/updateCartItem', payload);
                    break;

                case 'decrease':
                    this.$store.dispatch('cart/updateCartItem', payload);
                    break;

                default :
                    break;
            }
        },

        increaseItem(payload) {
            const item = payload;
            item.action = 'increase';
            this.updateItem(item);
        },

        decreaseItem(payload) {
            const item = payload;

            item.action = 'decrease';

            if(item.qty !== 0) {
                this.updateItem(item);
            }
                    
        }
    }
}
</script>

<style lang="scss" scoped>
    h3 {
        color: #fff;
        font-size: 21px;
    }

    .cart-widget {
        width: 30%;
        position: fixed;
        right: -1000px;
        background: #505050;
        top: 0;
        height: 100vh;
        padding: 50px 35px;
        z-index: 99;
        color: #fff;
        -webkit-transition: all ease-in-out 1s;
        -moz-transition: all ease-in-out 1s;
        transition: all ease-in-out 1s;
    }

    .cart-active {
        right: 0;
    }

    .close-btn {
        display: block;
        text-align: center;
        width: 30px;
        height: 30px;
        position: absolute;
        top: 11px;
        right: 11px;
        background: #f5f0eb;
        color: #000;
        border-radius: 50%;
        cursor: pointer;
        -webkit-transition: all ease-in-out 0.3s;
        -moz-transition: all ease-in-out 0.3s;
        transition: all ease-in-out 0.3s;
        
        &:hover {
            background: #000 !important;
            color: #fff;
        }
    }

</style>