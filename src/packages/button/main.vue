<template>
    <div class="m-button">
        <slot>{{ text }}</slot>
    </div>
</template>

<script>
    export default {
        name: 'MButton',
        props: {
            text: {
                type: String,
                default: 'submit'
            }
        }
    }
</script>

<style scoped>
    .m-button {
        padding: 20px;
        background-color: #409eff;
        color: #fff;
        margin-bottom: 10px;
    }
</style>