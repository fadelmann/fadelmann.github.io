<template>
  <div class="skills">

  </div>
</template>

<script>
import Skills from '../Skills.csv'

export default {
  name: 'About',
  data() {
    return {
        Skills,
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.about {
  height: 100vh;
  width: 100%;
}
</style>



