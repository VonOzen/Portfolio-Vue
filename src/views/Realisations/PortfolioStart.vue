<template>
  <section class="wrapper">
      <h1>Mes <span class="bold">réalisations</span></h1>
      <ul class="list-real gallery">
        <li>
          <router-link to="/portfolio/moodinwood" tag="a">
            <img src="@/assets/images/MoodinWood/mood_in_wood_home.jpg" alt="Image desktop MoodinWood"><span class="title">Mood in Wood</span><span class="legend">Créations artisanales en bois</span>
          </router-link>
        </li>
        <li>
          <router-link to="/portfolio/portfolio2018" tag="a">
            <img src="@/assets/images/Portfolio2018/portfolio_home.jpg" alt="Image desktop portfolio 2018"><span class="title">Portfolio 2018</span><span class="legend">Présentation de réalisations</span>
          </router-link>
        </li>
        <li>
          <router-link to="/portfolio/fakebnb" tag="a">
            <img src="@/assets/images/FakeBNB/fakebnb_admin_dashboard.png" alt="Image desktop FakeBNB"><span class="title">FakeBNB</span><span class="legend">Projet Symfony 4</span>
          </router-link>
        </li>
      </ul>
    </section>
</template>

<style lang="scss" scoped>
.list-real {
  display: flex;
  @media screen and (max-width: 767px){
    flex-direction: column;
    justify-content: space-around;

    li {
      margin: 2rem;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1024px){
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;

    li {
      flex-basis: 45%;
    }
  }

  @media screen and (min-width: 1025px){
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;

    li {
      flex-basis: 30%;
    }
  }
}
</style>
