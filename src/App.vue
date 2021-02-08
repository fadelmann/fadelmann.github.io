<template>
  <div id="app">
    <div class="sitemap">
      <ul>
        <li 
          @click="scrollToSection(index)" 
          v-for="(section, index) in sections"
         :key="index"
         :class="{active: activeSection == index}"
        > {{ section.name }} </li>
      </ul>
    </div>
    <div class="content-wrapper">
      <splash class="section" :active="activeSection"></splash>
      <projects class="section" :active="activeSection"></projects>
    </div> 
  </div>
</template>

<script>
import Splash from './components/Splash.vue'
import Projects from './components/Projects.vue'

export default {
  name: 'App',
  components: {
    Splash,
    Projects
  },
  data() {
    return {
      sections: [
      { name: 'start' },
      { name: 'projects' },
      { name: 'about' }
      ],
      activeSection: 0,
      inMove: false,
    }
  },
  methods: {
    scrollToSection(id) {
        if (this.inMove) return false;
        this.activeSection = id;
        this.inMove = true;
        document.getElementsByClassName('section')[id].scrollIntoView({
            behavior: 'smooth'
        });
        setTimeout(() => {
            this.inMove = false;
        }, 400);
    },
    handleScroll() {
      document.querySelectorAll(".section").forEach(function(element, index) {
        if (window.scrollY+50 > element.offsetTop) {
          this.activeSection = index;
        }
      }, this);
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');



html, body {
  box-sizing: border-box;
  margin: 0;
  background-color: #e7e0d5;
  color:#475a79;
  font-family: 'Nunito', sans-serif;
}

#app {

}

.sitemap {
  position: fixed;
  width: 300px;
  height: 100%;
  box-shadow: 
  12px 12px 16px 0 rgba(0, 0, 0, 0.25),
  -8px -8px 12px 0 rgba(255, 255, 255, 0.3);
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

ul {
  font-size: 50px;
  list-style-type:none;
  margin-block-end: 0;
  margin-block-start: 0;
  padding-inline-start: 0;
  font-weight: 900;
}

li {
  cursor: pointer;
  color:#475a7960;
  transition: ease-in-out 300ms;
}

li:hover {
  color:#475a79;
}

.content-wrapper {
  margin-left: 300px;
}

.active {
  color:#475a79;
}

</style>
