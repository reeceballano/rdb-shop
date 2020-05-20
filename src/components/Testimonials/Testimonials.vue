<template>
    <div class="container">
        <div class="columns is-vcentered">
            <div class="column is-4">
                <h2 class="title is-2">Customer Feedback!</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero excepturi labore nemo aut facere</p>
            </div>
            <div class="column">
                <div class="columns is-variable is-3 is-multiline">
                    <app-testimonial
                        v-for="testimonial in testimonials"
                        :key="testimonial.id"
                        :author="testimonial.author"
                        :testi="testimonial.testi"
                        :column="column"
                    >

                    </app-testimonial>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Testimonial from '@/components/Testimonials/Testimonial';

export default {
    name: 'Testimonials',

    props: {
        column: {
            type: Number,
        }
    },

    components: {
        'app-testimonial': Testimonial,
    },

    data() {
        return {
            testimonials: [
                { 
                    id: 1, 
                    author: 'John Doe',
                    testi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla.' 
                },

                { 
                    id: 2, 
                    author: 'Juan Dela Cruz',
                    testi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla.' 
                },
                { 
                    id: 3, 
                    author: 'John Doe',
                    testi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla.' 
                },

                { 
                    id: 4, 
                    author: 'Juan Dela Cruz',
                    testi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla.' 
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .title {
        // position: absolute;
        // bottom: 0;
        // left: 0;

        // /* Border is the new background */
        // background: none;

        // /* Rotate from top left corner (not default) */
        // transform-origin: 0 0;
        // transform: rotate(-90deg);
    }

</style>