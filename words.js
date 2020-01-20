let words = [
  { word: "pizza", categories: ["food", "dinner"] },
  {
    word: "pasta",
    categories: ["food", "dinner"]
  },
  {
    word: "noodles",
    categories: ["food", "dinner"]
  },
  {
    word: "ice cream",
    categories: ["food", "dessert", "dairy"]
  },
  {
    word: "lasagne",
    categories: ["food", "dinner"]
  },
  {
    word: "egg",
    categories: ["food", "nature", "breakfast"]
  },
  {
    word: "chicken",
    categories: ["food", "animal", "bird", "dinner"]
  },
  {
    word: "soup",
    categories: ["food", "liquid", "dinner"]
  },
  {
    word: "salad",
    categories: ["food", "vegetable", "dinner"]
  },
  {
    word: "pie",
    categories: ["food", "dessert"]
  },
  {
    word: "cake",
    categories: ["food", "dessert"]
  },
  {
    word: "pancake",
    categories: ["food", "breakfast", "dessert"]
  },
  {
    word: "coffee",
    categories: ["drink", "liquid", "breakfast"]
  },
  {
    word: "tea",
    categories: ["drink", "liquid", "breakfast"]
  },
  {
    word: "soda",
    categories: ["drink", "liquid"]
  },
  {
    word: "water",
    categories: ["drink", "liquid", "nature"]
  },
  {
    word: "lemon",
    categories: ["food", "fruit", "citrus"]
  },
  {
    word: "juice",
    categories: ["drink", "liquid"]
  },
  {
    word: "orange",
    categories: ["food", "fruit", "color", "citrus"]
  },
  {
    word: "apple",
    categories: ["food", "fruit"]
  },
  {
    word: "kiwi",
    categories: ["food", "fruit"]
  },
  {
    word: "banana",
    categories: ["food", "fruit"]
  },
  {
    word: "pear",
    categories: ["food", "fruit"]
  },
  {
    word: "cucumber",
    categories: ["food", "vegetable"]
  },
  {
    word: "tomato",
    categories: ["food", "fruit"]
  },
  {
    word: "potato",
    categories: ["food", "vegetable"]
  },
  {
    word: "celery",
    categories: ["food", "vegetable"]
  },
  {
    word: "tree",
    categories: ["nature", "plant"]
  },
  {
    word: "flower",
    categories: ["nature", "plant"]
  },
  {
    word: "bee",
    categories: ["animal", "nature", "insect"]
  },
  {
    word: "river",
    categories: ["nature", "liquid"]
  },
  {
    word: "forest",
    categories: ["nature"]
  },
  {
    word: "blue",
    categories: ["color"]
  },
  {
    word: "red",
    categories: ["color"]
  },
  {
    word: "pink",
    categories: ["color"]
  },
  {
    word: "purple",
    categories: ["color"]
  },
  {
    word: "green",
    categories: ["color"]
  },
  {
    word: "grey",
    categories: ["color"]
  },
  {
    word: "dog",
    categories: ["animal", "pet"]
  },
  {
    word: "cat",
    categories: ["animal", "pet"]
  },
  {
    word: "fish",
    categories: ["animal", "pet", "nature"]
  },
  {
    word: "giraffe",
    categories: ["animal"]
  },
  {
    word: "lion",
    categories: ["animal"]
  },
  {
    word: "tiger",
    categories: ["animal"]
  },
  {
    word: "penguin",
    categories: ["animal", "bird"]
  },
  {
    word: "mouse",
    categories: ["animal", "nature", "pet", "pest"]
  },
  {
    word: "rat",
    categories: ["animal", "nature", "pet", "pest"]
  },
  {
    word: "snake",
    categories: ["animal", "nature", "pet"]
  },
  {
    word: "cow",
    categories: ["animal", "nature"]
  },
  {
    word: "beer",
    categories: ["drink", "liquid", "alcohol"]
  },
  {
    word: "wine",
    categories: ["drink", "liquid", "alcohol"]
  },
  {
    word: "cereal",
    categories: ["food", "breakfast"]
  },
  {
    word: "toast",
    categories: ["food", "breakfast"]
  },
  {
    word: "mother",
    categories: ["person", "family", "parent"]
  },
  {
    word: "father",
    categories: ["person", "family", "parent"]
  },
  {
    word: "son",
    categories: ["person", "family"]
  },
  {
    word: "daughter",
    categories: ["person", "family"]
  },
  {
    word: "basil",
    categories: ["food", "plant", "herb", "spice"]
  },
  {
    word: "mint",
    categories: ["food", "plant", "herb", "spice"]
  },
  {
    word: "coriander",
    categories: ["food", "plant", "herb", "spice"]
  },
  {
    word: "cinnamon",
    categories: ["food", "spice"]
  },
  {
    word: "pepper",
    categories: ["food", "vegetable", "spice"]
  },
  {
    word: "chili",
    categories: ["food", "plant", "spice"]
  },
  {
    word: "milk",
    categories: ["drink", "liquid", "dairy"]
  },
  {
    word: "Finland",
    categories: ["geography", "country", "Europe"]
  },
  {
    word: "Sweden",
    categories: ["geography", "country", "Europe"]
  },
  {
    word: "Germany",
    categories: ["geography", "country", "Europe"]
  },
  {
    word: "France",
    categories: ["geography", "country", "Europe"]
  },
  {
    word: "China",
    categories: ["geography", "country", "Asia"]
  },
  {
    word: "USA",
    categories: ["geography", "country"]
  },
  {
    word: "Poland",
    categories: ["geography", "country", "Europe"]
  },
  {
    word: "Estonia",
    categories: ["geography", "country", "Europe"]
  },
  {
    word: "Helsinki",
    categories: ["geography", "country", "Europe"]
  },
  {
    word: "Stockholm",
    categories: ["geography", "city", "Europe"]
  },
  {
    word: "Berlin",
    categories: ["geography", "city", "Europe"]
  },
  {
    word: "Munich",
    categories: ["geography", "city", "Europe"]
  },
  {
    word: "Hamburg",
    categories: ["geography", "city", "Europe"]
  },
  {
    word: "Tallinn",
    categories: ["geography", "city", "Europe"]
  },
  {
    word: "Paris",
    categories: ["geography", "city", "Europe"]
  },
  {
    word: "Shanghai",
    categories: ["geography", "city", "Asia"]
  },
  {
    word: "Tokyo",
    categories: ["geography", "city", "Asia"]
  },
  {
    word: "Bangkok",
    categories: ["geography", "city", "Asia"]
  }
];
