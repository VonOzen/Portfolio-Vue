<template>
<div class="sidenav-container">
  <div
    v-if="show"
    class="sidenav-backdrop"
    @click="$emit('close')"></div>
  <transition name="slide-side">
    <div
      v-if="show"
      class="sidenav">
      <ul
        class="nav-list"
        @click="$emit('close')">
        <li class="nav-item" tag="a"><router-link to="/">Home</router-link></li>
        <li class="nav-item" tag="a"><router-link to="/about">About</router-link></li>
        <li class="nav-item" tag="a"><router-link to="/portfolio">Portfolio</router-link></li>
        <li class="nav-item" tag="a"><router-link to="/contact">Contact</router-link></li>
      </ul>
      <ul class="list-icons">
        <li><a href="https://www.linkedin.com/in/simon-escure-4714a4161/"><i class="fab fa-linkedin"></i></a></li>
        <li><a href="https://codepen.io/VonOzen/"><i class="fab fa-codepen"></i></a></li>
        <li><a href="https://github.com/VonOzen"><i class="fab fa-github"></i></a></li>
      </ul>
    </div>
  </transition>
</div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>

.sidenav-container {
  height: 100%;
  width: 100%;
  //position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  @media screen and (min-width: 767px) {
    display: none;
  }
}

.sidenav-backdrop {
  width: 100%;
  height: 100%;
  background-color: hsla(0, 0%, 0%, 0.6);
  z-index: 4;
  position: fixed;
  top: 0;
  left: 0;
}

.sidenav {
  height: 100vh;
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color:rgb(235, 235, 235);
  z-index: 5;
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  padding: 30px;
}

.slide-side-enter-active,
.slide-side-leave-active {
  transition: all 0.3s ease-out;
}
.slide-side-enter,
.slide-side-leave-to {
  transform: translateX(-100%);
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1 1 auto;
}

.nav-item {
  margin: 1.5rem 0;
}

.nav-item a {
  text-decoration: none;
  color: hsl(246, 34%, 12%);
  font-size: 1.5rem;
  letter-spacing: .4rem;
  font-variant: small-caps;
  transition-duration: 200ms;
  font-weight: bolder;
  font-family: 'Raleway', Arial, Helvetica, sans-serif;

  @media screen and (max-width: 400px) {
    letter-spacing: .5rem;
    font-size: 1.2rem;
  }
}

.nav-item a:hover,
.nav-item a:active {
  color: hsl(197, 99%, 32%);
}

.nav-item a.router-link-exact-active {
  color: hsl(30, 97%, 71%);
  border-bottom: 1px solid hsl(30, 97%, 71%);
}

.list-icons {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  li {
    margin: .75rem;
  }

  &:hover {
    i {
      opacity: .5;
    }
  }

  i {
    font-size: 2.5rem;
    color: hsl(197, 99%, 32%);
    transition: all 300ms ease;

    &:hover {
      opacity: 1;
    }
  }
}
</style>
