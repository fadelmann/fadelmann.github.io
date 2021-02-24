<template>
  <div id="app">
    <div class="sitemap shadow">
      <ul>
        <li 
          @click="scrollToSection(index)" 
          v-for="(section, index) in menuEntries"
         :key="index"
         :class="[{active: activeSection == index}, {shadow: portrait }]"
        > {{ section.name }} </li>
      </ul>
    </div>
    <div class="content-wrapper">
      <div class="content-margin">
        <splash class="section" :portrait="portrait" ></splash>
        <goals class="section"></goals>
        <projects class="section"></projects>
        <resume class="section"></resume>
      </div>
    </div> 
  </div>
</template>

<script>
import Splash from './components/Splash.vue'
import Projects from './components/Projects.vue'
import Goals from './components/Goals.vue'
import Resume from './components/Resume.vue'
import smoothscroll from 'smoothscroll-polyfill';



export default {
  name: 'App',
  components: {
    Splash,
    Projects,
    Goals,
    Resume
  },
  data() {
    return {
      menuEntries: [
      { name: 'about' },
      { name: 'goal' },
      { name: 'projects' },
      { name: 'resume' },
      ],
      activeSection: 0,
      inMove: false,
      sections: {},
      portrait: false,
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
    },
    handleResize () {
      this.detectOrientation();
    },
    detectOrientation () {
      if(screen.availHeight > screen.availWidth){
          this.portrait = true;
      } else {
        this.portrait = false;
      }
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize);
    this.detectOrientation();
    smoothscroll.polyfill();
  },
  mounted() {
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
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

.sitemap {
  position: fixed;
  width: 300px;
  height: 100%;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e7e0d5;
  z-index: 100;
}

.shadow {
  box-shadow: 
  12px 12px 16px 0 rgba(0, 0, 0, 0.25),
  -8px -8px 12px 0 rgba(255, 255, 255, 0.3);
}

.section {
  margin-bottom: 10vh;
}

h1, h2, h3, h4, h5  {
  margin: 0;
}

ul {
  font-size: 3.5rem;
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

svg {
  fill: #475a79;
}

.content-wrapper {
  margin-left: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.content-margin {
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.active {
  color:#475a79;
  box-shadow: 
    3px 3px 4px 0 rgba(255, 255, 255, 0.3) inset,
    -2px -2px 3px 0 rgba(0, 0, 0, .25) inset;

}

@media (orientation: portrait) {
  .sitemap {
    width: 100%;
    height: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 0;
    border-radius: 50px 50px 0 0;
  }

  ul {
    font-size: 1rem;
    width: 100%;
    display: flex;
    justify-content: space-around;
  }

  li {
    padding: 1rem;
    border-radius: 50px;
  }

  .content-wrapper {
    margin: auto;
  }
}


</style>
