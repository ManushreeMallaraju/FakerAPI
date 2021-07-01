<template>
  <div>
    <h1>List of Todo's</h1>
    <h2>pending</h2>
    <h1>
      Rendering addresses: 
    </h1>
  </div>
</template>

<script>
import fakerApi4000 from '../api/fakerApi4000.js';
import axios from 'axios';

export default {
  name: 'Todos',
  data: () => ({
    setAddress : []
  }),

  methods: {
    async fetchAddress() {
      console.log('In fetch address');
      const res = await axios.get('http://localhost:4000/addresses');
      console.log(res.data);  

      //this.setAddress.push(res.data);
    },
    async fetchEnergyUsageFromUbicquia() {
       console.log('Fecthing from Ubicquia api');
       const res = await fakerApi4000.get('https://api.ubicquia.com/api/energyusage');
       console.log(res.data);
    }
  },

  created() {
    this.fetchAddress();
    this.fetchEnergyUsageFromUbicquia();
  }
}
</script>

<style>

</style>