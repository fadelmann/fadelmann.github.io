<template>
  <div class="sitemap">
    <ul>
      <li>start</li>
      <li>projects</li>
      <li>about</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Sitemap',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.sitemap {
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
}

</style>
