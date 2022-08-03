<template>
  <div class="content-container row" :style="'transform: rotate(-' + deg + 'deg)'">
    <div v-for="(article, index) in content" :key="index" class="row-item">
    <h1>{{ article.title }}</h1>
    <p>{{ article.content }}</p>
    <a class="social" v-if="article.socials" :href="article.socials.instagram" target="_blank">Follow</a>
    </div>
  </div>
</template>

<script>
export default {
    props: ['deg'],
    computed: {
        content() {
            return this.$store.state.content;
        }
    },
}
</script>

<style>
.row {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    padding: 50px 100px;
}
.row-item {
    width: 27%;
    min-width: 300px;
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
    background-image: url('/instagram.png');
    background-size: cover;
    background-position: center;
}
</style>