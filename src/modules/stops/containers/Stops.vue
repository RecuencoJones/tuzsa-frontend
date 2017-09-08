<template>
  <div class="stops">
    <div class="stops-filter">
      <input class="stops-filter-input"
             aria-label="filter"
             v-model="filterText"
             :placeholder="$t('lang.verb.filter') + ' ' + $tc('lang.noun.stop', 2)"
             @keyup="filterStops()"
             type="text">
    </div>
    <div class="loading" v-if="!stops"><em>{{$t('meta.loading')}}...</em></div>
    <div class="stops-list" v-else>
      <div class="stops-item"
           :class="{active: selected === stop.id}"
           v-for="(stop, index) in stops"
           :key="stop.id">
        <stop :stop="stop"
              :selected="selected === stop.id"
              :details="selectedStop"
              @toggle="showTimes(stop.id)">
        </stop>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Stop from '../components/Stop.vue'

export default {
  name: 'home',
  data() {
    return {
      selected: null,
      filterText: null
    }
  },
  computed: mapGetters({
    stops: 'stops/getFilteredStops',
    selectedStop: 'stops/getStop'
  }),
  created() {
    this.$store.dispatch('stops/getStops')
    this.$store.dispatch('stops/filterStops', this.filterText)
  },
  methods: {
    showTimes(id) {
      if (this.selected === id) {
        this.selected = null

        this.$store.dispatch('stops/clearStop')
      } else {
        this.selected = id

        this.$store.dispatch('stops/getStop', id)
      }
    },
    filterStops() {
      this.$store.dispatch('stops/filterStops', this.filterText)
    }
  },
  components: {
    Stop
  }
}
</script>

<style lang="scss">
  @import "../../../styles/fonts";
  @import "../../../styles/sizes";
  @import "../../../styles/colors";

  $view-padding: $font-small;
  $filter-text-size: $font-large;
  $filter-margin: $font-small;
  $filter-padding: $font-small;
  $filter-height: $filter-text-size + $filter-margin + $filter-padding;

  .stops {
    height: calc(100% - #{$navbar-height});
    padding: $view-padding;
    padding-top: 0;
    box-sizing: border-box;

    .stops-filter {
      width: 100%;
      border-bottom: $border-thick solid $green;

      .stops-filter-input {
        width: 100%;
        display: block;
        margin: 0;
        padding: $filter-padding / 2 $filter-padding;
        line-height: $filter-text-size;
        font-size: $filter-text-size;
        font-family: $main-font-family;
        box-sizing: border-box;
        border: none;
        border-left: $border-thick solid transparent;
        border-right: $border-thick solid transparent;
        outline: none;

        &:hover:not(:focus) {
          border-left: $border-thick solid $light-gray;
        }

        &:focus {
          border-left: $border-thick solid $green;
          border-right: $border-thick solid $green;
        }
      }
    }

    .loading {
      padding: $font-medium;
    }

    .stops-list {
      overflow: auto;
      height: calc(100% - #{$filter-height});
      box-sizing: border-box;

      .stops-item {
        box-sizing: border-box;
        border-left: $border-thick solid transparent;

        &.active {
          border-left: $border-thick solid $green;
        }

        &:hover:not(.active) {
          border-left: $border-thick solid $light-gray;
        }
      }
    }
  }
</style>
