import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { mount } from 'avoriaz'
import i18n from '@/config/i18n'
import Stop from '@/modules/stops/components/Stop.vue'

Vue.use(VueI18n)

describe('LineSchedule', () => {
  it('should render the component without schedules', () => {
    const wrapper = mount(Stop, {
      i18n,
      propsData: {
        stop: {
          title: 'foo',
          lines: [
            '23', 'Ci2'
          ]
        }
      }
    })

    expect(wrapper.find('.stop-name')[0].text().trim()).to.equal('foo')
    expect(wrapper.find('.stop-lines')[0].text()).to.contain('23, Ci2')
    expect(wrapper.find('.stop-schedules')[0]).to.be.undefined
  })

  it('should render the component with loading message if schedules are loading', () => {
    const wrapper = mount(Stop, {
      i18n,
      propsData: {
        stop: {
          title: 'foo',
          lines: [
            '23', 'Ci2'
          ]
        },
        selected: true
      }
    })

    expect(wrapper.find('.stop-schedules .loading')[0]).to.be.defined
  })

  it('should render the component with schedules', () => {
    const wrapper = mount(Stop, {
      i18n,
      propsData: {
        stop: {
          title: 'foo',
          lines: [
            '23', 'Ci2'
          ]
        },
        selected: true,
        details: {
          schedule: [
            {
              id: 'foo'
            }, {
              id: 'bar'
            }
          ]
        }
      }
    })

    expect(wrapper.find('.stop-schedule-list .stop-schedule-item')).to.have.length(2)
  })

  it('should render the component with empty message if no schedules', () => {
    const wrapper = mount(Stop, {
      i18n,
      propsData: {
        stop: {
          title: 'foo',
          lines: [
            '23', 'Ci2'
          ]
        },
        selected: true,
        details: {
          schedule: []
        }
      }
    })

    expect(wrapper.find('.stop-schedule-list .stop-schedule-item')).to.have.length(0)
    expect(wrapper.find('.empty')).to.be.defined
  })

  it('should trigger toggle event', () => {
    const wrapper = mount(Stop, {
      i18n,
      propsData: {
        stop: {
          title: 'foo',
          lines: [
            '23', 'Ci2'
          ]
        }
      }
    })
    const spy = sinon.spy(wrapper.vm, '$emit')

    wrapper.find('.stop-header')[0].trigger('click')

    expect(spy).to.have.been.called
  })
})
