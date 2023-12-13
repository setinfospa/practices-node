import { todos } from './data.js';

export class Todo {
	getTodos() {
		return new Promise((resolve, reject) => {
			resolve(todos);
		});
	}

	getTodoById(id) {
		return new Promise((resolve, reject) => {
			const todo = todos.find((todo) => todo.id === parseInt(id));
            if(!todo){
                reject('Todo not found');
            }
			resolve(todo);
		});
	}

	deleteById(id) {
		return new Promise((resolve, reject) => {
			const todo = todos.find((todo) => todo.id === parseInt(id));
			if(!todo){
				reject('Todo not found');
			}
			const index = todos.indexOf(todo);
			todos.splice(index, 1);
			resolve(true);
		});
	}
}
