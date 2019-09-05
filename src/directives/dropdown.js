export default {
    bind(el, binding, vnode) {
        const handler = function() {
            return el.parentElement.classList.toggle('open')
        }

        const documentHandler = function(e) {
            const target = e.target

            if (target.isSameNode(el) || el.contains(target)) return
            el.parentElement.classList.remove('open')
        }

        el.addEventListener('click', handler, false)
        document.addEventListener('click', documentHandler, false)

        el.destroy = function() {
            el.removeEventListener('click', handler, false)
            document.removeEventListener('click', documentHandler, false)
            el.destroy = null
        }
    },
    unbind(el) {
        el.destroy()
    }
}