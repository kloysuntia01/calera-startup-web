<template>
  <header class="global-header max-width-container">
    <nav class="global-nav max-width">
        <div class="global-nav__hamburger-button">
          <img src="/images/hamburger-icon.png" />
        </div>

        <div class="global-nav">
          <img  src="/images/claim-navigator_ico.png" alt="Claim Navigator"/>
        
        </div>

        <div class="global-nav__links">
            <ul>
                <li>
                <router-link to="/home" active-class="router-link-active">Home</router-link>  
              </li>
            
              <li>
                <router-link to="/about" active-class="router-link-active">about us</router-link>
              </li>
              
            </ul>
        </div>
    </nav>

  </header>

  <transition name="slide-fade" mode="out-in">
    <router-view />
  </transition>
  
</template>

<script setup>
</script>

<style>
* {
  box-sizing: border-box;

}
html, body {
  height: 100%;
  margin: 0;
}
.max_width {
  width: 100%;
  max-width: 1024px;
  padding: 1em;
}

.max_width_container {
  display: flex;
  justify-content: center;
}

.global-nav {
  display: grid;
  grid-template-columns: 2em 1fr 2em;
  grid-template-rows: 2em 3em;
  grid-template-areas: "hamburger logo ."
}

.global-nav__hamburger-button {
  grid-area: hamburger;
}

.global-nav__links {
  grid-area: links;
  display: none;
}

.global-nav img {
  height: 100%;
  object-fit: cover;
}

@media (width >= 600px)
{
  .global-nav {
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
    grid-template-columns: min-content 1fr;
    grid-template-areas: "logo links";
    padding: 1em;
  }
  
  .global-nav__links {
    display: block;
  }
  /* turn off hbr-btn */
  .global-nav__hamburger-button {
    display: none;
  }

  .global-nav__logo {
    height: 90px;
    width: 250px;
  }
  

  .global-nav__link ul {
    display: flex;
    justify-content: end;
    gap: 1.5em;
  }

}
</style>

<style scoped>
.router-link-active {
  color: white;
}

/* Fade transition styles */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to /* .fade-leave-active in <=2.1.8 */ {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.5s ease;
}
.slide-fade-leave-active {
  transition: all 0.5s ease;
  position: absolute;
}
.slide-fade-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

/* Dissolve transition styles */
.dissolve-enter-active, .dissolve-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.dissolve-enter-from, .dissolve-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
