import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { mount } from 'avoriaz'
import i18n from '@/config/i18n'
import StopSchedule from '@/modules/stops/components/StopSchedule.vue'

Vue.use(VueI18n)

describe('StopSchedule', () => {
  it('should render the component without times', () => {
    const wrapper = mount(StopSchedule, {
      i18n,
      propsData: {
        line: {
          id: 'test-stop',
          destination: 'foo',
          times: []
        }
      }
    })

    expect(wrapper.find('.stop-line-id')[0].text()).to.contain('test-stop')
    expect(wrapper.find('.stop-line-for')[0].text()).to.contain('foo')
    expect(wrapper.find('.line-schedule-list .line-schedule-item')).to.have.length(0)
  })

  it('should render the component with times', () => {
    const wrapper = mount(StopSchedule, {
      i18n,
      propsData: {
        line: {
          id: 'test-stop',
          destination: 'foo',
          times: [
            10,
            25
          ]
        }
      }
    })

    expect(wrapper.find('.stop-line-id')[0].text()).to.contain('test-stop')
    expect(wrapper.find('.stop-line-for')[0].text()).to.contain('foo')
    expect(wrapper.find('.line-schedule-list .line-schedule-item')).to.have.length(2)
  })
})
