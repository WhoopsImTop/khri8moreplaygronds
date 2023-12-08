<template>
  <div
    @pointerover="getCoordinatesOnMouseMove"
    @mousemove="getCoordinatesOnMouseMove"
    @scroll="getCoordinatesOnMouseMove"
    class="highlight-container marquee"
    ref="container"
    :style="'transform: rotate(-' + deg + 'deg)'"
  >
    <div class="highlight-content form" v-if="showForm == 'true'">
      <div class="marquee__inner">
        <span v-for="i in 10" :key="i">{{ title }}</span>
      </div>
      <input type="text" placeholder="Email" />
    </div>
    <div v-else class="highlight-content">
      <div class="marquee__inner">
        <span v-for="i in 10" :key="i">{{ title }}</span>
      </div>
    </div>
    <div
      class="custom-cursor"
      ref="container"
      :style="'top:' + top + 'px; left:' + left + 'px'"
    ></div>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  props: ["title", "showForm", "pointsToManupulate", "deg"],
  data() {
    return {
      top: 0,
      left: 0,
      deg: 0,
    };
  },
  methods: {
    getCoordinatesOnMouseMove(event) {
      // get the mouse position in the container
      let container = this.$refs.container;
      let containerRect = container.getBoundingClientRect();
      let deltaX = (event.clientX - containerRect.left) - 20;
      let deltaY = (event.clientY - containerRect.top) - (40 * this.deg);

      //consider the rotation of the container
      let angle = this.deg * (Math.PI / 180);
        let x = deltaX * Math.cos(angle) - deltaY * Math.sin(angle);
        let y = deltaX * Math.sin(angle) + deltaY * Math.cos(angle);

      gsap.to(this, { duration: 2, left: x, ease: "elastic" });
      gsap.to(this, { duration: 2, top: y, ease: "elastic" });
    },
  },
  beforeMount() {
    if(window.innerWidth < 900) {
      this.deg = 0;
    }
  },
};
</script>

<style scoped>
.highlight-container {
  position: relative;
  width: 102%;
  left: -1%;
  height: 100%;
  padding: 50px 0;
  background-color: var(--primary-color);
}

.highlight-content {
  display: flex;
  justify-content: center;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.form button {
  width: 100%;
  margin-top: 10px;
  text-align: center !important;
  justify-content: center;
}

.form input {
  min-width: 300px;
}

.marquee {
  position: relative;
  overflow: hidden;
}

.marquee:hover {
  --offset: 20vw;
  --move-initial: calc(0% + var(--offset));
  --move-final: calc(-20% + var(--offset));
}

.marquee__inner {
  display: flex;
  justify-content: center;
  position: relative;
  transform: translate3d(var(--move-initial), 0, 0);
  animation: marquee 5s linear infinite;
  animation-play-state: paused;
}

.marquee span {
  padding: 0 2vw;
  word-break: keep-all;
  white-space: nowrap;
  font-size: 120px;
  line-height: 1em;
  font-weight: 800;
  margin: 0px;
  color: var(--paragraph-light);
  text-transform: uppercase;
}

.marquee span:first-child {
  display: flex;
}

.marquee span {
  display: none;
}

.marquee:hover span {
  display: flex;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 2px;
}

.marquee:hover span:hover {
  -webkit-text-fill-color: var(--paragraph-light);
  -webkit-text-stroke: 2px;
}

.marquee:hover .marquee__inner {
  animation-play-state: running;
}

.marquee:hover {
  cursor: none;
}

.marquee:hover .custom-cursor {
  position: absolute;
  width: 40px;
  height: 40px;
  background-blend-mode: difference;
  background: #000000;
  border-radius: 50%;
  pointer-events: none;
}

@keyframes marquee {
  0% {
    transform: translate3d(var(--move-initial), 0, 0);
  }

  100% {
    transform: translate3d(var(--move-final), 0, 0);
  }
}

@media (max-width: 900px) {
  .marquee span {
    font-size: 60px;
    line-height: 60px;
  }

  .marquee__inner {
    animation-play-state: running;
  }

  .marquee span {
    display: flex;
  }

  .marquee {
    --offset: 20vw;
    --move-initial: calc(0% + var(--offset));
    --move-final: calc(-20% + var(--offset));
  }

  .highlight-container {
    width: 104%;
    left: -2%;
  }
}
</style>