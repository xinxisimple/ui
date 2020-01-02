<template>
    <div id="app">
      <m-button>{{ msg }}</m-button>
      <m-message></m-message>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>
