<template>
    <div class="container">

        <div class="section-title-wrapper">
            <h2 class="title is-2">Related Products</h2>
        </div>

        <div class="columns is-variable is-5 is-multiline">
            <rdb-product
                v-for="product in data"
                :column="column"
                :key="product.id"
                :product="product"
            >
            </rdb-product>
        </div>    
    </div>
</template>

<script>
import Product from '@/components/Products/Product';

export default {
    props: {
        data: {
            type: Array,
        },

        count: {
            type: Number,
            default: 3,
        },

        column: {
            type: Number,
            default: 4
        }

    },

    data() {
        return {
            // relatedProducts: [],
        }
    },

    created() {
        // let relData = this.data.slice(0,this.count);
        // this.relatedProducts = relData;
    },

    components: {
        'rdb-product': Product,
    },
}
</script>

<style lang="scss" scoped>
    .section-title-wrapper {
        margin-bottom: 60px;

        h2 {
            text-align: center;
        }
    }
</style>