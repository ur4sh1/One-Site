<template>
    <main>
        <div class="text-top">Canal de <b>games</b>!</div>
        <img alt="Ur4sh1GameS" class="ur4logo" src="https://raw.githubusercontent.com/ur4sh1/one-site-resources/main/assets/img/game.png">
        <a href="https://www.youtube.com/channel/UCCxnQjot1MyUDP1FFMIbP0g" target="_blank">
            <img alt="Inscreva-se" id="subscribe" src="https://raw.githubusercontent.com/ur4sh1/one-site-resources/main/assets/img/subscribe.svg">
        </a>
        <div class="text-bottom">Ur4sh1GameS</div>
    </main>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style>
    main {
        background-color: var(--color-background-home);
        justify-content: center;
        align-items: center;
    }
    .text-top {
        color: var(--color-text-light);
        font-size: 20px;
        margin-bottom: 20px;
    }
    .text-bottom {
        color: var(--color-text-light);
        margin-top: 20px;
    }
    #subscribe{
        width: 300px;
    }
    .ur4logo{
        width: 100px;
        height: 100px;
        display: flex;
        border-radius: 50%;
        margin-bottom: 20px;
    }

    @media (min-width: 500px){
        #subscribe {
            width: 380px;
        }
        .ur4logo{
            border-radius: 20%;
            width: 100px;
            height: 120px;
        }
    }
</style>