<template>
  <div id="list">
    <b-form-input v-model="newtodo"></b-form-input>
    <b-btn variant="success" @click="addTodo">新增</b-btn>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newtodo: ''
    }
  },
  methods: {
    addTodo () {
      this.$store.commit('addTodo', this.newtodo)
    }
  }
}
</script>
