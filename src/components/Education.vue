import Education from '../Education.csv'

<template>
  <div class="education">
    <h1>
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 12.875v5.068c0 2.754-5.789 4.057-9 4.057-3.052 0-9-1.392-9-4.057v-6.294l9 4.863 9-3.637zm-8.083-10.875l-12.917 5.75 12 6.5 11-4.417v7.167h2v-8.25l-12.083-6.75zm13.083 20h-4c.578-1 1-2.5 1-4h2c0 1.516.391 2.859 1 4z"/></svg>   
     <span>Education</span>         
     </h1>
    <div class="education-wrapper">
        <div 
         class="education-tile shadow"
         v-for="entry in newEducation"
         :key="entry.id"
         >
            <h4> {{ `${entry['Degree Name']}` }} </h4>
            <h5> {{ `${entry['School Name']}` }} </h5>
            <p>{{ `from ${entry['Start Date']} to ${entry['End Date']} `}}</p>

        </div>
    </div>
  </div>
</template>

<script>
import Education from '../Education.csv'

export default {
  name: 'About',
  data() {
    return {
     Education,
     newEducation: {},
    }
  },
  created() {
      this.newEducation = this.Education.map(function(el, index) {
      var o = Object.assign({}, el);
      o.id = index;
      return o
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.education {
 width: 100%;
 display: flex;
 justify-content: center;
 flex-direction: column;
 align-items: center;
}

.education-wrapper {
 width: 100%;
 display: flex;
}

.education-tile {
  width: calc(33% - 50px);
  margin: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 40px;
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

svg {
 fill:#475a79;
margin-right: 10px;
}
</style>



