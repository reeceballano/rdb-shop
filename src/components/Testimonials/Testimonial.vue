<template>
    <div :class="`is-${column}`" class="column">
        <article class="message">
            <div class="message-body">
            <p>{{ testi }}</p>
            
            <p><strong>- {{ author }}</strong></p>
            </div>
        </article>
    </div>
</template>

<script>
export default {
    name: 'Testimonial',

    props: {
        column: {
            type: Number,
            default: 6
        },

        author: {
            type: String,
        },

        testi: {
            type: String,
        }
    },
}
</script>

<style lang="scss" scoped>
    .message {
        background-color: #f7f7f763;

        .message-body {
            border-color: #f1f1f1;
        }

    }
</style>