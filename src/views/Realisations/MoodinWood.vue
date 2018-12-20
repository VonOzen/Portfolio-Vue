<template>
  <section class="wrapper">
    <article>
      <h1>MoodinWood</h1>
      <h2 class="subtitle">Site vitrine pour Mood in Wood - Créations artisanales en bois</h2>
      <div class="content">
        <figure>
          <img src="@/assets/images/MoodinWood/menu_hover.jpg" alt="Moodinwood screenshot">
          <figcaption>Screenshot homepage version desktop</figcaption>
      </figure>
        <h3>Contexte</h3>
        <p>Ce projet s'inscrit dans la suite ainsi que dans la validation de la formation "Intégrateur - Développeur d'applications web" de la 3W Academy (RNCP III). Il a pour vocation de présenter de manière simple et épurée les diverses créations de Mood in Wood, des créations originales dans un esprit local et éthique.</p>
        <p>Il était question de créer de toutes pièces un site utilisant obligatoirement les cinq langages majeurs du développement web : HTML, CSS, JS, PHP et MySQL. Ayant eu une grande liberté concernant l'identité visuelle de la marque, j'ai du concevoir un design "rustique mais distingué".</p>
        <p>Côté front-end, le site intègre un slider en JS natif (programmation orientée objet) prenant dix images aléatoires contenues dans la base de données MySQL créée pour le projet. L'intégration responsive (mobile, tablette et desktop) permet des animations CSS et une application de Flexbox.</p>
        <p>Côté back-end, j'ai opté pour le framework light Silex (reprenant quelques fonctionnalités de Symfony avec une architecture MVC) lié à une database MySQL.</p>
        <h3><span class=bold>Techno</span>logies</h3>
        <p>HTML 5 | CSS 3 | SCSS | JavaScript (ES6) | jQuery | PHP | Silex | MySQL</p>
      </div>

      <a href="http://lab.simonescure.fr/MoodinWood" class="btn">Voir en ligne</a>

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
          src: require('../../assets/images/MoodinWood/desktopmiw.png')
        },
        {
          src: require('../../assets/images/MoodinWood/menu_hover.jpg')
        },
        {
          src: require('../../assets/images/MoodinWood/mockup_MiW.jpg')
        },
        {
          src: require('../../assets/images/MoodinWood/contact.jpg')
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
