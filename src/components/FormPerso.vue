<script>
import CartePerso from '../components/CartePerso.vue'
import { usePersonnageStore } from '../stores/personnage'

export default {
    name: 'FormPerso',

    setup() {
        const personnageStore = usePersonnageStore()
        return {
            personnageStore,
        }
    },

    components: {
        CartePerso,
    },
    
    data() {
        return {
            formPerso: {
                pseudo: '',
                age: 0,
            },
        }
    },
    methods: {
        ajoutPerso() {
            this.personnageStore.ajoutPersonnage(this.formPerso) 
            this.formPerso = {
                pseudo: '',
                age: 0,
            }
        }
    },
}
</script>


<template>

    <h2>Preview:</h2>
    <div class="pesonnages">
      <h1>Voici mon personnage</h1>
    </div>
    <CartePerso :personnage="formPerso" />

  
    <form @submit.prevent="ajoutPerso()">
      <input type="text" placeholder="Pseudo" v-model="formPerso.pseudo">
      <input type="number" placeholder="Age" v-model="formPerso.age">
      <p class='error' v-if="formPerso.pseudo.length<3">Le pseudo doit faire au moins 3 caractères</p>
      <button type="submit">Ajouter</button>
    </form>

  
</template>