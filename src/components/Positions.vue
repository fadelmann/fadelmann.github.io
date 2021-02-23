<template>
  <div class="positions">
    <div class="resume-wrapper">

      <h1>Positions</h1>
      <div class="positions-wrapper">
        <div class="position-entry shadow" v-for="(entry, index) in newPositions" :key="entry.id" @click="changeExpand(index)">
          <div 
            :style="[index === computedPositionHeights.length-1 ? {height: 0} : {height: computedPositionHeights[index] + 'px' }, { left: timelinePosition + 'px'}]"
            class="timeline"
            >
            <div class="timeline-spot">
              <span class="timeline-date"> {{ `${entry['Finished On']}` }} </span>
            </div>
          </div>
            <div class="entry-content-container" >
              <p class="date"> 
                <span>{{ `from ${entry['Started On']} to ${entry['Finished On']} `}} </span>
              </p>
              <h4>{{ `${entry['Title']} at ${entry['Company Name']}` }}</h4>
              <transition name="fade" @enter="calculatePositionHeights" @after-leave="calculatePositionHeights">
                <div class="more-info" v-if="entry.expanded">
                  <p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>
                    <span>{{ `${entry.Location}` }}</span>
                  </p>
                  <p class="description"> {{ entry.Description }}</p>
                </div>
              </transition>
            </div>
        </div>
      </div>
      </div>
  </div>
</template>

<script>
import Positions from '../Positions.csv'


export default {
  name: 'Resume',
  data() {
    return {
      Positions,
      newPositions:{},
      timelinePosition: 0,
      positionHeights: [],
    }
  },
  computed: {
    computedPositionHeights() {
      return this.positionHeights;
    }
  },
  created() {
    this.newPositions = this.Positions.map(function(el, index) {
      var o = Object.assign({}, el);
      o.id = index;
      o.expanded = false;
      return o
    });
    window.addEventListener("resize", this.resizeHandler);
  },
  mounted() {
    this.calculateTimelinePosition()
    this.calculatePositionHeights();
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeHandler);
  },
  methods: {
    calculateTimelinePosition() {
      this.timelinePosition = document.getElementsByClassName('positions-wrapper')[0].offsetWidth/2;
    },
    calculatePositionHeights() {
      this.positionHeights = [];
      document.querySelectorAll('.position-entry').forEach(element => this.positionHeights.push(element.offsetHeight));
    },
    resizeHandler() {
      this.calculateTimelinePosition();
      this.calculatePositionHeights();
    },
    changeExpand(index) {
      this.newPositions[index].expanded = !this.newPositions[index].expanded;
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.resume {
  width: 100%;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.resume-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.positions-wrapper {
  display: flex;
  flex-direction: column;
  width: 60%;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  box-sizing: border-box;
  margin-top: 3rem;
  margin-bottom: 100px;
}

.position-entry {
  border-radius: 50px;
  width: 30%;
  min-width: 250px;
  box-sizing: border-box;
  cursor: pointer;
  transition: ease-in all 1s;
}

.position-entry:nth-child(even) {
  align-self: flex-end;
}

.timeline {
  width: 3px;
  background-color:#475a7971;
  position: absolute;
  border-radius: 50px;
  box-sizing: border-box;
}

.timeline-date {
  position: relative;
  right: 50px;
}

.position-entry:nth-child(odd) span {
  left: 30px;
}

.timeline-spot {
  width: 7px;
  height:7px;
  border-radius: 15px;
  background-color:#475a79;
  position: absolute;
  right: -2px;
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

h4 {
  margin: 0;
}

.description {
  margin-top: 20px;
}
</style>
