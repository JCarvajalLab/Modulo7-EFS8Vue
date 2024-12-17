<template>
<v-app-bar app color="blue darken-4" dark>
    <v-row justify="center">
    <v-btn color="white darken-3" @click="$router.push('/')"> <v-icon left>mdi-home</v-icon>HOME</v-btn>
    </v-row>
</v-app-bar>
</template>
<script>
export default {
    name: 'NavbarItems'
}
</script>

<style>

</style>
