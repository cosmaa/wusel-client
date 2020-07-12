import { shallowMount } from '@vue/test-utils'
import Example from '../../client/src/views/Example'

describe('TestExample', () => {
  const wrapper = shallowMount(Example)
  it('render select selected', () => {
    const selecttest = 'layout'
    const selected = Example.data().selected
    expect(selected).toMatch(selecttest)
  })
})
