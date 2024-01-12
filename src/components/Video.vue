<script>
  import { useStore } from 'vuex';
  import { key } from '../store';

  export default {
    props: [
      'id',
      'name',
      'time',
      'title',
      'thumbnail',
      'description'
    ],
    data () {
      const store = useStore(key);

      return {
        user: store.state.user,
      };
    },
    methods: {
      watchHandler() {
        if (this.user.length === 0) {
          this.$router.push('/login');
        }else{
          this.$router.push('/details');
        }
      }
    }
  }
</script>

<template>
  <div class="video">
    <img class="w-full" :src={thumbnail} alt="thumbnail">
    <h3 class="pt-3">{{ title }}</h3>
    <div class="flex items-center justify-between">
      <p class="text-xs text-gray-400">{{ name }} - {{ time }} ago</p>
      <button @click="watchHandler" class="flex items-center gap-1 py-1 px-2 bg-red-500 text-white rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
        <span class="text-sm">Watch</span>
      </button>
    </div>
  </div>
</template>