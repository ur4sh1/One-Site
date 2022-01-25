<template>
  <div id="app">

    <Header />
    <Home />
    <Footer />

  </div>
</template>

<script>
import './syles/global.css'
import Header from './components/header.vue'
import Home from './pages/home.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    Header,
    Home,
    Footer
  }
}
</script>
