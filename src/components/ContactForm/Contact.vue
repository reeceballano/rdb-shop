<template>
    <div class="container">
        <div class="columns">
            <div class="column is-4">
                <img v-if="lightsOn" class="lamp" :src="require(`@/assets/images/lamp-on.png`)" alt="" />
                <img v-else class="lamp" :src="require(`@/assets/images/lamp.png`)" alt="" />
            </div>

            <div class="column">
                <div class="contact-details">
                    <h2 class="title is-2">
                        Get in touch!
                    </h2>

                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero excepturi labore nemo aut facere. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero excepturi labore nemo aut facere</p>
                </div>

                <form action="#" @submit.prevent="sendForm">
                    <div class="field">
                        <label class="label">Name</label>
                        <div class="control">
                        <input @focus="lightsOn = true" @blur="lightsOn = false" class="input" type="text" placeholder="Name">
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Email</label>
                        <div class="control">
                        <input @focus="lightsOn = true" @blur="lightsOn = false" class="input" type="email" placeholder="Email">
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Message</label>
                        <div class="control">
                        <textarea @focus="lightsOn = true" @blur="lightsOn = false"  name="message" id="message" cols="30" rows="3" placeholder="Message"></textarea>
                        </div>
                    </div>

                    <div class="field">
                        <div class="control">
                            <input type="submit" value="Send" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            lightsOn: false,
        }
    },

    methods: {
        sendForm() {
            this.lightsOn = true;

            setTimeout( () => {
                this.lightsOn = false;
            }, 2000);
        }
    }

}
</script>

<style lang="scss" scoped>
    label {
        color: white;
        font-size: 23px;
        font-weight: 300;
        display: none;
    }

    .contact-details {
        margin-bottom: 50px;
        p, h2 {
            color: #fff;
        }
    }


    textarea,
    input[type="email"],
    input[type="text"] {
        padding: 13px 0px;
        border: 0;
        background: none;
        border-bottom: 1px solid #fff;
        border-radius: 0;
        margin-bottom: 25px;
        color: #fff;
        font-size: 18px;
        font-weight: 100;
        letter-spacing: 1px;
        box-shadow: none;

        &:focus {
            outline: none !important;
            box-shadow: none !important;
        }

        &::placeholder {
            color:#fff;
        }
    }

    textarea {
        width: 100%;
    }

    input[type="submit"] {
        border: 1px solid #fff;
        background: transparent;
        color: #fff;
        padding: 15px 60px;
        font-size: 23px;
        border-radius: 30px;
        margin-top: 30px;
        margin-bottom: 30px;
        font-weight: 100;
        cursor: pointer;
        transition: all ease-in-out 0.3s;
        text-transform: uppercase;

        &:hover {
            background: #fff;
            color: #000;
        }

        &:focus {
            outline: none;
        }
    }

    .lamp {
        margin-top: -130px;
        margin-left: -88px;
    }
</style>