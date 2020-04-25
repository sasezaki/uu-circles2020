import { shallowMount } from '@vue/test-utils'
import GithubIcon from '@/components/atoms/icons/GithubIcon'

describe('GithubIcon', () => {
  let wrapper

  afterEach(() => {
    wrapper.destroy()
  })

  it('Vue instanceであるか(正常系)', () => {
    wrapper = shallowMount(GithubIcon, {
      propsData: {
        href: 'https://example.com',
        width: 50
      }
    })
    expect(wrapper.isVueInstance).toBeTruthy()
    expect(wrapper.props().href).toBe('https://example.com')
    expect(wrapper.props().width).toBe(50)
  })

  it('propsのwidthがStringである(正常系)', () => {
    wrapper = shallowMount(GithubIcon, {
      propsData: {
        href: 'https://example.com',
        src: '/test.png',
        width: '50px'
      }
    })
    expect(wrapper.isVueInstance).toBeTruthy()
    expect(wrapper.props().href).toBe('https://example.com')
    expect(wrapper.props().src).toBe('/test.png')
    expect(wrapper.props().width).toBe('50px')
    expect(wrapper.vm.iconSrc).toBe('/test.png')
  })
})