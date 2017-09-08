<template>
  <div class="navbar-wrapper">
    <div class="navbar">
      <div class="navbar-image">
        <img class="navbar-image-logo" src="/static/img/appvanza-64x64.png" alt="Appvanza logo">
      </div>
      <div class="navbar-logo">Appvanza</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navbar'
}
</script>

<style lang="scss">
  @import "../../../styles/fonts";
  @import "../../../styles/sizes";
  @import "../../../styles/colors";

  .navbar {
    &-wrapper {
      padding: $font-small;
      padding-bottom: 0;
      height: $navbar-height;
      box-sizing: border-box;
    }

    position: relative;
    padding: $font-small;
    font-size: $font-large;
    line-height: $font-x-large;
    border-bottom: $border-thick solid $green;

    .navbar-image {
      position: absolute;
      height: $font-x-large;

      .navbar-image-logo {
        height: $font-x-large;
      }
    }

    .navbar-logo {
      text-align: center;
      color: $dark-green;
    }
  }
</style>
