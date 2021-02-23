import Education from '../Education.csv'

<template>
  <div class="education">

  </div>
</template>

<script>
import Education from '../Education.csv'

export default {
  name: 'About',
  data() {
    return {
        Education,
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



