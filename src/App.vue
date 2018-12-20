<template>
  <div id="app">
    <app-header @sidenavToggle="displaySidenav = !displaySidenav" :displaySidenav="displaySidenav"/>
    <app-sidenav
      :show="displaySidenav"
      @close="displaySidenav = false"
    />
    <main>
      <transition name="slide" mode="out-in">
        <router-view/>
      </transition>
    </main>
  </div>
</template>

<script>
import Header from './components/Navigation/Header.vue'
import SideNav from './components/Navigation/SideNav.vue'

export default {
  components: {
    appHeader: Header,
    appSidenav: SideNav
  },
  data () {
    return {
      displaySidenav: false
    }
  }
}
</script>

<style lang="scss">
@import 'src/assets/sass/style.scss';

#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;

  main {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}

.slide-enter-active {
  animation: slide-in 200ms ease-out forwards;
}

.slide-leave-active {
  animation: slide-out 200ms ease-out forwards;
}

@keyframes slide-in {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(30px);
    opacity: 0;
  }
}
</style>
