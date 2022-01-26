<template>
  <div id="app">

    <Header />
    <router-view path="$router.key" />
    <Footer />

  </div>
</template>

<script>
import './syles/global.css'
import Header from './components/header.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>
