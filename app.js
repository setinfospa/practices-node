import express from 'express';
import { Todo } from './controller.js';

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/todos', async (req, res) => {
	const todos = await new Todo().getTodos();
	res.json(todos);
});

app.get('/todos/:id', async (req, res) => {
	try {
		const todo = await new Todo().getTodoById(req.params.id);
		res.json(todo);
	} catch (error) {
		res.json({ msg: error });
	}
});

app.delete('/todos/:id', async (req, res) => {
	try {
		const isDeleted = await new Todo().deleteById(req.params.id);
		if (!isDeleted) {
			res.json({ msg: 'Todo not found' });
		}
		res.json({ msg: 'Todo deleted successfully' });
	} catch (error) {
		res.json({ msg: error });
	}
});

app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}!`);
});
