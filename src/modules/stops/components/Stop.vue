<template>
  <div class="stop">
    <div class="stop-header" @click="toggleSchedules()">
      <div class="stop-name">
        {{stop.title}}
      </div>
      <div class="stop-lines" v-if="stop.lines.length">
        {{$tc('stop.lines', stop.lines.length)}}: {{stop.lines.join(', ')}}
      </div>
    </div>
    <transition name="stop-schedules-fade">
      <div class="stop-schedules" v-if="selected">
        <transition name="stop-schedules-fade">
          <div class="loading" v-if="!details" key="loading"><em>{{$t('meta.loading')}}...</em></div>
          <div class="stop-schedule-list" v-else-if="details.schedule.length" key="list">
            <stop-schedule class="stop-schedule-item"
                           v-for="(line, index) in details.schedule"
                           :key="index"
                           :line="line">
            </stop-schedule>
          </div>
          <div class="empty" v-else key="empty">{{$t('custom.stop.noSchedules')}}</div>
        </transition>
      </div>
    </transition>
  </div>
</template>

<script>
import StopSchedule from './StopSchedule.vue'

export default {
  name: 'stop',
  props: ['stop', 'selected', 'details'],
  methods: {
    toggleSchedules() {
      this.$emit('toggle')
    }
  },
  components: {
    StopSchedule
  }
}
</script>

<style lang="scss">
  @import "../../../styles/fonts";
  @import "../../../styles/sizes";
  @import "../../../styles/colors";
  @import "../../../styles/mixins";

  .stop {
    .stop-header {
      padding: $font-medium;
      cursor: pointer;

      &:hover {
        background-color: $light-gray;
      }
    }

    .stop-schedules {
      padding: $font-medium;

      .loading,
      .empty {
        padding: $font-medium;
      }

      .stop-schedule-item {
        padding: 0 $font-medium;
        margin-bottom: $font-medium;
        cursor: default;

        @include border-middle-fade($green, $border-medium);

        &:last-child {
          margin-bottom: 0;
        }
      }
    }

    .stop-schedules-fade {
      &-enter-active {
        transition: opacity .5s;
      }

      &-enter, &-leave-to {
        opacity: 0;
      }
    }
  }
</style>
