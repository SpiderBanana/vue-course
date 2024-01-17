<script>
import { useCompteurStore } from '../stores/compteur'

export default {
  name: 'CompteurView',
  setup() {
    const compteurStore = useCompteurStore()
    return {
      compteurStore,
    }
  },
  methods: {
    increment() {
      this.compteurStore.increment()
    }
  },
}
</script>

<template>
    <div>
        <span> J'ai cliqué {{ compteurStore.compteur }} fois !</span>
        <button @click="increment()">Clique</button>
    </div>
</template>

<style scoped>
    div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    background: #2c3e50;
    width: 20%;
    margin: 0 auto;
    padding: 20px;
    border-radius: 10px;
    color: white;
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
</style>