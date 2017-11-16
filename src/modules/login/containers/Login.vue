<template>
  <div class="login">
    <div class="login-panel">
      <form class="login-form" @submit.prevent="logIn()">
        <input type="text">
        <input type="password">
        <button type="submit"></button>
      </form>
      <div class="login-sso">
        <span>
          Login with Google
        </span>
        <span>
          Login with Facebook
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  methods: {
    logIn() {}
  }
}
</script>

<style>
</style>
