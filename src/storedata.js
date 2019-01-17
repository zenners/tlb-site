// const streat = require('./img/locations/Maginhawa.jpg')
import streat from './img/locations/Maginhawa.jpg'
// const mega = require('./img/locations/Megamall.jpg')
// const glo = require('./img/locations/Glorietta.jpg')

const craftedSoda = {
  title: 'Crafted Sodas & Iced Teas',
  img: '',
  items: [
    {
      name: 'Housemade rootbeer float',
      desc: 'Sarsaparilla. Blue vanilla soft-serve ice cream.',
    },
    {
      name: 'Mixed Berries',
      desc: 'Mixed berries puree. Lemon. Lime.',
    },
    {
      name: 'Mango Coffee Soda',
      desc: 'Mango Puree. Lemon. Espresso Shot.',
    },
    {
      name: '	Mango Puree. Lemon. Espresso Shot.',
      desc: '	Mango Puree. Lemon. Espresso Shot.',
    },
    {
      name: 'Rose Iced Tea',
      desc: '	Home-brewed rose Ceylon black tea',
    },
    {
      name: 'Strawberry Lychee Iced Tea    ',
      desc: '	Home-brewed strawberry lychee Ceylon black tea    ',
    },
    {
      name: 'Soda Pop    ',
      desc: '	Mango puree. Vanilla. Strawberry popsicle    ',
    },
  ],
}

const hotbev = {
  title: 'Hot Beverages',
  img: '',
  items: [
    {
      name: 'Hot Chocolate',
      desc: '	Cocoa. Cotton candy sweetener.',
    },
    {
      name: 'Hot Matcha        ',
      desc: 'Matcha. Cotton candy sweetener',
    },
  ],
}

// Food

const riceBowl = {
  title: 'Afforda Bowl Rice Meals',
  img: '',
  items: [
    {
      name: 'Truffled Sisig',
      desc: 'Scrambled egg. Spiced onion rings. Garlic rice.',
    },
    {
      name: 'Sriracha Fried Chicken',
      desc: 'Coleslaw. Aioli sauce. Cilantro rice.',
    },
    {
      name: 'Sinigang Beef Sukiyaki',
      desc: 'Fried kangkong. Sinigang risotto rice.',
      price: '140',
    },
    {
      name: 'Beef Tapa',
      desc: 'Fried poached egg. Pico de gallo. Garlic rice.',
      price: '140',
    },
  ],
}
const appetizers = {
  title: 'Appetizers',
  img: '',
  items: [
    {
      name: 'Fried Mashed Potato Balls',
      desc: '	Nacho beef. Herbed sour cream shots.',
    },
    {
      name: 'Parmesan Fries',
      desc: '	Candied bacon. Chocolate sauce. Aioli dip.',
    },
  ],
}

const burgers = {
  title: 'Burgers',
  img: '',
  items: [
    {
      name: 'Teriyaki Fish',
      desc: 'Kani slaw. Parmesan shoestring potatoes.',
    },
    {
      name: 'Spicy Chicken Burger',
      desc: '	Coleslaw.  Parmesan shoestring potatos. ',
    },
  ],
}

const pastas = {
  title: 'Pastas',
  img: '',
  items: [
    {
      name: 'Bacon-Sisig Truffle Carbonara',
      desc: '	Shitake mushrooms. Parmesan. White truffle.',
    },
    {
      name: 'Spicy Corned Beef Aglio Olio',
      desc: 'Garlic oil. Parmesan. Shoestring potatoes.',
    },
  ],
}

const cakeShake = {
  title: 'Cake Shakes',
  img: '',
  items: [
    {
      name: 'The Carnival',
      desc: 'Butter cake. Caramel Popcorn. Caramel Syrup',
    },
    {
      name: 'Nut Interested',
      desc: 'Brownie. Peanut Butter. Chocolate Syrup',
    },
    { name: 'Doughfee', desc: 'Donut. Coffee', price: '140' },
  ],
}

const overShake = {
  title: 'Overshakes',
  img: '',
  items: [
    {
      name: 'Popshake',
      desc: 'Chocolate popsicle. Pistachios. Choco hazelnut spread',
    },
    {
      name: 'The Carousel',
      desc: 'Brownie. Peanut Butter. Chocolate Syrup',
    },
    {
      name: 'Bonfire',
      desc: 'Torched marshmallows. Graham crackers. Brownie.',
    },
    {
      name: 'A+',
      desc: 'Green apple. Graham & Peanut crust. Caramel syrup',
    },
    {
      name: 'Match-o',
      desc: 'Matcha. Crushed oreos. Chocolate cone shards',
    },
    {
      name: 'Cookie Jar',
      desc: 'Brown sugar cinnamon. Chocochip cookies. Chocolate syrup',
    },
    {
      name: 'Policeman',
      desc: 'Chocolate popcorn. Donut. Coffee',
    },
  ],
}

const spikedShake = {
  title: '18+ (Spiked Milkshakes)',
  img: '',
  items: [
    {
      name: 'Spiked Cookie',
      desc: 'Bailey’s. Coffee. Chocochip Cookies.',
    },
    {
      name: 'The Campfire',
      desc: 'Kahlua. Graham crackers. Torched marshmallows.',
    },
    {
      name: 'Swiss Missed',
      desc: 'Kahlua. Cocoa. Mini marshmallows. Chocolate Waf',
    },
    {
      name: 'Birthday Cake',
      desc: 'Vodka. Fruit loops. Strawberry. Sprinkles',
    },
  ],
}

const softserve = {
  title: 'Blue Vanilla Soft-serve',
  desc: 'Secret Menu(Cone or Sub-zero Cup)',
  img: '',
  items: [
    {
      name: 'Chocolate Breakfast Club',
      desc: '	Chocolate granola. Chocolate syrup',
    },
    {
      name: 'Strawberry Tropical Crunch',
      desc: '	Fruit loops cereal. Strawberry syr',
    },
    {
      name: 'Summer Camp Smores',
      desc: '	Torched marshmallows. Graham crackers. Chocolate syrup  ',
    },
    {
      name: 'Choco Caramel Movie Snack',
      desc: '	Chocolate & Caramel Popcorn. Caramel syrup  ',
    },
  ],
}

const cyo = {
  title: 'Craft Your Own Soft-Serve Bar',
  desc: 'Create your flavor',
  img: '',
  items: [
    {
      name: 'CYO Cup',
      desc: '',
    },
    {
      name: 'CYO Cone',
      desc: '',
    },
  ],
}

const frenchtoasts = {
  title: 'French Toast Cubes ',
  img: '',
  desc: 'Served with milk chocolate, white chocolate and caramel sauce',
  items: [
    { name: 'Double Chocolate', desc: '', price: '140' },
    { name: 'Classic Cinnamon', desc: '', price: '140' },
    { name: 'Sweet Cheese', desc: '', price: '140' },
    { name: 'Matcha Envy', desc: '', price: '140' },
    { name: 'Hot Cocoa', desc: '', price: '140' },
    { name: 'Coffee Fix', desc: '', price: '140' },
  ],
}

const sorbetoasts = {
  title: 'Sorbe-toasts',
  desc: 'French toasts a la mode',
  img: '',
  items: [
    {
      name: 'Honeybee Wheat Puf',
      desc: '	Honey wheat clusters with maple syr',
    },
    {
      name: 'Fun Fair Popcorn',
      desc: '	Chocolate & caramel popcorn mix with chocolate syr',
    },
    {
      name: 'Pride Hoops',
      desc: '	Fruit loops with strawberry syrup',
    },
    { name: 'Match-O', desc: 'Lorem Ipsum', price: '140' },
  ],
}

const data = [
  {
    page: 'Streat',
    store: 'Streat Maginhawa',
    location: "91 Maginhawa St. Brgy. Teachers' Village Quezon City",
    menu: [
      { category: 'Milk Shakes', items: [cakeShake, overShake, spikedShake] },
      { category: 'Soft Serve', items: [softserve, cyo] },
      { category: 'French Toast', items: [frenchtoasts, sorbetoasts] },
    ],
    path: '/streat',
    bg: streat,
  },
  {
    page: 'SM Megamall',
    store: 'SM Megamall',
    location: '4/F Megamall Fashion Hall',
    menu: [
      { category: 'Food', items: [appetizers, burgers, pastas, riceBowl] },
      { category: 'Drinks', items: [craftedSoda, hotbev] },
      { category: 'Milk Shakes', items: [cakeShake, overShake, spikedShake] },
      { category: 'Soft Serve', items: [softserve, cyo] },
      { category: 'French Toast', items: [frenchtoasts, sorbetoasts] },
    ],
    path: '/smmegamall',
    // bg: megamall,
  },
  {
    page: 'Glorietta 4',
    store: 'Glorietta',
    location: '3/F Glorietta 4, Ayala Center',
    menu: [
      { category: 'Milk Shakes', items: [cakeShake, overShake, spikedShake] },
      { category: 'Soft Serve', items: [softserve, cyo] },
      { category: 'French Toast', items: [frenchtoasts, sorbetoasts] },
    ],
    path: '/glorietta',
    // bg: glo,
  },
]

export default data
