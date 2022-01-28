<template>
 <main>
      <section class="container">
          <h1>About</h1>
          <section>
              <a v-for="(contact,index) in contacts" :key="index">

              </a>
          </section>
      </section>
  </main>
</template>

<script>
import api from '@/services/api.js'
export default {
    name: 'About',
    data(){
        return {
            contacts: [],
        }
    },
    mounted(){
        api.get('/contacts.json').then(response =>{
            this.contacts = response.data
            console.log(this.contacts)
        });
    }
}
</script>

<style>

</style>