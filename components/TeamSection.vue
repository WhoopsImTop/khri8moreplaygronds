<template>
  <div class="content-container" :style="'transform: rotate(-' + degree + 'deg)'">
    <div class="team">
      <div class="team-item" v-for="(member, index) in team" :key="index">
        <div class="team-image-container">
          <img class="team-image" :src="member.image" :alt="member.title" />
          <img
            class="team-hover-image"
            :src="member.hoverImage"
            :alt="member.title"
          />
        </div>
        <div class="team-content">
          <h3 class="team-title">{{ member.title }}</h3>
          <p class="team-jobTitle">{{ member.jobTitle }}</p>
          <a class="team-link" :href="'mailto:' + member.email">{{
            member.email
          }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["deg"],
  data: () => {
    return {
      degree: 0,
    };
  },
  computed: {
    team() {
      let team = this.$store.state.team.filter((member) => !member.featured);
      return team; //.concat(featured);
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

.team-image-container {
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s ease-in-out;
}

.team-image {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  display: flex;
  transition: opacity 0.3s ease-in-out;
  z-index: 12;
}

.team-hover-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
  display: flex;
  position: relative;
}

img.team-hover-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
}

.team-overlay {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background-color: transparent;
  transition: 0.3s ease-in-out;
}

.featured-img {
  width: 80%;
  height: 80%;
  transition: 0.3s ease-in-out;
  border-radius: 0px;
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

.team-image:hover {
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
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
