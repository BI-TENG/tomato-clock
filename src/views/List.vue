<template>
  <div id="list">
    <b-form-input v-model="newtodo"></b-form-input>
    <b-btn variant="success" @click="addTodo">新增</b-btn>
    <b-table-simple>
      <b-thead>
        <b-tr>
          <b-th>事項</b-th>
          <b-th>動作</b-th>
        </b-tr>
      </b-thead>
      <draggable v-model="todos" tag="tbody" v-bind="dragOption">
        <b-tr v-if="todos.length == 0">
          <b-td colspan="2">沒有資料</b-td>
        </b-tr>
        <b-tr v-else v-for="(todo,index) in todos" :key="index">
          <b-td>{{todo.name}}</b-td>
          <b-td></b-td>
        </b-tr>
      </draggable>
    </b-table-simple>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newtodo: '',
      // 轉場效果
      dragOption: {
        animation: 200
      }
    }
  },
  // 放 function 的地方
  methods: {
    addTodo () {
      this.$store.commit('addTodo', this.newtodo)
    }
  },
  // 計算上面 html 的部分
  computed: {
    todos: {
      get () {
        return this.$store.getters.todos
      },
      set (value) {
        this.$store.commit('dragTodo', value)
      }
    }
  }
}
</script>
