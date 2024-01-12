<script>
  import { RouterLink } from 'vue-router';
  import { useStore } from 'vuex';
  import { key } from '../store';
  import VideoView from '../components/Video.vue';
  import VideoSkeleton from '../components/VideoSkeleton.vue';

  export default {
    components: {
      VideoView,
      VideoSkeleton,
    },
    data () {
      const store = useStore(key)

      return {
        loading: false,
        dataFetched: false,
        user: store.state.user,
        videos: store.state.videos,
      };
    },
    methods: {
      async fetchData() {
        try {
          if (this.videos.length === 0) {
            this.loading = true;
            const response = await fetch('data.json');
  
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
  
            const jsonData = await response.json();
            
            if (jsonData) {
              setTimeout(() => {
                this.loading = false;
                this.$store.commit('newVideos', { data: jsonData });
              }, 500);
            }     
          }
        } catch (error) {
          this.loading = false;
          console.error('Error fetching data:', error.message);
        }
      },
    },
    mounted() {
      this.fetchData();
    },
  }
    
</script>

<template>
  <main>
    <VideoSkeleton v-if="loading" />
    <div class="videos mt-10 grid grid-cols-4 gap-5 gap-y-10">
      <VideoView
        v-for="video in videos"
        :key="video.id"
        :id="video.id"
				:name="video.name"
				:time="video.time"
				:title="video.title"
				:thumbnail = "video.thumbnail"
				:description = "video.description"
      />
    </div>
  </main>
</template>
