<script>

import CartePerso from '../components/CartePerso.vue'
import FormPerso from '../components/FormPerso.vue'
import { usePersonnageStore } from '../stores/personnage'

export default {
  name: 'PersonnagesView',
  setup() {
    const personnageStore = usePersonnageStore()
    return {
      personnageStore,
    }
  },
  components: {
    CartePerso,
    FormPerso
  },


  data() {
    return {
      
      personnages:[
        {
          pseudo: 'Grégory',
          age: 15,
        },
        {
          pseudo: 'Nicolas',
          age: 23,
        },
        {
          pseudo: 'Norman',
          age: 47,
        },
      ]
    }
  },
  methods: {
    ajoutPerso(personnage) {
      this.personnages.push(personnage)
    }
  },

  computed: {
    personnages() {
      return this.personnageStore.personnages
    }
  }
}

</script>

<template>

  <FormPerso/>
  <div class="cartes">
    <div v-for="personnage in personnages" :key="personnage.pseudo">
      <CartePerso :personnage="personnage"/>
    </div>
  </div>

</template>

<style>
@media (min-width: 1024px) {
  .personnages {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

.cartes {
	margin: 50px;
	display: flex;
	gap: 20px;
	flex-wrap: wrap;
	justify-content: space-around;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background: #42b983;
  width: 20%;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
  color: white;
}
input{
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  background: #ecf0f1;
  color: #42b983;
  font-size: 1rem;
  cursor: pointer;
}
button{
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  background: #3498db;
  color: white;
  font-size: 1rem;
  cursor: pointer;
}

.error {
  color: red;
}
</style>
