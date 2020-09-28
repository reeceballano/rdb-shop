<template>
    <div class="add-to-cart">
        <button class="button is-rounded is-outlined" disabled>
            <span class="icon">
                <i class="far fa-heart"></i>
            </span>
        </button>
    </div>
</template>

<script>
export default {
    props: {
        wishButton: {
            type: Boolean
        },

        id: {
            type: Number
        },

        name: {
            type: String
        },

        price: {
            type: Number
        },

        label: {
            type: String
        }
    },

    data() {
        return {}
    },

    methods: {
        addToCart() {
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