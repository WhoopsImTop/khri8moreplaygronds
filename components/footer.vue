<template>
    <div class="footer-container">
        <div class="content-container">
            <div class="footer-content">
                <nuxt-link to="impressum">Impressum</nuxt-link>
                <span class="divider">|</span>
                <nuxt-link to="impressum">Datenschutz</nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.footer-container {
    background-color: var(--primary-color);
    clip-path: polygon(0 80%, 100% 0, 100% 100%, 0% 100%);
}

.footer-content {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: var(--paragraph-light);
    margin-bottom: -10px;
}

.footer-content a {
    color: var(--paragraph-light);
    text-decoration: none;
}

.footer-content .divider {
    margin: 0 10px;
    color: var(--paragraph-light);
}

</style>