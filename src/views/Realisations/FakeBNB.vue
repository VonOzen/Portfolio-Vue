<template>
  <section class="wrapper">
    <article>
      <h1>FakeBNB</h1>
      <h2 class="subtitle">AirBNB like website - Projet Symfony 4</h2>
      <div class="content">
        <figure>
          <img src="@/assets/images/FakeBNB/fakebnb_ads.png" alt="Moodinwood screenshot">
          <figcaption>Screenshot homepage version desktop</figcaption>
      </figure>
        <h3>Contexte</h3>
        <p>Ce projet personnel s'inscrit dans le cadre de la formation en ligne "<a href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-UNAWH9NH.pdf">Symfony 4 par la pratique</a>" par le formateur <a href="http://web-develop.me">Lior Chamla</a>.</p>
        <p>Le but de cette formation Udemy était pratiquer les concepts du framework Symfony 4 au travers d'un cas concret celui de créer un site de réservations d'appartements en ligne - à la façon d'AirBNB.</p>
        <p>Ce projet a permis d'approfondir l'architecture MVC de Symfony, Doctrine (DQL, Entity), le Form Builder, les services ou encore la sécurité.</p>
        <p>Côté front-end, afin de gagner du temps et de se concentrer sur le back-end, j'ai utilisé Bootstrap 4 (thème Flatly) permettant d'obtenir un site responsive intégrant divers éléments Bootstrap (pagination, dropdown, burger menu ou carousel). Cela est couplé avec jQuery pour rendre le site plus interactif. Le tout est orchestré, compilé et minifié par Webpack Encore pour les fichiers JS et SCSS.</p>
        <p>Côté back-end, Symfony 4 et MySQL. Utilisation de l'ORM Doctrine (des requêtes DQL) et du Form Builder du framework. Le templating utilise le moteur TWIG.</p>
        <h3><span class=bold>Techno</span>logies</h3>
        <p>HTML 5 | CSS 3 | SCSS | JavaScript (ES6) | jQuery | PHP | Symfony 4 | MySQL | Doctrine | TWIG</p>
      </div>

      <a href="https://github.com/VonOzen/SymBNB" class="btn">Voir le dépôt Github</a>

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
          src: require('../../assets/images/FakeBNB/fakebnb_ads.png')
        },
        {
          src: require('../../assets/images/FakeBNB/fakebnb_registration.png')
        },
        {
          src: require('../../assets/images/FakeBNB/fakebnb_create_ad.png')
        },
        {
          src: require('../../assets/images/FakeBNB/fakebnb_ads.png')
        },
        {
          src: require('../../assets/images/FakeBNB/fakebnb_booking_details_1.jpg')
        },
        {
          src: require('../../assets/images/FakeBNB/fakebnb_admin_dashboard.png')
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
