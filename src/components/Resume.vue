<template>
  <div class="resume">
    <div class="resume-wrapper">
      <h1>Education</h1>
      <div class="positions-wrapper">
          <div class="position-entry shadow" v-for="(entry, index) in newEducation" :key="entry.id">
          <div 
            :style="{ left: timelinePosition + 'px', height: positionHeight[index] + 'px' }"
            class="timeline"
            >
            <div 
              class="timeline-spot"
              :stlye="{ left: timelinePosition + 'px'}"
              >
              
            </div>
          </div>
            <div class="entry-content-container">
              <p class="date"> 
                <span>{{ `from ${entry['Start Date']} to ${entry['End Date']} ` }}</span>
              </p>
              <h2>{{ `${entry['Degree Name']} at ${entry['School Name']}` }}</h2>
            </div>
        </div>
      </div>
      <div v-for="entry in newEducation" :key="entry.id">
        
        
      </div>

      <h1>Positions</h1>
      <div class="positions-wrapper">
        <div class="position-entry shadow" v-for="(entry, index) in newPositions" :key="entry.id">
          <div 
            :style="{ left: timelinePosition + 'px', height: positionHeight[index] + 'px' }"
            class="timeline"
            >
            <div 
              class="timeline-spot"
              :stlye="{ left: timelinePosition + 'px'}"
              >
              
            </div>
          </div>
            <div class="entry-content-container">
              <p class="date"> 
                <span>{{ `from ${entry['Started On']} to ${entry['Finished On']} `}} </span>
              </p>
              <h3>{{ `${entry['Title']} at ${entry['Company Name']}` }}</h3>
              <p>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>
                <span>{{ `${entry.Location}` }}</span>
              </p>
              <p class="description"> {{ entry.Description }}</p>
            </div>
        </div>
      </div>
      <h1>Skills</h1>
      <div v-for="entry in newSkills" :key="entry.id">
        <p>{{ entry.Name }}</p>
      </div>
      </div>
  </div>
</template>

<script>
import Education from '../Education.csv'
import Positions from '../Positions.csv'
import Skills from '../Skills.csv'

export default {
  name: 'Resume',
  data() {
    return {
      Education,
      Positions,
      Skills,
      timelinePosition: 0,
      positionHeight: [],
    }
  },
  methods: {
    positionTimeline() {
      this.timelinePosition = document.getElementsByClassName('positions-wrapper')[0].offsetWidth/2;
      document.querySelectorAll('.position-entry').forEach(element => this.positionHeight.push(element.offsetHeight));
    },
    myEventHandler() {
      this.positionTimeline();
    }
  },
  created() {
    this.newEducation = this.Education.map(function(el, index) {
      var o = Object.assign({}, el);
      o.id = index;
      return o
    });
    this.newPositions = this.Positions.map(function(el, index) {
      var o = Object.assign({}, el);
      o.id = 100+index;
      return o
    });
    this.newSkills = this.Skills.map(function(el, index) {
      var o = Object.assign({}, el);
      o.id = 200+index;
      return o
    });
    window.addEventListener("resize", this.myEventHandler);
  },
  mounted() {
    this.positionTimeline();
  },
  destroyed() {
    window.removeEventListener("resize", this.myEventHandler);
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.resume {
  width: 100%;
}

.resume-wrapper {
}
.positions-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  box-sizing: border-box;
  margin-top: 100px;
  margin-bottom: 100px;
}

.position-entry {
  border-radius: 50px;
  width: 45%;
  box-sizing: border-box;
  margin-top: -70px;
}

.position-entry:nth-child(even) {
  align-self: flex-end;
}

.timeline {
  width: 3px;
  background-color:#475a79;
  position: absolute;
  border-radius: 50px;
  box-sizing: border-box;
}

.timeline:nth-child(even) {
}

.timeline-spot {
  width: 20px;
  height: 20px;
  -moz-border-radius: 15px;
  -webkit-border-radius: 15px;
  border-radius: 15px;
  background-color:#475a79;
  position: absolute;
  top: 50%;
  right: -8.5px;
}

.entry-content-container {
  padding: 30px;
}

.shadow {
  box-shadow: 
  12px 12px 16px 0 rgba(0, 0, 0, 0.25),
  -8px -8px 12px 0 rgba(255, 255, 255, 0.3);
  opacity: 1;
}

p{
  word-wrap: break-word;
  color:#475a798e;
  margin: 10px 0;
}

svg {
  fill: #475a79;
  margin-right: 10px;
}

.date {
  font-size: 12px;
  margin: 0;
}

h1 {
  margin: 0;
}

h3 {
  margin-block-start: 0.2em;
}

.description {
  margin-top: 20px;
}
</style>
