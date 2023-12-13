<template>
  <div
    class="content-container row"
    :style="'transform: rotate(-' + degree + 'deg);'"
  >
    <div>
      <h1 style="line-height: 30px">
        khri8 heisst erschaffen.<br /><span class="lautschrift"
          >['create']</span
        >
      </h1>
      <p v-html="$md.render(content[0].content)"></p>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["deg"],
  data() {
    return {
      degree: 0,
    };
  },
  computed: {
    content() {
      return this.$store.state.content;
    },
  },
  beforeMount() {
    if (window.innerWidth < 900) {
      this.degree = 0;
    } else {
      this.degree = this.deg;
    }
  },
};
</script>

<style>
.row-item {
  width: 27%;
  min-width: 300px;
}

.lautschrift {
  font-size: 26px;
  color: var(--primary-color);
}

.social {
  margin-top: 20px !important;
  padding: 10px 20px 10px 45px;
  background-color: var(--primary-color);
  color: var(--paragraph-light);
  text-decoration: none;
  font-family: karmina-sans, sans-serif;
  font-weight: bold;
  letter-spacing: 7px;
  position: relative;
}

.social::before {
  content: "";
  width: 20px;
  height: 20px;
  position: absolute;
  top: 10px;
  left: 12.5px;
  background-image: url("/instagram.png");
  background-size: cover;
  background-position: center;
}

.mb-50 {
  margin-bottom: 50px;
}
</style>
