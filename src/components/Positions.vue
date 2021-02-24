<template>
  <div class="positions">
    <div class="resume-wrapper">
      <h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M24 22h-24v-15h24v15zm-15-20c-1.104 0-2 .896-2 2v2h2v-1.5c0-.276.224-.5.5-.5h5c.276 0 .5.224.5.5v1.5h2v-2c0-1.104-.896-2-2-2h-6z"
          />
        </svg>
        <span>Work Experience</span>
      </h1>
      <div class="positions-wrapper">
        <div
          class="position-entry shadow"
          v-for="(entry, index) in newPositions"
          :key="entry.id"
          @click="changeExpand(index)"
        >
          <div
            :style="[
              index === computedPositionHeights.length - 1
                ? { height: 0 }
                : { height: computedPositionHeights[index] + 'px' },
            ]"
            class="timeline"
          >
            <div class="timeline-spot">
              <span class="timeline-date">
                {{ `${entry["Finished On"]}` }}
              </span>
            </div>
          </div>
          <div class="entry-content-container">
            <div class="upper-content-wrapper">
              <div class="position-date">
                <p class="date">
                  <span
                    >{{
                      `from ${entry["Started On"]} to ${entry["Finished On"]} `
                    }}
                  </span>
                </p>
                <h4>{{ `${entry["Title"]} at ${entry["Company Name"]}` }}</h4>
              </div>
              <div class="arrow-down">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  :class="{rotate: entry.expanded}"
                >
                  <path
                    d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"
                  />
                </svg>
              </div>
            </div>
            <transition
              name="fade"
              @enter="calculatePositionHeights"
              @after-leave="calculatePositionHeights"
            >
              <div class="more-info" v-if="entry.expanded">
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"
                    />
                  </svg>
                  <span>{{ `${entry.Location}` }}</span>
                </p>
                <p class="description">{{ entry.Description }}</p>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Positions from "../Positions.csv";

export default {
  name: "Resume",
  data() {
    return {
      Positions,
      newPositions: {},
      timelinePosition: 0,
      positionHeights: [],
    };
  },
  computed: {
    computedPositionHeights() {
      return this.positionHeights;
    },
  },
  created() {
    this.newPositions = this.Positions.map(function (el, index) {
      var o = Object.assign({}, el);
      o.id = index;
      o.expanded = false;
      return o;
    });
    this.newPositions[0]["Finished On"] = "Today";
    window.addEventListener("resize", this.resizeHandler);
  },
  mounted() {
    this.calculateTimelinePosition();
    this.calculatePositionHeights();
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeHandler);
  },
  methods: {
    calculateTimelinePosition() {
      this.timelinePosition =
        document.getElementsByClassName("positions-wrapper")[0].offsetWidth / 2;
    },
    calculatePositionHeights() {
      this.positionHeights = [];
      document
        .querySelectorAll(".position-entry")
        .forEach((element) =>
          this.positionHeights.push(
            element.offsetHeight +
              parseInt(getComputedStyle(element).marginBottom, 10)
          )
        );
    },
    resizeHandler() {
      this.calculateTimelinePosition();
      this.calculatePositionHeights();
    },
    changeExpand(index) {
      this.newPositions[index].expanded = !this.newPositions[index].expanded;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.resume {
  width: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
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
  align-items: center;
  position: relative;
  box-sizing: border-box;
  margin-top: 3rem;
  margin-bottom: 100px;
}

.position-entry {
  border-radius: 50px;
  width: 100%;
  min-width: 250px;
  box-sizing: border-box;
  cursor: pointer;
  margin-bottom: 50px;
}

.timeline {
  width: 3px;
  background-color: #475a795d;
  position: absolute;
  border-radius: 50px;
  box-sizing: border-box;
  left: -20px;
}

.timeline-date {
  position: relative;
  right: 50px;
}

.timeline-spot {
  width: 7px;
  height: 7px;
  border-radius: 15px;
  background-color: #475a79;
  position: absolute;
  right: -2px;
}

.entry-content-container {
  padding: 20px;
}

.upper-content-wrapper {
    display: flex;
    justify-content: space-between;
}

.arrow-down {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 3s ease-in-out;
}

.rotate {
    transform: rotate(180deg);
}

.shadow {
  box-shadow: 6px 6px 8px 0 rgba(0, 0, 0, 0.25),
    -4px -4px 6px 0 rgba(255, 255, 255, 0.3);
  opacity: 1;
}

p {
  word-wrap: break-word;
  color: #475a798e;
  margin: 10px 0;
}

svg {
  margin-right: 10px;
  transition: all 300ms ease-in-out;
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

@media (orientation: portrait) {
  .resume-wrapper {
    align-items: flex-end;
  }

  .positions-wrapper {
    width: 80%;
  }
}
</style>
