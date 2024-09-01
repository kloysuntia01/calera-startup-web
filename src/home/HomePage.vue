<template>
<section>
    <div>
      <h1>{{ data.name }}</h1>
    <div>
      <img :src="`${data.imageUrl}`" />
    </div>

    <div>
      <blockquote>
        {{ data.slogan }}
      </blockquote>
    </div>
      <article>
        {{ data.desc }}
      </article>
    </div>

</section>

</template>

<style scoped>
</style>
<script setup>
import {computed} from 'vue'
import db from '../data/db.json'

const data = computed(() => {
  return db.data.find(x => x.id == 1);
})
</script>

