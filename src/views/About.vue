<template>
  <section class="wrapper">
    <h1>À <span class="bold">propos</span></h1>
    <div id="card" :class="{'flip': isFlipped}">
      <div id="front">
        <div id="header-pic"></div>
        <div id="avatar"></div>
        <div id="infos">
          <h2>Simon Escure</h2>
          <h3>Développeur web junior</h3>
        </div>
      <div id="networks">
          <a href="CV_Escure_Simon_Dev_web.pdf" target="_blank">
          <i class="far fa-file-pdf"></i>
          </a>
          <a href="https://www.linkedin.com/in/simon-escure-4714a4161/" target="_blank">
          <i class="fab fa-linkedin"></i>
          </a>
          <a href="https://www.codepen.io/VonOzen">
          <i class="fab fa-codepen"></i>
          </a>
          <a href="https://github.com/VonOzen">
          <i class="fab fa-github"></i>
          </a>
          <a href="javascript:void" class="more-info" @click.prevent="isFlipped = !isFlipped">
            <i class="far fa-arrow-alt-circle-right"></i>
          </a>
      </div>
      </div>
      <div id="back">
        <div class="back-info">
          <p>
            <span class="bold">Hey</span> ! Je m'appelle Simon Escure, j'ai 26 ans. Issu d'un cursus universitaire en langue japonaise - jusqu'en deuxième année de doctorat - j'ai mis de côté le Japon pour me tourner vers un autre domaine qui me passionne, le web. Avec l'ambition de trouver un métier qui met à profit l'imagination, l'autonomie et une veille technologique permanente, j'ai terminé et <a href="https://diplome.3wa.fr/escure-simon" class="emphasis">validé</a> la formation "Intégration et développement d'applications web" proposée par la 3W Academy Lyon avec la certitude de vouloir en faire mon métier.
          </p>
          <p>
            Il me tient à coeur d'approfondir mes connaissances acquises durant ma formation tout en abordant - en autodidacte - de nouvelles technologies (<a href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-8GNWD9NX.pdf" class="emphasis">VueJS</a>, <a href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-FDSZIZEE.pdf" class="emphasis">NuxtJS</a>, <a href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-UNAWH9NH.pdf" class="emphasis">Symfony 4</a> etc.). Je suis actuellement à l'écoute de toutes opportunités professionnelles dans ce domaine et vous invite à consulter mon CV, ci-dessous, pour plus de détails sur mon parcours académique et professionel.
          </p>
          <div id="networks">
              <a href="CV_Escure_Simon_Dev_Web.pdf" target="_blank">
              <i class="far fa-file-pdf"></i>
              </a>
              <a href="https://www.linkedin.com/in/simon-escure-4714a4161/" target="_blank">
              <i class="fab fa-linkedin"></i>
              </a>
              <a href="https://www.codepen.io/VonOzen">
              <i class="fab fa-codepen"></i>
              </a>
              <a href="https://github.com/VonOzen">
              <i class="fab fa-github"></i>
              </a>
              <a href="javascript:void" class="more-info" @click.prevent="isFlipped = !isFlipped">
                <i class="far fa-arrow-alt-circle-right"></i>
              </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      isFlipped: false
    }
  }
}
</script>

<style lang="scss" scoped>
section * {
  box-sizing: border-box;
  transition: transform .5s ease-in-out;
}
#card {
  height:500px;
  width:400px;
  margin:0 auto;
  position:relative;
  perspective:1000px;

  @media screen and (max-width: 767px){
    height: 600px;
    width: 96%;
    margin-bottom: 2rem;
  }
  #front,#back {
    border-radius:10px;
    border: 3px solid hsla(0, 0%, 92%, .7);
    height:100%;
    width:100%;
    position:absolute;
    left:0;
    top:0;
    transform-style:preserve-3d;
    backface-visibility:hidden;
    box-shadow:0 0 10px rgba(0,0,0,.2);

    #networks {
      border-top: 1px solid hsla(0, 0%, 92%, .3);
      margin-top: 10px;

      a {
        display:inline-block;
        color:hsl(30, 97%, 71%);
        text-decoration:none;
        padding:7px;
        line-height:18px;
        border-radius:5px;
        &:hover {
          color:white;
          background:hsla(0, 0%, 100%, 0.3);
          transition:.3s ease-in-out;
        }
        &:last-of-type {
          animation: blink 3s linear 1s infinite alternate;
        }
      }
    }
  }

  #front {
    transform:rotateY(0deg);
    overflow:hidden;
    z-index:1;
    h2 {
      font-family: 'Raleway', Arial, Helvetica, sans-serif;
      font-size: 2rem;
      color: hsl(246, 34%, 12%);
    }
    #header-pic {
      height:40%;
      width:100%;
      background-image:url('../assets/images/card-header.jpg');
      background-size:cover;
    }
    #avatar {
      width:140px;
      height:140px;
      top:40%;
      left:50%;
      margin:-80px 0 0 -75px;
      border-radius:100%;
      box-shadow:0 0 0 3px rgba(255,255,255,.8),0 4px 5px rgba(107,5,0,.6),0 0 50px 50px rgba(255,255,255,.25);
      background-image:url('../assets/images/profil.jpg');
      background-size:contain;
      position:absolute;
      z-index:1;
    }
    #infos {
      height:60%;
      width:100%;
      position:absolute;
      left:0;
      bottom:0;
      background:hsla(183, 97%, 35%, .7);
      padding:100px 50px;
    }
    #networks {
      height:50px;
      width:100%;
      position:absolute;
      bottom:0;
      left:0;
      line-height: 50px;
      font-size:25px;
      text-align:center;
    }
  }

  #back {
    transform:rotateY(180deg);
    background-color:hsla(246, 34%, 12%, .7);
    display:table;
    z-index:2;
    font-size:15px;
    line-height:20px;
    padding:20px;
    @media screen and (max-width: 767px){
      font-size: 14px;
    }
    .back-info {
      text-align:justify;
      text-justify: inter-word;
    }
    #networks {
      height:50px;
      width:100%;
      position:absolute;
      bottom:0;
      left:0;
      line-height:50px;
      font-size:25px;
      text-align:center;
    }
  }
  &.flip #front {
    transform: rotateY(180deg);
  }
  &.flip #back {
    transform: rotateY(360deg);
  }
}

@keyframes blink {
  0% {
    color: hsl(30, 97%, 71%);
  }

  50% {
    color: hsla(0, 0%, 92%, 1);
  }

  100% {
    color: hsl(30, 97%, 71%);
  }
}
</style>
