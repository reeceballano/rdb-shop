<template>
    <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul>
            <li><router-link to="/">Home</router-link></li>
            <li v-for="(breadcrumb, i) in productBreadcrumb" :key="i">
                <router-link :to="breadcrumb.link">{{ currentPageName }}</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    props: {
        productBreadcrumb: {
            type: Array,
        },

        currentPageName: {
            type: String,
            required: true,
        }
    }
}
</script>

<style>

</style>