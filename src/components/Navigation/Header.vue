<template>
  <header>
    <div class="wrapper">
      <img src="../../assets/images/logo_outline.png" alt="logo" />
      <nav>
        <router-link to="/" tag="a" active-class="active" exact>Home</router-link>
        <router-link to="/about" tag="a" active-class="active">About</router-link>
        <router-link to="/portfolio" tag="a" active-class="active">Portfolio</router-link>
        <router-link to="/contact" tag="a" active-class="active">Contact</router-link>
      </nav>
        <burger-menu @toggle="$emit('sidenavToggle')" :class="{'is-clicked':displaySidenav}"/>
    </div>
  </header>
</template>

<script>
import Burger from '@/components/Navigation/Burger.vue'

export default {
  props: ['displaySidenav'],
  components: {
    burgerMenu: Burger
  }
}
</script>

<style lang="scss" scoped>
header {
  background-color: hsla(0, 0%, 0%, .5);
  margin-bottom: 2rem;
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem;

    @media screen and (max-width: 1024px) {
        padding: 1rem;
    }
    //border-bottom: 1px solid $light;

    img {
      height: 50px;

      @media screen and (max-width: 767px) {
         height: 30px;
      }
    }

    nav {
      @media screen and (max-width: 767px) {
         display: none;
      }
      align-self: center;

      a {
        font-variant: small-caps;
        font-family: 'Raleway', Arial, Helvetica, sans-serif;
        letter-spacing: .3rem;
        font-weight: bolder;
        font-size: 1.3rem;
        margin: 0 2rem;

        @media screen and (max-width: 1024px) {
          margin: 0 1rem;
          font-size: 1.5rem;
        }

        &.active {
          border-bottom: 1px solid hsl(30, 97%, 71%);
        }
      }
    }
  }
}
</style>
