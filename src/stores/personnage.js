import { defineStore } from 'pinia';

export const usePersonnageStore = defineStore('perssonnage',{
    state: () => ({
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
          ],
    }),
    actions:{
        ajoutPersonnage(personnage){
            this.personnages.push(personnage);
        }
    }
})