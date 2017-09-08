<template>
  <div class="stop-line">
    <b class="stop-line-id">{{line.id}}</b> {{$t('stop.withDestination')}} <b class="stop-line-for">{{line.destination}}</b>
    <line-schedule class="stop-line-times" :times="line.times"></line-schedule>
  </div>
</template>

<script>
import LineSchedule from './LineSchedule.vue'

export default {
  name: 'stop-schedule',
  props: ['line'],
  components: {
    LineSchedule
  }
}
</script>

<style lang="scss">
  @import "../../../styles/fonts";
  @import "../../../styles/colors";

  .stop-line {
    .stop-line-id, .stop-line-for {
      color: $green;
      font-size: $font-medium-bold;
    }
  }
</style>
