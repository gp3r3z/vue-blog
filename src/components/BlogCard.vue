<template>
    <section class="row p-3 bg-white elevation-3 rounded mt-3">
        <div class="home  col-6">
            <router-link v-if="route.name == 'Home'" :to="{ name: 'Profile', params: { id: blog.creatorId } }">
                <img @click="getProfile()" :src="blog.creatorImage" class="profilePic img-fluid rounded">
            </router-link>
            <h2>{{ user.nickname }}</h2>
            <h3>{{ blog.title }}</h3>
            <p>{{ blog.body }}</p>
        </div>
        <div class="bg-dark p-3 col-3">

            <button @click="setActiveBlog()" data-bs-toggle="modal" data-bs-target="#exampleModal"
                class="btn btn-light m-1 elevation-5`">BlogPage
            </button>
            <img :alt="blog.title" :src="blog.imgUrl" alt="CodeWorks Logo" class="img-fluid"
                :title="`Go to ${blog.title}'s  Page'`">
        </div>
    </section>

</template>

<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { Blog } from '../models/Blog.js';
import Pop from '../utils/Pop.js';
import { logger } from '../utils/Logger.js';
import { profilesService } from '../services/ProfilesService.js';
import { useRoute } from 'vue-router';
import { blogsService } from '../services/BlogsService.js';


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
            },
            setActiveBlog() {
                blogsService.getActiveBlog(props.blog.id)
            }
        }
    }
};
</script>


<style lang="scss" scoped>
.home {
    height: 35vh;
    width: 40vw;
}

img {

    max-width: 150px;
    width: 100%;
    object-fit: contain;
    object-position: center;
}
</style>