import * as express from 'express';
import { Application } from 'express';
import { getPizzas, getTopping } from './get-data.route';
import { createPizza } from './create-data.route';
import { updatePizza } from './update-data.route';
import { deletePizza } from './delete-data.route';

const bodyParser = require('body-parser');
const app: Application = express();

app.use(bodyParser.json());

app.route('/api/toppings').get(getTopping);
app.route('/api/pizzas').get(getPizzas);
app.route('/api/pizzas').post(createPizza);
app.route('/api/pizzas/:id').put(updatePizza);
app.route('/api/pizzas/:id').delete(deletePizza);

const httpServer = app.listen(9000, () => {
    console.log('HTTP REST API Server running at http://localhost:' + httpServer.address().port);
});
