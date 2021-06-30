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
import axios from 'axios';

export default {
  name: 'Todos',
  data: () => ({
    setAddress : []
  }),

  methods: {
    async fetchAddress() {
      console.log('In fetch address');
      const res = await axios.get('http://localhost:4001/addresses');
      console.log(res.data);  
      //this.setAddress.push(res.data);
    }
  },

  created() {
    this.fetchAddress();
  }
}
</script>

<style>

</style>