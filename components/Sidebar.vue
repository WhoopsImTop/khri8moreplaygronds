<template>
    <div class="navigation-background">
        <div class="navigation-content-container">
            <nuxt-link to="/">
                <KostbarLogo class="grid-item-1" width="150" title="kost|bar Waldkirch" alt="kost|bar Waldkirch Logo" />
            </nuxt-link>

            <div class="link-container">
                <nuxt-link to="/#team">Team</nuxt-link>
                <nuxt-link to="/#agentur">Agentur</nuxt-link>
                <nuxt-link to="/#kunden">Kunden</nuxt-link>
                <nuxt-link to="/#kontakt">Kontakt</nuxt-link>
            </div>

        </div>
    </div>
</template>

<script>
import KostbarLogo from './KostbarLogo.vue';
export default {
    components: {
        KostbarLogo
    },
    data: () => {
        return {
            active: false
        }
    }
}
</script>

<style>
.navigation-background {
    padding: 40px 0;
    position: fixed;
    display: flex;
    justify-content: center;
    left: 0px;
    top: 0px;
    bottom: 0px;
    width: 225px;
    height: 100%;
}

.link-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 40px;
}

.link-container a {
    text-decoration: none;
    color: var(--heading-dark);
    font-size: var(--paragraph-font-size);
    font-weight: 600;
    margin-bottom: 10px;
}

.link-container a:hover {
    color: var(--primary-color);
}
</style>