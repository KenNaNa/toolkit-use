import { CreateElement } from 'vue/types'
import { VNodeChildren } from 'vue/types/vnode'
// all 1000ms cubic-bezier(0.250, 0.100, 0.250, 1.000)
// all 1000ms cubic-bezier(0.470, 0.000, 0.745, 0.715)
// all 1000ms cubic-bezier(0.250, 0.460, 0.450, 0.940)
// all 1000ms cubic-bezier(0.215, 0.610, 0.355, 1.000)
// all 1000ms cubic-bezier(0.390, 0.575, 0.565, 1.000)
const transitionStyle = 'all 1000ms cubic-bezier(0.250, 0.100, 0.250, 1.000)'
interface IVNodeChildren {
  children: VNodeChildren
}
const Transition = {
  beforeEnter(el: HTMLElement) {
    el.style.transition = transitionStyle
    // if (!el.dataset) el.dataset = {}

    el.style.height = 0 + 'px'
  },

  enter(el: HTMLElement) {
    if (el.scrollHeight !== 0) {
      el.style.height = `${el.scrollHeight}px`
    } else {
      el.style.height = ''
    }
    el.style.overflow = 'hidden'
  },

  afterEnter(el: HTMLElement) {
    el.style.transition = ''
    el.style.height = ''
  },

  beforeLeave(el: HTMLElement) {
    // if (!el.dataset) el.dataset = {}
    el.style.height = `${el.scrollHeight}px`
    el.style.overflow = 'hidden'
  },

  leave(el: HTMLElement) {
    if (el.scrollHeight !== 0) {
      el.style.transition = transitionStyle
      el.style.height = 0 + 'px'
    }
  },

  afterLeave(el: HTMLElement) {
    el.style.transition = ''
    el.style.height = ''
  },
}

export default {
  name: 'CollapseTransition',
  functional: true,
  render(h: CreateElement, { children }: IVNodeChildren) {
    const data = {
      on: Transition,
    }
    return h('transition', data, children)
  },
}
