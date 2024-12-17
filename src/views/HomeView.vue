<template>
<ItemsNavbar></ItemsNavbar>
<v-main class="home">
    <div class="home-background">
        <v-container class="text-center">
            <div class="texto">
                <h1 class="display-1" white--text>Desafia las expectativas de los MOBA</h1>
                <text-h6> Epicos heroes y accion sin cesar en multiples campos de batalla</text-h6>
                <br>
            </div>
            <br>
            <v-btn color="orange darken-3" @click="$router.push('/heroes')">Ver Héroes</v-btn>
        </v-container>
    </div>

    <v-container class="text-ground" fluid>
        <v-card color="purple darken-1" >
            <v-col>
                <p class="welcome-text">
                    Welcome: ¡Te damos la bienvenida al Nexo! ¡En este reino entre reinos, todo es posible! Elige entre decenas de héroes legendarios de todo el panteón de Blizzard, personaliza sus talentos y habilidades en medio del combate y lucha en una infinidad de campos de batalla que redefinen el género. ¡Esto no es un MOBA promedio, esto es Heroes of the Storm!
                </p>
            </v-col>
        </v-card>
    </v-container>
</v-main>
<ItemsFooter></ItemsFooter>
</template>

<script>
import ItemsNavbar from '../components/ItemsNavbar.vue';
import ItemsFooter from '../components/ItemsFooter.vue';

import {
    defineComponent
} from 'vue';
export default defineComponent({
    name: 'HomeView',
    components: {
        ItemsNavbar,
        ItemsFooter
    },
});
</script>

<style scoped>
.home {
    background: url('https://blz-contentstack-images.akamaized.net/v3/assets/blt0e00eb71333df64e/blt03542249d3e68c2a/65bc49d6529b719b244a1436/game_features_1.webp') no-repeat center center fixed;
    min-height: calc(93vh - 64px);
    /* Ajusta la altura para no sobrepasar el navbar y el footer */
}

.home-background {
    border: 2px solid #FF9800;
    border-radius: 8px;
    padding: 20px;
    max-width: 650px;
    margin: 0 auto;
    background: rgba(255, 255, 255, 0.8);
    /* Fondo blanco semitransparente para el texto */
}
.text-ground{
margin-top: 40px; 
padding: 20px; 
border-radius: 8px;

}

.texto {
    text-align: justify;
}

.welcome-text {
    margin: 0; /* Elimina el margen por defecto del párrafo */
    text-align: justify; /* Alineación del texto */
}
</style>
