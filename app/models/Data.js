import ItemF from './ItemF';

const burger = new ItemF(1, 'burger', "un sandwich composé d'une ou plusieurs galettes cuites de viande hachée , généralement du bœuf , placées à l'intérieur d'un petit pain ou d'un petit pain tranché . La galette peut être poêlée , grillée , fumée ou grillée à la flamme .", 'fast food', 1, 'burger', 4, true)
const pizza = new ItemF(2, 'pizza', "un savoureux plat d' italien origine composé d'une habituellement ronde, base aplatie de levain à base de blé pâte garnie de tomates, du fromage, et souvent d'autres ingrédients (comme les anchois , champignons, oignons, olives, ananas, viande, etc.) qui est ensuite cuite à haute température, traditionnellement dans un four à bois. ", 'fast food', 1, 'pizza', 4, false)
const tacos = new ItemF(3, 'tacos', " un traditionnel plat mexicain composé d'une petite taille d'une main maïs ou tortilla de blé garnie avec une garniture. La tortilla est ensuite pliée autour de la garniture et mangée à la main. Un taco peut être préparé avec une variété de garnitures, y compris du bœuf, du porc, du poulet, des fruits de mer, des légumes et du fromage, ce qui permet une grande polyvalence et une grande variété", 'fast food', 1, 'tacos', 3, false)
const kebab = new ItemF(4, 'kebab', "différentes viandes cuites plats , avec leurs origines dans la cuisine du Moyen - Orient . De nombreuses variantes sont populaires dans le monde.", 'fast food', 1, 'kebab', 4, true)
const poutine = new ItemF(5, 'poutine', "un plat qui comprend des frites et de fromage en grains Surmonté d'un brun sauce . Il est originaire de la province canadienne du Québec et est apparu à la fin des années 1950 dans la région du Centre-du-Québec .", 'fast food', 1, 'poutine', 5, true)
const sushi = new ItemF(6, 'sushi', "un plat japonais de riz vinaigré préparé, généralement avec du sucre et du sel, accompagnant une variété d'ingrédients, tels que des fruits de mer, souvent crus, et des légumes. Les styles de sushi et sa présentation varient considérablement, mais le seul ingrédient clé est le «riz à sushi»", 'fast food', 1, 'sushi', 5, true)

const listItems = [burger, pizza, tacos, kebab, poutine, sushi];

export default listItems;