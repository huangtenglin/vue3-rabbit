import { useIntersectionObserver } from '@vueuse/core'

export const lazyPlugin = {
  install (app) {
    // 懒加载指令逻辑
    app.directive('img-lazy', {
      mounted (el, binding) {
        /**
         * el:指令被绑定的元素 img
         * binding:binding.value 指令等于后面被绑定的值
         */
        const { stop } = useIntersectionObserver(
          el,
          ([{ isIntersecting }], observerElement) => {
            console.log(isIntersecting)
            if (isIntersecting) {
              console.log(el.src, binding.value)
              el.src = binding.value
              stop()
            }
          },
        )
      }
    })
  }
}