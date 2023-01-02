<template>
    <div>
        About.
        <p>{{ data }}</p>
    </div>
    
</template>

<script setup>
    const {data} = await useFetch('/api/hello?name=Nuxt3-', {
        method: 'post',
        body: {
            age: '23'
        }
    })
</script>