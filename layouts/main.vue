<template>
  <div>
    <Nuxt class="content"></Nuxt>
  </div>
</template>

<script>
export default {
  fetch() {
    this.$store.dispatch("getTheTeam");
    this.$store.dispatch("getTheContent");
    this.$store.dispatch("getThePortfolioLogos");
    this.$store.dispatch("getThePortfolio");
    this.$store.dispatch("getContact");
  },
  components: {},
};
</script>

<style>
* {
  font-family: karmina-sans, sans-serif;
}

body {
  box-sizing: border-box;
  margin: 0px;
}

:root {
  --paragraph-dark: #666666;
  --paragraph-light: #ffffff;
  --heading-dark: #333333;
  --primary-color: #df1874;
  --ideen-color: #0387d4;
  --gray-color: #eeeeee;
  --menu-bg-color: #ffffff;
  --menu-border-color: #000000;
  --paragraph-font-size: 18px;
}

h1 {
  font-size: 50px;
  line-height: 1em;
  font-weight: 800;
  color: var(--heading-dark);
}

h2 {
  font-size: 40px;
  line-height: 1em;
  font-weight: 800;
  color: var(--heading-dark);
}

h3 {
  font-size: 30px;
  line-height: 1em;
  font-weight: 800;
  color: var(--heading-dark);
}

.welcomeSlider {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.welcome-container.active {
  z-index: 1;
}

.welcome-container {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
}

.welcome-container::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.4) 70%,
    rgba(0, 0, 0, 8) 100%
  );
  z-index: 0;
}

.translated-heading {
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 100px;
  left: 150px;
  z-index: 1;
}

.translated-heading h3 {
  font-size: 30px;
  line-height: 45px;
  color: #ffffff;
}

.translated-heading h1 {
  font-size: 100px;
  line-height: 100px;
  color: #ffffff;
}

.welcome-container-content {
  display: flex;
  align-items: center;
  transform: rotate(-1deg);
}

p {
  font-size: 20px;
  line-height: 1.8em;
  color: var(--paragraph-dark);
}

a {
  font-size: 18px;
  line-height: 1.5em;
}

.content-container {
  max-width: 1440px;
  padding: 0 50px;
  margin: 0 auto;
}

.content {
  max-width: 100vw;
  overflow: hidden;
}

button {
  background-color: transparent;
  border: 3px solid var(--paragraph-light);
  padding: 10px 15px;
  outline: none;
  cursor: pointer;
  font-size: 20px;
  font-family: karmina-sans, sans-serif;
  color: var(--paragraph-light);
  font-weight: 600;
  letter-spacing: 7px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.5s;
}

button::after {
  content: "";
  width: 0px;
  height: 20px;
  background-image: url("/symbols/check.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  transition: all 0.3s ease-in-out;
}

button:hover {
  border-color: transparent;
}

button:hover::after {
  content: "";
  width: 20px;
  margin-left: 5px;
  height: 20px;
  background-image: url("/symbols/check.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  transition: all 0.3s ease-in-out;
}

input {
  border: 3px solid var(--paragraph-light);
  padding: 8px 15px;
  outline: none;
  cursor: pointer;
  font-size: 18px;
  font-family: karmina-sans, sans-serif;
  color: var(--paragraph-dark);
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.5s;
}

input:focus {
  outline: 1px solid var(--paragraph-light);
}

.row {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  margin: 100px auto;
  padding: 50px 100px;
}

.stickyNavigation {
  position: fixed;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--menu-bg-color);
  border-radius: 50px;
  padding: 10px 15px;
  outline: none;
  cursor: pointer;
  font-size: 20px;
  font-family: karmina-sans, sans-serif;
  color: var(--paragraph-dark);
  font-weight: 600;
  letter-spacing: 7px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.5s;
  z-index: 100;
}

@media (max-width: 900px) {
  h1 {
    font-size: 40px;
    line-height: 45px;
  }

  h2 {
    font-size: 30px;
    line-height: 35px;
  }

  h3 {
    font-size: 20px;
    line-height: 25px;
  }

  p {
    font-size: 18px;
    margin: 0;
  }

  .translated-heading {
    position: absolute;
    left: 20px;
    right: 0px;
    bottom: 200px;
  }

  .translated-heading h3 {
    font-size: 25px;
    line-height: 30px;
  }

  .translated-heading h1 {
    font-size: 40px;
    line-height: 45px;
  }

  .content-container {
    padding: 0 30px;
  }

  .welcome-container-content {
    padding: 12vh 30px 0 30px;
    align-items: unset;
  }

  .arrow {
    position: absolute;
    z-index: -1;
    bottom: 10px;
    left: -40px;
    width: 50px;
    object-fit: contain;
  }

  .row {
    padding: 50px 30px;
    margin-top: 30px;
  }
}
</style>
