<!--FIRST VARIATION OF TODO LIST-->
<!-- 1) add new todos -->
<!-- 2) delete todos -->
<!-- 3) click on a todo will toggle between completed / uncomplete -->
<!-- 4) buttons (show all completed, show all uncompleted, show all)
to filter completed & non completed todos -->

<template>
  <div class="todo">
    <p id="description">This is my Todo list</p>
    <form action="">
      <div>
        <input v-model="newItem" v-on:keyup.enter="addItem" class="userInput" type="text" placeholder="Enter task">
      </div>
    </form>
    <ol>
      <li v-for="(item, i) in items" v-bind:key="i" v-bind:style="{textDecoration: item.completed ? 'line-through' : 'none' }" v-if="checkSort(item)">
        <span v-on:click="toggleCompleted(i)">{{ item.task }}</span> <button v-on:click="deleteItem(i)">Delete</button>
      </li>
    </ol>
    <div>
      <button v-on:click="toggleSort">Sort</button>
      <button v-on:click="toggleClear">Clear</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'todo',
  data: function data() {
    return {
      newItem: '',
      items: [
        { task: "something", completed: false },
      ],
      sortType: null,
    };
  },
  computed: {
  },
  methods: {
    addItem: function addItem() {
      this.items.push({ task: this.newItem, completed: false });
      this.newItem = '';
    },
    deleteItem: function deleteItem(index) {
      this.items.splice(index, 1);
    },
    toggleCompleted: function toggleCompleted(index) {
      this.items[index].completed = !this.items[index].completed;
    },
    toggleSort: function toggleSort() {
      this.sortType = this.sortType === 'completed' ? 'uncompleted' : 'completed';
    },
    toggleClear: function toggleClear() {
      this.sortType = null;
    },
    checkSort: function checkSort(item) {
      if (this.sortType === null) {
        return true;
      } else if (this.sortType === "completed" && item.completed) {
        return true;
      } else if (this.sortType === "uncompleted" && !item.completed) {
        return true;
      }

      return false;
    },
  },
};
</script>

<style lang="scss" scoped>

li {
  text-align: left;
}

.todo {
  background-color: #D3D3D3;
  border-radius: 5px;
  border: 1px solid gray;
  position: relative;
  z-index: 1;
}

#description {
  text-align: left;
  font-weight: bold;
  font-size: 30px;
  padding: 10px;
  margin: 0px;
  position: relative;
  z-index: 2;
}

ul {
  margin: 0px;
}

.userInput {
  display: block;
  text-align: left;
  margin-left: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  height: 30px;
  width: 25%;
  font-family: sans-serif;
  font-size: 20px;
  position: relative;
  z-index: 3;
}

::placeholder {
  color: #3A3A3A;
}

.deleteButton {
  position: fixed;
  left: 350px;
  top: 160px;
}

</style>


<!--SECOND VARIATION OF TODO LIST
<template>
  <div class="todo">
    <p id="description">This is my Todo list</p>
    <form action="">
      <div>
        <input v-model="newItem" v-on:keyup.enter="addItem" class="userInput" type="text" placeholder="Enter task">
      </div>
    </form>
    <ol>
      <li v-for="(item, i) in filteredItems" v-bind:key="i" v-bind:style="{textDecoration: item.completed ? 'line-through' : 'none' }">
        <span v-on:click="toggleCompleted(i)">{{ item.task }}</span> <button v-on:click="deleteItem(i)">Delete</button>
      </li>
    </ol>
    <div>
      <button v-on:click="toggleSort">Sort</button>
      <button v-on:click="toggleClear">Clear</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'todo',
  data: function data() {
    return {
      newItem: '',
      items: [
        { task: "something", completed: false },
      ],
      sortType: null,
    };
  },
  computed: {
    filteredItems: function filteredItems() {
      if (this.sortType === 'completed') {
        return this.items.filter(item => item.completed);
      } else if (this.sortType === 'uncompleted') {
        return this.items.filter(item => !item.completed);
      }

      return this.items;
    },
  },
  methods: {
    addItem: function addItem() {
      this.items.push({ task: this.newItem, completed: false });
      this.newItem = '';
    },
    deleteItem: function deleteItem(index) {
      this.items.splice(index, 1);
    },
    toggleCompleted: function toggleCompleted(index) {
      this.items[index].completed = !this.items[index].completed;
    },
    toggleSort: function toggleSort() {
      this.sortType = this.sortType === 'completed' ? 'uncompleted' : 'completed';
    },
    toggleClear: function toggleClear() {
      this.sortType = null;
    },
  },
};
</script>

<style lang="scss">

li {
  text-align: left;
}

.todo {
  background-color: #D3D3D3;
  border-radius: 5px;
  border: 1px solid gray;
  position: relative;
  z-index: 1;
}

#description {
  text-align: left;
  font-weight: bold;
  font-size: 30px;
  padding: 10px;
  margin: 0px;
  position: relative;
  z-index: 2;
}

ul {
  margin: 0px;
}

.userInput {
  display: block;
  text-align: left;
  margin-left: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  height: 30px;
  width: 25%;
  font-family: sans-serif;
  font-size: 20px;
  position: relative;
  z-index: 3;
}

::placeholder {
  color: #3A3A3A;
}

.deleteButton {
  position: fixed;
  left: 350px;
  top: 160px;
}

</style>
-->

