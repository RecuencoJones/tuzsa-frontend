<template>
  <div class="line-schedule">
    <ol class="line-schedule-list" v-if="times">
      <li class="line-schedule-item"
          v-for="(time, index) in times"
          :key="index">
        <b class="line-schedule-time">{{time}}</b> {{$tc('stop.minutes', time)}}
      </li>
    </ol>
    <span class="times-empty" v-else>{{$t('custom.stop.noEstimates')}}</span>
  </div>
</template>

<script>
export default {
  name: 'line-schedule',
  props: ['times']
}
</script>

<style lang="scss">
  @import "../../../styles/fonts";
  @import "../../../styles/colors";

  .line-schedule {
    .line-schedule-time {
      color: $green;
      font-size: $font-medium-bold;
    }
  }
</style>
