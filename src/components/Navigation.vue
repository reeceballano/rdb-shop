
<template>
    <section class="section main-nav">
        <div class="container">
            <b-navbar>
                <template slot="brand">
                    <b-navbar-item tag="router-link" :to="{ path: '/' }">
                        <img
                            :src="require(`@/assets/images/RB.png`)"
                            alt="Lightweight UI components for Vue.js based on Bulma"
                        >
                    </b-navbar-item>
                </template>
                <template slot="start">
                    <b-navbar-item tag="router-link" :to="{ path: '/' }">
                        Home
                    </b-navbar-item>
                    <b-navbar-dropdown label="Who We Are">
                        <b-navbar-item href="#">
                            About
                        </b-navbar-item>
                    </b-navbar-dropdown>
                    <b-navbar-item href="#">
                        Products
                    </b-navbar-item>
                    <b-navbar-item href="#">
                        Contact Us
                    </b-navbar-item>
                    <b-navbar-item href="#">
                        Cart{{getCartItemsCount}}
                    </b-navbar-item>
                </template>

                <template slot="end">
                    <b-navbar-item tag="div">
                        <div class="buttons">
                            <b-button class="button is-primary" rounded outlined>
                                Sign up
                            </b-button>
                            <b-button class="button is-success" rounded outlined>
                                Log in
                            </b-button>
                        </div>
                    </b-navbar-item>
                </template>
            </b-navbar>
        </div>
    </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters('cart', ['getCartItemsCount']),
    }        
}
</script>

<style lang="scss" scoped>
    .button {
        padding: 5px 32px !important;
    }

    .main-nav {
        padding-top: 50px !important;
        padding-bottom: 50px !important;
    }

</style>