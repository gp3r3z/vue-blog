<template>
    <div class="home-card p-5 mt-5 bg-white rounded elevation-3">
        <router-link v-if="route.name == 'Home'" :to="{ name: 'Profile', params: { id: blog.creatorId } }">
            <img @click="getProfile()" :src="blog.creatorImage" class="profilePic img-fluid rounded">
        </router-link>
        <h2>{{ user.nickname }}</h2>
        <h3>{{ blog.title }}</h3>
        <p>{{ blog.body }}</p>
        <img :src="blog.imgUrl" alt="CodeWorks Logo" class="img-fluid">

    </div>
</template>

<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { Blog } from '../models/Blog.js';
import Pop from '../utils/Pop.js';
import { logger } from '../utils/Logger.js';
import { profilesService } from '../services/ProfilesService.js';
import { useRoute } from 'vue-router';
export default {
    props: {
        blog: { type: Blog, require: true }
    },
    setup(props) {
        const route = useRoute()
        return {
            route,
            account: computed(() => AppState.account),
            user: computed(() => AppState.user),
            getProfile() {
                profilesService.getProfile(props.blog.creatorId)
            }
        }
    }
};
</script>


<style lang="scss" scoped>
.profilePic {
    min-height: 20vh;
    height: 10vh;
}
</style>