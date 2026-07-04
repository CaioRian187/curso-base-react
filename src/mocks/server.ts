import { createServer, Model } from 'miragejs'

createServer({
    models: {
        todos: Model
    },
    seeds(server) {
        const todosAsString = localStorage.getItem('MOCK_TODOS');

        if (todosAsString === null) return;
        const todos = JSON.parse(todosAsString);

        todos.forEach((todo: any) => server.schema.create('todos', todo));
    },
    routes() {
        this.namespace = 'api';

        this.get('/todos', (schema) => {
            return schema.all('todos');
        });

        this.post('/todos', (schema, request) => {
            const attrs = JSON.parse(request.requestBody);

            const todo = schema.create('todos', attrs);

            const todosClean = schema.all('todos').models.map(t => t.attrs);
            localStorage.setItem("MOCK_TODOS", JSON.stringify(todosClean));

            return todo;
        });

        this.put('/todos/:id', (schema, request) => {
            const id = request.params.id;
            const newAttrs = JSON.parse(request.requestBody);

            const todo = schema.find('todos', id);
            todo?.update(newAttrs);

            const todosClean = schema.all('todos').models.map(t => t.attrs);
            localStorage.setItem("MOCK_TODOS", JSON.stringify(todosClean));

            return {};
        });

        this.delete('/todos/:id', (schema, request) => {
            const id = request.params.id;

            const todo = schema.find('todos', id);
            todo?.destroy();

            const todosClean = schema.all('todos').models.map(t => t.attrs);
            localStorage.setItem("MOCK_TODOS", JSON.stringify(todosClean));

            return {};
        });
    }
})