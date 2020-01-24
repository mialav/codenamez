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
    categories: ["food", "animal", "bird", "dinner", "meat"]
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
    categories: ["food", "fruit", "animal", "bird"]
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
    categories: ["nature", "liquid", "water"]
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
    categories: ["animal", "pet", "mammal"]
  },
  {
    word: "cat",
    categories: ["animal", "pet", "mammal", "feline"]
  },
  {
    word: "fish",
    categories: ["animal", "pet", "nature", "food", "water", "meat"]
  },
  {
    word: "giraffe",
    categories: ["animal", "mammal", "nature"]
  },
  {
    word: "lion",
    categories: ["animal", "predator", "mammal", "feline", "nature"]
  },
  {
    word: "tiger",
    categories: ["animal", "predator", "mammal", "feline", "nature"]
  },
  {
    word: "penguin",
    categories: ["animal", "bird", "nature"]
  },
  {
    word: "mouse",
    categories: ["animal", "nature", "pet", "pest", "mammal", "rodent"]
  },
  {
    word: "rat",
    categories: ["animal", "nature", "pet", "pest", "mammal", "rodent"]
  },
  {
    word: "snake",
    categories: ["animal", "nature", "pet", "predator"]
  },
  {
    word: "cow",
    categories: ["animal", "mammal"]
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
    categories: ["person", "family", "parent", "mammal", "female"]
  },
  {
    word: "father",
    categories: ["person", "family", "parent", "mammal", "male"]
  },
  {
    word: "son",
    categories: ["person", "family", "mammal", "male", "child"]
  },
  {
    word: "daughter",
    categories: ["person", "family", "mammal", "female", "child"]
  },
  {
    word: "basil",
    categories: ["food", "plant", "herb", "spice"]
  },
  {
    word: "mint",
    categories: ["food", "plant", "herb", "spice", "color"]
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
    categories: ["geography", "country", "europe", "scandinavia", "place", "location"]
  },
  {
    word: "Sweden",
    categories: ["geography", "country", "europe", "scandinavia", "place", "location"]
  },
  {
    word: "Germany",
    categories: ["geography", "country", "europe", "place", "location"]
  },
  {
    word: "France",
    categories: ["geography", "country", "europe", "place", "location"]
  },
  {
    word: "China",
    categories: ["geography", "country", "asia", "place", "location"]
  },
  {
    word: "USA",
    categories: ["geography", "country", "place", "location", "america"]
  },
  {
    word: "Poland",
    categories: ["geography", "country", "europe"]
  },
  {
    word: "Estonia",
    categories: ["geography", "country", "europe", "place", "location"]
  },
  {
    word: "Helsinki",
    categories: ["geography", "city", "europe", "scandinavia", "place", "location"]
  },
  {
    word: "Stockholm",
    categories: ["geography", "city", "europe", "scandinavia", "place", "location"]
  },
  {
    word: "Norway",
    categories: ["geography", "country", "europe", "scandinavia", "place", "location"]
  },
  {
    word: "Oslo",
    categories: ["geography", "city", "europe", "scandinavia", "place", "location"]
  },
  {
    word: "Berlin",
    categories: ["geography", "city", "europe", "germany", "place", "location"]
  },
  {
    word: "Munich",
    categories: ["geography", "city", "europe", "germany", "place", "location"]
  },
  {
    word: "Hamburg",
    categories: ["geography", "city", "europe", "germany", "place", "location"]
  },
  {
    word: "Tallinn",
    categories: ["geography", "city", "europe", "place", "location"]
  },
  {
    word: "Paris",
    categories: ["geography", "city", "europe", "place", "location"]
  },
  {
    word: "Shanghai",
    categories: ["geography", "city", "asia", "place", "location"]
  },
  {
    word: "Tokyo",
    categories: ["geography", "city", "asia", "place", "location"]
  },
  {
    word: "Bangkok",
    categories: ["geography", "city", "asia", "place", "location"]
  },
  {
    word: "ant",
    categories: ["animal", "insect", "nature", "pest"]
  },
  {
    word: "wasp",
    categories: ["animal", "insect", "nature"]
  },
  {
    word: "beetle",
    categories: ["animal", "insect", "nature"]
  },
  {
    word: "butterfly",
    categories: ["animal", "insect", "nature"]
  },
  {
    word: "moth",
    categories: ["animal", "insect", "nature", "pest"]
  },
  {
    word: "cricket",
    categories: ["animal", "insect", "nature"]
  },
  {
    word: "ostrich",
    categories: ["animal", "bird"]
  },
  {
    word: "pigeon",
    categories: ["animal", "bird", "nature"]
  },
  {
    word: "squirrel",
    categories: ["animal", "mammal", "rodent", "nature"]
  },
  {
    word: "hamster",
    categories: ["animal", "mammal", "rodent", "pet"]
  },
  {
    word: "owl",
    categories: ["animal", "bird", "predator", "nature"]
  },
  {
    word: "sister",
    categories: ["person", "mammal", "family", "sibling", "female"]
  },
  {
    word: "brother",
    categories: ["person", "mammal", "family", "sibling", "male"]
  },
  {
    word: "lime",
    categories: ["food", "fruit", "citrus", "color"]
  },
  {
    word: "mandarin",
    categories: ["food", "fruit", "citrus", "language"]
  },
  {
    word: "cousin",
    categories: ["person", "family", "mammal"]
  },
  {
    word: "aunt",
    categories: ["person", "family", "mammal", "female"]
  },
  {
    word: "uncle",
    categories: ["person", "family", "mammal", "male"]
  },
  {
    word: "peach",
    categories: ["fruit", "food", "color"]
  },
  {
    word: "platypus",
    categories: ["animal", "mammal", "nature"]
  },
  {
    word: "Finnish",
    categories: ["language", "nationality", "europe"]
  },
  {
    word: "German",
    categories: ["language", "nationality", "europe"]
  },
  {
    word: "French",
    categories: ["language", "nationality", "europe"]
  },
  {
    word: "American",
    categories: ["nationality", "america"]
  },
  {
    word: "English",
    categories: ["language", "nationality", "europe"]
  },
  {
    word: "cactus",
    categories: ["plant", "nature"]
  },
  {
    word: "carrot",
    categories: ["food", "vegetable"]
  },
  {
    word: "scorpion",
    categories: ["animal", "predator", "nature"]
  },
  {
    word: "hamburger",
    categories: ["food", "dinner"]
  },
  {
    word: "chips",
    categories: ["food", "snack"]
  },
  {
    word: "yogurt",
    categories: ["food", "breakfast", "dairy"]
  },
  {
    word: "butter",
    categories: ["food", "dairy"]
  },
  {
    word: "chocolate",
    categories: ["food", "dessert", "candy"]
  },
  {
    word: "licorice",
    categories: ["food", "dessert", "candy"]
  },
  {
    word: "liquor",
    categories: ["liquid", "drink", "alcohol"]
  },
  {
    word: "Canadian",
    categories: ["nationality", "america"]
  },
  {
    word: "dolphin",
    categories: ["animal", "mammal", "nature", "water"]
  },
  {
    word: "ocean",
    categories: ["water", "nature", "liquid"]
  },
  {
    word: "whale",
    categories: ["water", "nature", "mammal", "animal"]
  },
  {
    word: "shark",
    categories: ["animal", "water", "nature", "predator"]
  }
];
