<template>
  <section class="wrapper">
    <article>
      <h1>Portfolio 2018</h1>
      <h2 class="subtitle">Projet personnel de portfolio Vue.js</h2>
      <div class="content">
        <figure>
          <img src="@/assets/images/Portfolio2018/portfolio_home.jpg" alt="Moodinwood screenshot">
          <figcaption>Screenshot homepage version desktop</figcaption>
      </figure>
        <h3>Contexte</h3>
        <p>Ce portofolio a pour but premier de centraliser mes réalisations - passées et futures - ainsi que mon profil académique et professionnel. Il est une version remanié de mon premier projet qui se voulait être un site statique tout ce qu'il y a de plus basique.</p>
        <p>L'approche adoptée pour ce relooking est celle de la Single Page Application permise par l'utilisation de Vue.js. Ceci permet de meilleures performances du fait de la réactualisation partielle du DOM mais aussi une expérience utilisateur accrue dûe à une fluidité améliorée. Je souhaitais que ce projet soit évolutif et soit mis à jour avec les technologies auxquelles je me forme.</p>
        <p>Vue.js, et plus particulièrement, vue-router permet aussi une réécriture URL plus esthétique et "réaliste" et des transitions entre composants sans trop influencé le SEO.</p>
        <p>Le choix du préprocesseur SASS (Syntactically Awesome Stylesheets) et de la syntaxe SCSS a permis une nouvelle façon d'organiser les feuilles de style ainsi qu'une nouvelle approche du CSS via l'utilisation des variables et des mixins.</p>
        <h3><span class=bold>Techno</span>logies</h3>
        <p>HTML 5 | SCSS | JavaScript (ES6) | Vue.js | Vuetify | Vue Router | Vue CLI | ESLint</p>
      </div>
      <a href="/" class="btn">Voir en ligne</a>
      <v-carousel>
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>
    </article>
    <router-link to="/portfolio" tag="a" class="btn">Retour</router-link>
  </section>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          src: require('../../assets/images/Portfolio2018/portfolio_home.jpg')
        },
        {
          src: require('../../assets/images/Portfolio2018/portfolio_miw.jpg')
        },
        {
          src: require('../../assets/images/Portfolio2018/portfolio_contact.jpg')
        },
        {
          src: require('../../assets/images/Portfolio2018/portfolio_about.jpg')
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  padding: 2rem;
  background-color: hsla(0, 0%, 0%, .5);

  @media screen and (max-width: 767px) {
    padding: 2rem 0;
  }
}
</style>
