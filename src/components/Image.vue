<template>
    <div class="image">
        <img :src="require(`@/assets/images/${imageName}`)" />
    </div>
</template>

<script>
export default {
    props: {
        imageName: {
            type: String,
        }
    }
}
</script>
