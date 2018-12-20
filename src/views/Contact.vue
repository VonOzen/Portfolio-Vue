<template>
  <section class="wrapper">
    <h1>Contact</h1>
    <div class="contact">
      <ul>
        <li><i class="fa fa-envelope-open"></i><br /><a href="mailto:hello@simonescure.fr">hello@simonescure.fr</a></li>
        <li><i class="fas fa-mobile-alt"></i><br /><a href="tel:+33611712298"><span class="bold">06 11 71 22 98</span></a></li>
        <li><i class="fas fa-map-marker-alt"></i><br /><span class="bold">Bussy Saint Georges</span><br />Seine et Marne, France</li>
      </ul>
    </div>
    <div class="social-networks">
      <h3>Sur les <span class="bold">internets</span></h3>
      <ul class="list-hover">
        <li><a href="https://www.linkedin.com/in/simon-escure-4714a4161/"><i class="fab fa-linkedin"></i><span class="bold">LinkedIn</span></a></li>
        <li><a href="https://github.com/VonOzen"><i class="fab fa-github"></i><span class="bold">Github</span></a></li>
        <li><a href="https://codepen.io/VonOzen/"><i class="fab fa-codepen"></i><span class="bold">Codepen</span></a></li>
      </ul>
    </div>
    <app-map />
  </section>
</template>

<script>
import Map from '@/components/Contact/Map.vue'
export default {
  components: {
    appMap: Map
  }
}
</script>

<style lang="scss" scoped>
section {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    justify-content: space-around;
  }

  h1 {
    flex-basis: 100%;
  }

  div {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
    flex-basis: 46%;
    padding: 4%;
    background-color: hsla(0, 0%, 0%, .7);
    border-radius: 10px;
    box-shadow: 0px 0px 50px hsla(0, 0%, 92%, .7);

    @media screen and (max-width: 900px) {
      flex-basis: 100%;
      margin: 2% 1%;
    }

    h3 {
      font-family: 'Raleway', Arial, Helvetica, sans-serif;
      margin-bottom: 2rem;
      padding-bottom: .5rem;
      flex-basis: 100%;

      &:first-of-type {
        color: hsl(30, 97%, 71%);
        font-weight: 300;
        border-bottom: 1px solid hsl(30, 97%, 71%);
      }
    }
  }
}

ul {
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  li {
    margin: 1rem;
  }

  &.list-hover {
    flex-direction: row;
    justify-content: space-between;
    li {
      margin: 0 1rem;
    }
  }
}

.contact {
  ul {
    li {
     font-size: 1.5rem;
     i {
       font-size: 2rem;
       color: hsl(183, 97%, 35%);
     }
    }
  }
}
</style>
