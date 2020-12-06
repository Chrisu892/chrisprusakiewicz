export default function ({ store }) {
  if (process.client) {
    store.app.router.beforeEach((to, from, next) => {
      const elems = document.querySelectorAll('.animate')

      Array.prototype.forEach.call(elems, (el) => {
        el.classList.add('animate-leave')
      })

      setTimeout(() => {
        next()

        Array.prototype.forEach.call(elems, (el) => {
          el.classList.remove('animate-leave')
        })
      }, 500)
    })
  }
}