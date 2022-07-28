<template>
    <div class="highlight-container" ref="container" style="clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);">
        <div class="highlight-content form" v-if="showForm == 'true'">
            <form action="Post">
                <input type="text" placeholder="Email">
                <button>{{ title }}</button>
            </form>
        </div>
        <div v-else class="highlight-content">
            <button>{{ title }}</button>
        </div>
    </div>
</template>

<script>
import { equal } from 'assert';

export default {
    props: ['title', 'showForm', 'pointsToManupulate', 'ratio'],
    data() {
        return {
            height: 1.0,
            style: null,
            lastY: 0,
        }
    },
    methods: {
        handleScroll() {
            //check if user scrolles up or down
            let currentY = window.scrollY;
            if (currentY > this.lastY) {
                //scroll down
                this.lastY = window.scrollY;
                this.height -= this.ratio;
            } else {
                //scroll up
                this.lastY = window.scrollY;
                this.height += this.ratio;
            }
            this.lastY = currentY;

            const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);

            let el = this.$refs.container;
            if (equals(this.pointsToManupulate, [0, 0, 1, 0])) {
                el.style.clipPath = `polygon(0 0, 100% 0, 100% ${90 * this.height}%, 0 100%)`
            } else if(equals(this.pointsToManupulate, [1, 1, 1, 1])) {
                el.style.clipPath = `polygon(0 ${90 - (90 * this.height)}%, 100% ${1 * this.height}%, 100% ${90 * this.height}%, 0 100%)`
            } else if(equals(this.pointsToManupulate, [1, 0, 0, 0])) {
                el.style.clipPath = `polygon(0 ${90 - (90 * this.height)}%, 100% 0, 100% 100%, 0 100%)`
            }
        },
    },
    mounted() {
        if (!process.server) {
            document.addEventListener('scroll', this.handleScroll);
        }
    },
}
</script>

<style scoped>
.highlight-container {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 100px 0;
    background-color: var(--primary-color);
}

.highlight-content {
    display: flex;
    justify-content: center;
    align-items: center;
}

.form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.form button {
    width: 100%;
    margin-top: 10px;
    text-align: center !important;
    justify-content: center;
}

.form input {
    min-width: 300px;
}
</style>