<template>
  <div>
      <h1>List of Users</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key='user.name'>
            <td>{{user.name}}</td>
            <td>{{user.city}}</td>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
import usersListApi from '../api/usersListApi.js';

export default {
  name: 'users-list',
  data() {
    return {
      users: []
    }
  },
  created() {
    usersListApi.get('/d4867d8b-b5d5-4a48-a4ab-79131b5809b8')
    .then(res => {
      //console.log(res.data);
      this.users = res.data;
    })
   
  }
}
</script>

<style>
td {
  padding: 8px;
}
</style>