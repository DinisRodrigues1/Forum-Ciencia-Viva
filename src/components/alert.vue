<template>
<b-alert variant="warning" fade :show="showDismissibleAlert" dismissible="" @dismissed="showDismissibleAlert=false">
  {{message}}
</b-alert>
</template>

<script>
    export default {
        name: 'alert',
        props: ['message'],
        data () {
            return {
            showDismissibleAlert: true
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>