<template>
    <div class="product-tabs">
        <div class="tabs is-centered is-boxed">
            <ul>
                <li 
                    v-for="(item, i) in productTabs.tab" 
                    :key="i"
                    @click.prevent="clickTab(i)"
                    :class="{'is-active': tabs.link === i}"
                >
                    <a>
                        <span class="icon is-small"><i class="fas fa-image" aria-hidden="true"></i></span>
                        <span>{{ item.label }}</span>
                    </a>

                </li>
            </ul>
        </div>

        <div class="block">
            <div class="columns">

                <div 
                    class="column"
                    v-for="(tab, i) in productTabs.tab"
                    :key="i"
                    v-show="tabs.link == i"
                >
                    {{ tab.content }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        productTabs: {
            type: Object
        }
    },

    data() {
        return {
            tabs: {
                link: 0,
                content: 0,
                isActive: false,
            }
        }
    },

    methods: {
        clickTab(id) {
            this.tabs.link = id;
            console.log(this.tabs.link);
        }
    }
}
</script>

<style>

</style>