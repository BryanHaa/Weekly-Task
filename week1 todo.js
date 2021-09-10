new Vue({
el: "#app",
data: {
	todos: [
  	{ text: "Task 1", done: true},
    { text: "Task 2", done: true},
    { text: "Task 3", done: false},
    { text: "Task 4", done: false}
  ]
	},
	methods: {
	myToggle: function(todo){
		todo.done = !todo.done
	}
	}
})
