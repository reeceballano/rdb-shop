<template>
    <div :class="{ 'cart-active': getCartWidgetStatus }" class="cart-widget">
        <div class="close-btn" @click.prevent="closeCart()">x</div>
        <h3 class="title is-3">
            Cart Items
        </h3>
        <ul>
            <li v-for="cart in cartItems" :key="cart.id">
                <a class="cart-btn-action" href="#" @click.prevent="removeItem(cart.id)">x</a>${{ cart.price }} {{ cart.name }} / Qty: {{ cart.qty }}
                <div class="cart-update-btns">
                    <a class="cart-btn-action"  href="#" @click.prevent="decreaseItem(cart)"><span>-</span></a> 
                    <a class="cart-btn-action"  href="#" @click.prevent="increaseItem(cart)"><span>+</span></a>
                </div>
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

        removeItem(payload) {
            this.$store.dispatch('cart/removeCartItem', payload);
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
        background: #2d154ce6;
        top: 0;
        height: 100vh;
        padding: 50px 35px;
        z-index: 99;
        color: #fff;
        -webkit-transition: all ease-in-out 1s;
        -moz-transition: all ease-in-out 1s;
        transition: all ease-in-out 1s;
    }

    ul {
        li {
            font-size: 13px;
            margin-bottom: 10px;
            padding-bottom: 10px;
            border-bottom: 1px solid #55416f;

            .cart-btn-action {
                color: #d46161;
                margin-right: 10px;
            }

            .cart-update-btns {
                margin-left: 10px;
                display: inline-block;
                a {
                    color: #35b1b1;
                    border: 1px solid;
                    height: 20px;
                    width: 20px;
                    display: inline-block;
                    text-align: center;
                }
            }
        }
    }

    .cart-active {
        right: 0;
    }

    .close-btn {
display: block;
    text-align: center;
    width: 24px;
    height: 24px;
    position: absolute;
    top: 15px;
    right: 17px;
    background: #a579de;
    color: #fff;
    border-radius: 50%;
    cursor: pointer;
    transition: all ease-in-out 0.3s;
    font-size: 13px;
        
        &:hover {
            background: #000 !important;
            color: #fff;
        }
    }

    .title {
        font-size: 1rem !important;
    }

</style>