<template>
    <div class="container">
        <div class="columns is-variable is-8 is-multiline">
            <rdb-service
                v-for="service in services"
                :column="4"
                :key="service.id"
                :name="service.name"
                :desc="service.desc"
                :icon="service.icon"
            ></rdb-service>
        </div>
    </div>
</template>

<script>
import Service from '@/components/Services/Service';

export default {
    name: 'Services',
    components: {
        'rdb-service': Service,
    },

    data() {
        return {
            services:[
                { 
                    id: 1, 
                    name: 'Custom Wood',
                    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid id mollitia illum saepe dolore hic incidunt dignissimos ad fuga deserunt',
                    icon: '1.png'
                },

                { 
                    id: 2, 
                    name: 'Fresh Style',
                    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid id mollitia illum saepe dolore hic incidunt dignissimos ad fuga deserunt',
                    icon: '2.png'
                },

                { 
                    id: 3, 
                    name: 'Best Design',
                    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid id mollitia illum saepe dolore hic incidunt dignissimos ad fuga deserunt',
                    icon: '3.png'
                }
            ]
        }
    }
}
</script>

<style>

</style>