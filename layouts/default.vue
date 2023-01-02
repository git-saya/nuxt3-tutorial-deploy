<template>
    <div>
        <header>
            <NuxtLink class="animate__animated animate__bounce" style="display: block" to="/">Nuxt3</NuxtLink>
            <ul>
                <li><NuxtLink to="/">Home</NuxtLink></li>
                <li><NuxtLink to="/about">About</NuxtLink></li>
                <li><NuxtLink to="/products">Products</NuxtLink></li>
            </ul>
        </header>

        <div>
            <slot />
        </div>
    </div>
</template>

<script setup></script>

<style scoped>
.router-link-active {
    color: salmon;
    font-weight: bold;
}
</style>