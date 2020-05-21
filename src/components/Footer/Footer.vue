<template>
    <section>
        <footer class="footer">
            <div class="container">
                <div class="columns is-variable is-8 is-multiline">
                    <div class="column">
                        <img
                            class="logo-footer"
                            src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                            alt="Lightweight UI components for Vue.js based on Bulma"
                            width="100"
                        >

                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero excepturi labore nemo aut facere. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero excepturi labore nemo aut facere

</p>
                    </div>

                    <div class="column">
                        <h4 class="title is-5">Contact Info</h4>

                        <div class="block icon-wrapper">
                            <span class="icon">
                                <i class="fas fa-home"></i>
                            </span>
                            <ul>
                                <li>
                                    <span>3318  Alfred Drive</span>
                                </li>
                                <li>
                                    <span>Brooklyn</span>
                                </li>
                                <li>
                                    <span>New York, 11226</span>
                                </li>
                            </ul>
                        </div>
                        <div class="block icon-wrapper">
                            <span class="icon">
                                <i class="fas fa-phone-square reverse"></i>
                            </span>
                            <span>012-345-6789</span>
                        </div>

                        <div class="block icon-wrapper">
                            <span class="icon">
                                <i class="fas fa-envelope-square reverse"></i>
                            </span>
                            <span><a href="#">hello@localhost.dev</a></span>
                        </div>
                    </div>

                    <div class="column">
                        <h4 class="title is-5">Follow us!</h4>

                        <div class="block icon-wrapper">
                            <span class="icon">
                                <i class="fab fa-facebook-square"></i>
                            </span>
                            <span><a href="#">Facebook</a></span>
                        </div>

                        <div class="block icon-wrapper">
                            <span class="icon">
                                <i class="fab fa-instagram"></i>
                            </span>
                            <span><a href="#">Instagram</a></span>
                        </div>

                        <div class="block icon-wrapper">
                            <span class="icon">
                                <i class="fab fa-youtube"></i>
                            </span>
                            <span><a href="#">Youtube</a></span>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
        
        <div class="footer-bottom">
            <div class="container">
                <p>All Rights Reserved 2020 | <a href="#">Terms and Conditions</a> | <a href="#">Privacy Policy</a></p>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .footer {
        padding-top: 100px;
        padding-bottom: 100px;
    }

    .footer-bottom {
        background: #171717;
        padding-top: 20px;
        padding-bottom: 20px;

        a, p {
            color: #888;
            font-weight: 100;
            font-size: 12px;
        }
    }

    .logo-footer {
        margin-bottom: 20px;
    }

    .reverse {
        -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";
        -webkit-transform: scaleX(-1);
        transform: scaleX(-1);
    }

    .icon-wrapper {
        display: flex;
        margin-bottom: 10px !important;
    }

    .icon {
        margin-right: 7px;
    }
</style>