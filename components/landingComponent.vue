<template>
  <div>
    <h1 class="staggering">WEB.01</h1>
    <h1 class="staggering">WEB.02</h1>
    <h1 class="staggering">WEB.03</h1>
  </div>
</template>

<script>
import gsap from "gsap";
import SplitText from "split-text-js";
export default {
  created() {
    document.addEventListener("DOMContentLoaded", () => {
      let textToSplit = document.querySelectorAll(".staggering");
      textToSplit.forEach((text) => {
        let stagger = new SplitText(text, {
          type: "chars",
        });
        gsap
        .from(stagger.chars, {
          duration: 1,
          y: 200,
          opacity: 0,
          stagger: 0.1,
          ease: "back.out(2.7)"
        })
        .to(stagger.chars, {
          duration: 1,
          y: 0,
          opacity: 0,
          stagger: 0.1,
          ease: "back.out(2.7)"
        });
      });
    });
  },
};
</script>

<style>
.staggering {
  font-size: 24vw;
  margin: 0px;
}
</style>