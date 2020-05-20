<template>
    <section class="hero is-success is-large main-hero">
        <div class="hero-body">
            <div class="container">
                <div class="columns is-mobile">
                    <div class="column is-6">
                        <h1 class="title">
                        Custom Wood
                        </h1>
                        <h2 class="subtitle">
                        Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. 
                        </h2>

                        <div class="buttons">
                            <b-button type="is-light" rounded outlined>Primary</b-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    h1 {
        color: #5f5f5f !important;
        font-size: 101px;
        font-weight: 200;
        text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.02);
    }

    h2 {
        color: #595a5a !important;
        margin-top: 20px !important;
        font-weight: 300;
        line-height: 1.6;
        font-size: 24px;
    }

    .buttons {

    }

    .button {
        border-color: #595a5a !important;
        color: #595a5a !important;
        font-size: 18px;
        margin-top: 15px;
    }

    .main-hero {
        background: url(../assets/images/hero.jpg) no-repeat;
        background-size: cover;
        background-position: bottom center;
    }
</style>