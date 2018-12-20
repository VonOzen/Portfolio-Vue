<template>
  <section>
    <h1 class="main-title">Simon<span class="bold">Escure</span></h1>
    <h2>developpeur web junior</h2>
    <router-link to="about" tag="a" class="btn">En savoir plus</router-link>
  </section>
</template>

<style lang="scss" scoped>
section {
  border: 2px solid hsla(0, 0%, 92%, 1);
  padding: 7rem;
  margin: 0 auto;

  @media screen and (max-width: 767px) {
    //border: none;
    padding: 4rem 0;
    margin: auto;
  }
}
h2 {
  display: flex;
  align-items: center;
  justify-content: center;
  font: {
    family: 'Raleway', Helvetica, Arial, sans-serif;
    variant: small-caps;
    size: 2.5rem;
  }

  @media screen and (max-width: 767px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 400px) {
    font-size: 1.5rem;
  }

  &::after, &::before {
    content: '';
    height: 2px;
    width: 100px;
    background: hsl(0, 0%, 92%);
    opacity: .5;
    margin: 0 .75rem;
    transform: translateY(4px);

    @media screen and (max-width: 400px) {
      width: 50px;
    }
  }
}

.btn {
  width: fit-content;
  margin-top: 5rem;
  padding: 0 .75rem;
  @media screen and (max-width: 767px) {
    display: none;
  }
}
</style>
