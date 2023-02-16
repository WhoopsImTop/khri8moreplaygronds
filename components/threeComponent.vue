<template><canvas id="scene-container"></canvas></template>
<script>
import * as THREE from 'three';

export default {
    mounted() {
        this.init();
    },
    methods: {
        init() {
            const container = document.querySelector('#scene-container');

            // Create a Scene
            const scene = new THREE.Scene();
            scene.background = new THREE.Color(0xffffff);

            // Create a Camera
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.z = 10;
            scene.add(camera);

            //create a banner from left to right that is rotated by 1 degree
            const banner = new THREE.Mesh(
                new THREE.PlaneGeometry(100, 5),
                new THREE.MeshBasicMaterial({ color: 0xdf1874 })
            );
            //position on top of camera
            banner.position.y = 8;
            banner.rotation.z = 0.02;
            scene.add(banner);

            //create a banner from left to right that is rotated by 1 degree
            const banner2 = new THREE.Mesh(
                new THREE.PlaneGeometry(100, 3),
                new THREE.MeshBasicMaterial({ color: 0xdf1874 })
            );
            banner2.rotation.z = 0.02;
            scene.add(banner2);

            //render scene in canvas
            const renderer = new THREE.WebGLRenderer({ canvas: container });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.render(scene, camera);

            //animate
            const animate = () => {
                requestAnimationFrame(animate);
                renderer.render(scene, camera);

            }
            animate();
        }
    }
}
</script>

<style></style>