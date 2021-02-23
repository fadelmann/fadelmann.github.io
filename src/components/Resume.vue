<template>
  <div class="resume">
    <positions></positions>
    <education></education>
    <skills></skills>
  </div>
</template>

<script>

import Positions from '../components/Positions.vue'
import Education from '../components/Education.vue'
import Skills from '../components/Skills.vue'


export default {
  components: { Positions, Education, Skills },
  name: 'Resume',
  data() {
    return {

    }
  },
  computed: {
    computedPositionHeights() {
      return this.positionHeights;
    }
  },
  created() {
    
  },
  mounted() {

  },
  destroyed() {

  },
  methods: {
   
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.resume {
  width: 100%;
}
</style>
