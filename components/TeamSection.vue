<template>
    <div class="content-container" :style="'transform: rotate(-' + deg + 'deg)'">
        <div class="team">
            <div class="team-item" v-for="(member, index) in team" :key="index">
                <div class="team-overlay">
                    <img class="team-image" :src="member.image" :alt="member.title">
                </div>
                <div class="team-content">
                    <h3 class="team-title">{{ member.title }}</h3>
                    <p class="team-jobTitle">{{ member.jobTitle }}</p>
                    <a class="team-link" :href="'mailto:' + member.email">{{ member.email }}</a>
                </div>
            </div>

            <!-- <div class="featured" v-for="(member, index) in featured" :key="index">
                <div class="team-overlay" style="max-width: 400px; height: 400px">
                    <img class="team-image featured-img" :src="member.image" :alt="member.title">
                </div>
                <div class="featured-content">
                    <h3 class="team-title">{{ member.title }}</h3>
                    <p class="team-jobTitle">{{ member.jobTitle }}</p>
                    <a class="team-link" :href="member.email">{{ member.email }}</a>
                </div>
            </div> -->
        </div>
    </div>
</template>

<script>
export default {
    props: ['deg'],
    computed: {
        team() {
            // return team members that are not featured
            //let featured = this.$store.state.team.filter(member => member.featured);
            let team = this.$store.state.team.filter(member => !member.featured);
            return team //.concat(featured);
        },
    },
}
</script>

<style>
.content-container {
    padding: 50px 30px;
}

.team {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-gap: 50px;
    justify-content: center;
    align-items: center;
    margin: 50px 0 0 0;
}

.featured {
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 50px;
}

.team-item {
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 50px;
}

.team-image:hover {
    opacity: 0.5;
    transition: opacity .3s ease-in-out;
}

.team-image {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    display: flex;
    transition: opacity .3s ease-in-out;
}

.team-overlay {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background-color: transparent;
    transition: .3s ease-in-out;
}

.featured-img {
    width: 80%;
    height: 80%;
    transition: .3s ease-in-out;
    border-radius: 0px;
}

.team-overlay:hover {
    background-color: var(--primary-color) !important;
}

.team-content {
    padding: 10px 15px;
}

.team-title {
    margin: 20px 0 15px 0;
    font-weight: 900;
    color: var(--heading-dark);
}

.team-jobTitle {
    margin: 0px;
    color: var(--paragraph-dark);
}

.team-link {
    margin: 0px;
    text-decoration: none;
    color: var(--primary-color);
}

@media (max-width: 900px) {
    .team-item {
        width: 100%;
    }

    .team {
        grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
    }
}
</style>