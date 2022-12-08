<template>
  <div class="content">
    <LandingCTA :title="page.title" showForm=false :deg="0"></LandingCTA>
    <nuxt-content class="content-container" :document="page"></nuxt-content>
    <Footer style="min-heigh: 100px"></Footer>
  </div>
</template>

<script>
export default {
  //page content via slug
  async asyncData({ $content, params }) {
    const page = await $content('seiten', params.slug).fetch()
    return { page }
  },
  layout: "main"
}
</script>

<style>

</style>