<template>
  <div class="hello">
   <h1>Welcome to browse Faker API</h1>
   <users-list></users-list>
  </div>
</template>

<script>
import UsersList from './UsersList.vue'
export default {
  name: 'HelloWorld',
  components: {
    UsersList
  }
}
</script>



