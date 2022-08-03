<template>
  <div>
    <Nuxt class="content"></Nuxt>
  </div>
</template>

<script>
export default {
  fetch() {
    this.$store.dispatch('getTheTeam');
    this.$store.dispatch('getTheContent');
    this.$store.dispatch('getThePortfolioLogos');
    this.$store.dispatch('getThePortfolio');
  },
  components: {  },
};
</script>

<style>
* {
  font-family: karmina-sans, sans-serif;
  ;
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

.welcome-container {
  display: flex;
  height: 100vh;
  background-color: var(--paragraph-light);
}

.welcome-container h1 {
  font-size: 100px;
  line-height: 100px;
}

.welcome-container h3 {
  font-size: 40px;
  line-height: 45px;
}

.welcome-container-content {
  display: flex;
  align-items: center;
  transform: rotate(-1deg);
}

p {
  font-size: 18px;
  line-height: 1.5em;
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
  transition: all .5s;
}

button::after {
  content: '';
  width: 0px;
  height: 20px;
  background-image: url('/symbols/check.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  transition: all 0.3s ease-in-out;
}

button:hover {
  border-color: transparent;
}

button:hover::after {
  content: '';
  width: 20px;
  margin-left: 5px;
  height: 20px;
  background-image: url('/symbols/check.svg');
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
  transition: all .5s;
}

input:focus {
  outline: 1px solid var(--paragraph-light);
}

@media (max-width: 900px) {
  h1 {
    font-size: 40px;
    line-height: 40px;
  }

  h2 {
    font-size: 30px;
    line-height: 30px;
  }

  h3 {
    font-size: 20px;
    line-height: 35px;
  }

  p {
    font-size: 18px;
    margin: 0;
  }

  .content-container {
    padding: 0 30px;
  }
}
</style>