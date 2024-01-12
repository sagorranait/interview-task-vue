<script>
  import { RouterLink } from 'vue-router';
  import { useStore } from 'vuex';
  import { 
    signInWithEmailAndPassword, 
    onAuthStateChanged, 
    signInWithPopup,
  } from 'firebase/auth';
  import { auth, GoogleProvider } from '../firebaseConfig';
  import { key } from '../store';

  export default {
    methods: {
      async loginWithGoogle() {
        try {
          const result = await signInWithPopup(auth, GoogleProvider);
          const userInfo = {
            username: result.user?.displayName,
            email: result.user?.email,
          }

          this.$store.commit('updateUser', { userInfo });
          this.$router.push('/');

          if (window.opener && !window.opener.closed) {
            window.opener.postMessage('GoogleLoginSuccess', window.location.origin);
            window.close();
          }
        } catch (error) {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error('Google authentication error:', errorCode, errorMessage);
        }
      },
    },
  };
</script>

<template>
  <main class="w-full mt-20 flex items-center justify-center flex-col">
    <h1 class="text-3xl font-bold">Hey, Welcome Back !!!</h1>
    <p class="text-center py-3">Use the email and password you chose when registering to <br> your account.</p>
    <form class='user-form py-5 flex items-center justify-center flex-col gap-5'>
      <input type="email" class="w-96 p-3 border border-gray-400 rounded focus:outline-0" name="email" placeholder="Email" required />
      <input type="password" class="w-96 p-3 border border-gray-400 rounded focus:outline-0" name="password" placeholder="Password" required/>
      <button type="submit" class='w-96 p-3 text-base bg-red-500 text-white rounded'>Login</button>
    </form>
    <div>
      <p class="text-center mb-5">Or</p>
      <button @click="loginWithGoogle" class='w-96 flex items-center justify-center gap-3 p-3 text-base border border-red-500 rounded'>
        <img class="w-6" src="../assets/search.png" alt="Search">
        <span>Continue with Google</span>
      </button>
    </div>
    <p class="mt-5">Don’t have an account? <RouterLink to='/register' class="border-b border-red-500 font-semibold">Create an account</RouterLink></p>
  </main>
</template>