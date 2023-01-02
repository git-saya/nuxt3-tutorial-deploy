<template>
    <div>
        <header>
            <NuxtLink to="/products">Nuxt3 - Products</NuxtLink>
        </header>

        <div>
            <slot />
        </div>

        <footer>
            <p>&copy; copyright 2023</p>
            <NuxtLink to="/">back to home</NuxtLink>
        </footer>
    </div>
</template>

<script setup></script>

<style scoped>
.router-link-active {
    color: salmon;
    font-weight: bold;
}
</style>