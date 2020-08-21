import ItemF from './ItemF';

const burger = new ItemF(1, 'burger', 'description', 'fast food', 1, 'burger', 4, true)
const pizza = new ItemF(2, 'pizza', 'description', 'fast food', 1, 'pizza', 4, true)
const tacos = new ItemF(3, 'tacos', 'description', 'fast food', 1, 'tacos', 3, true)
const kebab = new ItemF(4, 'kebab', "différentes viandes cuites plats , avec leurs origines dans la cuisine du Moyen - Orient . De nombreuses variantes sont populaires dans le monde.", 'fast food', 1, 'kebab', 4, true)
const poutine = new ItemF(5, 'poutine', 'description', 'fast food', 1, 'poutine', 5, true)
const sushi = new ItemF(6, 'sushi', 'description', 'fast food', 1, 'sushi', 5, true)

const listItems = [burger, pizza, tacos, kebab, poutine, sushi];

export default listItems;