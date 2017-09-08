import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { extend, mapValues } from 'lodash'

Vue.use(VueI18n)

const messages = {
  meta: {
    loading: '@:lang.meta.loading'
  },
  stop: {
    withDestination: '@:lang.preposition.with @:lang.noun.destination',
    minutes: '@:lang.noun.minute',
    lines: '@:lang.noun.line'
  }
}

const locales = {
  en: {
    custom: {
      stop: {
        noEstimates: 'No estimates',
        noSchedules: 'No schedules available'
      }
    },
    lang: {
      preposition: {
        with: 'with'
      },
      verb: {
        filter: 'filter'
      },
      noun: {
        stop: 'stop | stops',
        line: 'Line | Lines',
        destination: 'destination',
        minute: 'minute | minutes'
      },
      meta: {
        loading: 'Loading'
      }
    }
  },
  es: {
    custom: {
      stop: {
        noEstimates: 'Sin estimaciones',
        noSchedules: 'No hay horarios disponibles'
      }
    },
    lang: {
      preposition: {
        with: 'con'
      },
      verb: {
        filter: 'filtrar'
      },
      noun: {
        stop: 'parada | paradas',
        line: 'Línea | Líneas',
        destination: 'destino',
        minute: 'minuto | minutos'
      },
      meta: {
        loading: 'Cargando'
      }
    }
  }
}

export default new VueI18n({
  locale: navigator.language.split('-')[0],
  defaultLocale: 'en',
  messages: mapValues(locales, (lang) => extend(lang, messages))
})
