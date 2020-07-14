<template>
  <div id="list" class="w-100 overflow-auto">
    <div>
      <div class="h1 d-flex justify-content-center my-3">List</div>
      <b-container class="form-inline fluid">
          <b-form-input :type="type" v-model="newtodo" class="col-9"></b-form-input>
          <b-btn variant="success" class="col-3" @click="addTodo">新增</b-btn>
      </b-container>
      <b-table-simple striped :per-page="perPage" :current-page="currentPage" class="text-center mt-3">
      <b-thead>
        <b-tr>
          <b-th>事項</b-th>
          <b-th>動作</b-th>
        </b-tr>
      </b-thead>
      <draggable v-model="pagetodo" tag="tbody" v-bind="dragOption">
        <b-tr v-if="todos.length == 0">
          <b-td colspan="2">沒有資料</b-td>
        </b-tr>
        <b-tr v-else v-for="(todo, index) in pagetodo" :key="index">
          <b-td>
            <b-form-input v-model="todo.model" v-if="todo.edit"></b-form-input>
            <b-btn variant="link" class="text-danger" v-if="todo.edit" @click="cancelTodo(index)">
              <font-awesome-icon :icon="['fas', 'undo']"></font-awesome-icon>
            </b-btn>
            <b-btn variant="link" class="text-success" v-if="todo.edit" @click="saveTodo(index)">
              <font-awesome-icon :icon="['fas', 'save']"></font-awesome-icon>
            </b-btn>
            <span v-else>{{ todo.name }}</span>
          </b-td>
          <b-td>
            <b-btn variant="link" class="text-primary" @click="editTodo(index)">
              <font-awesome-icon :icon="['fas', 'pen']"></font-awesome-icon>
            </b-btn>
            <b-btn variant="link" class="text-danger" @click="delTodo(index)">
              <font-awesome-icon :icon="['fas', 'times']"></font-awesome-icon>
            </b-btn>
          </b-td>
        </b-tr>
      </draggable>
    </b-table-simple>
  </div>
  <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="my-table" id="pagination" align="center"></b-pagination>
  </div>
</template>

<script>
export default {
  data () {
    return {
      type: 'search',
      perPage: 4,
      currentPage: 1,
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
      if (this.newtodo.length > 0) {
        this.$store.commit('addTodo', this.newtodo)
        this.newtodo = ''
      }
    },
    delTodo (index) {
      this.$store.commit('delTodo', index)
    },
    editTodo (index) {
      this.$store.commit('editTodo', index)
    },
    cancelTodo (index) {
      this.$store.commit('cancelTodo', index)
    },
    saveTodo (index) {
      this.$store.commit('saveTodo', index)
    }
  },
  // 計算上面 html 的部分
  computed: {
    pagetodo: {
      get () {
        const start = (this.currentPage - 1) * this.perPage
        const end = this.currentPage * this.perPage
        return this.todos.slice(start, end)
      },
      set (value) {
        console.log(value)
        const start = (this.currentPage - 1) * this.perPage
        // const end = this.currentPage * this.perPage
        this.todos.splice(start, this.perPage, ...value)
      }
    },
    todos: {
      get () {
        return this.$store.getters.todos
      },
      set (value) {
        this.$store.commit('dragTodo', value)
      }
    },
    rows () {
      return this.$store.getters.todos.length
    }
  }
}
</script>
