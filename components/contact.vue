<template>
  <div>
    <div
      class="content-container contact"
      :style="'transform: rotate(-' + deg + 'deg)'"
    >
      <div class="map-container" id="mapContainer">
        <div class="contact-container">
          <h1>{{ $store.state.contact[0].title }}</h1>
          <p>{{ $store.state.contact[0].company }}</p>
          <p>{{ $store.state.contact[0].street }}</p>
          <p>{{ $store.state.contact[0].city }}</p>
          <p>
            <a
              class="team-link"
              :href="'mailto:' + $store.state.contact[0].email"
              >{{ $store.state.contact[0].email }}</a
            >
          </p>
          <p>
            <a
              class="team-link"
              :href="'tel:' + $store.state.contact[0].phone"
              >{{ $store.state.contact[0].phone }}</a
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Map } from "maplibre-gl";

export default {
  props: ["deg"],
  data: () => {
    return {
      map: null,
      mapContainer: null,
      apiKey: "tx0bWkeJlS2k9FWCMNgS",
    };
  },
  mounted() {
    this.initialState = {
      lng: JSON.parse(this.$store.state.contact[0].location).coordinates[0],
      lat: JSON.parse(this.$store.state.contact[0].location).coordinates[1],
      zoom: 17,
    };
    this.mapContainer = document.getElementById("mapContainer");
    this.map = new Map({
      container: this.mapContainer,
      style: `https://api.maptiler.com/maps/5a7eac2d-04cb-44dc-8ae6-52b2931d8cc1/style.json?key=${this.apiKey}`,
      center: [this.initialState.lng, this.initialState.lat],
      zoom: this.$store.state.isMobile ? 16 : this.initialState.zoom,
    });

<<<<<<< HEAD
    //limit zoom level
    this.map.setMinZoom(14);
  }
}
=======
    this.map.on("click", (e) => {
      //get data from map
      let data = e;

      console.log(data);
    });
  },
};
>>>>>>> 1fcfd24977aec6875570ea1f861e9a516c2ee8e3
</script>

<style>
.contact {
  display: flex;
  justify-content: center;
  margin: 50px auto 120px auto;
}

.map-container {
  position: relative;
  min-height: 70vh;
  width: 90%;
}

.contact-container p,
.contact-container a {
  line-height: 10px;
}

.contact-container p:last-child {
  margin-bottom: 0;
}

.contact-container h1 {
  margin-top: 0px;
}

.contact-container {
  padding: 30px 200px 30px 30px;
  background-color: var(--paragraph-light);
  border-radius: 5px;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
  width: max-content;
  position: absolute;
  bottom: -100px;
  left: 40px;
}

.maplibregl-control-container {
  position: absolute;
  bottom: 0px;
  display: flex;
  right: 0px;
  padding: 10px;
  z-index: 1;
}

.maplibregl-ctrl-attrib-inner a {
  font-size: 14px !important;
}

.maplibregl-ctrl-attrib-button {
  display: none;
}

@media (max-width: 900px) {
  .map-container {
    width: 100%;
    min-height: unset;
    height: 750px;
    overflow: hidden;
  }

  .contact-container {
    padding: 30px 0;
    width: auto;
    position: unset;
  }

  .contact-container p {
    line-height: 25px;
  }

  .contact {
    display: flex;
    justify-content: center;
    margin: 50px auto 0 auto;
  }
}
</style>