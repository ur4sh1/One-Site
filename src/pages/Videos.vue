<template>
  <main>
      <section class="container">
          <h1>Vídeos</h1>
          <section class="videos">
            <iframe class="ytube"
            src="https://www.youtube.com/embed/cAr00cxkVSc"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>

            <iframe class="ytube"
            src="https://www.youtube.com/embed/81FeMGej1Fs"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>

            <iframe class="ytube"
            src="https://www.youtube.com/embed/QzqltxomtZA"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>

          </section>
      </section>
  </main>
</template>

<script>
export default {
    name: 'Videos'
}
</script>

<style scoped>
    main{
        align-items: center;
    }
    .videos{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-items: center;

    }
    .ytube{
        width: 345px;
        height: 200px;
        display: flex;
        margin: 10px 0px;
        border-radius: 5%;
    }

    @media(min-width: 700px){
        .ytube{
            margin-left: 20px;
        }
        .videos{
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-items: center;
        flex-wrap: wrap;
        }
    }
</style>