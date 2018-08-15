const broadcast = function (componentName, eventName, params) {
  this.$children.forEach(child => {
    let name = child.$options.name
    if (name === componentName) {
      this.$emit.call(child, eventName, params)
    } else {
      broadcast.call(child, componentName, eventName, params)
    }
  })
}

const dispatch = function (componentName, eventName, params) {
  let parent = this.$parent || this.$root
  while(parent && parent.$options.name !== componentName) {
    parent = parent.$parent
  }
  parent ? parent.$emit.call(parent, eventName, params) : ''
}

export default {
  methods: {
    broadcast,
    dispatch
  }
}