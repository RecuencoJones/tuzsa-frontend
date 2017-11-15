import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { mount } from 'avoriaz'
import i18n from '@/config/i18n'
import LineSchedule from '@/modules/stops/components/LineSchedule.vue'

Vue.use(VueI18n)

describe('LineSchedule', () => {
  it('should render the component with times', () => {
    const wrapper = mount(LineSchedule, {
      i18n,
      propsData: {
        times: [
          1,
          5
        ]
      }
    })

    expect(wrapper.find('.line-schedule-list .line-schedule-item')).to.have.length(2)
    expect(wrapper.find('.times-empty')[0]).to.be.undefined
  })

  it('should render the component without times', () => {
    const wrapper = mount(LineSchedule, {
      i18n,
      propsData: {
        times: []
      }
    })

    expect(wrapper.find('.line-schedule-list .line-schedule-item')).to.have.length(0)
    expect(wrapper.find('.times-empty')[0]).to.be.defined
  })
})
