<template>
  <div class="main">
      <div class="main-panel">
          <div class="main-panel-item">
            <button class="btn btn-large"
                    @click="handleAnon()">
              Access as anon
            </button>
          </div>
          <div class="main-panel-item">
            <button class="btn btn-large"
                    @click="handleLogIn()">
              Log in
            </button>
          </div>
          <div class="main-panel-item">
            <button class="btn btn-large"
                    @click="handleSignUp()">
              Sign up
            </button>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'main',
  methods: {
    handleAnon() {
      this.goToStops()
    },

    handleLogIn() {
      this.goToStops()
    },

    handleSignUp() {
      this.goToStops()
    },

    goToStops() {
      this.$router.push('stops')
    }
  }
}
</script>

<style lang="scss">
  @import "../../../styles/fonts";
  @import "../../../styles/sizes";
  @import "../../../styles/colors";
  @import "../../../styles/mixins";

  .main {
    position: relative;
    height: calc(100% - #{$navbar-height});
    width: 100%;

    .main-panel {
      width: 200px;
      margin: auto;
      position: absolute;
      left: 0;
      right: 0;
      @include center-vertical();

      .main-panel-item {
        padding: $font-medium;
      }
    }
  }
</style>
