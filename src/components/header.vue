<template>
  <header>
      <nav class="container">
          <a href="/"><img alt="ONE SITE" id="logo" src="https://i1.wp.com/byteslivres.com.br/blog/wp-content/uploads/2018/04/Terminal-icon.png?ssl=1"></a>
          <img alt="ONE SITE" v-on:click="openMenu" id="menu-button" src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/menu.svg">

          <div v-on:click="closeMenu" id="menu-overlay" v-if="menuActive"></div>
          <div id="menu-itens" :class="{active:menuActive}">
              <img alt="ONE SITE" id="menu-logo" src="https://i1.wp.com/byteslivres.com.br/blog/wp-content/uploads/2018/04/Terminal-icon.png?ssl=1">
              <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/about">About</a></li>
              </ul>
          </div>
      </nav>
  </header>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            menuActive: false
        }
    },
    methods: {
        openMenu: function(){
            this.menuActive = true
        },
        closeMenu: function(){
            this.menuActive = false
        }
    }
}
</script>

<style scoped>
    header{
        background-color: var(--color-background-nav);
        height: 60px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #logo{
        width: 60px;
    }
    #menu-button{
        width: 30px;
    }
    nav{
        display: flex;
        justify-content: space-between;
        height: 60px;
        align-items: center;
    }
    #menu-overlay{
        position: fixed;
        top: 0;
        left: 0;
        width: 40%;
        height: 100vh;
        background-color: #000000;
        opacity: 0.8;
    }
    #menu-logo{
        width: 60px;
        margin-top: 30px;
        margin-bottom: 10px;
    }
    #menu-itens{
        position: fixed;
        top: 0;
        right: 0;
        background-color: var(--color-background-nav);
        width: 60%;
        height: 100vh;
        display: none;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
    #menu-itens.active{
        display: flex;
    }
    ul{
        list-style: none;
        text-align: center;
        height: 60px;
        align-items: center;
    }
    ul li{
        margin: 10px 0;
    }
    ul li a{
        color: var(--color-text-light);
    }

    @media(min-width: 500px){
        #menu-button,
        #menu-logo,
        #menu-overlay{
            display: none;
        }

        #menu-itens{
            display: flex;
            position: static;
            height: 60px;
            width: auto;
        }

        ul{
            display: flex;
        }
        ul li{
            margin: 0;
            margin-left: 20px;
        }
    }
</style>