<template>
    <div class="container is-fluid is-marginless">
        <div class="columns">
            <div class="column">

            </div>
            <div class="column">
                <h1 class="title">Comfortable and Beautiful!</h1>

                <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero excepturi labore nemo aut facere, quae necessitatibus incidunt id voluptas nostrum tenetur inventore fugit porro dolore eius blanditiis consectetur cupiditate omnis.</h2>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Feature',
}
</script>

<style lang="scss" scoped>
    .container {
        .columns {
            .column {
                padding: 100px;
                height: 80vh;
                &:nth-child(1) {
                    background: url('../../assets/images/feature.jpg') no-repeat;
                    background-size: cover;
                }

                &:nth-child(2) {
                    display: flex;
                    justify-content: center;
                    flex-direction: column;
                    background: #252525;

                    h1 {
                        color: #fff !important;
                        font-size: 46px;
                        font-weight: 200;
                        text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.02);
                    }

                    h2 {
                        color: #afafaf !important;
                        margin-top: 20px !important;
                        font-weight: 300;
                        line-height: 1.6;
                        font-size: 24px;
                    }
                }
            }
        }

    }
</style>