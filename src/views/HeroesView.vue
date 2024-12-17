<template>
<ItemsNavbar></ItemsNavbar>
<v-main class="home">
    <div class="background-blur"></div>
    <div class="tituloHeroes">
        <h2 class="table-title">Héroes</h2> <!-- Título de la tabla -->
        <div class="filter-icons">
            <i class="fas fa-shield-alt" title="Tanque" @click="filterByTank"></i>
            <i class="fas fa-crosshairs" title="Asesino a distancia" @click="filterByRangedAssassin"></i>
            <i class="fas fa-plus" title="Sanador" @click="filterByHealer"></i>
            <i class="fas fa-sword" title="Guerrero" @click="filterByWarrior"></i>
            <i class="fas fa-user-secret" title="Asesino" @click="filterByAssassin"></i>
            <i class="fas fa-hand-paper" title="Apoyo" @click="filterBySupport"></i>
        </div>
    </div>
    <div class="table-container">
        <v-table class="tablaHeroes" theme="dark">
            <thead>
                <tr>
                    <th class="text-left">Heroe</th>
                    <th class="text-left">Nombre</th>
                    <th class="text-left">Funcion</th>
                    <th class="text-left">Titulo</th>
                    <th class="text-left">Ataque</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in heroes" :key="item.name">
                    <td><img :src="item.image" alt="Hero Image" style="width: 200px; height: auto;" /></td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.function }}</td>
                    <td>{{ item.title }}</td>
                    <td>{{ item.attack }}</td>
                </tr>
            </tbody>
        </v-table>
    </div>
</v-main>

<ItemsFooter></ItemsFooter>
</template>

<script>
import ItemsNavbar from '../components/ItemsNavbar.vue';
import ItemsFooter from '../components/ItemsFooter.vue';
import {
    mapGetters
} from 'vuex'

export default {
    name: 'HeroesView',
    components: {
        ItemsNavbar,
        ItemsFooter
    },
    computed: {
        ...mapGetters(['getHeroes']), // Mapea el getter
        heroes() {
            return this.getHeroes; // Obtiene los héroes del store
        }
    }
};
</script>

<style scoped>
.home {
    position: relative;
    /* Asegúrate de que el contenedor principal tenga posición relativa */
    min-height: calc(93vh - 64px);
}

.background-blur {
    position: absolute;
    /* Posiciona el fondo de manera absoluta */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('https://blz-contentstack-images.akamaized.net/v3/assets/blt0e00eb71333df64e/blt03542249d3e68c2a/65bc49d6529b719b244a1436/game_features_1.webp') no-repeat center center fixed;
    background-size: cover;    /* Asegúrate de que la imagen cubra todo el fondo */
    filter: blur(8px);    /* Aplica el desenfoque solo a este div */
    z-index: 1;    /* Asegúrate de que esté detrás de la tabla */
}

.tituloHeroes {
    position: relative;
    z-index: 2;
    margin-left: 3%;
}

.table-container {
    max-height: 60vh; /* Establece la altura máxima del contenedor */
    overflow-y: auto; /* Habilita el desplazamiento vertical */
    margin: 20px 50px; /* Margen superior e inferior y centrado */
    z-index: 2; /* Asegúrate de que esté por encima del fondo difuminado */
    position: relative; /* Asegúrate de que tenga posición relativa */
}

.table-title {
    color: white;
    /*agrandar la letra*/
    font-size: 40px;
    margin-bottom: 10px;
    /* Espacio entre el título y los iconos */
}

.filter-icons i {
    font-size: 35px; /* Tamaño de los iconos */
    margin: 5px;  /* Espacio entre los iconos */
    cursor: pointer; /* Cambia el cursor al pasar sobre los iconos */
    transition: color 0.3s; /* Transición suave para el color */
    color: white;
    margin-bottom: 20px;
}

.filter-icons i:hover {
    color: #ffcc00;
    /* Cambia el color al pasar el mouse */
}

.tablaHeroes {
    width: 100%; /* Asegúrate de que la tabla ocupe el 100% del ancho disponible */
    border-collapse: collapse; /* Colapsa los bordes de la tabla */
    margin: 0; /* Elimina el margen de la tabla */
    padding: 0; /* Elimina el padding de la tabla */
}
</style>
