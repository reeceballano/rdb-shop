<template>
    <div class="container">
        <div class="columns">
            <div class="column is-3">
                <div>
                    <h2 class="title is-2">Best Seller</h2>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>

                <div class="sort-wrapper">
                    <h4>Sort By Price:</h4>

                    <div class="block">
                        <b-radio v-model="sortByPrice"
                            name="lowest"
                            native-value="lowest">
                            Lowest
                        </b-radio>
                        <b-radio v-model="sortByPrice"
                            name="highest"
                            native-value="highest">
                            Highest
                        </b-radio>
                    </div>    

                </div>
            </div>
            <div class="column">
                <div class="columns is-variable is-5 is-multiline">
                    <rdb-product
                        v-for="product in data"
                        :column="column"
                        :key="product.id"
                        :id="product.id"
                        :name="product.name"
                        :price="product.price"
                        :productImage="product.img"
                    >
                    </rdb-product>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Product from '@/components/Products/Product';

export default {
    name: 'Products',

    props: {
        data: {
            type: Array,
        },

        column: {
            type: Number,
            default: 4
        }

    },

    components: {
        'rdb-product': Product,
    },

    data() {
        return {
            sortByPrice: 'lowest'
        }
    }
}
</script>

<style lang="scss" scoped>
    .sort-wrapper {
        margin-top: 40px;
        padding-top: 40px;
        margin-bottom: 40px;
        padding-bottom: 40px;
        border-top: 1px solid #8e8e8e;

        h4 {
            font-weight: 600;
            margin-bottom: 15px;
        }
    }
</style>