<template>
  <div class="splash">
    <div class="image-copy-container" :class="{shadow:  splash && !portrait}">
      <div class="splash-image">
        <img src="../assets/potrait.png" alt="Tobias Czempiel">
      </div>
        <div class="text">
          <h1>Tobias Czempiel</h1>
          <p>I'm a German based computer scientist, PHD student. I'm working on extracting surgical workflow information from untrimmed endoscopic videos with temporal deep learning models such as RNNs or TCNs. Scroll to learn more aboute me.</p>
          <div class="social-container">
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/tobias-moritz-czempiel/"> 
              <span class="social">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>            </span>
              <span>
                Linkedin
              </span>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/tobiascz" >
              <span >
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>            </span>
              <span>
                Github
              </span>
            </a>
          </div>       
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Splash',
  data() {
    return {
      splash: false,
    }
  },
  props: {
    portrait: {
      type: Boolean,
    }
  },
  mounted() {
    console.log(this.portrait);
    setTimeout(this.splashTrue, 300);
  },
  methods: {
    splashTrue() {
      this.splash = true;
    }
  },
  computed: {
  },
}
</script>

<style scoped>
.splash {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;
}

.shadow {
  box-shadow: 
  12px 12px 16px 0 rgba(0, 0, 0, 0.25),
  -8px -8px 12px 0 rgba(255, 255, 255, 0.3);
}

.image-copy-container {
  display: flex;
  padding: 50px;
  border-radius: 50px;
  transition: box-shadow 0.5s ease-in-out;
  max-width: 980px;
  margin-top: 3rem;
}

.splash-image {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-copy-container .text {
  flex-grow: 5;
}

img {
  box-shadow: 
  12px 12px 16px 0 rgba(0, 0, 0, 0.25),
  -8px -8px 12px 0 rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  height: 40vh;
  margin-right: 50px;
  display: block;
  max-width: 440px;
  max-height: 440px;
  width: auto;
  height: auto;
}

.social-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.social-container >>> a {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-right:  20px;
}

@media (orientation: portrait) {
  .splash {
    flex-direction: column;
    min-height: 90vh;
  }

  .image-copy-container {
    flex-direction: column;
  }

  img {
    box-shadow: 
    12px 12px 16px 0 rgba(0, 0, 0, 0.25),
    -8px -8px 12px 0 rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    height: 20vh;
    max-width:80%;
    max-height:80%;
    margin-right: 0;
    align-self: center;
    flex-grow: 0;
  }
}

</style>
