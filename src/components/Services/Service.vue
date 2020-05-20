<template>
    <div :class="`is-${column}`" class="column has-text-centered">
        <div class="service-icon">
            <img :src="require(`@/assets/images/icons/${icon}`) " :alt="name">
        </div>
        <h3 class="title is-3">{{ name }}</h3>
        <p>{{ desc }}</p>
    </div>
</template>

<script>
export default {
    props: {
        column: {
            type: Number,
            default: 4,
        },

        name: {
            type: String
        },

        desc: {
            type: String
        },

        icon: {
            type: String
        }
    }
}
</script>

<style lang="scss" scoped>
    .column {
        margin-top: 20px;
        margin-bottom: 20px;
    }

    h3 {
        font-size: 23px !important;
    }

    .service-icon {
        margin-bottom: 20px;

        img {
            width: 100px;
            border: 1px solid #000;
            border-radius: 50%;
            padding: 20px;
        }
    }


</style>