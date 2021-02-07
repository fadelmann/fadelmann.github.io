<template>
  <div id="app">
    <sitemap></sitemap>
    <div class="content-wrapper">
      <splash>
      
      </splash>
    </div>
  </div>
</template>

<script>
import Splash from './components/Splash.vue'
import Sitemap from './components/Sitemap.vue'

export default {
  name: 'App',
  components: {
    Splash,
    Sitemap
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
}

.content-wrapper {
  margin-left: 300px;
}

</style>
