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
export default {
    props: {
        isDisabled: Boolean
    },

    data() {
        return {}
    },

    methods: {
        addToCart() {
            this.$store.dispatch('cart/setCartStatus', true);
            this.$emit('addToCart');
        }
    }
}
</script>

<style lang="scss" scoped>
    .button {
        padding-top: 8px !important;
        padding-bottom: 8px !important;
    }
</style>