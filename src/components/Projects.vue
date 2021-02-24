<template>
  <div class="projects">
    <div class="projects-container">
        <div 
         v-for="project in projects"
         :key="project.id"
         class="tile"
        >
        <div class="tile-wrapper">
            <div class="image-container">
                <img :src="project.image" alt="">
            </div>
            <h2>{{ project.title }}</h2>
            <h4> {{project.subtitle }}</h4>
            <div v-for="(language, index) in project.languages" :key="index">
              <h5>{{language }}</h5>
            </div>
            <div class="project-btn">
              more
            </div>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
import projects from '../projects.js'

export default {
  name: 'Projects',
  data() {
    return {
        projects: projects.projects,
        tiles: {}
        }
    },
    props: {
    },
    mounted() {    
    this.tiles = document.querySelectorAll('.tile');
    const config = {
      rootMargin: '-150px',
    }
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if(entry.intersectionRatio > 0) {
            entry.target.classList.add('shadow')
          }
        });
      }, config);

      this.tiles.forEach(tile => {
        observer.observe(tile);
    });
    },
    computed: {
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.projects {
    width: 100%;
    display: flex;
    justify-content: center;
}

.projects-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.tile {
  width: calc(33% - 50px);
  margin: 20px;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  transition: all 0.5s ease-in-out;
  opacity: 0;
}

.shadow {
  box-shadow: 
  12px 12px 16px 0 rgba(0, 0, 0, 0.25),
  -8px -8px 12px 0 rgba(255, 255, 255, 0.3);
  opacity: 1;
}

.tile img {
    width: 100%;
    border-radius: 50px;
}

.image-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.tile-wrapper {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    height: 90%;
    padding: 20px;
}

.project-btn {
  background: #475a79;
  color: #e7e0d5;
  border-radius: 10px;
  padding: 5px;
  align-self: flex-end;
  cursor: pointer;
}

@media (orientation: portrait) {
  .projects-container {
    flex-direction: column;
  }

  .tile {
    width: auto;
  }
}

</style>
