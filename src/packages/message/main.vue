<template>
    <div class="m-message">{{ message }}</div>
</template>

<script>
    export default {
        name: 'MMessage',
        props: {
            message: {
                type: String,
                default: 'message'
            }
        }
    }
</script>

<style scoped>
    .m-message {
        padding: 20px;
        background-color: #f56c6c;
        color: #fff;
        margin-bottom: 10px;
    }
</style>