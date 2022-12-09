<template>
  <div v-for="b in blogs" class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <BlogCard :blog="b" />
  </div>
</template>

<script>
import { onMounted, computed } from 'vue';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import { blogsService } from '../services/BlogsService.js'
import { AppState } from '../AppState.js';

export default {

  setup() {
    async function getBlogs() {
      try {
        await blogsService.getBlogs()
      } catch (error) {
        Pop.error(error)
        logger.error(error)
      }
    }
    onMounted(() => {
      getBlogs()
    })

    return {
      blogs: computed(() => AppState.blogs)
    }
  }
}

</script>

<style scoped lang="scss">

</style>
