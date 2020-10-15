<template>
<div>
    <h1>Welcome to Todo 1.0</h1>

    <div class="todo-list-container">
        <div class="input-ext">
            <input v-model="entry" @keyup.enter="add" /><br>
            {{ entry }}
        </div>
        <ul>
            <li v-for="(item, i) in todoList" :key="i"><strong>{{i+1}}.</strong> &nbsp;&nbsp;{{ item }}<span class="delete-btn" @click="remove(i)"> x </span></li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
    name: "Todo",
    data: () => ({
        entry: null,
        todoList: []
    }),
    methods: {
        add: function () {
            if (this.entry) {
                this.todoList.push(this.upper())
            }
            this.entry = null
        },
        remove: function (i) {
            this.todoList.splice(i, 1)
        },

        upper: function () {
            var x = this.entry.split("")
            x[0] = x[0].toUpperCase()

            return x.join("");
        }

    },
}
</script>

<style>
.todo-list-container {
    margin: 0px 20%;
    background: white;
    overflow: hidden;
}

.todo-list-container input {
    display: inline-block;
    width: inherit;
    border: 0px;
    padding: 0px 30px;
    height: 50px;
}

.todo-list-container input:hover {
    background: pink;
}

.todo-list-container input:focus {
    border: 0px;
}

.todo-list-container ul {
    list-style: none;
    background: white;
    padding: 0px;
    margin: 0px;
}

.todo-list-container ul li {
    position: relative;
    padding: 10px 30px;
    text-align: left;
    color: black;
}

.input-ext {
    background: white;
}

.input-ext input {
    width: 90%;
}

.delete-btn {
    top: 0px;
    width: 40px;
    position: absolute;
    display: inline-block;
    right: 0px;
    padding: 5px;
    color: white;
    background-color: orangered;
}
</style>
