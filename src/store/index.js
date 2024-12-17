import { createStore } from 'vuex';

const store = createStore({
    state: {
        heroes: [
            {
                name: 'Artanis',
                function: 'Agresor',
                title: 'Jerarca de los Daelaam',
                attack: 111,
                image: 'https://static.heroesofthestorm.com/heroes/yrel/skins/light-of-hope-800.jpg'
            },
            {
                name: 'D.Va',
                function: 'Guerrero',
                title: 'Piloto de MEKA',
                attack: 22,
                image: 'https://static.heroesofthestorm.com/heroes/dva/skins/meka-pilot-800.jpg'
            },
            {
                name: 'Ragnaros',
                function: 'Agresor',
                title: 'El señor del fuego',
                attack: 180,
                image: 'https://static.heroesofthestorm.com/heroes/ragnaros/skins/the-firelord-800.jpg'
            },
            {
                name: 'Yrel',
                function: 'Guerrero',
                title: 'Luz de la esperanza',
                attack: 155,
                image: 'https://static.heroesofthestorm.com/heroes/yrel/skins/light-of-hope-800.jpg'
            },
            {
                name: 'Ana',
                function: 'Sanadora',
                title: 'Francotiradora veterana',
                attack: 30,
                image: 'https://static.heroesofthestorm.com/heroes/ana/skins/veteran-sniper-800.jpg'
            },
            {
                name: 'Auriel',
                function: 'Sanadora',
                title: 'Arcángel de la esperanza',
                attack: 64,
                image: 'https://static.heroesofthestorm.com/heroes/ana/skins/veteran-sniper-800.jpg'
            },
            {
                name: 'Malfurion',
                function: 'Sanadora',
                title: 'Archidruida',
                attack: 60,
                image: 'https://static.heroesofthestorm.com/heroes/malfurion/skins/archdruid-800.jpg'
            },
            {
                name: 'Arthas',
                function: 'Tanque',
                title: 'El rey Exánime',
                attack: 95,
                image: 'https://static.heroesofthestorm.com/heroes/arthas/skins/the-lich-king-800.jpg'
            },
            {
                name: 'Johanna',
                function: 'Tanque',
                title: 'Cruzada de Zakarum',
                attack: 99,
                image: 'https://static.heroesofthestorm.com/heroes/johanna/skins/crusader-of-zakarum-800.jpg'
            },
            {
                name: 'Muradin',
                function: 'Tanque',
                title: 'Rey de la montaña',
                attack: 88,
                image: 'https://static.heroesofthestorm.com/heroes/muradin/skins/mountain-king-800.jpg'
            },
            {
                name: 'Illidan',
                function: 'Asesino',
                title: 'El traidor',
                attack: 87,
                image: 'https://static.heroesofthestorm.com/heroes/illidan/skins/the-betrayer-800.jpg'
            },
            {
                name: 'Maiev',
                function: 'Asesino',
                title: 'La celadora',
                attack: 145,
                image: 'https://static.heroesofthestorm.com/heroes/maiev/skins/the-warden-800.jpg'
            },
            {
                name: 'Zeratul',
                function: 'Asesino',
                title: 'Prelado tétrico',
                attack: 131,
                image: 'https://static.heroesofthestorm.com/heroes/zeratul/skins/dark-prelate-800.jpg'
            },
            {
                name: 'Abathur',
                function: 'Apoyo',
                title: 'Maestro de evolución',
                attack: 27,
                image: 'https://static.heroesofthestorm.com/heroes/abathur/skins/evolution-master-800.jpg'
            },
            {
                name: 'Medivh',
                function: 'Apoyo',
                title: 'El último guardián',
                attack: 83,
                image: 'https://www.hellofriki.com/wp-content/uploads/2016/05/medivh.jpg'
            },
            {
                name: 'Zarya',
                function: 'Apoyo',
                title: 'Defensora de Rusia',
                attack: 22,
                image: 'https://static.heroesofthestorm.com/heroes/zarya/skins/defender-of-russia-800.jpg'
            },
            {
                name: 'Nazeebo',
                function: 'Asesino a distancia',
                title: 'Médico brujo',
                attack: 92,
                image: 'https://static.heroesofthestorm.com/heroes/nazeebo/skins/heretic-witch-doctor-800.jpg'
            },
            {
                name: 'Genji',
                function: 'Asesino a distancia',
                title: 'Ninja cibernético',
                attack: 44,
                image: 'https://static.heroesofthestorm.com/heroes/genji/skins/cybernetic-ninja-800.jpg'
            },
            {
                name: 'Zagara',
                function: 'Asesino a distancia',
                title: 'Madre de la prole del enjambre',
                attack: 85,
                image: 'https://static.heroesofthestorm.com/heroes/zagara/skins/broodmother-of-the-swarm-800.jpg'
            }
        ]
    },
    getters: {
        getHeroes: (state) => state.heroes
    }
});

export default store;