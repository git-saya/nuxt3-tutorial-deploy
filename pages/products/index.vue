<template>
    <div>    
        <div>Products.</div>
        <ul>
            <li v-for="p in products">
                <p>{{ p.title }}</p>
                <NuxtLink :to="`/products/${p.id}`">view details</NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'products'
})

const {data: products} = await useFetch('https://fakestoreapi.com/products')

useHead({
    title: 'Nuxt3 - Products',
    meta: [
        {name: 'description', content: 'Nuxt3 Product Sample'}
    ]
})
</script>