<template>
    <div>
        <Head>
            <Title>Nuxt3 - {{ product.title }}</Title>
            <Meta name="description" :content="product.description"></Meta>
        </Head>

        <h3>{{ product.id }} - {{ product.title }}</h3>
        <p>Price: {{ product.price }}</p>
        <p>{{ product.description }}</p>
    </div>
</template>

<script setup>
const {id} = useRoute().params
const url = 'https://fakestoreapi.com/products/'+id

definePageMeta({
    layout: 'products'
})

const {data: product} = await useFetch(url, {key: id})
if(!product.value) {
    throw createError({statusCode: 404, statusMessage: 'product not found', fatal: true})
}
</script>