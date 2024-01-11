<script setup lang="ts">
  import { RouterLink } from 'vue-router'
</script>

<template>
  <main class="w-full mt-20 flex items-center justify-center flex-col">
    <h1 class="text-3xl font-bold">Create an Account</h1>
    <p class="text-center py-3">Even though registration just takes a few seconds, it provides <br> you complete control over your purchase.</p>
    <form class='user-form py-5 flex items-center justify-center flex-col gap-5'>
      <input type="text" class="w-96 p-3 border border-gray-400 rounded focus:outline-0" name="name" placeholder="Username" required />
      <input type="email" class="w-96 p-3 border border-gray-400 rounded focus:outline-0" name="email" placeholder="Email" required />
      <input type="password" class="w-96 p-3 border border-gray-400 rounded focus:outline-0" name="password" placeholder="Password" required/>
      <button type="submit" class='w-96 p-3 text-base bg-red-500 text-white rounded'>Register</button>
    </form>
    <div>
      <p class="text-center mb-5">Or</p>
      <button class='w-96 flex items-center justify-center gap-3 p-3 text-base border border-red-500 rounded'>
        <img class="w-6" src="../assets/search.png" alt="Search">
        <span>Continue with Google</span>
      </button>
    </div>
    <p class="mt-5">Already have an account? <RouterLink to='/login' class="border-b border-red-500 font-semibold">Login</RouterLink></p>
  </main>
</template>