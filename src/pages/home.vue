<template>
    <main>
        <div class="text-top">Canal de <b>games</b>!</div>
        <a href="https://www.youtube.com/channel/UCCxnQjot1MyUDP1FFMIbP0g" target="_blank">
            <img alt="Inscreva-se" id="subscribe" src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/subscribe.svg">
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

    @media (min-width: 500px){
        #subscribe {
            width: 380px;
        }
    }
</style>