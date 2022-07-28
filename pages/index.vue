<template>
    <div>
        <LandingCTA title="Zack! Bumm! Bäng!" showForm=false :pointsToManupulate="[0, 0, 1, 0]"></LandingCTA>
        <TeamSection></TeamSection>
        <LandingCTA title="Check!" showForm=false :pointsToManupulate="[1, 1, 1, 1]" :ratio="0.002"></LandingCTA>
        <RowContent></RowContent>
        <LandingCTA title="Bing!" showForm=false :pointsToManupulate="[1, 1, 1, 1]" :ratio="0.003"></LandingCTA>
        <PortfolioSection></PortfolioSection>
        <LandingCTA title="News" showForm=true :pointsToManupulate="[1, 0, 0, 0]" :ratio="0.004"></LandingCTA>
    </div>
</template>

<script>
import LandingCTA from '../components/LandingCTA.vue';
import RowContent from '../components/rowContent.vue';
import PortfolioSection from '../components/PortfolioSection.vue';
export default {
    layout: "main",
    components: { LandingCTA, RowContent, PortfolioSection }
};
</script>

<style>
</style>