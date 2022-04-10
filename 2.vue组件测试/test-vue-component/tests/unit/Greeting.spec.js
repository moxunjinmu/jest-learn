import { mount } from "@vue/test-utils";
import Greeting from '../../src/components/Greeting.vue'

describe('Greeting.vue', ()=> {
  it('display', () => {
    const wrapper = mount(Greeting)
    console.log("wrapper", wrapper.text());
    // 验证 断言
    // toMatch -> 包含关系
    expect(wrapper.text()).toMatch('vue and tdd')
  })
})