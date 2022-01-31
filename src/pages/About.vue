<template>
 <main>
      <section class="container">
          <h1>About</h1>
          <section class="contacts">
              <div class="contact" v-for="(contact,index) in contacts" :key="index">
                  <div class="contact-title">{{ contact.title }}</div>
                  <a :href="contact.link">{{ contact.label }}</a>
              </div>
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
        });
    }
}
</script>

<style scoped>
    main{
        align-items: center;
    }
    .contacts{
        margin-bottom: 40px;
        color: var(--color-text-light);
    }
    .contact-title{
        font-weight: 600;
        font-size: 18px;
    }
    .contact a{
        color: var(--color-text-light);
    }
    .contact{
        margin-bottom: 20px;
    }
</style>