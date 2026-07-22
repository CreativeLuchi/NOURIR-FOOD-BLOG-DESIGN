/* ==========================================================================
   nourir — Main JavaScript File
   ========================================================================== */

// 1. LOCAL DETAILED RECIPES DATABASE
const RECIPES_DB = {
  "tropical-tiger-nut-bowl": {
    id: "tropical-tiger-nut-bowl",
    title: "Tropical Tiger Nut Bowl",
    description: "A refreshing, gluten-free bowl combining ground tiger nuts, fresh coconut flakes, mango cubes, and passion fruit, drizzled with local honey.",
    prepTime: "6 mins",
    cookTime: "0 mins",
    totalTime: "6 mins",
    serves: "feeds 2",
    diet: "Gluten-Free, Plant-Based",
    badge: "Fast & Healthy",
    image: "Assets/image.png",
    ingredients: {
      "Base Ingredients": [
        "1.5 cups ground tiger nuts (Kunnu Aya pulp or flour)",
        "1/2 cup fresh coconut flakes",
        "1 ripe mango, cubed",
        "1 passion fruit, halved"
      ],
      "Toppings & Dressing": [
        "2 tbsp local honey or maple syrup",
        "1 tbsp chia seeds",
        "Fresh mint leaves for garnish"
      ],
      "Utensils You'll Need": [
        "Prep bowls",
        "Spoons",
        "Serving bowls"
      ]
    },
    instructions: [
      {
        step: 1,
        title: "Layer the Base",
        instruction: "Divide the ground tiger nuts evenly between two serving bowls as the base layer.",
        note: "If the tiger nut pulp is too dry, mix in 1-2 tablespoons of coconut milk to make it creamier."
      },
      {
        step: 2,
        title: "Add Tropical Fruits",
        instruction: "Top the tiger nut base with coconut flakes, fresh mango cubes, and scoop the passion fruit seeds on top.",
        note: "You can swap mangoes with papaya or pineapple depending on what is in season."
      },
      {
        step: 3,
        title: "Drizzle and Garnish",
        instruction: "Drizzle with honey or maple syrup, sprinkle chia seeds, and garnish with fresh mint leaves.",
        note: "Best served chilled!"
      }
    ]
  },
  "efo-riro-with-fufu": {
    id: "efo-riro-with-fufu",
    title: "Efo Riro with fufu",
    description: "A rich, savory Yoruba spinach stew cooked in a bleached palm oil base with locust beans (iru), bell peppers, and assorted healthy meats, served with fufu.",
    prepTime: "15 mins",
    cookTime: "25 mins",
    totalTime: "40 mins",
    serves: "feeds 1",
    diet: "Low Carb, Assorted Protein",
    badge: "Naija Classic",
    image: "Assets/efo.png",
    ingredients: {
      "Vegetables & Pepper Base": [
        "2 large bunches of fresh spinach (Efo Shoko or Tete), blanched and squeezed",
        "3 red bell peppers (Tatashe), coarsely blended",
        "1 scotch bonnet (Ata Rodo), coarsely blended",
        "1 medium onion, chopped"
      ],
      "Proteins & Seasoning": [
        "1 cup assorted cooked meats (shaki, beef, ponmo)",
        "1 dry fish or smoked fish, deboned",
        "3 tbsp bleached palm oil",
        "2 tbsp fermented locust beans (Iru)",
        "2 tbsp ground crayfish",
        "Salt and seasoning cubes to taste"
      ],
      "Utensils You'll Need": [
        "Sieve",
        "Cooking pot",
        "Wooden spoon",
        "Blender"
      ]
    },
    instructions: [
      {
        step: 1,
        title: "Prepare the Spinach",
        instruction: "Blanch the spinach in hot water for 1 minute, drain immediately in a sieve, and squeeze out all excess water.",
        note: "Removing excess water prevents the Efo Riro from becoming watery."
      },
      {
        step: 2,
        title: "Fry the Aromatics",
        instruction: "Heat palm oil in a pot, fry chopped onions and locust beans (Iru) until fragrant (approx. 2-3 minutes).",
        note: "Locust beans release a deeper flavor when fried in palm oil first."
      },
      {
        step: 3,
        title: "Cook the Pepper Base",
        instruction: "Add the blended pepper mix and fry for 10-12 minutes on medium heat until the water evaporates and oil rises to the top.",
        note: "Stir occasionally to prevent burning."
      },
      {
        step: 4,
        title: "Combine and Simmer",
        instruction: "Add the cooked meats, smoked fish, crayfish, seasoning cubes, and salt. Stir well and simmer for 5 minutes. Finally, add the blanched spinach, stir thoroughly, and turn off the heat after 2 minutes.",
        note: "Do not overcook the spinach so it retains its vibrant green color and nutrients."
      }
    ]
  },
  "seeded-oat-bread-loaf": {
    id: "seeded-oat-bread-loaf",
    title: "Seeded Oat Bread Loaf",
    description: "A hearty, dense bread packed with oats, chia, pumpkin, and sunflower seeds, high in fiber and perfect for a fit-fam breakfast toast.",
    prepTime: "15 mins",
    cookTime: "45 mins",
    totalTime: "1h",
    serves: "feeds 2",
    diet: "High Fiber, Plant-Based",
    badge: "Bake Special",
    image: "Assets/image-1 2.png",
    ingredients: {
      "Dry Ingredients": [
        "2 cups oat flour",
        "1 cup rolled oats",
        "1/2 cup mixed seeds (pumpkin, sunflower, chia, flaxseed)",
        "1 tsp baking powder",
        "1/2 tsp salt"
      ],
      "Wet Ingredients": [
        "1.5 cups warm water or almond milk",
        "2 tbsp maple syrup or honey",
        "2 tbsp coconut oil, melted"
      ],
      "Utensils You'll Need": [
        "9x5 Loaf pan",
        "Mixing bowls",
        "Parchment paper"
      ]
    },
    instructions: [
      {
        step: 1,
        title: "Mix Dry Ingredients",
        instruction: "In a large bowl, whisk together the oat flour, rolled oats, mixed seeds, baking powder, and salt.",
        note: "Reserve 1 tablespoon of mixed seeds to sprinkle on top of the loaf."
      },
      {
        step: 2,
        title: "Combine with Wet",
        instruction: "Pour the warm water, maple syrup, and melted coconut oil into the dry mixture. Stir until a thick batter forms.",
        note: "Let the batter sit for 10 minutes so the oats and chia seeds absorb the moisture."
      },
      {
        step: 3,
        title: "Bake",
        instruction: "Pour batter into a lined loaf pan, smooth the top, sprinkle the remaining seeds, and bake at 350°F (180°C) for 45 minutes until golden brown.",
        note: "Verify doneness by inserting a toothpick in the center; it should come out clean."
      }
    ]
  },
  "smoky-naija-jollof": {
    id: "smoky-naija-jollof",
    title: "Smoky Naija Jollof",
    description: "Classic West African party rice cooked in a rich, spicy tomato and red pepper base, steamed with foil to lock in that legendary smoky aroma.",
    prepTime: "15 mins",
    cookTime: "35 mins",
    totalTime: "50 mins",
    serves: "feeds 2",
    diet: "Flexitarian, Vegetarian Option",
    badge: "Naija Favourite",
    image: "Assets/jollof.png",
    ingredients: {
      "Base Ingredients": [
        "2 cups long-grain parboiled rice",
        "4 medium tomatoes",
        "2 red bell peppers (Tatashe)",
        "1 scotch bonnet pepper (Ata Rodo)",
        "1 medium onion"
      ],
      "Seasonings & Oil": [
        "1/3 cup vegetable oil",
        "3 tbsp tomato paste",
        "2 bay leaves",
        "1 tsp curry powder",
        "1 tsp dried thyme",
        "2 seasoning cubes",
        "Salt to taste"
      ],
      "Utensils You'll Need": [
        "Heavy-bottomed pot",
        "Blender",
        "Wooden spoon",
        "Aluminum foil (for that smoky steam trap!)"
      ]
    },
    instructions: [
      {
        step: 1,
        title: "Blend the Base",
        instruction: "Blend the tomatoes, red bell peppers, scotch bonnet pepper, and half of the onion with very little water until completely smooth.",
        note: "For best results, boil the blended pepper mix down to a thick paste to remove excess water before cooking."
      },
      {
        step: 2,
        title: "Fry the Tomato Base",
        instruction: "Heat the vegetable oil in a pot, add sliced onions, tomato paste, and fry for 5 minutes. Then add the blended pepper mix, bay leaves, curry powder, thyme, and seasoning cubes. Cover and cook on medium heat for 15-20 minutes until the oil separates to the top.",
        note: "Frying the base properly is the secret to a rich Jollof!"
      },
      {
        step: 3,
        title: "Cook the Rice",
        instruction: "Wash the parboiled rice thoroughly with warm water. Add the washed rice to the pot with a small amount of water or chicken stock (it should barely cover the rice). Stir well.",
        note: "Less is more when it comes to Jollof liquid—it should cook in steam, not boil!"
      },
      {
        step: 4,
        title: "Steam and Burn!",
        instruction: "Cover the pot tightly with aluminum foil first, then put the lid on. Cook on very low heat for 25-30 minutes until the rice is tender. Once cooked, turn up the heat for 2-3 minutes to burn the bottom slightly.",
        note: "That slight burn at the bottom is what infuses the legendary smoky flavor!"
      }
    ]
  },
  "steamed-moi-moi-pudding": {
    id: "steamed-moi-moi-pudding",
    title: "Steamed Moi Moi pudding",
    description: "A healthy, protein-rich steamed bean pudding made from peeled black-eyed peas, blended with peppers, onions, and boiled eggs or fish.",
    prepTime: "25 mins",
    cookTime: "35 mins",
    totalTime: "1h",
    serves: "feeds 5",
    diet: "High Protein, Gluten-Free",
    badge: "Steamed Delight",
    image: "Assets/akara.jpg",
    ingredients: {
      "Bean Base": [
        "2 cups peeled black-eyed peas (beans)",
        "1 red bell pepper (Tatashe)",
        "1 scotch bonnet pepper",
        "1 large onion"
      ],
      "Fillings & Oil": [
        "3 tbsp vegetable oil or palm oil",
        "2 hard-boiled eggs, sliced",
        "1 can of cooked mackerel or sardines (optional)",
        "2 tbsp ground crayfish",
        "Salt and seasoning cubes to taste"
      ],
      "Utensils You'll Need": [
        "High-power blender",
        "Moi Moi bowls, foil pans, or banana leaves",
        "Large pot with steamer rack"
      ]
    },
    instructions: [
      {
        step: 1,
        title: "Blend the Batter",
        instruction: "Blend the peeled beans, bell pepper, scotch bonnet, and onion with just enough water to allow the blades to turn, until a perfectly smooth batter is formed.",
        note: "The batter should be smooth, not gritty."
      },
      {
        step: 2,
        title: "Season and Aerate",
        instruction: "Pour the batter into a large bowl. Stir in the oil, crayfish, seasoning cubes, and salt. Use a wooden spoon to whisk the batter in one direction for 5 minutes to incorporate air.",
        note: "Whisking incorporates air, making the Moi Moi light and fluffy."
      },
      {
        step: 3,
        title: "Portion and Steam",
        instruction: "Pour the batter into greased ramekins or foil pans. Add egg slices and fish flakes inside. Seal tightly with foil, place in a pot of boiling water over a steam rack, and steam on medium-low heat for 35-40 minutes.",
        note: "Make sure the water doesn't dry up; add hot water to the pot if necessary."
      }
    ]
  },
  "coconut-carrot-cake": {
    id: "coconut-carrot-cake",
    title: "Coconut-Carrot Cake",
    description: "A moist, delicious cake made with whole wheat flour, shredded carrots, toasted coconut flakes, and lightly sweetened with maple syrup.",
    prepTime: "20 mins",
    cookTime: "55 mins",
    totalTime: "1h 15mins",
    serves: "feeds 4",
    diet: "Healthy Dessert",
    badge: "Sweet & Fit",
    image: "Assets/carrot cake.jpg",
    ingredients: {
      "Dry Mix": [
        "2 cups whole wheat pastry flour",
        "1.5 cups finely grated carrots",
        "1/2 cup unsweetened shredded coconut flakes",
        "1 tsp baking soda",
        "1.5 tsp ground cinnamon",
        "1/2 tsp ground nutmeg"
      ],
      "Wet Mix": [
        "1/2 cup coconut oil, melted",
        "1/2 cup pure maple syrup or honey",
        "3 large eggs",
        "1 tsp vanilla extract",
        "1/2 cup unsweetened applesauce"
      ],
      "Utensils": [
        "8-inch cake pan",
        "Grater",
        "Mixing bowls",
        "Whisk"
      ]
    },
    instructions: [
      {
        step: 1,
        title: "Whisk Dry & Wet separately",
        instruction: "In one bowl, whisk flour, baking soda, cinnamon, nutmeg, and coconut flakes. In another bowl, whisk melted coconut oil, maple syrup, vanilla, applesauce, and eggs.",
        note: "Whisk the wet ingredients vigorously to emulsify the eggs and oil."
      },
      {
        step: 2,
        title: "Combine and Fold Carrots",
        instruction: "Pour the wet mix into the dry mix and stir gently until combined. Fold in the grated carrots until evenly distributed.",
        note: "Do not overmix to prevent the cake from becoming dense."
      },
      {
        step: 3,
        title: "Bake",
        instruction: "Pour into a greased cake pan and bake at 350°F (180°C) for 50-55 minutes until a toothpick inserted in the center comes out clean.",
        note: "Let it cool in the pan for 15 minutes before transferring to a wire rack."
      }
    ]
  },
  "tomatoe-ata-rodo-puree": {
    id: "tomatoe-ata-rodo-puree",
    title: "Tomatoe Ata Rodo Puree",
    description: "A pre-cooked, thick blended base of tomatoes, onions, Tatashe, and Ata Rodo, ready to cut your cooking time in half for stews and Jollof.",
    prepTime: "10 mins",
    cookTime: "15 mins",
    totalTime: "25 mins",
    serves: "feeds 3",
    diet: "Vegan, Whole30",
    badge: "Meal Prep Helper",
    image: "Assets/image-2.png",
    ingredients: {
      "Produce": [
        "10 medium Roma tomatoes",
        "4 red bell peppers (Tatashe)",
        "3 scotch bonnet peppers (Ata Rodo)",
        "2 large red onions"
      ],
      "Preservation": [
        "1/4 cup olive oil or vegetable oil",
        "1 tsp salt"
      ],
      "Utensils": [
        "High-speed blender",
        "Large deep pot",
        "Mason jars for storage"
      ]
    },
    instructions: [
      {
        step: 1,
        title: "Clean and Blend",
        instruction: "Wash all vegetables, remove Tatashe seeds, cut into chunks, and blend everything with as little water as possible until smooth.",
        note: "Use a tamper to keep the blend thick."
      },
      {
        step: 2,
        title: "Boil Down",
        instruction: "Pour the puree into a large pot, bring to a boil, then reduce heat and simmer uncovered for 15 minutes until it reduces to a thick paste.",
        note: "Stir frequently to prevent the bottom from burning as it thickens."
      },
      {
        step: 3,
        title: "Store",
        instruction: "Stir in oil and salt, let it cool completely, and spoon into clean jars. Seal and freeze or keep refrigerated.",
        note: "Storing it with oil on top helps preserve it longer in the fridge."
      }
    ]
  },
  "abacha-ede-special": {
    id: "abacha-ede-special",
    title: "Abacha & Ede Special",
    description: "An authentic Eastern Nigerian salad made from dried shredded cassava (Abacha) mixed with palm oil, potash, ugba, garden eggs, and fried fish.",
    prepTime: "1h",
    cookTime: "30 mins",
    totalTime: "1h 30 mins",
    serves: "feeds 5",
    diet: "Traditional Salad",
    badge: "Igbo Culinary",
    image: "Assets/abacha.jpg",
    ingredients: {
      "Salad Base": [
        "3 cups dry cassava shreds (Abacha)",
        "1 cup sliced Ugba (oil bean seeds)",
        "1 tsp potash (kaun) dissolved in 3 tbsp warm water",
        "1/3 cup palm oil"
      ],
      "Condiments & Toppings": [
        "2 tbsp ground crayfish",
        "1 tbsp ground Ehuru (calabash nutmeg)",
        "4 garden eggs, diced",
        "1 small red onion, sliced",
        "Fresh Utazi leaves, sliced finely",
        "2 dry fish or fried fish"
      ],
      "Utensils": [
        "Large bowl",
        "Mortar or pot for mixing",
        "Sieve"
      ]
    },
    instructions: [
      {
        step: 1,
        title: "Soak the Cassava",
        instruction: "Soak the dry Abacha in cold water for 40-50 minutes until soft, drain completely in a sieve, and set aside.",
        note: "Do not soak in hot water or it will turn mushy!"
      },
      {
        step: 2,
        title: "Create the Palm Oil Emulsion",
        instruction: "In a mixing pot, pour the palm oil. Slowly add the strained potash water while stirring. The oil will curdle and turn into a yellow, creamy paste.",
        note: "Make sure you filter out any potash sand/sediment."
      },
      {
        step: 3,
        title: "Mix and Serve",
        instruction: "Stir in the ground Ehuru, crayfish, and Ugba. Add the soft Abacha, chopped onions, and garden eggs. Mix thoroughly until all shreds are coated. Garnish with sliced Utazi leaves and serve with fish.",
        note: "Utazi leaves are quite bitter, so use them sparingly!"
      }
    ]
  },
  "goat-meat-plantain-tacos": {
    id: "goat-meat-plantain-tacos",
    title: "Goat Meat Plantain Tacos",
    description: "A modern Nigerian fusion dish: tender, spicy goat meat (asun style) tucked inside baked plantain tacos, topped with pico de gallo.",
    prepTime: "15 mins",
    cookTime: "25 mins",
    totalTime: "40 mins",
    serves: "feeds 3",
    diet: "High Protein, Gluten-Free",
    badge: "Nourir Fusion",
    image: "Assets/image-3.png",
    ingredients: {
      "Plantain Shells": [
        "3 large semi-ripe yellow plantains",
        "1 tbsp coconut oil"
      ],
      "Asun Goat Filling": [
        "500g goat meat, cooked and shredded",
        "1 scotch bonnet pepper, minced",
        "1 green bell pepper, diced",
        "1 red onion, chopped",
        "1 tsp suya spice (Yaji)"
      ],
      "Pico de Gallo Topping": [
        "2 plum tomatoes, diced",
        "1 cucumber, diced",
        "Fresh coriander or parsley, chopped"
      ],
      "Utensils": [
        "Taco mold or baking sheets",
        "Skillet",
        "Rolling pin"
      ]
    },
    instructions: [
      {
        step: 1,
        title: "Make the Plantain Tacos",
        instruction: "Boil the plantains until soft. Mash them completely, roll into flat round disks between parchment paper, and bake at 375°F (190°C) for 12 minutes in a taco shaper until crisp.",
        note: "Use semi-ripe plantains for the perfect balance of sweet and structural hold."
      },
      {
        step: 2,
        title: "Sauté the Goat Meat",
        instruction: "Sauté the shredded goat meat in a skillet with chopped onions, peppers, and suya spice for 10 minutes until aromatic and slightly charred.",
        note: "You can use leftover cooked goat meat to save prep time."
      },
      {
        step: 3,
        title: "Assemble",
        instruction: "Fill the baked plantain shells with the hot goat meat filling and top with the fresh tomato-cucumber pico.",
        note: "Best served immediately while shells are warm and crisp."
      }
    ]
  },
  "peppered-skewers-masa": {
    id: "peppered-skewers-masa",
    title: "Peppered Skewers & Masa",
    description: "Crispy-edged Northern Nigerian rice cakes (Masa) served with spicy peppered beef skewers.",
    prepTime: "20 mins",
    cookTime: "40 mins",
    totalTime: "1h",
    serves: "feeds 2",
    diet: "Traditional Northern",
    badge: "Hausa Classic",
    image: "Assets/suya.jpg",
    ingredients: {
      "Masa Rice Batter": [
        "2 cups raw short-grain rice (Tuwo rice)",
        "1/2 cup cooked white rice",
        "1 tsp yeast",
        "2 tbsp sugar",
        "1/2 onion, chopped",
        "1/2 tsp baking potash or baking powder"
      ],
      "Beef Skewers": [
        "400g lean beef, sliced thin",
        "2 tbsp suya spice (Yaji)",
        "1 tbsp peanut oil or vegetable oil"
      ],
      "Utensils": [
        "Masa pan (with round molds)",
        "Skewer sticks",
        "Blender"
      ]
    },
    instructions: [
      {
        step: 1,
        title: "Ferment the Masa Batter",
        instruction: "Soak raw rice overnight. Blend it with cooked rice, yeast, sugar, onion, and water into a smooth batter. Let it sit in a warm spot for 4-6 hours to rise.",
        note: "Stir in baking powder right before frying."
      },
      {
        step: 2,
        title: "Prepare Beef Skewers",
        instruction: "Thread beef slices onto skewers, rub generously with suya spice and peanut oil, and grill at high heat for 12-15 minutes.",
        note: "Soak skewer sticks in water for 30 minutes before grilling to prevent them from burning."
      },
      {
        step: 3,
        title: "Fry the Masa",
        instruction: "Put a few drops of oil in each mold of a hot Masa pan. Pour batter, cook for 3 minutes, then flip to cook the other side until golden and puffed.",
        note: "Serve hot alongside the grilled beef skewers."
      }
    ]
  },
  "naija-macaroni-salad": {
    id: "naija-macaroni-salad",
    title: "Naija Macaroni Salad",
    description: "A cool, creamy pasta salad tossed with hard-boiled eggs, sweet corn, carrots, peas, and a light avocado-lime dressing.",
    prepTime: "10 mins",
    cookTime: "5 mins",
    totalTime: "15 mins",
    serves: "feeds 5",
    diet: "Creamy Salad",
    badge: "Naija Gathering",
    image: "Assets/image-1.png",
    ingredients: {
      "Salad Base": [
        "2 cups macaroni pasta, boiled al dente",
        "1/2 cup shredded carrots",
        "1/2 cup peas and sweet corn",
        "2 hard-boiled eggs, chopped"
      ],
      "Avocado Dressing": [
        "1 ripe avocado, mashed smooth",
        "2 tbsp olive oil",
        "Juice of 1 lime",
        "Salt and pepper to taste"
      ],
      "Utensils": [
        "Salad mixing bowl",
        "Whisk",
        "Pot for pasta"
      ]
    },
    instructions: [
      {
        step: 1,
        title: "Boil Pasta and Veggies",
        instruction: "Boil pasta in salted water. In the last 2 minutes, throw in carrots, peas, and sweet corn. Drain and rinse under cold water.",
        note: "Rinsing stops the cooking process instantly."
      },
      {
        step: 2,
        title: "Make Dressing",
        instruction: "Whisk the mashed avocado, olive oil, lime juice, salt, and pepper in a small bowl until creamy.",
        note: "Use a blender if you want an ultra-smooth dressing texture."
      },
      {
        step: 3,
        title: "Toss and Chill",
        instruction: "Combine macaroni, vegetables, chopped eggs, and the avocado dressing. Toss thoroughly. Refrigerate for at least 30 minutes before serving.",
        note: "Chilling allows flavors to meld together beautifully."
      }
    ]
  },
  "puff-puff-royale": {
    id: "puff-puff-royale",
    title: "Puff Puff Royale",
    description: "Slightly sweet, pillowy-soft fried dough balls with a hint of nutmeg, served with a modern honey-chili glaze.",
    prepTime: "25 mins",
    cookTime: "15 mins",
    totalTime: "40 mins",
    serves: "feeds 3",
    diet: "Traditional Snack",
    badge: "Street Snack",
    image: "Assets/image-4.png",
    ingredients: {
      "Dough Batter": [
        "2 cups all-purpose flour",
        "1 tsp active dry yeast",
        "3 tbsp sugar",
        "1/2 tsp ground nutmeg",
        "1 cup warm water",
        "Pinch of salt"
      ],
      "Frying & Glaze": [
        "3 cups vegetable oil for deep frying",
        "2 tbsp honey mixed with 1/2 tsp chili flakes (optional)"
      ],
      "Utensils": [
        "Deep pot or wok",
        "Mixing bowl",
        "Slotted spoon"
      ]
    },
    instructions: [
      {
        step: 1,
        title: "Activate and Rise",
        instruction: "Whisk dry ingredients, pour in warm water, and mix into a sticky batter. Cover the bowl with a damp towel and let it rise in a warm spot for 45 minutes.",
        note: "The batter is ready when it doubles in size and has bubbles on the surface."
      },
      {
        step: 2,
        title: "Deep Fry",
        instruction: "Heat oil to 350°F (175°C). Scoop small amounts of batter with your fingers and drop them into the oil as round balls. Fry until golden brown on all sides.",
        note: "Use a slotted spoon to flip them continuously for even cooking."
      },
      {
        step: 3,
        title: "Glaze",
        instruction: "Drain on paper towels, drizzle with the spicy honey glaze, and serve warm.",
        note: "Excellent with a cold cup of hibiscus tea (Zobo)!"
      }
    ]
  }
};

// 1.5 LOCAL DATABASES FOR MACROS & INGREDIENT SWAPS
const STAPLES_MACROS_DB = {
  "jollof-rice": { name: "Jollof Rice (250g)", calories: 350, carbs: 65, protein: 8, fat: 7, cost: 800 },
  "pounded-yam": { name: "Pounded Yam (200g)", calories: 300, carbs: 70, protein: 3, fat: 0.5, cost: 400 },
  "eba": { name: "Eba (Garri) (200g)", calories: 330, carbs: 80, protein: 1.5, fat: 0, cost: 200 },
  "egusi-soup": { name: "Egusi Soup (150g)", calories: 450, carbs: 10, protein: 20, fat: 38, cost: 1200 },
  "efo-riro": { name: "Efo Riro (150g)", calories: 220, carbs: 8, protein: 15, fat: 14, cost: 1000 },
  "fried-plantain": { name: "Fried Plantain (Dodo) (4 slices)", calories: 180, carbs: 32, protein: 1, fat: 8, cost: 300 },
  "baked-plantain": { name: "Air-Fried/Baked Plantain (4 slices)", calories: 110, carbs: 32, protein: 1, fat: 0.5, cost: 300 },
  "acha-fonio": { name: "Acha (Fonio) (1 cup)", calories: 170, carbs: 38, protein: 4, fat: 0.5, cost: 500 },
  "titus-fish": { name: "Titus Fish (Mackerel) (100g)", calories: 210, carbs: 0, protein: 19, fat: 15, cost: 800 },
  "beans-ewa": { name: "Beans (Ewa) cooked (1 cup)", calories: 280, carbs: 45, protein: 16, fat: 1.5, cost: 400 },
  "beef-suya": { name: "Beef Suya (100g)", calories: 250, carbs: 2, protein: 25, fat: 16, cost: 1000 },
  "amala": { name: "Amala (Elubo) (200g)", calories: 280, carbs: 66, protein: 2, fat: 0.3, cost: 300 },
  "seafood-okra": { name: "Seafood Okra Soup (150g)", calories: 180, carbs: 6, protein: 22, fat: 5, cost: 1500 }
};

const INGREDIENT_SWAPS_DB = {
  "kale": { local: "Ugu (Fluted Pumpkin Leaves) or Shoko/Tete (Green Amaranth)", savings: "₦1,500", note: "Ugu has 3x more iron and vitamins than kale at a fraction of the cost! Sauté for 2 mins.", originalCost: 2000, swapCost: 500 },
  "spinach": { local: "Ugu (Fluted Pumpkin Leaves) or Shoko/Tete (Green Amaranth)", savings: "₦800", note: "Local green amaranth is packed with iron and calcium, and holds texture better in stews.", originalCost: 1200, swapCost: 400 },
  "quinoa": { local: "Acha (Fonio)", savings: "₦2,500", note: "Acha is a native ancient grain that is naturally gluten-free, low-glycemic, and digests easily. Steam for 7 mins.", originalCost: 3500, swapCost: 1000 },
  "oats": { local: "Acha (Fonio) or Sorghum (Guinea Corn)", savings: "₦1,200", note: "Guinea corn is highly fibrous, low-GI, and packed with calcium and protein. Cook as porridge.", originalCost: 2000, swapCost: 800 },
  "salmon": { local: "Titus (Mackerel) or Croaker", savings: "₦4,000", note: "Titus is rich in Omega-3 fatty acids, widely available fresh or frozen in local markets.", originalCost: 6000, swapCost: 2000 },
  "tuna": { local: "Titus (Mackerel) or Croaker", savings: "₦2,000", note: "Croaker is lean, rich in minerals, and pairs beautifully with traditional peppers.", originalCost: 3500, swapCost: 1500 },
  "olive oil": { local: "Controlled quantities of locally sourced Unrefined Cold-Pressed Palm Oil or Coconut Oil", savings: "₦3,500", note: "Unrefined palm oil is rich in Vitamin A and E. Using 1-2 tbsp retains flavor without excessive calories.", originalCost: 5000, swapCost: 1500 }
};


// 2. DOM EVENT CONTROLLER
document.addEventListener("DOMContentLoaded", () => {
  // --------------------------------------------------------------------------
  // SCROLL REVEAL ANIMATIONS OBSERVER
  // --------------------------------------------------------------------------
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal-active");
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15 // Trigger when 15% of the element is visible
  });

  window.observeReveals = (container = document) => {
    container.querySelectorAll(".reveal-el").forEach(el => {
      // If prefers-reduced-motion is active, bypass and show immediately
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        el.classList.add("reveal-active");
      } else {
        revealObserver.observe(el);
      }
    });
  };

  // Run initial observation
  window.observeReveals(document);

  // Initialize Feather Icons
  if (typeof feather !== 'undefined') {
    feather.replace();
  }

  // Sticky Nav on Scroll
  const mainNav = document.getElementById("main-nav");
  const scrollThreshold = 60;
  const handleScroll = () => {
    if (mainNav) {
      if (window.scrollY > scrollThreshold) {
        mainNav.classList.add("scrolled");
      } else {
        mainNav.classList.remove("scrolled");
      }
    }
  };
  window.addEventListener("scroll", handleScroll);
  handleScroll();

  // Mobile Menu Hamburger Toggle with Drawer and Backdrop
  const menuToggleBtn = document.getElementById("menu-toggle-btn");
  const navLinksList = document.querySelector(".nav-links");
  
  if (menuToggleBtn && navLinksList) {
    // Create backdrop element dynamically
    let backdrop = document.getElementById("nav-backdrop");
    if (!backdrop) {
      backdrop = document.createElement("div");
      backdrop.id = "nav-backdrop";
      backdrop.className = "nav-backdrop";
      document.body.appendChild(backdrop);
    }

    const toggleMenu = (forceClose = false) => {
      const isOpen = forceClose ? false : !navLinksList.classList.contains("nav-active");
      
      if (isOpen) {
        navLinksList.classList.add("nav-active");
        menuToggleBtn.classList.add("open");
        backdrop.classList.add("active");
        menuToggleBtn.innerHTML = '<i data-feather="x"></i>';
      } else {
        navLinksList.classList.remove("nav-active");
        menuToggleBtn.classList.remove("open");
        backdrop.classList.remove("active");
        menuToggleBtn.innerHTML = '<i data-feather="menu"></i>';
        
        // Reset dropdown states when menu is closed
        const dropdowns = navLinksList.querySelectorAll(".dropdown");
        dropdowns.forEach(d => d.classList.remove("dropdown-open"));
      }
      
      if (typeof feather !== 'undefined') {
        feather.replace();
      }
    };

    menuToggleBtn.addEventListener("click", () => toggleMenu());
    backdrop.addEventListener("click", () => toggleMenu(true));

    // Mobile Dropdown toggling
    const dropdowns = navLinksList.querySelectorAll(".dropdown");
    dropdowns.forEach(dropdown => {
      const trigger = dropdown.querySelector("a");
      if (trigger) {
        trigger.addEventListener("click", (e) => {
          if (window.innerWidth <= 900) {
            e.preventDefault();
            e.stopPropagation();
            
            const isDropdownOpen = dropdown.classList.contains("dropdown-open");
            
            // Close other dropdowns
            dropdowns.forEach(d => d.classList.remove("dropdown-open"));
            
            if (!isDropdownOpen) {
              dropdown.classList.add("dropdown-open");
            }
          }
        });
      }
    });

    // Close menu when clicking actual sub-links (inside dropdown-menu) or non-dropdown links
    const closeLinks = navLinksList.querySelectorAll(".dropdown-menu a, li:not(.dropdown) > a");
    closeLinks.forEach(link => {
      link.addEventListener("click", () => toggleMenu(true));
    });
  }

  // ==========================================================================
  // CATEGORY FILTERING & INITIALIZATION
  // ==========================================================================
  const initCategoryFiltering = () => {
    const categoryPills = document.querySelectorAll(".category-tag");
    const recipeGrid = document.querySelector(".recipe-grid");
    
    // Inject category and macro properties if not present
    if (RECIPES_DB["tropical-tiger-nut-bowl"]) {
      RECIPES_DB["tropical-tiger-nut-bowl"].category = "Breakfast";
      RECIPES_DB["tropical-tiger-nut-bowl"].cost = 800;
      RECIPES_DB["tropical-tiger-nut-bowl"].calories = 250;
      RECIPES_DB["tropical-tiger-nut-bowl"].carbs = 42;
      RECIPES_DB["tropical-tiger-nut-bowl"].protein = 5;
      RECIPES_DB["tropical-tiger-nut-bowl"].fat = 8;
    }
    if (RECIPES_DB["efo-riro-with-fufu"]) {
      RECIPES_DB["efo-riro-with-fufu"].category = "Soups & Stews";
      RECIPES_DB["efo-riro-with-fufu"].cost = 1200;
      RECIPES_DB["efo-riro-with-fufu"].calories = 520;
      RECIPES_DB["efo-riro-with-fufu"].carbs = 62;
      RECIPES_DB["efo-riro-with-fufu"].protein = 28;
      RECIPES_DB["efo-riro-with-fufu"].fat = 18;
    }
    if (RECIPES_DB["seeded-oat-bread-loaf"]) {
      RECIPES_DB["seeded-oat-bread-loaf"].category = "Breakfast";
      RECIPES_DB["seeded-oat-bread-loaf"].cost = 1500;
      RECIPES_DB["seeded-oat-bread-loaf"].calories = 180;
      RECIPES_DB["seeded-oat-bread-loaf"].carbs = 26;
      RECIPES_DB["seeded-oat-bread-loaf"].protein = 6;
      RECIPES_DB["seeded-oat-bread-loaf"].fat = 5;
    }
    if (RECIPES_DB["smoky-naija-jollof"]) {
      RECIPES_DB["smoky-naija-jollof"].category = "Rice Dishes";
      RECIPES_DB["smoky-naija-jollof"].cost = 1000;
      RECIPES_DB["smoky-naija-jollof"].calories = 380;
      RECIPES_DB["smoky-naija-jollof"].carbs = 68;
      RECIPES_DB["smoky-naija-jollof"].protein = 9;
      RECIPES_DB["smoky-naija-jollof"].fat = 8;
    }
    if (RECIPES_DB["steamed-moi-moi-pudding"]) {
      RECIPES_DB["steamed-moi-moi-pudding"].category = "Breakfast";
      RECIPES_DB["steamed-moi-moi-pudding"].cost = 600;
      RECIPES_DB["steamed-moi-moi-pudding"].calories = 240;
      RECIPES_DB["steamed-moi-moi-pudding"].carbs = 34;
      RECIPES_DB["steamed-moi-moi-pudding"].protein = 16;
      RECIPES_DB["steamed-moi-moi-pudding"].fat = 4;
    }
    if (RECIPES_DB["coconut-carrot-cake"]) {
      RECIPES_DB["coconut-carrot-cake"].category = "Snacks & Drinks";
      RECIPES_DB["coconut-carrot-cake"].cost = 500;
      RECIPES_DB["coconut-carrot-cake"].calories = 210;
      RECIPES_DB["coconut-carrot-cake"].carbs = 38;
      RECIPES_DB["coconut-carrot-cake"].protein = 3;
      RECIPES_DB["coconut-carrot-cake"].fat = 6;
    }
    if (RECIPES_DB["tomatoe-ata-rodo-puree"]) {
      RECIPES_DB["tomatoe-ata-rodo-puree"].category = "Food Platter";
      RECIPES_DB["tomatoe-ata-rodo-puree"].cost = 800;
      RECIPES_DB["tomatoe-ata-rodo-puree"].calories = 90;
      RECIPES_DB["tomatoe-ata-rodo-puree"].carbs = 18;
      RECIPES_DB["tomatoe-ata-rodo-puree"].protein = 2;
      RECIPES_DB["tomatoe-ata-rodo-puree"].fat = 1;
    }
    if (RECIPES_DB["abacha-ede-special"]) {
      RECIPES_DB["abacha-ede-special"].category = "Street Food";
      RECIPES_DB["abacha-ede-special"].cost = 1200;
      RECIPES_DB["abacha-ede-special"].calories = 430;
      RECIPES_DB["abacha-ede-special"].carbs = 58;
      RECIPES_DB["abacha-ede-special"].protein = 15;
      RECIPES_DB["abacha-ede-special"].fat = 16;
    }
    if (RECIPES_DB["goat-meat-plantain-tacos"]) {
      RECIPES_DB["goat-meat-plantain-tacos"].category = "Protein & Grills";
      RECIPES_DB["goat-meat-plantain-tacos"].cost = 1800;
      RECIPES_DB["goat-meat-plantain-tacos"].calories = 390;
      RECIPES_DB["goat-meat-plantain-tacos"].carbs = 44;
      RECIPES_DB["goat-meat-plantain-tacos"].protein = 24;
      RECIPES_DB["goat-meat-plantain-tacos"].fat = 12;
    }
    if (RECIPES_DB["peppered-skewers-masa"]) {
      RECIPES_DB["peppered-skewers-masa"].category = "Protein & Grills";
      RECIPES_DB["peppered-skewers-masa"].cost = 1500;
      RECIPES_DB["peppered-skewers-masa"].calories = 490;
      RECIPES_DB["peppered-skewers-masa"].carbs = 62;
      RECIPES_DB["peppered-skewers-masa"].protein = 26;
      RECIPES_DB["peppered-skewers-masa"].fat = 15;
    }
    if (RECIPES_DB["naija-macaroni-salad"]) {
      RECIPES_DB["naija-macaroni-salad"].category = "Food Platter";
      RECIPES_DB["naija-macaroni-salad"].cost = 800;
      RECIPES_DB["naija-macaroni-salad"].calories = 310;
      RECIPES_DB["naija-macaroni-salad"].carbs = 48;
      RECIPES_DB["naija-macaroni-salad"].protein = 10;
      RECIPES_DB["naija-macaroni-salad"].fat = 9;
    }
    if (RECIPES_DB["puff-puff-royale"]) {
      RECIPES_DB["puff-puff-royale"].category = "Street Food";
      RECIPES_DB["puff-puff-royale"].cost = 400;
      RECIPES_DB["puff-puff-royale"].calories = 260;
      RECIPES_DB["puff-puff-royale"].carbs = 52;
      RECIPES_DB["puff-puff-royale"].protein = 4;
      RECIPES_DB["puff-puff-royale"].fat = 4;
    }

    const renderGrid = (cat) => {
      if (!recipeGrid) return;
      recipeGrid.innerHTML = "";
      
      const filtered = Object.values(RECIPES_DB).filter(recipe => {
        if (!cat || cat === "all") return true;
        return recipe.category && recipe.category.toLowerCase() === cat.toLowerCase();
      });

      filtered.forEach((recipe, index) => {
        const card = document.createElement("div");
        card.className = "recipe-card reveal-el reveal-card-item";
        card.style.cursor = "pointer";
        card.style.transitionDelay = `${(index % 8) * 80}ms`;
        card.addEventListener("click", () => {
          window.location.hash = `#/recipe/${recipe.id}`;
        });

        // Check if saved
        const savedRecipes = JSON.parse(localStorage.getItem("saved_recipes") || "[]");
        const isSaved = savedRecipes.includes(recipe.id);
        const saveIcon = isSaved ? "check" : "plus";
        const saveText = isSaved ? "saved" : "save";

        // Remake badge tag disabled per request
        let badgeHtml = "";

        card.innerHTML = `
          <div class="recipe-img-container" style="position: relative;">
            <img src="${recipe.image}" alt="${recipe.title}" class="recipe-img">
            ${badgeHtml}
          </div>
          <div class="recipe-info">
            <h3 class="recipe-title">${recipe.title}</h3>
            <div class="recipe-meta">
              <span class="meta-item"><span class="meta-icon">⏳</span> ${recipe.prepTime || recipe.totalTime}</span>
              <span class="meta-item"><span class="meta-icon">👥</span> ${recipe.serves}</span>
              <button class="save-btn" data-id="${recipe.id}" style="z-index: 10;"><i data-feather="${saveIcon}" style="width: 14px; height: 14px;"></i> ${saveText}</button>
            </div>
          </div>
        `;
        recipeGrid.appendChild(card);
      });

      if (typeof feather !== 'undefined') {
        feather.replace();
      }

      // Rebind click to the save buttons so they don't trigger card click
      const saveButtons = recipeGrid.querySelectorAll(".save-btn");
      saveButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
          e.stopPropagation();
          const recipeId = btn.getAttribute("data-id");
          toggleSaveRecipe(recipeId, btn);
        });
      });

      if (typeof window.observeReveals === 'function') {
        window.observeReveals(recipeGrid);
      }
    };

    // Listen to category pill clicks
    categoryPills.forEach(pill => {
      pill.addEventListener("click", () => {
        categoryPills.forEach(p => p.classList.remove("tag-selected"));
        pill.classList.add("tag-selected");
        const category = pill.getAttribute("data-category") || "all";
        renderGrid(category);
      });
    });

    // Initial render of all recipes
    renderGrid("all");
  };

  // Newsletter Subscription Alert
  const newsletterForm = document.getElementById("newsletter-subscribe-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector("input[type='email']");
      if (emailInput && emailInput.value) {
        alert(`Thank you for subscribing, ${emailInput.value}!`);
        emailInput.value = "";
      }
    });
  }

  // ==========================================================================
  // ARTICLES LOCAL DATABASE & RENDERERS
  // ==========================================================================
  const ARTICLES_DB = {
    "whats-for-brunch-7-healthy-plantain-waffle-ideas": {
      id: "whats-for-brunch-7-healthy-plantain-waffle-ideas",
      title: "What's for Brunch? 7 Healthy Plantain Waffle Ideas You'll Want Every Weekend",
      excerpt: "Gone are the days when eating 'clean' meant saying goodbye to your favorites. Discover how to turn ripe plantains into fiber-rich waffles.",
      category: "Food Reviews",
      date: "July 5, 2026",
      author: "Yemisi Odusanya",
      readTime: "5 min read",
      image: "Assets/ChatGPT Image Jul 5, 2026, 05_57_24 PM.png",
      content: `
        <p>Gone are the days when eating "clean" meant saying goodbye to jollof rice, plantain, suya, moi moi or that extra spoon of stew your mum insisted you needed. Today, it's less about cutting out the foods we love and more about giving them a smarter, fresher twist.</p>
        <p>Brunch has always been a weekend ritual, but it often leaves us feeling heavy and sluggish. What if you could have the sweet, caramelized goodness of plantain in a crisp, golden waffle format that fuels your body with complex carbs and fiber? Enter the Plantain Waffle.</p>
        <h2>Why Plantains Make the Perfect Waffles</h2>
        <p>Plantains are an excellent source of resistant starch, potassium, and vitamin A. When blended into a batter with oat flour instead of refined white flour, they create a natural sweetness and chewiness that mimics standard waffle batters without the sugar spike.</p>
        <h2>7 Healthy Toppings You'll Want to Try</h2>
        <ul>
          <li><strong>Yaji-Spiced Avocado:</strong> Mash a ripe avocado, squeeze in lime juice, and sprinkle generous amounts of local Suya pepper (Yaji) for a kick.</li>
          <li><strong>Nut Butter & Banana:</strong> Spread smooth, unsweetened peanut butter or almond butter, and top with banana slices.</li>
          <li><strong>Spicy Scrambled Eggs:</strong> Fluffy eggs scrambled with fresh ata rodo (habanero), onions, and spinach.</li>
          <li><strong>Chicken & Waffles (Nourir style):</strong> Top with air-fried or grilled lean chicken breast slices and a drizzle of pure maple syrup or honey.</li>
          <li><strong>Coconut Cream & Mixed Berries:</strong> Chill coconut milk overnight, whip the solid cream, and top with seasonal berries.</li>
          <li><strong>Smoked Fish Spread:</strong> Flaked smoked mackerel whipped with greek yogurt, lemon, and chives.</li>
          <li><strong>Pure Honey & Cinnamon:</strong> Keep it classic with a light drizzle of organic Nigerian honey and a dust of ground cinnamon.</li>
        </ul>
        <p>Try making these waffles this weekend, and you'll realize that eating healthy doesn't mean sacrificing the foods you love. It's simply about cooking them smarter!</p>
      `
    },
    "swaps-to-nourish-healthy-nigerian-ingredient-swaps": {
      id: "swaps-to-nourish-healthy-nigerian-ingredient-swaps",
      title: "The Ultimate Guide to Healthy Nigerian Ingredient Swaps",
      excerpt: "Love Jollof, swallow, and soup? Learn simple, budget-friendly swaps to keep your traditional favorites nutritious and light.",
      category: "Ingredient Swaps",
      date: "July 8, 2026",
      author: "Dr. Tunde Alao",
      readTime: "6 min read",
      image: "Assets/ChatGPT Image Jun 14, 2026, 04_15_58 PM.png",
      content: `
        <p>Cooking healthier versions of your favorite Nigerian meals shouldn't feel like a chore. The secret is not to discard traditional meals, but to make intelligent, small ingredient adjustments that yield massive nutritional benefits.</p>
        <h2>1. Swap White Rice for Fonio or Brown Rice</h2>
        <p>White rice has a high glycemic index, which can cause rapid spikes in blood sugar. Fonio (an ancient African grain) or brown rice are packed with fiber, digest slower, and keep you full for hours.</p>
        <h2>2. Swap Refined Vegetable Oils for Cold-Pressed Olive or Coconut Oil</h2>
        <p>Many refined vegetable oils are highly processed and trigger inflammation. Cold-pressed olive oil, avocado oil, or limited amounts of natural palm oil provide heart-healthy fats and rich, authentic flavors.</p>
        <h2>3. Swap Artificial Bouillon Cubes for Natural Herbs & Iru</h2>
        <p>Commercial seasoning cubes are often loaded with sodium and MSG. Flavor your soups and stews using locust beans (Iru), garlic, ginger, crayfish, and blended local peppers for depth of taste and vitamins.</p>
        <h2>4. Swap Heavy Swallow for Cabbage or Oatmeal Swallow</h2>
        <p>Traditional swallows like Garri (Eba) or Pounded Yam are highly calorie-dense. Swapping them occasionally with cabbage swallow, fonio swallow, or plain rolled oat swallow reduces calories while retaining the perfect swallow texture.</p>
      `
    },
    "efo-riro-healthy-spinach-stew": {
      id: "efo-riro-healthy-spinach-stew",
      title: "Is Efo Riro Actually Healthy? Demystifying Nigerian Soups",
      excerpt: "Leafy greens, vitamins, and protein. We break down the nutritional profile of Efo Riro and how to reduce oil without losing taste.",
      category: "Healthy Eating",
      date: "July 7, 2026",
      author: "Yemisi Odusanya",
      readTime: "4 min read",
      image: "Assets/efo.png",
      content: `
        <p>Efo Riro is a staple in Southwest Nigeria, loved for its savory, spicy, rich vegetable goodness. But many people ask: can I eat Efo Riro while trying to lose weight or live healthier?</p>
        <p>The short answer is: <strong>Yes, absolutely!</strong> Leafy green vegetables (shoko or tatarodo) are loaded with iron, vitamin A, C, and fiber. However, preparation often floats in palm oil and high-fat animal parts.</p>
        <h2>How to Make Efo Riro a Superfood</h2>
        <ul>
          <li><strong>Reduce the Oil:</strong> Instead of using a whole cup of palm oil, use 2-3 tablespoons. The vegetables will still cook beautifully in the pepper sauce.</li>
          <li><strong>Choose Lean Proteins:</strong> Skip fat-laden meats (shaki, roundabout) and focus on flaked smoked mackerel, dried fish, and boiled lean beef or chicken.</li>
          <li><strong>Don't Overcook the Greens:</strong> Cook the spinach just until it wilts (2-3 minutes max) so you don't destroy heat-sensitive vitamins.</li>
        </ul>
      `
    },
    "kunnu-aya-tiger-nut-milk-benefits": {
      id: "kunnu-aya-tiger-nut-milk-benefits",
      title: "Kunnu Aya: The Dairy-Free Superfood Drink You're Missing Out On",
      excerpt: "Rich in prebiotics and vitamins, tiger nut milk is the perfect dairy alternative. Here is how to brew it cleanly at home.",
      category: "Healthy Eating",
      date: "July 4, 2026",
      author: "Dr. Tunde Alao",
      readTime: "4 min read",
      image: "Assets/image 5.png",
      content: `
        <p>Tiger nuts (Aya in Hausa, Ofio in Yoruba, Imumu in Igbo) are actually not nuts at all—they are small tubers. This makes tiger nut milk (Kunnu Aya) naturally nut-free, dairy-free, and gluten-free!</p>
        <h2>The Nutritional Highlights</h2>
        <p>Kunnu Aya is loaded with resistant starch, a prebiotic fiber that feeds the good bacteria in your gut. It also contains magnesium, calcium, and potassium, which help regulate blood pressure and digestion.</p>
        <h2>Brewing Clean Tiger Nut Milk</h2>
        <p>Commercial Kunnu Aya is often loaded with refined sugar. To make it healthy at home, blend soaked tiger nuts with fresh coconut and dates for natural sweetness. Strain well, serve chilled, and enjoy a prebiotic powerhouse!</p>
      `
    },
    "anti-inflammatory-power-of-suya-spice-yaji": {
      id: "anti-inflammatory-power-of-suya-spice-yaji",
      title: "Yaji: The Anti-Inflammatory Power of Suya Spice",
      excerpt: "Discover how ground ginger, garlic, cloves, chili, and groundnuts in traditional yaji spice support gut health and combat inflammation.",
      category: "Healthy Eating",
      date: "July 2, 2026",
      author: "Chef Kolawole",
      readTime: "5 min read",
      image: "Assets/suya.jpg",
      content: `
        <p>Suya is arguably Nigeria's favorite street food. But the real magic isn't just in the grilled meat—it's in the spice rub, known as <strong>Yaji</strong>.</p>
        <h2>The Health Secrets of Yaji Ingredients</h2>
        <ul>
          <li><strong>Ginger & Garlic:</strong> Both are famed for their strong anti-inflammatory and immune-boosting properties.</li>
          <li><strong>Cloves (Kanafuru):</strong> A spice with one of the highest antioxidant concentrations in the world, aiding liver function and digestion.</li>
          <li><strong>Chili Pepper:</strong> Contains capsaicin, which boosts metabolism and acts as a natural pain reliever.</li>
        </ul>
        <p>By using Yaji on home-grilled chicken, tofu, or vegetables, you get all the incredible anti-inflammatory benefits without the high sodium of processed seasoning mixes.</p>
      `
    },
    "budget-healthy-eating-lagos-meal-prep": {
      id: "budget-healthy-eating-lagos-meal-prep",
      title: "The Sapa-Friendly Diet: Healthy Eating on a Budget",
      excerpt: "Eating healthy doesn't have to be expensive. Practical meal prep strategies using budget-friendly local Nigerian staples.",
      category: "Healthy Eating",
      date: "June 28, 2026",
      author: "Dr. Tunde Alao",
      readTime: "5 min read",
      image: "Assets/abacha.jpg",
      content: `
        <p>We've all heard the myth: "eating clean is only for the rich." In Nigeria, with rising food costs, it is easy to assume health has to take a backseat. But the truth is, traditional, unprocessed local foods are often the cheapest and healthiest options available.</p>
        <h2>Budget-Friendly Superfoods</h2>
        <ul>
          <li><strong>Beans & Lentils:</strong> Extremely cheap, protein-dense, and fiber-rich. Make them into boiled beans, moin moin, or akara.</li>
          <li><strong>Local Eggs:</strong> One of the most complete protein sources on the planet, affordable and quick to prepare.</li>
          <li><strong>Sweet Potatoes & Plantains:</strong> Unprocessed, nutrient-dense carbohydrate bases that beat processed flour products in cost and vitamins.</li>
        </ul>
        <p>Planning your meals weekly using our meal planner tool helps you buy in bulk, minimize food waste, and keep your body nourished and your wallet full!</p>
      `
    }
  };

  // Render Articles List View
  function renderArticlesList(categoryFilter = "all") {
    const gridContainer = document.getElementById("articles-grid-container");
    if (!gridContainer) return;
    gridContainer.innerHTML = "";

    // Highlight active category pill
    const pills = document.querySelectorAll(".articles-cat-pill");
    pills.forEach(pill => {
      const cat = pill.getAttribute("data-category");
      if (cat === categoryFilter) {
        pill.classList.add("active");
      } else {
        pill.classList.remove("active");
      }
    });

    const articles = Object.values(ARTICLES_DB).filter(article => {
      return categoryFilter === "all" || article.category === categoryFilter;
    });

    if (articles.length === 0) {
      gridContainer.innerHTML = `<p class="empty-state-text" style="grid-column: 1/-1; text-align: center; padding: 40px 0;">No articles found in this category.</p>`;
      return;
    }

    articles.forEach((article, index) => {
      const card = document.createElement("div");
      card.className = "recipe-card article-card reveal-el reveal-card-item";
      card.style.transitionDelay = `${(index % 8) * 80}ms`;
      card.addEventListener("click", () => {
        window.location.hash = `#/article/${article.id}`;
      });

      card.innerHTML = `
        <div class="recipe-img-container">
          <img src="${article.image}" alt="${article.title}" class="recipe-img">
        </div>
        <div class="recipe-info">
          <div class="article-badge" style="display: inline-block; background-color: #FCF0E0; color: #4E070B; font-weight: 700; font-size: 11px; padding: 4px 10px; border-radius: 4px; text-transform: uppercase; margin-bottom: 12px; font-family: var(--font-body);">${article.category}</div>
          <h3 class="recipe-title" style="font-family: NT Wagner Bold, var(--font-headings); font-size: 1.3rem; line-height: 1.3; margin-bottom: 10px;">${article.title}</h3>
          <p style="font-size: 14px; line-height: 1.5; color: var(--color-muted-grey); margin-bottom: 15px; font-family: var(--font-body);">${article.excerpt}</p>
          <div class="recipe-meta" style="margin-top: auto;">
            <span class="meta-item">⏳ ${article.readTime}</span>
            <span class="meta-item">📅 ${article.date}</span>
            <span class="meta-item" style="margin-left: auto; color: var(--color-primary-orange); font-weight: 600; cursor: pointer; font-family: var(--font-body);">Read ➔</span>
          </div>
        </div>
      `;
      gridContainer.appendChild(card);
    });

    if (typeof window.observeReveals === 'function') {
      window.observeReveals(gridContainer);
    }
  }

  // Render Article Read Detail Page
  function renderArticleRead(article) {
    document.getElementById("art-read-category").textContent = article.category;
    document.getElementById("art-read-readtime").textContent = article.readTime;
    document.getElementById("art-read-date").textContent = article.date;
    document.getElementById("art-read-title").textContent = article.title;
    document.getElementById("art-read-author").textContent = article.author;
    document.getElementById("art-read-image").src = article.image;
    document.getElementById("art-read-image").alt = article.title;
    document.getElementById("art-read-body").innerHTML = article.content;

    // Set author initials for avatar
    const initials = article.author.split(" ").map(n => n[0]).join("");
    document.getElementById("art-read-avatar").textContent = initials;
  }

  // ==========================================================================
  // ROUTING ENGINE (ES6 Hash-based)
  // ==========================================================================
  const homeSections = [
    document.querySelector(".hero"),
    document.querySelector(".horizontal-scroll-section"),
    document.getElementById("nourir-swap-section"),
    document.getElementById("recipes"),
    document.getElementById("bento-features"),
    document.querySelector(".todays-nourir-section-full"),
    document.getElementById("video-shows"),
    document.getElementById("blog-callout")
  ].filter(Boolean);

  const recipeDetailSection = document.getElementById("recipe-detail-section");
  const mealPlannerSection = document.getElementById("meal-planner-section");
  const savedPlansSection = document.getElementById("saved-plans-section");
  const articlesSection = document.getElementById("articles-section");
  const articleReadSection = document.getElementById("article-read-section");

  const showView = (viewName) => {
    // Hide all views first
    homeSections.forEach(sec => sec.style.display = "none");
    if (recipeDetailSection) recipeDetailSection.style.display = "none";
    if (mealPlannerSection) mealPlannerSection.style.display = "none";
    if (savedPlansSection) savedPlansSection.style.display = "none";
    if (articlesSection) articlesSection.style.display = "none";
    if (articleReadSection) articleReadSection.style.display = "none";

    if (viewName === "detail") {
      if (recipeDetailSection) {
        recipeDetailSection.style.display = "block";
        if (typeof window.observeReveals === 'function') window.observeReveals(recipeDetailSection);
      }
      window.scrollTo(0, 0);
    } else if (viewName === "meal-planner") {
      if (mealPlannerSection) {
        mealPlannerSection.style.display = "block";
        if (typeof window.observeReveals === 'function') window.observeReveals(mealPlannerSection);
      }
      window.scrollTo(0, 0);
      initMealPlannerPage();
    } else if (viewName === "saved-plans") {
      if (savedPlansSection) {
        savedPlansSection.style.display = "block";
        if (typeof window.observeReveals === 'function') window.observeReveals(savedPlansSection);
      }
      window.scrollTo(0, 0);
      renderSavedPlansGrid();
    } else if (viewName === "articles") {
      if (articlesSection) {
        articlesSection.style.display = "block";
        if (typeof window.observeReveals === 'function') window.observeReveals(articlesSection);
      }
      window.scrollTo(0, 0);
    } else if (viewName === "article-read") {
      if (articleReadSection) {
        articleReadSection.style.display = "block";
        if (typeof window.observeReveals === 'function') window.observeReveals(articleReadSection);
      }
      window.scrollTo(0, 0);
    } else {
      homeSections.forEach(sec => sec.style.display = "");
      if (typeof window.observeReveals === 'function') window.observeReveals(document);
    }
  };

  const handleRoute = async () => {
    const hash = window.location.hash;
    
    if (hash.startsWith("#/recipe/")) {
      const recipeId = hash.replace("#/recipe/", "");
      showView("detail");
      
      if (recipeId === "search") {
        // Active search state
        const lastSearch = localStorage.getItem("last_searched_recipe");
        if (lastSearch) {
          const parsed = JSON.parse(lastSearch);
          renderRecipeDetail(parsed);
        } else {
          // If no search is saved, go home
          window.location.hash = "#";
        }
      } else if (RECIPES_DB[recipeId]) {
        renderRecipeDetail(RECIPES_DB[recipeId]);
      } else {
        // Fallback if recipe not found
        window.location.hash = "#";
      }
    } else if (hash === "#/meal-planner") {
      showView("meal-planner");
    } else if (hash === "#/saved-plans") {
      showView("saved-plans");
    } else if (hash.startsWith("#/articles")) {
      showView("articles");
      let selectedCategory = "all";
      if (hash === "#/articles/healthy-eating") selectedCategory = "Healthy Eating";
      else if (hash === "#/articles/food-reviews") selectedCategory = "Food Reviews";
      else if (hash === "#/articles/ingredient-swaps") selectedCategory = "Ingredient Swaps";
      
      renderArticlesList(selectedCategory);
    } else if (hash.startsWith("#/article/")) {
      const articleId = hash.replace("#/article/", "");
      if (ARTICLES_DB[articleId]) {
        showView("article-read");
        renderArticleRead(ARTICLES_DB[articleId]);
      } else {
        window.location.hash = "#/articles";
      }
    } else {
      showView("home");
    }
  };



  // ==========================================================================
  // RENDERING ENGINE
  // ==========================================================================
  function renderRecipeDetail(recipe) {
    // Populate simple metadata
    document.getElementById("r-prep-cook-time").textContent = recipe.prepTime || recipe.totalTime;
    document.getElementById("r-serves").textContent = recipe.serves;
    document.getElementById("r-diet").textContent = recipe.diet || "Nourir Recipe";
    document.getElementById("r-title").textContent = recipe.title;
    document.getElementById("r-description").textContent = recipe.description;
    
    // Set Badge tag
    const badgeElement = document.getElementById("r-badge-tag");
    if (badgeElement) {
      badgeElement.textContent = recipe.badge || recipe.diet || "Plant Based";
    }

    // Set Image
    const imgElement = document.getElementById("r-image");
    if (imgElement) {
      if (recipe.image && recipe.image.startsWith("Assets/")) {
        imgElement.src = recipe.image;
      } else if (recipe.image && (recipe.image.startsWith("http") || recipe.image.startsWith("data:"))) {
        imgElement.src = recipe.image;
      } else {
        // Fallback to stock search based on title or suggest keywords
        imgElement.src = `https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=700&auto=format&fit=crop&q=60`;
      }
      imgElement.alt = recipe.title;
    }

    // Render Ingredients Card
    const ingredientsContainer = document.getElementById("r-ingredients-container");
    ingredientsContainer.innerHTML = "";
    
    const titleHeader = document.createElement("h2");
    titleHeader.className = "ingredients-title";
    titleHeader.textContent = `Ingredients (${recipe.serves || "Makes 1 Loaf"})`;
    ingredientsContainer.appendChild(titleHeader);

    if (recipe.ingredients) {
      Object.entries(recipe.ingredients).forEach(([categoryName, items]) => {
        const block = document.createElement("div");
        block.className = "ingredients-section-block";
        
        const h3 = document.createElement("h3");
        h3.textContent = categoryName;
        block.appendChild(h3);

        const ul = document.createElement("ul");
        items.forEach(item => {
          const li = document.createElement("li");
          li.textContent = item;
          ul.appendChild(li);
        });
        block.appendChild(ul);
        ingredientsContainer.appendChild(block);
      });
    }

    // Set Save button state & listener
    const detailSaveBtn = document.getElementById("r-save-btn");
    if (detailSaveBtn) {
      const savedRecipes = JSON.parse(localStorage.getItem("saved_recipes") || "[]");
      const isSaved = savedRecipes.includes(recipe.id);
      
      detailSaveBtn.innerHTML = isSaved ? 
        `Saved Recipe <img src="Assets/fast-forward.png" alt="arrow" class="btn-save-icon" style="width: 16px; height: 16px; margin-left: 8px; filter: brightness(0) invert(1);">` : 
        `Save Recipe <img src="Assets/fast-forward.png" alt="arrow" class="btn-save-icon" style="width: 16px; height: 16px; margin-left: 8px; filter: brightness(0) invert(1);">`;
      detailSaveBtn.style.backgroundColor = "var(--color-primary-orange)";
      
      // Clean up old listeners
      const newSaveBtn = detailSaveBtn.cloneNode(true);
      detailSaveBtn.parentNode.replaceChild(newSaveBtn, detailSaveBtn);
      
      newSaveBtn.addEventListener("click", () => {
        toggleSaveRecipe(recipe.id, newSaveBtn);
      });
    }

    // Check for Ingredient Swaps widget
    checkForIngredientSwaps(recipe);

    // Update Instructions Heading with appropriate cook term
    const instructionsHeading = document.getElementById("r-instructions-heading");
    if (instructionsHeading) {
      let term = "cook"; // Default fallback
      if (recipe.cookTerm) {
        term = recipe.cookTerm;
      } else {
        const titleLower = recipe.title.toLowerCase();
        if (titleLower.includes("cake") || titleLower.includes("bread") || titleLower.includes("waffle") || titleLower.includes("bake")) {
          term = "bake";
        } else if (titleLower.includes("salad") || titleLower.includes("bowl") || titleLower.includes("smoothie") || titleLower.includes("shake") || titleLower.includes("drink") || titleLower.includes("abacha")) {
          term = "mix";
        } else if (titleLower.includes("fry") || titleLower.includes("puff") || titleLower.includes("akara")) {
          term = "fry";
        } else if (titleLower.includes("grill") || titleLower.includes("suya") || titleLower.includes("skewer")) {
          term = "grill";
        } else if (titleLower.includes("steam") || titleLower.includes("moi")) {
          term = "steam";
        }
      }
      const capitalizedTerm = term.charAt(0).toUpperCase() + term.slice(1);
      instructionsHeading.textContent = `Instructions – Let's ${capitalizedTerm}!`;
    }

    // Render Instructions List
    const instructionsList = document.getElementById("r-instructions-list");
    instructionsList.innerHTML = "";

    if (recipe.instructions) {
      recipe.instructions.forEach((step, index) => {
        const stepBlock = document.createElement("div");
        stepBlock.className = "instruction-step reveal-el reveal-card-item";
        stepBlock.style.transitionDelay = `${(index % 8) * 60}ms`;

        const h3 = document.createElement("h3");
        h3.textContent = `${step.step}. ${step.title || "Step"}`;
        stepBlock.appendChild(h3);

        const p = document.createElement("p");
        p.textContent = step.instruction;
        stepBlock.appendChild(p);

        if (step.note) {
          const noteDiv = document.createElement("div");
          noteDiv.className = "step-note";
          noteDiv.textContent = step.note;
          stepBlock.appendChild(noteDiv);
        }

        instructionsList.appendChild(stepBlock);
      });
      if (typeof window.observeReveals === 'function') {
        window.observeReveals(instructionsList);
      }
    }

    // Render More Like This Grid (randomly pick 4 other homepage recipes)
    const moreLikeGrid = document.getElementById("r-more-like-this-grid");
    moreLikeGrid.innerHTML = "";
    
    const items = Object.values(RECIPES_DB)
      .filter(x => x.id !== recipe.id)
      .slice(0, 4);

    items.forEach((item, index) => {
      const card = document.createElement("div");
      card.className = "recipe-card reveal-el reveal-card-item";
      card.style.transitionDelay = `${(index % 8) * 80}ms`;
      card.addEventListener("click", () => {
        window.location.hash = `#/recipe/${item.id}`;
      });

      card.innerHTML = `
        <div class="recipe-img-container">
          <img src="${item.image}" alt="${item.title}" class="recipe-img">
        </div>
        <div class="recipe-info">
          <h3 class="recipe-title">${item.title}</h3>
          <div class="recipe-meta">
            <span class="meta-item"><span class="meta-icon">⏳</span> ${item.prepTime || item.totalTime}</span>
            <span class="meta-item"><span class="meta-icon">👥</span> ${item.serves}</span>
            <button class="save-btn"><span class="meta-icon">+</span> save</button>
          </div>
        </div>
      `;
      moreLikeGrid.appendChild(card);
    });
    if (typeof window.observeReveals === 'function') {
      window.observeReveals(moreLikeGrid);
    }
  }

  // Save recipe state toggler
  const toggleSaveRecipe = (recipeId, btnElement) => {
    let saved = JSON.parse(localStorage.getItem("saved_recipes") || "[]");
    const idx = saved.indexOf(recipeId);
    let isSavedNow = false;
    
    if (idx > -1) {
      saved.splice(idx, 1);
    } else {
      saved.push(recipeId);
      isSavedNow = true;
    }
    
    localStorage.setItem("saved_recipes", JSON.stringify(saved));

    // Update card button element if passed
    if (btnElement && btnElement.classList.contains("save-btn")) {
      btnElement.innerHTML = isSavedNow ? 
        `<i data-feather="check" style="width: 14px; height: 14px;"></i> saved` : 
        `<i data-feather="plus" style="width: 14px; height: 14px;"></i> save`;
      if (typeof feather !== 'undefined') feather.replace();
    } else {
      // Re-trigger category grid update to sync save buttons
      const activePill = document.querySelector(".category-tag.tag-selected");
      const activeCat = activePill ? (activePill.getAttribute("data-category") || "all") : "all";
      const recipeGrid = document.querySelector(".recipe-grid");
      if (recipeGrid && recipeGrid.innerHTML !== "") {
        // Just sync classes without full reload if possible, but let's re-run category pill active render
        // Actually, simple way is to find the btn inside the card and update it
        const cardBtn = document.querySelector(`.save-btn[data-id="${recipeId}"]`);
        if (cardBtn) {
          cardBtn.innerHTML = isSavedNow ? 
            `<i data-feather="check" style="width: 14px; height: 14px;"></i> saved` : 
            `<i data-feather="plus" style="width: 14px; height: 14px;"></i> save`;
          if (typeof feather !== 'undefined') feather.replace();
        }
      }
    }

    // Update detail page save button if visible
    const detailSaveBtn = document.getElementById("r-save-btn");
    if (detailSaveBtn) {
      detailSaveBtn.innerHTML = isSavedNow ? 
        `Saved Recipe <img src="Assets/fast-forward.png" alt="arrow" class="btn-save-icon" style="width: 16px; height: 16px; margin-left: 8px; filter: brightness(0) invert(1);">` : 
        `Save Recipe <img src="Assets/fast-forward.png" alt="arrow" class="btn-save-icon" style="width: 16px; height: 16px; margin-left: 8px; filter: brightness(0) invert(1);">`;
      detailSaveBtn.style.backgroundColor = "var(--color-primary-orange)";
    }

    // Update planner list if visible
    const plannerSec = document.getElementById("meal-planner-section");
    if (plannerSec && plannerSec.style.display === "block") {
      renderSavedRecipesList();
    }
  };

  // Market Swap Widget Checker
  const checkForIngredientSwaps = (recipe) => {
    const swapWidget = document.getElementById("recipe-swap-widget");
    if (!swapWidget) return;

    let foundKey = null;
    let foundIngredientLine = "";
    
    if (recipe.ingredients) {
      for (const [cat, items] of Object.entries(recipe.ingredients)) {
        for (const item of items) {
          const lowerItem = item.toLowerCase();
          for (const key of Object.keys(INGREDIENT_SWAPS_DB)) {
            if (lowerItem.includes(key)) {
              foundKey = key;
              foundIngredientLine = item;
              break;
            }
          }
          if (foundKey) break;
        }
        if (foundKey) break;
      }
    }

    if (foundKey) {
      const swapData = INGREDIENT_SWAPS_DB[foundKey];
      swapWidget.style.display = "block";
      document.getElementById("swap-description").textContent = `Swap "${foundKey}" with local ${swapData.local} in this recipe to save ${swapData.savings}! ${swapData.note}`;
      
      const swapBtn = document.getElementById("swap-action-btn");
      const newSwapBtn = swapBtn.cloneNode(true);
      swapBtn.parentNode.replaceChild(newSwapBtn, swapBtn);
      
      newSwapBtn.innerHTML = "Apply Swap";
      newSwapBtn.disabled = false;
      newSwapBtn.style.backgroundColor = "var(--color-primary-green)";
      
      newSwapBtn.addEventListener("click", () => {
        applyDetailSwap(recipe, foundKey, foundIngredientLine, swapData, newSwapBtn);
      });
    } else {
      swapWidget.style.display = "none";
    }
  };

  const applyDetailSwap = (recipe, key, originalLine, swapData, btnElement) => {
    const ingredientsContainer = document.getElementById("r-ingredients-container");
    const listItems = ingredientsContainer.querySelectorAll("li");
    
    listItems.forEach(li => {
      if (li.textContent === originalLine) {
        li.style.textDecoration = "line-through";
        li.style.color = "var(--color-muted-grey)";
        
        const swapLi = document.createElement("li");
        swapLi.className = "swapped-item-line";
        swapLi.style.color = "var(--color-tag-green)";
        swapLi.style.fontWeight = "700";
        swapLi.style.listStyleType = "none";
        swapLi.innerHTML = `✓ Swapped with: ${swapData.local} <span style="font-size: 11px; font-weight: normal; color: var(--color-muted-grey); font-style: italic;">(Est. savings: ${swapData.savings})</span>`;
        
        li.parentNode.insertBefore(swapLi, li.nextSibling);
      }
    });

    btnElement.innerHTML = "Swap Applied! ✓";
    btnElement.disabled = true;
    btnElement.style.backgroundColor = "var(--color-muted-grey)";

    if (recipe.cost) {
      const originalCost = recipe.cost;
      const savingsVal = parseInt(swapData.savings.replace(/[^0-9]/g, '')) || 0;
      recipe.cost = Math.max(100, originalCost - savingsVal);
      alert(`Swap applied successfully! Recipe cost optimized. Estimated savings: ${swapData.savings}.`);
    }
  };

  // Bind click handlers to existing homepage recipe cards
  const bindCardClicks = () => {
    // Highlights today's card routing
    const highlightCard = document.querySelector(".todays-nourir-card");
    if (highlightCard) {
      highlightCard.style.cursor = "pointer";
      highlightCard.addEventListener("click", () => {
        window.location.hash = `#/recipe/peppered-skewers-masa`;
      });
    }

    const highlightBtn = document.querySelector(".btn-dive-in");
    if (highlightBtn) {
      highlightBtn.addEventListener("click", (e) => {
        e.preventDefault();
        window.location.hash = `#/recipe/peppered-skewers-masa`;
      });
    }
  };
  bindCardClicks();

  // ==========================================================================
  // REAL-TIME SEARCH EXPERIENCE WITH ANTHROPIC CLAUDE WEB SEARCH
  // ==========================================================================
  const searchInput = document.querySelector(".recipe-search-input");
  const searchIconBtn = document.querySelector(".recipe-search-icon");

  const executeSearch = async (query) => {
    if (!query || query.trim() === "") return;
    
    // Clear last search
    localStorage.removeItem("last_searched_recipe");

    const apiKey = localStorage.getItem("anthropic_api_key");
    
    // Switch view to Detail page and show loading
    window.location.hash = `#/recipe/search`;
    document.getElementById("recipe-loading").style.display = "flex";
    document.getElementById("recipe-detail-content").style.display = "none";
    document.getElementById("loading-text").textContent = `Claude is searching the web for real, current "${query}" recipe data...`;

    if (!apiKey) {
      // Fallback Mode if no API key is present
      setTimeout(() => {
        const fallbackRecipe = generateLocalMockRecipe(query);
        localStorage.setItem("last_searched_recipe", JSON.stringify(fallbackRecipe));
        renderRecipeDetail(fallbackRecipe);
        
        document.getElementById("recipe-loading").style.display = "none";
        document.getElementById("recipe-detail-content").style.display = "block";
        
        alert("To enable real-time web search with Claude, please enter your Anthropic API Key using the Key icon at the top. Displaying local recipe generated for '" + query + "'!");
      }, 2000);
      return;
    }

    try {
      // Direct Anthropic Messages API request through Vite proxy
      const response = await fetch("/api/anthropic/v1/messages", {
        method: "POST",
        headers: {
          "x-api-key": apiKey,
          "anthropic-version": "2023-06-01",
          "content-type": "application/json",
          "anthropic-dangerous-direct-browser-access": "true"
        },
        body: JSON.stringify({
          model: "claude-3-5-sonnet-20241022",
          max_tokens: 3000,
          messages: [
            {
              role: "user",
              content: `Search the web for a traditional, real recipe for "${query}". You must use the web search tool to get authentic ingredients, measurements, and cooking instructions.

Return your response ONLY as a raw, valid JSON object matching the following structure. Do not wrap in markdown blocks, explanations, or backticks:

{
  "title": "Recipe Title",
  "description": "Short appetizing description",
  "prepTime": "Prep time e.g. 15 mins",
  "cookTime": "Cook time e.g. 30 mins",
  "totalTime": "Total time e.g. 45 mins",
  "serves": "feeds X",
  "diet": "Diet classification",
  "badge": "Short badge text e.g. Spicy",
  "image": "Suggest search keyword e.g. soup",
  "ingredients": {
    "Ingredients Group 1": ["1 cup ingredient 1", "2 tbsp ingredient 2"],
    "Ingredients Group 2": ["3 units ingredient 3"],
    "Utensils You'll Need": ["Pot", "Spoon"]
  },
  "instructions": [
    {
      "step": 1,
      "title": "Step 1 title",
      "instruction": "Step 1 instruction description",
      "note": "Optional helper tip"
    }
  ]
}`
            }
          ],
          tools: [
            {
              type: "web_search_20260209",
              name: "web_search"
            }
          ]
        })
      });

      if (!response.ok) {
        throw new Error(`API returned status ${response.status}`);
      }

      const responseData = await response.json();
      let text = responseData.content[0].text;
      
      // Clean up markdown code blocks if the model wrapped it
      if (text.includes("```json")) {
        text = text.substring(text.indexOf("```json") + 7);
        text = text.substring(0, text.lastIndexOf("```"));
      } else if (text.includes("```")) {
        text = text.substring(text.indexOf("```") + 3);
        text = text.substring(0, text.lastIndexOf("```"));
      }

      const recipe = JSON.parse(text.trim());
      
      // Save searched recipe to local storage
      localStorage.setItem("last_searched_recipe", JSON.stringify(recipe));
      renderRecipeDetail(recipe);

      document.getElementById("recipe-loading").style.display = "none";
      document.getElementById("recipe-detail-content").style.display = "block";
    } catch (err) {
      console.error("Claude Search API Error:", err);
      // Fallback in case of call failure
      setTimeout(() => {
        const fallbackRecipe = generateLocalMockRecipe(query);
        localStorage.setItem("last_searched_recipe", JSON.stringify(fallbackRecipe));
        renderRecipeDetail(fallbackRecipe);
        
        document.getElementById("recipe-loading").style.display = "none";
        document.getElementById("recipe-detail-content").style.display = "block";
        
        alert("Real-time Claude Web Search call failed (CORS, invalid key, or network issue). Showing local fallback recipe for '" + query + "'!");
      }, 1500);
    }
  };

  // Bind Search events
  if (searchInput && searchIconBtn) {
    searchIconBtn.addEventListener("click", () => {
      executeSearch(searchInput.value);
    });
    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        executeSearch(searchInput.value);
      }
    });
  }

  // Generates dynamic high-quality mock recipes locally when API key is missing
  function generateLocalMockRecipe(query) {
    const slug = query.toLowerCase().trim();
    return {
      title: query.charAt(0).toUpperCase() + query.slice(1) + " (Nourir Style)",
      description: `A delicious and authentic representation of ${query}, crafted carefully with standard fresh ingredients and low-fat methods to maintain absolute fit-fam nutritional values.`,
      prepTime: "15 mins",
      cookTime: "30 mins",
      totalTime: "45 mins",
      serves: "feeds 4",
      diet: "Nourir Standard",
      badge: "Local Specialty",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=700&auto=format&fit=crop&q=60",
      ingredients: {
        "Main Ingredients": [
          `500g of prep base for ${query}`,
          "2 large red bell peppers",
          "1 scotch bonnet pepper",
          "1 medium onion, sliced"
        ],
        "Spices & Oils": [
          "2 tbsp healthy vegetable oil",
          "1 tsp curry powder",
          "1 tsp dried thyme",
          "2 seasoning cubes",
          "Salt to taste"
        ],
        "Utensils You'll Need": [
          "Standard cooking pot",
          "Stirring spoon",
          "Knife and prep board"
        ]
      },
      instructions: [
        {
          step: 1,
          title: "Prep & Clean",
          instruction: `Clean and wash all raw ingredients required for the ${query}. Cut the peppers, onions, and chop meat/vegetables accordingly.`,
          note: "Always use fresh ingredients for the best authentic taste."
        },
        {
          step: 2,
          title: "Cook the Base",
          instruction: "Heat oil in the pot, fry chopped onions until transparent, then add blended peppers and spices. Fry for 10 minutes until oil rises.",
          note: "Stir continuously to avoid any sticking."
        },
        {
          step: 3,
          title: "Final Simmer",
          instruction: `Add the main contents of the ${query} into the base, cover the pot, and cook on low heat for 15-20 minutes until tender and hot.`,
          note: "Serve hot alongside a side of your choice!"
        }
      ]
    };
  }

  // ==========================================================================
  // API KEY CONFIG MODAL LOGIC
  // ==========================================================================
  const apiKeyBtn = document.getElementById("api-key-btn");
  const apiKeyModal = document.getElementById("api-key-modal");
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const apiKeyInput = document.getElementById("api-key-input");
  const saveKeyBtn = document.getElementById("save-key-btn");
  const clearKeyBtn = document.getElementById("clear-key-btn");

  if (apiKeyBtn && apiKeyModal) {
    apiKeyBtn.addEventListener("click", () => {
      const currentKey = localStorage.getItem("anthropic_api_key") || "";
      apiKeyInput.value = currentKey;
      apiKeyModal.style.display = "flex";
    });

    const closeModal = () => {
      apiKeyModal.style.display = "none";
    };

    modalCloseBtn.addEventListener("click", closeModal);
    apiKeyModal.addEventListener("click", (e) => {
      if (e.target === apiKeyModal) closeModal();
    });

    saveKeyBtn.addEventListener("click", () => {
      const key = apiKeyInput.value.trim();
      if (key) {
        localStorage.setItem("anthropic_api_key", key);
        alert("Anthropic API Key saved successfully!");
        closeModal();
      } else {
        alert("Please enter a valid API key.");
      }
    });

    clearKeyBtn.addEventListener("click", () => {
      localStorage.removeItem("anthropic_api_key");
      apiKeyInput.value = "";
      alert("Anthropic API Key cleared!");
      closeModal();
    });
  }

  // ==========================================================================
  // MEAL PLANNER ENGINE
  // ==========================================================================

  const getActiveMealPlan = () => {
    const saved = localStorage.getItem("active_meal_plan");
    if (saved) return JSON.parse(saved);
    
    const defaultMealPlan = {
      Monday: { Breakfast: null, Lunch: null, Dinner: null },
      Tuesday: { Breakfast: null, Lunch: null, Dinner: null },
      Wednesday: { Breakfast: null, Lunch: null, Dinner: null },
      Thursday: { Breakfast: null, Lunch: null, Dinner: null },
      Friday: { Breakfast: null, Lunch: null, Dinner: null },
      Saturday: { Breakfast: null, Lunch: null, Dinner: null },
      Sunday: { Breakfast: null, Lunch: null, Dinner: null }
    };
    localStorage.setItem("active_meal_plan", JSON.stringify(defaultMealPlan));
    return defaultMealPlan;
  };

  const addMealToSlot = (day, meal, mealObj) => {
    const plan = getActiveMealPlan();
    plan[day][meal] = mealObj;
    localStorage.setItem("active_meal_plan", JSON.stringify(plan));
    renderWeeklyGrid();
  };

  const removeMealFromSlot = (day, meal) => {
    const plan = getActiveMealPlan();
    plan[day][meal] = null;
    localStorage.setItem("active_meal_plan", JSON.stringify(plan));
    renderWeeklyGrid();
  };

  const getSlotSelectHtml = () => {
    return `
      <select class="add-to-slot-select" style="padding: 6px 12px; font-size: 11px; font-weight: 700; border-radius: 50px; border: 1.5px solid var(--color-primary-green); background: white; color: var(--color-primary-green); outline: none; cursor: pointer; max-width: 80px;">
        <option value="">+ Add</option>
        <optgroup label="Monday">
          <option value="Monday-Breakfast">Mon - B</option>
          <option value="Monday-Lunch">Mon - L</option>
          <option value="Monday-Dinner">Mon - D</option>
        </optgroup>
        <optgroup label="Tuesday">
          <option value="Tuesday-Breakfast">Tue - B</option>
          <option value="Tuesday-Lunch">Tue - L</option>
          <option value="Tuesday-Dinner">Tue - D</option>
        </optgroup>
        <optgroup label="Wednesday">
          <option value="Wednesday-Breakfast">Wed - B</option>
          <option value="Wednesday-Lunch">Wed - L</option>
          <option value="Wednesday-Dinner">Wed - D</option>
        </optgroup>
        <optgroup label="Thursday">
          <option value="Thursday-Breakfast">Thu - B</option>
          <option value="Thursday-Lunch">Thu - L</option>
          <option value="Thursday-Dinner">Thu - D</option>
        </optgroup>
        <optgroup label="Friday">
          <option value="Friday-Breakfast">Fri - B</option>
          <option value="Friday-Lunch">Fri - L</option>
          <option value="Friday-Dinner">Fri - D</option>
        </optgroup>
        <optgroup label="Saturday">
          <option value="Saturday-Breakfast">Sat - B</option>
          <option value="Saturday-Lunch">Sat - L</option>
          <option value="Saturday-Dinner">Sat - D</option>
        </optgroup>
        <optgroup label="Sunday">
          <option value="Sunday-Breakfast">Sun - B</option>
          <option value="Sunday-Lunch">Sun - L</option>
          <option value="Sunday-Dinner">Sun - D</option>
        </optgroup>
      </select>
    `;
  };

  const renderWeeklyGrid = () => {
    const grid = document.getElementById("weekly-calendar-grid");
    if (!grid) return;
    grid.innerHTML = "";
    
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const plan = getActiveMealPlan();

    days.forEach(day => {
      const dayCard = document.createElement("div");
      dayCard.className = "day-card";
      
      let dayCost = 0;
      let dayCals = 0;
      
      ["Breakfast", "Lunch", "Dinner"].forEach(meal => {
        const item = plan[day][meal];
        if (item) {
          dayCost += item.cost || 0;
          dayCals += item.calories || 0;
        }
      });

      dayCard.innerHTML = `
        <div class="day-header">
          <h3 class="day-title">${day}</h3>
          <div class="day-stats">
            <span class="calories">⚡ ${dayCals} kcal</span>
            <span class="cost">₦${dayCost.toLocaleString()}</span>
          </div>
        </div>
        <div class="meal-slots-list"></div>
      `;

      const slotsList = dayCard.querySelector(".meal-slots-list");
      
      ["Breakfast", "Lunch", "Dinner"].forEach(meal => {
        const slot = document.createElement("div");
        slot.className = "meal-slot";
        
        const label = document.createElement("div");
        label.className = "meal-slot-label";
        label.textContent = meal;
        slot.appendChild(label);
        
        const content = document.createElement("div");
        content.className = "meal-slot-content";
        
        const item = plan[day][meal];
        if (item) {
          const itemDiv = document.createElement("div");
          itemDiv.className = "meal-slot-item";
          
          const caloriesText = `${item.calories} kcal`;
          
          itemDiv.innerHTML = `
            <div>
              <span class="meal-slot-item-title">${item.title}</span>
              <span class="meal-slot-item-meta">${caloriesText}</span>
              <span class="meal-slot-item-meta cost">₦${item.cost}</span>
            </div>
            <button class="btn-slot-delete" data-day="${day}" data-meal="${meal}"><i data-feather="x" style="width: 16px; height: 16px;"></i></button>
          `;
          
          itemDiv.querySelector(".btn-slot-delete").addEventListener("click", () => {
            removeMealFromSlot(day, meal);
          });
          
          content.appendChild(itemDiv);
        } else {
          const emptyDiv = document.createElement("div");
          emptyDiv.className = "empty-slot";
          emptyDiv.innerHTML = `<i data-feather="plus" style="width: 14px; height: 14px;"></i> Add Meal`;
          
          emptyDiv.addEventListener("click", () => {
            openSlotMealPicker(day, meal);
          });
          
          content.appendChild(emptyDiv);
        }
        
        slot.appendChild(content);
        slotsList.appendChild(slot);
      });

      grid.appendChild(dayCard);
    });

    if (typeof feather !== 'undefined') {
      feather.replace();
    }

    updateWeeklyTotals();
  };

  const renderSavedRecipesList = () => {
    // 1. Target new list container on the meal planner section
    const gridContainer = document.getElementById("saved-recipes-grid-container");
    if (gridContainer) {
      gridContainer.innerHTML = "";

      const savedRecipes = JSON.parse(localStorage.getItem("saved_recipes") || "[]");

      if (savedRecipes.length === 0) {
        gridContainer.innerHTML = `
          <div class="empty-state-card" style="grid-column: 1 / -1; background: #fdfdfd; border-radius: 20px; padding: 40px; text-align: center; border: 1px solid rgba(0, 0, 0, 0.05); width: 100%;">
            <div style="font-size: 3rem; margin-bottom: 15px;">❤️</div>
            <h3 style="font-family: NT Wagner Bold, var(--font-headings); font-size: 1.35rem; color: #4E070B; margin-bottom: 8px;">No Saved Recipes</h3>
            <p style="color: #7d7d7d; max-width: 400px; margin: 0 auto 20px auto; font-size: 0.95rem;">Save your favorite recipes from the feed, and they will appear here for easy access!</p>
            <a href="#" class="btn btn-outline" style="border-radius: 50px; padding: 10px 24px; text-decoration: none; display: inline-block;">Browse Recipes</a>
          </div>
        `;
        return;
      }

      savedRecipes.forEach((recipeId, index) => {
        const recipe = RECIPES_DB[recipeId];
        if (!recipe) return;

        const card = document.createElement("div");
        card.className = "recipe-card reveal-el reveal-card-item";
        card.style.cursor = "pointer";
        card.style.transitionDelay = `${(index % 8) * 80}ms`;
        card.addEventListener("click", () => {
          window.location.hash = `#/recipe/${recipe.id}`;
        });

        // It is saved, so check icon
        const saveIcon = "check";
        const saveText = "saved";

        card.innerHTML = `
          <div class="recipe-img-container" style="position: relative;">
            <img src="${recipe.image}" alt="${recipe.title}" class="recipe-img">
          </div>
          <div class="recipe-info">
            <h3 class="recipe-title">${recipe.title}</h3>
            <div class="recipe-meta">
              <span class="meta-item"><span class="meta-icon">⏳</span> ${recipe.prepTime || recipe.totalTime || "25 mins"}</span>
              <span class="meta-item"><span class="meta-icon">👥</span> ${recipe.serves || "feeds 2"}</span>
              <button class="save-btn" data-id="${recipe.id}" style="z-index: 10;"><i data-feather="${saveIcon}" style="width: 14px; height: 14px;"></i> ${saveText}</button>
            </div>
          </div>
        `;

        const saveBtn = card.querySelector(".save-btn");
        saveBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          toggleSaveRecipe(recipe.id, saveBtn);
          setTimeout(renderSavedRecipesList, 150);
        });

        gridContainer.appendChild(card);
      });

      if (typeof feather !== 'undefined') {
        feather.replace();
      }
      
      if (typeof window.observeReveals === 'function') {
        window.observeReveals(gridContainer);
      }
      return;
    }

    // 2. Fallback to old sidebar list target (if present)
    const list = document.getElementById("planner-saved-list");
    if (!list) return;
    list.innerHTML = "";
    
    const savedIds = JSON.parse(localStorage.getItem("saved_recipes") || "[]");
    
    if (savedIds.length === 0) {
      list.innerHTML = `<p class="empty-state-text">No saved recipes yet. Go to the home page and click "save" on recipes you like!</p>`;
      return;
    }

    savedIds.forEach(id => {
      const recipe = RECIPES_DB[id];
      if (recipe) {
        const itemDiv = document.createElement("div");
        itemDiv.className = "sidebar-recipe-item";
        
        itemDiv.innerHTML = `
          <img src="${recipe.image}" class="sidebar-recipe-img">
          <div class="sidebar-recipe-info">
            <div class="sidebar-recipe-title">${recipe.title}</div>
            <div class="sidebar-recipe-meta">
              <span>⚡ ${recipe.calories || 250} kcal</span>
              <span class="cost">₦${recipe.cost || 800}</span>
            </div>
          </div>
          <div class="add-select-wrapper"></div>
        `;

        const selectWrapper = itemDiv.querySelector(".add-select-wrapper");
        selectWrapper.innerHTML = getSlotSelectHtml();
        
        selectWrapper.querySelector("select").addEventListener("change", (e) => {
          const slotVal = e.target.value;
          if (!slotVal) return;
          const [day, meal] = slotVal.split("-");
          addMealToSlot(day, meal, {
            id: recipe.id,
            title: recipe.title,
            calories: recipe.calories || 250,
            carbs: recipe.carbs || 30,
            protein: recipe.protein || 10,
            fat: recipe.fat || 8,
            cost: recipe.cost || 800,
            isStaple: false
          });
          e.target.value = "";
        });

        list.appendChild(itemDiv);
      }
    });
  };

  const renderNairaSaverSuggestions = () => {
    const list = document.getElementById("planner-budget-list");
    if (!list) return;
    list.innerHTML = "";
    
    const budgetLimit = getActiveBudget();
    
    const suggestions = Object.values(RECIPES_DB).filter(recipe => {
      if (budgetLimit <= 15000) {
        return (recipe.cost || 800) <= 1000;
      }
      return (recipe.cost || 800) <= 1500;
    });

    suggestions.forEach(recipe => {
      const itemDiv = document.createElement("div");
      itemDiv.className = "sidebar-recipe-item";
      
      itemDiv.innerHTML = `
        <img src="${recipe.image}" class="sidebar-recipe-img">
        <div class="sidebar-recipe-info">
          <div class="sidebar-recipe-title">${recipe.title}</div>
          <div class="sidebar-recipe-meta">
            <span>⚡ ${recipe.calories || 250} kcal</span>
            <span class="cost">₦${recipe.cost || 800}</span>
          </div>
        </div>
        <div class="add-select-wrapper"></div>
      `;

      const selectWrapper = itemDiv.querySelector(".add-select-wrapper");
      selectWrapper.innerHTML = getSlotSelectHtml();
      
      selectWrapper.querySelector("select").addEventListener("change", (e) => {
        const slotVal = e.target.value;
        if (!slotVal) return;
        const [day, meal] = slotVal.split("-");
        addMealToSlot(day, meal, {
          id: recipe.id,
          title: recipe.title,
          calories: recipe.calories || 250,
          carbs: recipe.carbs || 30,
          protein: recipe.protein || 10,
          fat: recipe.fat || 8,
          cost: recipe.cost || 800,
          isStaple: false
        });
        e.target.value = "";
      });

      list.appendChild(itemDiv);
    });
  };

  const renderStaplesLookupList = (query = "") => {
    const list = document.getElementById("macro-lookup-list");
    if (!list) return;
    list.innerHTML = "";
    
    const lowerQuery = query.toLowerCase().trim();
    
    const matched = Object.entries(STAPLES_MACROS_DB).filter(([key, staple]) => {
      return staple.name.toLowerCase().includes(lowerQuery) || key.toLowerCase().includes(lowerQuery);
    });

    if (matched.length === 0) {
      list.innerHTML = `<p class="empty-state-text" style="text-align: center; color: var(--color-muted-grey); padding: 15px 0;">No matching staples found.</p>`;
      return;
    }

    matched.forEach(([key, staple]) => {
      const itemDiv = document.createElement("div");
      itemDiv.className = "macro-lookup-item";
      
      itemDiv.innerHTML = `
        <div class="macro-lookup-info">
          <div class="macro-lookup-name">${staple.name}</div>
          <div class="macro-lookup-details">
            <span>⚡ ${staple.calories} kcal</span>
            <span>C: ${staple.carbs}g</span>
            <span>P: ${staple.protein}g</span>
            <span>F: ${staple.fat}g</span>
            <span style="color: var(--color-primary-orange); font-weight: 700;">₦${staple.cost}</span>
          </div>
        </div>
        <div class="add-select-wrapper"></div>
      `;

      const selectWrapper = itemDiv.querySelector(".add-select-wrapper");
      selectWrapper.innerHTML = getSlotSelectHtml();
      
      selectWrapper.querySelector("select").addEventListener("change", (e) => {
        const slotVal = e.target.value;
        if (!slotVal) return;
        const [day, meal] = slotVal.split("-");
        addMealToSlot(day, meal, {
          id: key,
          title: staple.name,
          calories: staple.calories,
          carbs: staple.carbs,
          protein: staple.protein,
          fat: staple.fat,
          cost: staple.cost,
          isStaple: true
        });
        e.target.value = "";
      });

      list.appendChild(itemDiv);
    });
  };

  const getActiveBudget = () => {
    return parseInt(localStorage.getItem("weekly_budget") || "10000");
  };

  const updateBudgetDisplay = () => {
    const budgetLimit = getActiveBudget();
    
    const customInput = document.getElementById("custom-budget-val");
    if (customInput) {
      if ([10000, 20000, 30000, 50000].includes(budgetLimit)) {
        customInput.value = "";
      } else {
        customInput.value = budgetLimit;
      }
    }

    const pills = document.querySelectorAll(".budget-pill");
    pills.forEach(p => {
      const val = parseInt(p.getAttribute("data-budget"));
      if (val === budgetLimit) {
        p.classList.add("active");
      } else {
        p.classList.remove("active");
      }
    });

    const targetLimitLabel = document.getElementById("planner-target-limit");
    if (targetLimitLabel) targetLimitLabel.textContent = `₦${budgetLimit.toLocaleString()}`;
    recalculateBudgetStatus();
  };

  const recalculateBudgetStatus = () => {
    const budgetLimit = getActiveBudget();
    const plan = getActiveMealPlan();
    
    let totalCost = 0;
    Object.values(plan).forEach(dayMeals => {
      Object.values(dayMeals).forEach(meal => {
        if (meal) totalCost += meal.cost || 0;
      });
    });

    const costLabel = document.getElementById("planner-total-cost");
    if (costLabel) costLabel.textContent = `₦${totalCost.toLocaleString()}`;

    const progressFill = document.getElementById("budget-progress-fill");
    const statusLabel = document.getElementById("budget-status-label");

    if (progressFill && statusLabel) {
      const percentage = Math.min(100, (totalCost / budgetLimit) * 100);
      progressFill.style.width = `${percentage}%`;

      if (totalCost > budgetLimit) {
        progressFill.style.backgroundColor = "var(--color-primary-orange)";
        statusLabel.textContent = "Over Budget";
        statusLabel.className = "status-badge budget-danger";
      } else if (totalCost >= budgetLimit * 0.85) {
        progressFill.style.backgroundColor = "var(--color-accent-yellow)";
        statusLabel.textContent = "Approaching Limit";
        statusLabel.className = "status-badge budget-warning";
      } else {
        progressFill.style.backgroundColor = "var(--color-primary-green)";
        statusLabel.textContent = "Under Budget";
        statusLabel.className = "status-badge budget-ok";
      }
    }
  };

  const updateWeeklyTotals = () => {
    const plan = getActiveMealPlan();
    let totalCals = 0;
    let totalCarbs = 0;
    let totalProtein = 0;
    let totalFat = 0;

    Object.values(plan).forEach(dayMeals => {
      Object.values(dayMeals).forEach(meal => {
        if (meal) {
          totalCals += meal.calories || 0;
          totalCarbs += meal.carbs || 0;
          totalProtein += meal.protein || 0;
          totalFat += meal.fat || 0;
        }
      });
    });

    const daysWithMeals = 7;
    const avgCals = Math.round(totalCals / daysWithMeals);
    
    const calLabel = document.getElementById("summary-total-calories");
    if (calLabel) calLabel.textContent = avgCals;
    
    const carbsLabel = document.getElementById("summary-total-carbs");
    if (carbsLabel) carbsLabel.textContent = `${totalCarbs}g`;
    
    const proteinLabel = document.getElementById("summary-total-protein");
    if (proteinLabel) proteinLabel.textContent = `${totalProtein}g`;
    
    const fatLabel = document.getElementById("summary-total-fat");
    if (fatLabel) fatLabel.textContent = `${totalFat}g`;

    const standardWeeklyCarbs = 250 * 7;
    const standardWeeklyProtein = 75 * 7;
    const standardWeeklyFat = 60 * 7;

    const fillCarbs = document.getElementById("bar-fill-carbs");
    const fillProtein = document.getElementById("bar-fill-protein");
    const fillFat = document.getElementById("bar-fill-fat");

    if (fillCarbs) fillCarbs.style.width = `${Math.min(100, (totalCarbs / standardWeeklyCarbs) * 100)}%`;
    if (fillProtein) fillProtein.style.width = `${Math.min(100, (totalProtein / standardWeeklyProtein) * 100)}%`;
    if (fillFat) fillFat.style.width = `${Math.min(100, (totalFat / standardWeeklyFat) * 100)}%`;

    recalculateBudgetStatus();
  };

  const autoGenerateNairaSaverPlan = () => {
    const budget = getActiveBudget();
    const plan = {};
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    
    let breakfastPool, lunchPool, dinnerPool;

    if (budget < 15000) {
      breakfastPool = [
        { id: "steamed-moi-moi-pudding", title: "Steamed Moi Moi pudding", calories: 240, carbs: 34, protein: 16, fat: 4, cost: 600, isStaple: false },
        { id: "beans-ewa", title: "Beans (Ewa) cooked", calories: 280, carbs: 45, protein: 16, fat: 1.5, cost: 400, isStaple: true }
      ];
      lunchPool = [
        { id: "seafood-okra", title: "Eba & Okra Soup", calories: 350, carbs: 46, protein: 23, fat: 5, cost: 700, isStaple: true },
        { id: "tropical-tiger-nut-bowl", title: "Tropical Tiger Nut Bowl", calories: 250, carbs: 42, protein: 5, fat: 8, cost: 800, isStaple: false },
        { id: "naija-macaroni-salad", title: "Naija Macaroni Salad", calories: 310, carbs: 48, protein: 10, fat: 9, cost: 800, isStaple: false }
      ];
      dinnerPool = [
        { id: "smoky-naija-jollof", title: "Smoky Naija Jollof", calories: 380, carbs: 68, protein: 9, fat: 8, cost: 1000, isStaple: false },
        { id: "acha-fonio", title: "Cooked Acha & Titus Fish", calories: 380, carbs: 38, protein: 23, fat: 15.5, cost: 1300, isStaple: true },
        { id: "puff-puff-royale", title: "Puff Puff Royale & Zobo", calories: 300, carbs: 55, protein: 4, fat: 4, cost: 500, isStaple: false }
      ];
    } else if (budget < 30000) {
      breakfastPool = [
        { id: "seeded-oat-bread-loaf", title: "Seeded Oat Bread Loaf", calories: 180, carbs: 26, protein: 6, fat: 5, cost: 750, isStaple: false },
        { id: "steamed-moi-moi-pudding", title: "Steamed Moi Moi pudding", calories: 240, carbs: 34, protein: 16, fat: 4, cost: 600, isStaple: false }
      ];
      lunchPool = [
        { id: "efo-riro-with-fufu", title: "Efo Riro with fufu", calories: 520, carbs: 62, protein: 28, fat: 18, cost: 1200, isStaple: false },
        { id: "abacha-ede-special", title: "Abacha & Ede Special", calories: 430, carbs: 58, protein: 15, fat: 16, cost: 1200, isStaple: false }
      ];
      dinnerPool = [
        { id: "smoky-naija-jollof", title: "Smoky Naija Jollof", calories: 380, carbs: 68, protein: 9, fat: 8, cost: 1000, isStaple: false },
        { id: "peppered-skewers-masa", title: "Peppered Skewers & Masa", calories: 490, carbs: 62, protein: 26, fat: 15, cost: 1500, isStaple: false }
      ];
    } else {
      breakfastPool = [
        { id: "seeded-oat-bread-loaf", title: "Seeded Oat Bread Loaf", calories: 180, carbs: 26, protein: 6, fat: 5, cost: 750, isStaple: false },
        { id: "coconut-carrot-cake", title: "Coconut-Carrot Cake slice", calories: 210, carbs: 38, protein: 3, fat: 6, cost: 500, isStaple: false }
      ];
      lunchPool = [
        { id: "efo-riro-with-fufu", title: "Efo Riro with fufu", calories: 520, carbs: 62, protein: 28, fat: 18, cost: 1200, isStaple: false },
        { id: "goat-meat-plantain-tacos", title: "Goat Meat Plantain Tacos", calories: 390, carbs: 44, protein: 24, fat: 12, cost: 1800, isStaple: false }
      ];
      dinnerPool = [
        { id: "peppered-skewers-masa", title: "Peppered Skewers & Masa", calories: 490, carbs: 62, protein: 26, fat: 15, cost: 1500, isStaple: false },
        { id: "smoky-naija-jollof", title: "Smoky Naija Jollof", calories: 380, carbs: 68, protein: 9, fat: 8, cost: 1000, isStaple: false },
        { id: "abacha-ede-special", title: "Abacha & Ede Special", calories: 430, carbs: 58, protein: 15, fat: 16, cost: 1200, isStaple: false }
      ];
    }

    days.forEach(day => {
      plan[day] = {
        Breakfast: breakfastPool[Math.floor(Math.random() * breakfastPool.length)],
        Lunch: lunchPool[Math.floor(Math.random() * lunchPool.length)],
        Dinner: dinnerPool[Math.floor(Math.random() * dinnerPool.length)]
      };
    });

    localStorage.setItem("active_meal_plan", JSON.stringify(plan));
    renderWeeklyGrid();
    alert("Weekly meal plan generated successfully! Your budget target has been optimized using local, seasonal ingredients.");
  };

  const saveCurrentMealPlan = () => {
    const planName = prompt("Enter a name for this meal plan:", `Naija Saver Plan ${new Date().toLocaleDateString()}`);
    if (!planName) return;

    const plan = getActiveMealPlan();
    const budget = getActiveBudget();
    
    const savedPlans = JSON.parse(localStorage.getItem("saved_meal_plans") || "[]");
    
    savedPlans.push({
      id: "plan_" + Date.now(),
      name: planName,
      date: new Date().toLocaleDateString(),
      plan: plan,
      budget: budget
    });

    localStorage.setItem("saved_meal_plans", JSON.stringify(savedPlans));
    renderSavedPlansGrid();
    alert(`Meal plan "${planName}" saved successfully!`);
  };

  const deleteSavedPlan = (planId) => {
    if (!confirm("Are you sure you want to delete this saved plan?")) return;
    
    let savedPlans = JSON.parse(localStorage.getItem("saved_meal_plans") || "[]");
    savedPlans = savedPlans.filter(p => p.id !== planId);
    
    localStorage.setItem("saved_meal_plans", JSON.stringify(savedPlans));
    renderSavedPlansGrid();
  };

  const loadSavedPlan = (planId) => {
    const savedPlans = JSON.parse(localStorage.getItem("saved_meal_plans") || "[]");
    const found = savedPlans.find(p => p.id === planId);
    
    if (found) {
      localStorage.setItem("current_plan_id", found.id);
      localStorage.setItem("active_meal_plan", JSON.stringify(found.plan));
      localStorage.setItem("weekly_budget", found.budget);
      localStorage.setItem("active_meal_plan_name", found.name);
      
      window.location.hash = "#/meal-planner";
    }
  };

  const renderSavedPlansGrid = () => {
    const container = document.getElementById("saved-plans-scatter-wrap");
    if (!container) return;
    container.innerHTML = "";
    
    // Auto-populate mock plans if savedPlans is empty or has less than 3 plans
    let savedPlans = getSavedPlans();
    
    if (savedPlans.length < 3) {
      const mockPlans = [
        {
          id: "plan_mock_1",
          name: "Naija Budget Saver",
          date: "7/10/2026",
          startDate: new Date().toISOString(),
          duration: "weekly",
          budget: 15000,
          plan: {
            Monday: { Breakfast: { id: "peppered-skewers-masa", title: "Masa & Suya Skewers", cost: 1200 } },
            Wednesday: { Lunch: { id: "jollof-rice", title: "Party Jollof Rice", cost: 1500 } }
          }
        },
        {
          id: "plan_mock_2",
          name: "Fit-Fam Weekly Prep",
          date: "7/12/2026",
          startDate: new Date().toISOString(),
          duration: "weekly",
          budget: 25000,
          plan: {
            Tuesday: { Lunch: { id: "efo-riro", title: "Lighter Efo Riro", cost: 1800 } }
          }
        },
        {
          id: "plan_mock_3",
          name: "Sunday Owambe Feast",
          date: "7/15/2026",
          startDate: new Date().toISOString(),
          duration: "weekly",
          budget: 45000,
          plan: {
            Sunday: { Dinner: { id: "goat-meat-plantain-tacos", title: "Goat Meat Plantain Tacos", cost: 2500 } }
          }
        }
      ];
      // Insert mocks that aren't already present
      mockPlans.forEach(mock => {
        if (!savedPlans.some(p => p.id === mock.id)) {
          savedPlans.push(mock);
        }
      });
      localStorage.setItem("saved_meal_plans", JSON.stringify(savedPlans));
    }

    const accents = ["red", "blue", "yellow", "green", "orange"];
    const drifts = [1, 2, 3, 4, 5];
    const positions = [1, 2, 3, 4, 5];

    savedPlans.forEach((planObj, index) => {
      // Calculate costs and meal counts
      let cost = 0;
      let mealCount = 0;
      let dominantCuisine = "🍲"; // default preview icon
      
      // Determine dominant icon
      if (planObj.plan) {
        Object.values(planObj.plan).forEach(dayMeals => {
          Object.values(dayMeals).forEach(meal => {
            if (meal) {
              cost += meal.cost || 0;
              mealCount++;
              // Pick icons based on name keywords
              const titleLower = (meal.title || "").toLowerCase();
              if (titleLower.includes("jollof")) dominantCuisine = "🍛";
              else if (titleLower.includes("suya") || titleLower.includes("skewers")) dominantCuisine = "🍢";
              else if (titleLower.includes("efo") || titleLower.includes("soup") || titleLower.includes("okra")) dominantCuisine = "🍲";
              else if (titleLower.includes("egg") || titleLower.includes("masa") || titleLower.includes("breakfast")) dominantCuisine = "🍳";
            }
          });
        });
      }

      const card = document.createElement("div");
      
      // Select accent color, position index, and drift animation index
      const accent = accents[index % accents.length];
      const pos = positions[index % positions.length];
      const drift = drifts[index % drifts.length];

      card.className = `scatter-plan-card scatter-accent-${accent} pos-${pos} card-drift-${drift} reveal-el reveal-card-item`;
      
      // Make sure cards can overlap in stacking order
      card.style.zIndex = index + 10;
      card.style.transitionDelay = `${(index % 8) * 80}ms`;

      card.innerHTML = `
        <div class="scatter-card-header">
          <h3 class="scatter-card-title">${planObj.name}</h3>
          <div class="scatter-card-preview">${dominantCuisine}</div>
        </div>
        
        <div class="scatter-card-meta">
          <div class="scatter-card-meta-item">
            <span>📅</span> Date: ${planObj.date}
          </div>
          <div class="scatter-card-meta-item">
            <span>💰</span> Target Budget: ₦${(planObj.budget || 10000).toLocaleString()}
          </div>
          <div class="scatter-card-meta-item">
            <span>🍲</span> Est. Cost: ₦${cost.toLocaleString()} (${mealCount} meals)
          </div>
        </div>

        <div class="scatter-card-actions">
          <button class="scatter-card-delete-btn" title="Delete Plan" aria-label="Delete plan">
            <i data-feather="trash-2" style="width: 18px; height: 18px;"></i>
          </button>
        </div>
      `;

      // Hover interaction logic to pause drift animation
      card.addEventListener("mouseenter", () => {
        card.style.animationPlayState = "paused";
      });
      card.addEventListener("mouseleave", () => {
        card.style.animationPlayState = "running";
      });

      // Load plan detail trigger on click
      card.addEventListener("click", (e) => {
        // If delete button is clicked, don't navigate
        if (e.target.closest(".scatter-card-delete-btn")) return;
        
        loadSavedPlan(planObj.id);
      });

      // Delete plan trigger
      const delBtn = card.querySelector(".scatter-card-delete-btn");
      if (delBtn) {
        delBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          deleteSavedPlan(planObj.id);
        });
      }

      container.appendChild(card);
    });

    if (typeof feather !== "undefined") {
      feather.replace();
    }
    
    if (typeof window.observeReveals === 'function') {
      window.observeReveals(container);
    }
  };

  const openSlotMealPicker = (day, meal) => {
    let modal = document.getElementById("meal-picker-modal");
    if (!modal) {
      modal = document.createElement("div");
      modal.id = "meal-picker-modal";
      modal.className = "modal-overlay";
      modal.style.display = "none";
      modal.style.position = "fixed";
      modal.style.top = "0";
      modal.style.left = "0";
      modal.style.width = "100%";
      modal.style.height = "100%";
      modal.style.backgroundColor = "rgba(0,0,0,0.5)";
      modal.style.zIndex = "2000";
      modal.style.justifyContent = "center";
      modal.style.alignItems = "center";
      
      modal.innerHTML = `
        <div class="modal-content" style="background: white; border-radius: var(--border-radius-lg); padding: 30px; max-width: 600px; width: 90%; max-height: 85vh; display: flex; flex-direction: column; position: relative;">
          <button class="modal-close-btn" id="meal-picker-close" style="position: absolute; top: 15px; right: 20px; font-size: 24px; font-weight: bold; cursor: pointer; border:none; background:none;">&times;</button>
          <h2 id="meal-picker-title" style="font-family: var(--font-headings); color: var(--color-primary-green); margin-bottom: 15px; font-size: 24px;">Add meal to Day Slot</h2>
          <input type="text" id="meal-picker-search" placeholder="Search recipes or staples (e.g. Jollof, Suya, Okra)..." class="modal-input" style="width: 100%; border-radius: 50px; border: 1.5px solid rgba(0,0,0,0.1); padding: 12px 20px; outline: none; font-size: 14px; margin-bottom: 15px;">
          <div class="meal-picker-results" id="meal-picker-results" style="flex: 1; overflow-y: auto; display: flex; flex-direction: column; gap: 10px;"></div>
        </div>
      `;
      document.body.appendChild(modal);
      
      modal.querySelector("#meal-picker-close").addEventListener("click", () => {
        modal.style.display = "none";
      });
      modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.style.display = "none";
      });
    }

    modal.querySelector("#meal-picker-title").textContent = `Add meal to ${day} ${meal}`;
    modal.style.display = "flex";
    
    const searchInput = modal.querySelector("#meal-picker-search");
    searchInput.value = "";
    
    const renderResults = (query = "") => {
      const resultsDiv = modal.querySelector("#meal-picker-results");
      resultsDiv.innerHTML = "";
      
      const lowerQuery = query.toLowerCase().trim();
      
      const matchedRecipes = Object.values(RECIPES_DB).filter(recipe => {
        return recipe.title.toLowerCase().includes(lowerQuery) || 
               recipe.description.toLowerCase().includes(lowerQuery) || 
               (recipe.diet && recipe.diet.toLowerCase().includes(lowerQuery));
      });
      
      const matchedStaples = Object.entries(STAPLES_MACROS_DB).filter(([key, staple]) => {
        return staple.name.toLowerCase().includes(lowerQuery) || key.toLowerCase().includes(lowerQuery);
      });

      if (matchedRecipes.length === 0 && matchedStaples.length === 0) {
        resultsDiv.innerHTML = `<p style="text-align: center; color: var(--color-muted-grey); padding: 20px 0;">No matching meals found. Try another search!</p>`;
        return;
      }

      if (matchedRecipes.length > 0) {
        const header = document.createElement("h4");
        header.style.fontFamily = "var(--font-headings)";
        header.style.color = "var(--color-dark-burgundy)";
        header.style.margin = "10px 0 5px 0";
        header.style.fontSize = "16px";
        header.textContent = "Nourir Recipes";
        resultsDiv.appendChild(header);
        
        matchedRecipes.forEach(recipe => {
          const item = document.createElement("div");
          item.className = "sidebar-recipe-item";
          item.style.cursor = "pointer";
          item.style.border = "1px solid rgba(0,0,0,0.05)";
          item.style.padding = "10px";
          item.style.borderRadius = "8px";
          
          item.innerHTML = `
            <img src="${recipe.image}" class="sidebar-recipe-img">
            <div class="sidebar-recipe-info">
              <div class="sidebar-recipe-title">${recipe.title}</div>
              <div class="sidebar-recipe-meta">
                <span>⚡ ${recipe.calories || 250} kcal</span>
                <span class="cost">₦${recipe.cost || 800}</span>
              </div>
            </div>
            <button class="btn-sidebar-add" style="margin-left:auto;">Select</button>
          `;
          
          item.addEventListener("click", () => {
            addMealToSlot(day, meal, {
              id: recipe.id,
              title: recipe.title,
              calories: recipe.calories || 250,
              carbs: recipe.carbs || 30,
              protein: recipe.protein || 10,
              fat: recipe.fat || 8,
              cost: recipe.cost || 800,
              isStaple: false
            });
            modal.style.display = "none";
          });
          resultsDiv.appendChild(item);
        });
      }

      if (matchedStaples.length > 0) {
        const header = document.createElement("h4");
        header.style.fontFamily = "var(--font-headings)";
        header.style.color = "var(--color-dark-burgundy)";
        header.style.margin = "15px 0 5px 0";
        header.style.fontSize = "16px";
        header.textContent = "Traditional Staples";
        resultsDiv.appendChild(header);
        
        matchedStaples.forEach(([key, staple]) => {
          const item = document.createElement("div");
          item.className = "macro-lookup-item";
          item.style.cursor = "pointer";
          item.style.border = "1px solid rgba(0,0,0,0.05)";
          
          item.innerHTML = `
            <div class="macro-lookup-info">
              <div class="macro-lookup-name">${staple.name}</div>
              <div class="macro-lookup-details">
                <span>⚡ ${staple.calories} kcal</span>
                <span>C: ${staple.carbs}g</span>
                <span>P: ${staple.protein}g</span>
                <span>F: ${staple.fat}g</span>
                <span style="color: var(--color-primary-orange); font-weight: 700;">₦${staple.cost}</span>
              </div>
            </div>
            <button class="btn-sidebar-add" style="background-color: var(--color-primary-orange); margin-left:10px;">Select</button>
          `;
          
          item.addEventListener("click", () => {
            addMealToSlot(day, meal, {
              id: key,
              title: staple.name,
              calories: staple.calories,
              carbs: staple.carbs,
              protein: staple.protein,
              fat: staple.fat,
              cost: staple.cost,
              isStaple: true
            });
            modal.style.display = "none";
          });
          resultsDiv.appendChild(item);
        });
      }
    };

    searchInput.addEventListener("input", (e) => {
      renderResults(e.target.value);
    });

    renderResults("");
    setTimeout(() => searchInput.focus(), 100);
  };

  const getSavedPlans = () => {
    let plans = JSON.parse(localStorage.getItem("saved_meal_plans") || "[]");
    if (plans.length === 0) {
      const legacyPlan = localStorage.getItem("active_meal_plan");
      if (legacyPlan) {
        const legacyName = localStorage.getItem("active_meal_plan_name") || "Tastebud cravings meal plan";
        const legacyBudget = localStorage.getItem("weekly_budget") || 10000;
        const newPlan = {
          id: "plan_legacy",
          name: legacyName,
          date: new Date().toLocaleDateString(),
          startDate: new Date().toISOString(),
          duration: "weekly",
          plan: JSON.parse(legacyPlan),
          budget: Number(legacyBudget)
        };
        plans.push(newPlan);
        localStorage.setItem("saved_meal_plans", JSON.stringify(plans));
        localStorage.setItem("current_plan_id", "plan_legacy");
      }
    }
    return plans;
  };

  const getCurrentPlan = () => {
    const plans = getSavedPlans();
    if (plans.length === 0) return null;
    const currentId = localStorage.getItem("current_plan_id");
    const found = plans.find(p => p.id === currentId);
    return found || plans[0];
  };

  const formatDateRange = (startDateStr, duration) => {
    const start = new Date(startDateStr);
    const end = new Date(start);
    if (duration === "monthly") {
      end.setDate(start.getDate() + 27);
    } else {
      end.setDate(start.getDate() + 6);
    }

    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    if (start.getFullYear() === end.getFullYear()) {
      const startStr = start.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
      const endStr = end.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
      return `${startStr} – ${endStr}`;
    } else {
      const startStr = start.toLocaleDateString('en-US', options);
      const endStr = end.toLocaleDateString('en-US', options);
      return `${startStr} – ${endStr}`;
    }
  };

  const getWeekRangeLabel = (startDateStr, weekNum) => {
    const start = new Date(startDateStr);
    start.setDate(start.getDate() + (weekNum - 1) * 7);
    const end = new Date(start);
    end.setDate(start.getDate() + 6);
    
    const formatOptions = { month: 'short', day: 'numeric' };
    const startStr = start.toLocaleDateString('en-US', formatOptions);
    const endStr = end.toLocaleDateString('en-US', formatOptions);
    return `${startStr} – ${endStr}`;
  };

  const getDayHeading = (startDateStr, weekNum, dayIndex) => {
    const date = new Date(startDateStr);
    date.setDate(date.getDate() + (weekNum - 1) * 7 + dayIndex);
    const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
    const dateStr = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    return `${dayName}, ${dateStr}`;
  };

  const renderActiveMealPlan = () => {
    const headerContainer = document.querySelector(".active-plan-header");
    const gridContainer = document.getElementById("active-plan-grid-container");
    if (!gridContainer) return;

    const savedPlans = getSavedPlans();
    const currentPlan = getCurrentPlan();

    if (!currentPlan) {
      gridContainer.style.display = "block";
      gridContainer.style.width = "100%";
      if (headerContainer) headerContainer.style.display = "none";
      gridContainer.innerHTML = `
        <div class="empty-state-card" style="grid-column: 1 / -1; background: white; border-radius: 20px; padding: 40px; text-align: center; border: 1.5px dashed rgba(78, 7, 11, 0.15); width: 100%;">
          <div style="font-size: 3rem; margin-bottom: 15px;">📅</div>
          <h3 style="font-family: NT Wagner Bold, var(--font-headings); font-size: 1.35rem; color: #4E070B; margin-bottom: 8px;">No Active Meal Plan</h3>
          <p style="color: #7d7d7d; max-width: 400px; margin: 0 auto 20px auto; font-size: 0.95rem;">You haven't created a meal plan yet. Build a custom, budget-friendly meal plan in seconds!</p>
          <button class="btn btn-primary btn-create-plan" style="background-color: var(--color-primary-orange) !important; color: white !important; border: none; font-weight: 700; border-radius: 50px; padding: 12px 32px; cursor: pointer;">
            Create Meal Plan
          </button>
        </div>
      `;
      const emptyStateBtn = gridContainer.querySelector(".btn-create-plan");
      if (emptyStateBtn) {
        emptyStateBtn.addEventListener("click", () => {
          openCreateMealPlanModal();
        });
      }
      return;
    }

    // Render header
    if (headerContainer) {
      headerContainer.style.display = "block";
      
      const budgetTarget = currentPlan.budget;
      const durationLabel = currentPlan.duration === "monthly" ? "Monthly Plan" : "Weekly Plan";
      const dateRangeLabel = formatDateRange(currentPlan.startDate || new Date().toISOString(), currentPlan.duration);
      
      headerContainer.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 12px; width: 100%;">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 16px; width: 100%;">
            <div style="display: flex; align-items: center; gap: 16px; flex-wrap: wrap;">
              <h1 class="active-plan-title" style="margin: 0; font-family: NT Wagner Bold, var(--font-headings); font-size: clamp(1.8rem, 4vw, 2.5rem); color: var(--color-primary-green); line-height: 1.2;">
                ${currentPlan.name}
              </h1>
              
              ${savedPlans.length > 1 ? `
                <select id="plan-switcher-select">
                  ${savedPlans.map(p => `<option value="${p.id}" ${p.id === currentPlan.id ? 'selected' : ''}>Switch to: ${p.name}</option>`).join('')}
                </select>
              ` : ''}
            </div>
            
            <div class="active-plan-actions">
              <button class="btn btn-primary btn-create-plan" style="background-color: var(--color-primary-orange) !important; color: white !important; font-weight: 700; border-radius: 50px; padding: 12px 28px; border: none; cursor: pointer;">
                Create New Plan
              </button>
            </div>
          </div>
          
          <div class="active-plan-meta-subheader" style="font-size: 0.95rem; color: var(--color-muted-grey); display: flex; gap: 20px; flex-wrap: wrap; align-items: center;">
            <span style="display: inline-flex; align-items: center; gap: 6px;">📋 <strong>${durationLabel}</strong></span>
            <span style="display: inline-flex; align-items: center; gap: 6px;">📅 <strong>${dateRangeLabel}</strong></span>
            ${budgetTarget ? `<span style="display: inline-flex; align-items: center; gap: 6px;">💰 Budget: <strong>₦${budgetTarget.toLocaleString()}</strong></span>` : ''}
          </div>
        </div>
      `;
      
      // Bind switcher select change event
      const switcher = headerContainer.querySelector("#plan-switcher-select");
      if (switcher) {
        switcher.addEventListener("change", (e) => {
          localStorage.setItem("current_plan_id", e.target.value);
          renderActiveMealPlan();
        });
      }
      
      // Bind create button click
      const createBtn = headerContainer.querySelector(".btn-create-plan");
      if (createBtn) {
        createBtn.addEventListener("click", () => {
          openCreateMealPlanModal();
        });
      }
    }

    gridContainer.innerHTML = "";

    const renderDayMeals = (dayMeals, startDate, weekNum, dayIndex) => {
      const dayHeading = getDayHeading(startDate, weekNum, dayIndex);
      const slots = ["Breakfast", "Lunch", "Dinner"];
      const mealIcons = {
        Breakfast: "🍳",
        Lunch: "🍛",
        Dinner: "🍲"
      };

      let mealsHtml = "";
      slots.forEach(slot => {
        const item = dayMeals[slot];
        if (!item) return;

        const recipeDetail = RECIPES_DB[item.id] || {};
        const image = recipeDetail.image || "Assets/ChatGPT Image Jul 5, 2026, 06_42_38 PM.png";
        const time = recipeDetail.prepTime || recipeDetail.totalTime || "25 mins";
        const serves = recipeDetail.serves || "feeds 2";

        mealsHtml += `
          <div style="display: flex; flex-direction: column; gap: 8px;">
            <!-- Small Label -->
            <div style="font-size: 0.75rem; font-weight: 700; color: var(--color-primary-green); text-transform: uppercase; letter-spacing: 0.05em; display: flex; align-items: center; gap: 6px; padding-left: 4px;">
              <span>${mealIcons[slot] || "🍴"}</span> ${slot}
            </div>
            <!-- Card -->
            <div class="meal-plan-block-card" data-recipe-id="${item.id}" style="cursor: pointer; margin: 0; width: 100%;">
              <img src="${image}" alt="${item.title}" class="meal-plan-block-img">
              <div class="meal-plan-block-info">
                <h3 class="meal-plan-block-title" style="font-size: 1.05rem; margin-bottom: 8px;">${item.title}</h3>
                <div class="meal-plan-block-meta">
                  <span>⏳ ${time}</span>
                  <span>👥 ${serves}</span>
                </div>
              </div>
            </div>
          </div>
        `;
      });

      if (!mealsHtml) return "";

      return `
        <div class="day-group reveal-el reveal-card-item" style="background: rgba(252, 240, 224, 0.45); border-radius: 24px; padding: 24px; border: 1.5px solid rgba(78, 7, 11, 0.06); flex-shrink: 0; width: 360px; scroll-snap-align: start; box-sizing: border-box; display: flex; flex-direction: column; gap: 20px; margin-bottom: 8px;">
          <h4 style="font-family: NT Wagner Bold, var(--font-headings); font-size: 1.25rem; color: var(--color-primary-green); margin: 0; border-bottom: 1.5px dashed rgba(78, 7, 11, 0.1); padding-bottom: 12px; font-weight: 700;">${dayHeading}</h4>
          <div class="day-meals-row" style="display: flex; flex-direction: column; gap: 16px; width: 100%;">
            ${mealsHtml}
          </div>
        </div>
      `;
    };

    if (currentPlan.duration === "monthly") {
      gridContainer.style.display = "block";
      gridContainer.style.width = "100%";

      let monthlyHtml = "";
      
      for (let weekNum = 1; weekNum <= 4; weekNum++) {
        const weekRangeLabel = getWeekRangeLabel(currentPlan.startDate || new Date().toISOString(), weekNum);
        
        let weekDaysHtml = "";
        const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        days.forEach((day, dayIndex) => {
          if (currentPlan.plan && currentPlan.plan[day]) {
            weekDaysHtml += renderDayMeals(currentPlan.plan[day], currentPlan.startDate || new Date().toISOString(), weekNum, dayIndex);
          }
        });

        if (!weekDaysHtml) continue;

        monthlyHtml += `
          <div class="collapsible-week-section" style="width: 100%; margin-bottom: 16px;">
            <div class="week-header-toggle" style="display: flex; justify-content: space-between; align-items: center; background: #F9F5F0; border: 1.5px solid rgba(78, 7, 11, 0.08); padding: 16px 24px; border-radius: 12px; cursor: pointer; margin-bottom: 12px; transition: background 0.2s;">
              <h3 style="font-family: NT Wagner Bold, var(--font-headings); font-size: 1.25rem; color: var(--color-primary-green); margin: 0;">Week ${weekNum} · ${weekRangeLabel}</h3>
              <span class="week-toggle-icon" style="font-size: 1.25rem; font-weight: bold; color: var(--color-primary-green);">${weekNum === 1 ? "▼" : "▶"}</span>
            </div>
            <div class="week-days-container week-content-wrapper" style="display: ${weekNum === 1 ? "flex" : "none"}; flex-direction: row; gap: 24px; overflow-x: auto; padding: 12px 4px 24px 4px; scroll-snap-type: x mandatory; width: 100%; box-sizing: border-box;">
              ${weekDaysHtml}
            </div>
          </div>
        `;
      }

      gridContainer.innerHTML = monthlyHtml || `
        <p style="text-align: center; color: var(--color-muted-grey); padding: 40px 0;">This plan contains no scheduled meals.</p>
      `;

      // Bind toggles
      gridContainer.querySelectorAll(".week-header-toggle").forEach(header => {
        header.addEventListener("click", () => {
          const wrapper = header.nextElementSibling;
          const icon = header.querySelector(".week-toggle-icon");
          if (wrapper.style.display === "none") {
            wrapper.style.display = "flex";
            icon.textContent = "▼";
          } else {
            wrapper.style.display = "none";
            icon.textContent = "▶";
          }
        });
      });

    } else {
      // Weekly plan - set gridContainer as horizontal flex row
      gridContainer.style.display = "flex";
      gridContainer.style.flexDirection = "row";
      gridContainer.style.overflowX = "auto";
      gridContainer.style.gap = "24px";
      gridContainer.style.padding = "12px 4px 24px 4px";
      gridContainer.style.width = "100%";
      gridContainer.style.scrollSnapType = "x mandatory";
      gridContainer.style.boxSizing = "border-box";

      let weeklyHtml = "";
      const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
      days.forEach((day, dayIndex) => {
        if (currentPlan.plan && currentPlan.plan[day]) {
          weeklyHtml += renderDayMeals(currentPlan.plan[day], currentPlan.startDate || new Date().toISOString(), 1, dayIndex);
        }
      });
      
      gridContainer.innerHTML = weeklyHtml || `
        <p style="text-align: center; color: var(--color-muted-grey); padding: 40px 0;">This plan contains no scheduled meals.</p>
      `;
    }

    // Bind card click triggers
    gridContainer.querySelectorAll(".meal-plan-block-card").forEach(card => {
      card.addEventListener("click", () => {
        const recipeId = card.getAttribute("data-recipe-id");
        if (recipeId && RECIPES_DB[recipeId]) {
          window.location.hash = `#/recipe/${recipeId}`;
        }
      });
    });

    if (typeof window.observeReveals === 'function') {
      window.observeReveals(gridContainer);
    }
  };

  const initMealPlannerPage = () => {
    renderActiveMealPlan();
    renderSavedRecipesList();
  };

  // Bind tab switcher clicks
  const sidebarTabs = document.querySelectorAll(".sidebar-tab-btn");
  sidebarTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      sidebarTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      
      const tabId = tab.getAttribute("data-tab");
      const panes = document.querySelectorAll(".tab-pane");
      panes.forEach(pane => pane.classList.remove("active"));
      
      const targetPane = document.getElementById(`tab-${tabId}`);
      if (targetPane) targetPane.classList.add("active");
    });
  });

  // Bind budget targets
  const budgetPills = document.querySelectorAll(".budget-pill");
  budgetPills.forEach(pill => {
    pill.addEventListener("click", () => {
      budgetPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      const budgetVal = parseInt(pill.getAttribute("data-budget"));
      localStorage.setItem("weekly_budget", budgetVal);
      updateBudgetDisplay();
      renderNairaSaverSuggestions();
    });
  });

  const customBudgetVal = document.getElementById("custom-budget-val");
  if (customBudgetVal) {
    customBudgetVal.addEventListener("input", () => {
      budgetPills.forEach(p => p.classList.remove("active"));
      const val = parseInt(customBudgetVal.value);
      if (val && val >= 1000) {
        localStorage.setItem("weekly_budget", val);
        updateBudgetDisplay();
        renderNairaSaverSuggestions();
      }
    });
  }

  // Bind quick actions
  const autoGenBtn = document.getElementById("btn-auto-generate");
  if (autoGenBtn) {
    autoGenBtn.addEventListener("click", autoGenerateNairaSaverPlan);
  }

  const savePlanBtn = document.getElementById("btn-save-plan");
  if (savePlanBtn) {
    savePlanBtn.addEventListener("click", saveCurrentMealPlan);
  }

  const clearPlanBtn = document.getElementById("btn-clear-plan");
  if (clearPlanBtn) {
    clearPlanBtn.addEventListener("click", () => {
      if (confirm("Are you sure you want to clear your current meal plan?")) {
        const clearedPlan = {
          Monday: { Breakfast: null, Lunch: null, Dinner: null },
          Tuesday: { Breakfast: null, Lunch: null, Dinner: null },
          Wednesday: { Breakfast: null, Lunch: null, Dinner: null },
          Thursday: { Breakfast: null, Lunch: null, Dinner: null },
          Friday: { Breakfast: null, Lunch: null, Dinner: null },
          Saturday: { Breakfast: null, Lunch: null, Dinner: null },
          Sunday: { Breakfast: null, Lunch: null, Dinner: null }
        };
        localStorage.setItem("active_meal_plan", JSON.stringify(clearedPlan));
        renderWeeklyGrid();
      }
    });
  }

  // Staples Lookup search box
  const macroSearchInput = document.getElementById("macro-search-input");
  if (macroSearchInput) {
    macroSearchInput.addEventListener("input", (e) => {
      renderStaplesLookupList(e.target.value);
    });
  }

  // Sidebar toggle button binding
  const toggleSidebarBtn = document.getElementById("btn-toggle-sidebar");
  if (toggleSidebarBtn) {
    toggleSidebarBtn.addEventListener("click", () => {
      const grid = document.querySelector(".planner-workspace-grid");
      if (grid) {
        const isCollapsed = grid.classList.toggle("sidebar-collapsed");
        toggleSidebarBtn.innerHTML = isCollapsed ? 
          `<i data-feather="sidebar"></i> Show Helper Tools` : 
          `<i data-feather="sidebar"></i> Hide Helper Tools`;
        
        if (typeof feather !== 'undefined') {
          feather.replace();
        }
      }
    });
  }

  // Article category pills clicks binding
  const articlesPills = document.querySelectorAll(".articles-cat-pill");
  articlesPills.forEach(pill => {
    pill.addEventListener("click", () => {
      const category = pill.getAttribute("data-category");
      if (category === "all") {
        window.location.hash = "#/articles";
      } else if (category === "Healthy Eating") {
        window.location.hash = "#/articles/healthy-eating";
      } else if (category === "Food Reviews") {
        window.location.hash = "#/articles/food-reviews";
      } else if (category === "Ingredient Swaps") {
        window.location.hash = "#/articles/ingredient-swaps";
      }
    });
  });

  // Scroll reveal text animation fallback (IntersectionObserver)
  const initScrollReveal = () => {
    if (!CSS.supports('(animation-timeline: view()) and (animation-range: entry)')) {
      const aboutTextWrapper = document.querySelector('.about-text-wrapper');
      if (aboutTextWrapper) {
        const children = aboutTextWrapper.children;
        const observerOptions = {
          threshold: 0.1,
          rootMargin: "0px 0px -50px 0px"
        };
        const revealObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed');
              observer.unobserve(entry.target);
            }
          });
        }, observerOptions);

        Array.from(children).forEach(el => {
          el.classList.add('reveal-fallback-init');
          revealObserver.observe(el);
        });
      }
    }
  };

  // Scroll-triggered animations for "Bring Recipes to Life" section
  const initRecipesScrollAnimation = () => {
    const recipesSection = document.getElementById("recipes");
    if (recipesSection) {
      const observerOptions = {
        root: null,
        rootMargin: "0px 0px -100px 0px",
        threshold: 0.15
      };

      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            obs.unobserve(entry.target);
          }
        });
      }, observerOptions);

      observer.observe(recipesSection);
    }
  };

  // ==========================================================================
  // CREATE MEAL PLAN MULTI-STEP MODAL ENGINE
  // ==========================================================================
  
  let modalState = {
    currentStep: 1,
    duration: '', // 'weekly' or 'monthly'
    planName: '',
    budget: 10000,
    customBudget: '',
    preferences: {
      localSwap: true,
      showCalories: true,
      autoGen: true
    },
    meals: {
      Monday: { Breakfast: null, Lunch: null, Dinner: null },
      Tuesday: { Breakfast: null, Lunch: null, Dinner: null },
      Wednesday: { Breakfast: null, Lunch: null, Dinner: null },
      Thursday: { Breakfast: null, Lunch: null, Dinner: null },
      Friday: { Breakfast: null, Lunch: null, Dinner: null },
      Saturday: { Breakfast: null, Lunch: null, Dinner: null },
      Sunday: { Breakfast: null, Lunch: null, Dinner: null }
    }
  };

  let activeSlotToPick = null; // for manual add slot tracking

  const getPlannedMealsCount = () => {
    let count = 0;
    Object.values(modalState.meals).forEach(day => {
      Object.values(day).forEach(slot => {
        if (slot) count++;
      });
    });
    return count;
  };

  const getPlannedMealsCost = () => {
    let total = 0;
    Object.values(modalState.meals).forEach(day => {
      Object.values(day).forEach(slot => {
        if (slot) total += slot.cost || 0;
      });
    });
    return total;
  };

  const saveModalStateToSession = () => {
    sessionStorage.setItem("create_meal_plan_modal_state", JSON.stringify(modalState));
  };

  const loadModalStateFromSession = () => {
    const saved = sessionStorage.getItem("create_meal_plan_modal_state");
    if (saved) {
      modalState = JSON.parse(saved);
      return true;
    }
    return false;
  };

  const clearModalState = () => {
    sessionStorage.removeItem("create_meal_plan_modal_state");
    modalState = {
      currentStep: 1,
      duration: '',
      planName: '',
      budget: 10000,
      customBudget: '',
      preferences: {
        localSwap: true,
        showCalories: true,
        autoGen: true
      },
      meals: {
        Monday: { Breakfast: null, Lunch: null, Dinner: null },
        Tuesday: { Breakfast: null, Lunch: null, Dinner: null },
        Wednesday: { Breakfast: null, Lunch: null, Dinner: null },
        Thursday: { Breakfast: null, Lunch: null, Dinner: null },
        Friday: { Breakfast: null, Lunch: null, Dinner: null },
        Saturday: { Breakfast: null, Lunch: null, Dinner: null },
        Sunday: { Breakfast: null, Lunch: null, Dinner: null }
      }
    };
    activeSlotToPick = null;
  };

  const modalEl = document.getElementById("create-meal-plan-modal");
  const planModalCloseBtn = document.getElementById("plan-modal-close-btn");
  const modalBackBtn = document.getElementById("plan-btn-back");
  const modalNextBtn = document.getElementById("plan-btn-next");
  const modalSlider = document.getElementById("modal-plan-slider");
  const modalProgressFill = document.getElementById("modal-plan-progress-fill");
  const modalStepDots = document.querySelectorAll(".step-dot");
  const modalEncouragingHint = document.getElementById("modal-plan-encouraging-hint");

  // Step Elements
  const durationCards = document.querySelectorAll(".duration-card");
  const modalBudgetPills = document.querySelectorAll("[data-modal-budget]");
  const customBudgetInput = document.getElementById("modal-custom-budget-val");
  const planNameInput = document.getElementById("modal-plan-name-input");
  const prefLocalSwap = document.getElementById("pref-local-swap");
  const prefShowCalories = document.getElementById("pref-show-calories");
  const prefAutoGen = document.getElementById("pref-auto-gen");
  const mealsWorkspace = document.querySelector(".meals-list-workspace");

  const openCreateMealPlanModal = () => {
    loadModalStateFromSession();
    modalEl.style.display = "flex";
    document.body.style.overflow = "hidden"; // disable body scrolling
    
    // Reset wizard element displays
    const modalContentEl = document.querySelector(".meal-plan-modal-content");
    if (modalContentEl) modalContentEl.classList.remove("modal-animating");

    const prog = document.querySelector(".modal-progress-container");
    const slider = document.querySelector(".modal-steps-slider-wrapper");
    const footer = document.querySelector(".modal-nav-footer");
    const closeBtn = document.getElementById("plan-modal-close-btn");
    
    if (prog) prog.style.display = "block";
    if (slider) slider.style.display = "block";
    if (footer) footer.style.display = "flex";
    if (closeBtn) closeBtn.style.display = "block";
    if (revealOverlay) revealOverlay.style.display = "none";

    goToStep(modalState.currentStep);
    bindKeyboardNav();
  };

  const closeCreateMealPlanModal = (confirmClose = true) => {
    // Check if in progress
    const isInProgress = modalState.duration !== '' || getPlannedMealsCount() > 0;
    if (confirmClose && isInProgress) {
      showDiscardConfirmOverlay();
    } else {
      modalEl.style.display = "none";
      document.body.style.overflow = "";
      unbindKeyboardNav();
    }
  };

  const showDiscardConfirmOverlay = () => {
    const confirmOverlay = document.getElementById("plan-discard-confirm");
    confirmOverlay.style.display = "flex";
    
    const discardBtn = document.getElementById("confirm-discard-btn");
    const saveBtn = document.getElementById("confirm-save-btn");
    const cancelBtn = document.getElementById("confirm-cancel-btn");
    
    const closeConfirm = () => {
      confirmOverlay.style.display = "none";
    };
    
    discardBtn.onclick = () => {
      clearModalState();
      closeConfirm();
      closeCreateMealPlanModal(false);
    };
    
    saveBtn.onclick = () => {
      saveModalStateToSession();
      closeConfirm();
      closeCreateMealPlanModal(false);
    };
    
    cancelBtn.onclick = () => {
      closeConfirm();
    };
  };

  // Keyboard navigation helpers
  const bindKeyboardNav = () => {
    document.addEventListener("keydown", handleKeydown);
  };

  const unbindKeyboardNav = () => {
    document.removeEventListener("keydown", handleKeydown);
  };

  const handleKeydown = (e) => {
    if (e.key === "Escape") {
      closeCreateMealPlanModal(true);
    } else if (e.key === "Enter" && !modalNextBtn.disabled && document.activeElement.tagName !== "TEXTAREA" && document.activeElement.tagName !== "INPUT") {
      // Advance on Enter (if input is not focused to prevent collision)
      modalNextBtn.click();
    }
  };

  const validateCurrentStep = () => {
    let isValid = true;
    if (modalState.currentStep === 1) {
      isValid = modalState.duration !== '';
    } else if (modalState.currentStep === 2) {
      isValid = modalState.budget !== '' && modalState.budget > 0;
    } else if (modalState.currentStep === 4) {
      // Required to have at least 1 meal in Step 4
      isValid = getPlannedMealsCount() > 0;
    }
    modalNextBtn.disabled = !isValid;
  };

  const goToStep = (stepNum) => {
    if (stepNum < 1 || stepNum > 5) return;
    modalState.currentStep = stepNum;
    saveModalStateToSession();

    // 1. Slider transform
    const slidePercent = (stepNum - 1) * 20;
    
    // Check prefers-reduced-motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      modalSlider.style.transition = 'none';
      modalSlider.style.transform = `translateX(-${slidePercent}%)`;
    } else {
      modalSlider.style.transition = 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)';
      modalSlider.style.transform = `translateX(-${slidePercent}%)`;
    }

    // 2. Active fade container
    const steps = document.querySelectorAll(".step-container");
    steps.forEach((step, idx) => {
      if (idx + 1 === stepNum) {
        step.classList.add("active-fade");
      } else {
        step.classList.remove("active-fade");
      }
    });

    // 3. Progress Fill
    const progressPercent = (stepNum / 5) * 100;
    modalProgressFill.style.width = `${progressPercent}%`;

    // 4. Step dots
    modalStepDots.forEach((dot, idx) => {
      const dotStep = idx + 1;
      if (dotStep === stepNum) {
        dot.className = "step-dot active";
      } else if (dotStep < stepNum) {
        dot.className = "step-dot completed";
      } else {
        dot.className = "step-dot";
      }
    });

    // 5. Back Button Visibility
    if (stepNum === 1) {
      modalBackBtn.style.visibility = "hidden";
    } else {
      modalBackBtn.style.visibility = "visible";
    }

    // 6. Next Button Text
    if (stepNum === 5) {
      modalNextBtn.textContent = "Create Meal Plan";
    } else {
      modalNextBtn.textContent = "Next";
    }

    // 7. Encouraging hint (on second-to-last step)
    if (stepNum === 4) {
      modalEncouragingHint.style.opacity = "1";
      modalEncouragingHint.textContent = "Almost there!";
    } else {
      modalEncouragingHint.style.opacity = "0";
    }

    // 8. Step-specific setups
    if (stepNum === 1) {
      durationCards.forEach(card => {
        const val = card.getAttribute("data-duration");
        if (val === modalState.duration) {
          card.classList.add("active");
        } else {
          card.classList.remove("active");
        }
      });
    } else if (stepNum === 2) {
      if (planNameInput) {
        planNameInput.value = modalState.planName || '';
      }
      // Pre-select budget target
      modalBudgetPills.forEach(p => {
        const val = parseInt(p.getAttribute("data-modal-budget"));
        if (val === modalState.budget && !modalState.customBudget) {
          p.classList.add("active");
        } else {
          p.classList.remove("active");
        }
      });
      if (modalState.customBudget) {
        customBudgetInput.value = modalState.customBudget;
      } else {
        customBudgetInput.value = '';
      }
    } else if (stepNum === 3) {
      prefLocalSwap.checked = modalState.preferences.localSwap;
      prefShowCalories.checked = modalState.preferences.showCalories;
      prefAutoGen.checked = modalState.preferences.autoGen;
    } else if (stepNum === 4) {
      // Setup review workspace
      if (modalState.preferences.autoGen) {
        // Auto-generate if plan is completely empty
        if (getPlannedMealsCount() === 0) {
          generateModalMeals();
        }
        renderReviewMeals();
      } else {
        renderManualAddWorkspace();
      }
    } else if (stepNum === 5) {
      renderSummaryPage();
    }

    validateCurrentStep();
  };

  // Step 1 Click binding
  durationCards.forEach(card => {
    card.addEventListener("click", () => {
      durationCards.forEach(c => c.classList.remove("active"));
      card.classList.add("active");
      modalState.duration = card.getAttribute("data-duration");
      saveModalStateToSession();
      validateCurrentStep();
      
      // Auto-advance with minor delay for fluid feel
      setTimeout(() => {
        if (modalState.currentStep === 1) goToStep(2);
      }, 300);
    });
    
    // Accessibility keyboard support
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        card.click();
      }
    });
  });

  // Step 2 Click binding
  modalBudgetPills.forEach(pill => {
    pill.addEventListener("click", () => {
      modalBudgetPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      modalState.budget = parseInt(pill.getAttribute("data-modal-budget"));
      modalState.customBudget = '';
      customBudgetInput.value = '';
      saveModalStateToSession();
      validateCurrentStep();
      
      // Auto-advance with minor delay
      setTimeout(() => {
        if (modalState.currentStep === 2) goToStep(3);
      }, 300);
    });
  });

  customBudgetInput.addEventListener("input", (e) => {
    modalBudgetPills.forEach(p => p.classList.remove("active"));
    const val = parseInt(e.target.value);
    if (val && val >= 1000) {
      modalState.budget = val;
      modalState.customBudget = val;
    } else {
      modalState.budget = '';
      modalState.customBudget = '';
    }
    saveModalStateToSession();
    validateCurrentStep();
  });

  if (planNameInput) {
    planNameInput.addEventListener("input", (e) => {
      modalState.planName = e.target.value;
      saveModalStateToSession();
    });
  }

  // Step 3 Click binding
  prefLocalSwap.addEventListener("change", (e) => {
    modalState.preferences.localSwap = e.target.checked;
    saveModalStateToSession();
  });
  prefShowCalories.addEventListener("change", (e) => {
    modalState.preferences.showCalories = e.target.checked;
    saveModalStateToSession();
  });
  prefAutoGen.addEventListener("change", (e) => {
    modalState.preferences.autoGen = e.target.checked;
    // Clear planned meals if toggle is changed, so it triggers rebuild or fresh manual flow
    modalState.meals = {
      Monday: { Breakfast: null, Lunch: null, Dinner: null },
      Tuesday: { Breakfast: null, Lunch: null, Dinner: null },
      Wednesday: { Breakfast: null, Lunch: null, Dinner: null },
      Thursday: { Breakfast: null, Lunch: null, Dinner: null },
      Friday: { Breakfast: null, Lunch: null, Dinner: null },
      Saturday: { Breakfast: null, Lunch: null, Dinner: null },
      Sunday: { Breakfast: null, Lunch: null, Dinner: null }
    };
    saveModalStateToSession();
  });

  // Auto-generation logic for modal
  const generateModalMeals = () => {
    const budget = modalState.budget || 10000;
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    
    // Choose pool based on budget (similar to app main logic)
    let breakfastPool, lunchPool, dinnerPool;
    if (budget < 15000) {
      breakfastPool = [
        { id: "steamed-moi-moi-pudding", title: "Moi Moi Pudding", calories: 240, cost: 600 },
        { id: "beans-ewa", title: "Beans (Ewa)", calories: 280, cost: 400 }
      ];
      lunchPool = [
        { id: "seafood-okra", title: "Eba & Okra", calories: 350, cost: 700 },
        { id: "tropical-tiger-nut-bowl", title: "Tiger Nut Bowl", calories: 250, cost: 800 },
        { id: "naija-macaroni-salad", title: "Macaroni Salad", calories: 310, cost: 800 }
      ];
      dinnerPool = [
        { id: "smoky-naija-jollof", title: "Smoky Jollof", calories: 380, cost: 1000 },
        { id: "acha-fonio", title: "Acha & Fish", calories: 380, cost: 1300 },
        { id: "puff-puff-royale", title: "Puff Puff & Zobo", calories: 300, cost: 500 }
      ];
    } else if (budget < 30000) {
      breakfastPool = [
        { id: "seeded-oat-bread-loaf", title: "Seeded Oat Bread", calories: 180, cost: 750 },
        { id: "steamed-moi-moi-pudding", title: "Moi Moi Pudding", calories: 240, cost: 600 }
      ];
      lunchPool = [
        { id: "efo-riro-with-fufu", title: "Efo Riro & Fufu", calories: 520, cost: 1200 },
        { id: "abacha-ede-special", title: "Abacha Special", calories: 430, cost: 1200 }
      ];
      dinnerPool = [
        { id: "smoky-naija-jollof", title: "Smoky Jollof", calories: 380, cost: 1000 },
        { id: "peppered-skewers-masa", title: "Skewers & Masa", calories: 490, cost: 1500 }
      ];
    } else {
      breakfastPool = [
        { id: "seeded-oat-bread-loaf", title: "Seeded Oat Bread", calories: 180, cost: 750 },
        { id: "coconut-carrot-cake", title: "Coconut-Carrot Cake", calories: 210, cost: 500 }
      ];
      lunchPool = [
        { id: "efo-riro-with-fufu", title: "Efo Riro & Fufu", calories: 520, cost: 1200 },
        { id: "goat-meat-plantain-tacos", title: "Plantain Tacos", calories: 390, cost: 1800 }
      ];
      dinnerPool = [
        { id: "peppered-skewers-masa", title: "Skewers & Masa", calories: 490, cost: 1500 },
        { id: "smoky-naija-jollof", title: "Smoky Jollof", calories: 380, cost: 1000 },
        { id: "abacha-ede-special", title: "Abacha Special", calories: 430, cost: 1200 }
      ];
    }
    
    // Fill the plan
    days.forEach(day => {
      let b = breakfastPool[Math.floor(Math.random() * breakfastPool.length)];
      let l = lunchPool[Math.floor(Math.random() * lunchPool.length)];
      let d = dinnerPool[Math.floor(Math.random() * dinnerPool.length)];
      
      // Apply local swaps to save cost if swap preference is enabled
      if (modalState.preferences.localSwap) {
        b = { ...b, cost: Math.round(b.cost * 0.85) };
        l = { ...l, cost: Math.round(l.cost * 0.85) };
        d = { ...d, cost: Math.round(d.cost * 0.85) };
      }

      modalState.meals[day] = {
        Breakfast: b,
        Lunch: l,
        Dinner: d
      };
    });
    saveModalStateToSession();
  };

  // Step 4 Auto-Gen Review Renderer
  const renderReviewMeals = () => {
    document.getElementById("modal-step-4-title").textContent = "Review Meals";
    document.getElementById("modal-step-4-desc").textContent = "Review your auto-generated plan, swap out recipes to suit your preferences.";
    
    mealsWorkspace.innerHTML = "";
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    
    days.forEach(day => {
      ["Breakfast", "Lunch", "Dinner"].forEach(meal => {
        const item = modalState.meals[day][meal];
        if (!item) return;

        const row = document.createElement("div");
        row.className = "modal-meal-row";
        
        let metaHtml = "";
        if (modalState.preferences.showCalories) {
          metaHtml += `<span class="modal-meal-cals">⚡ ${item.calories} kcal</span>`;
        }
        metaHtml += `<span class="modal-meal-cost">₦${item.cost}</span>`;

        row.innerHTML = `
          <div class="modal-meal-info">
            <span class="modal-meal-day-tag">${day.substring(0,3)} - ${meal.substring(0,1)}</span>
            <span class="modal-meal-name">${item.title}</span>
            ${metaHtml}
          </div>
          <div class="modal-meal-actions">
            <button class="btn-modal-meal-swap" data-day="${day}" data-meal="${meal}">Swap</button>
          </div>
        `;

        row.querySelector(".btn-modal-meal-swap").addEventListener("click", () => {
          openInlineSwapPicker(day, meal);
        });

        mealsWorkspace.appendChild(row);
      });
    });
  };

  // Inline Swap Picker in Step 4 Auto-Gen
  const openInlineSwapPicker = (day, meal) => {
    mealsWorkspace.innerHTML = `
      <div class="manual-add-workspace">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
          <h3 style="font-size:14px; font-weight:700; color:var(--color-primary-green)">Swap ${day} ${meal}</h3>
          <button class="btn-modal-meal-swap" id="btn-cancel-swap" style="font-size:12px; color:var(--color-primary-orange)">Cancel</button>
        </div>
        <input type="text" id="modal-meal-search" placeholder="Search recipes..." style="width:100%; border-radius:50px; padding:10px 16px; border:1.5px solid rgba(0,0,0,0.1); outline:none; margin-bottom:10px; font-size:13px;">
        <div class="manual-add-recipes-grid" style="max-height: 30vh;"></div>
      </div>
    `;

    document.getElementById("btn-cancel-swap").onclick = () => {
      renderReviewMeals();
    };

    const grid = mealsWorkspace.querySelector(".manual-add-recipes-grid");
    const search = mealsWorkspace.querySelector("#modal-meal-search");

    const renderPickerCards = (query = "") => {
      grid.innerHTML = "";
      const q = query.toLowerCase().trim();
      
      Object.values(RECIPES_DB).forEach(recipe => {
        if (q && !recipe.title.toLowerCase().includes(q)) return;

        const card = document.createElement("div");
        card.className = "modal-recipe-pick-card";
        
        card.innerHTML = `
          <img src="${recipe.image}" class="modal-recipe-pick-img">
          <div class="modal-recipe-pick-info">
            <div class="modal-recipe-pick-title">${recipe.title}</div>
            <div class="modal-recipe-pick-meta">
              <span>⚡ ${recipe.calories || 250} kcal</span>
              <span class="cost">₦${recipe.cost || 800}</span>
            </div>
          </div>
          <div class="btn-recipe-pick-add">+</div>
        `;

        card.addEventListener("click", () => {
          let cost = recipe.cost || 800;
          if (modalState.preferences.localSwap) {
            cost = Math.round(cost * 0.85); // Apply local swap discount
          }

          modalState.meals[day][meal] = {
            id: recipe.id,
            title: recipe.title,
            calories: recipe.calories || 250,
            cost: cost
          };
          saveModalStateToSession();
          renderReviewMeals();
        });

        grid.appendChild(card);
      });
    };

    search.addEventListener("input", (e) => {
      renderPickerCards(e.target.value);
    });

    renderPickerCards("");
  };

  // Step 4 Manual Workspace Renderer
  const renderManualAddWorkspace = () => {
    document.getElementById("modal-step-4-title").textContent = "Build Your Plan";
    document.getElementById("modal-step-4-desc").textContent = "Add meals to your slots. Click '+ Add Meal' to pick a recipe.";
    
    mealsWorkspace.innerHTML = "";
    
    if (activeSlotToPick) {
      // Render recipe selection panel
      const day = activeSlotToPick.day;
      const meal = activeSlotToPick.meal;
      
      mealsWorkspace.innerHTML = `
        <div class="manual-add-workspace">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
            <h3 style="font-size:14px; font-weight:700; color:var(--color-primary-green)">Select Meal for ${day} ${meal}</h3>
            <button class="btn-modal-meal-swap" id="btn-back-to-manual-slots" style="font-size:12px;">Back to Slots</button>
          </div>
          <input type="text" id="modal-meal-search" placeholder="Search recipes..." style="width:100%; border-radius:50px; padding:10px 16px; border:1.5px solid rgba(0,0,0,0.1); outline:none; margin-bottom:10px; font-size:13px;">
          <div class="manual-add-recipes-grid" style="max-height: 30vh;"></div>
        </div>
      `;

      document.getElementById("btn-back-to-manual-slots").onclick = () => {
        activeSlotToPick = null;
        renderManualAddWorkspace();
      };

      const grid = mealsWorkspace.querySelector(".manual-add-recipes-grid");
      const search = mealsWorkspace.querySelector("#modal-meal-search");

      const renderManualPickerCards = (query = "") => {
        grid.innerHTML = "";
        const q = query.toLowerCase().trim();

        Object.values(RECIPES_DB).forEach(recipe => {
          if (q && !recipe.title.toLowerCase().includes(q)) return;

          const card = document.createElement("div");
          card.className = "modal-recipe-pick-card";
          
          card.innerHTML = `
            <img src="${recipe.image}" class="modal-recipe-pick-img">
            <div class="modal-recipe-pick-info">
              <div class="modal-recipe-pick-title">${recipe.title}</div>
              <div class="modal-recipe-pick-meta">
                <span>⚡ ${recipe.calories || 250} kcal</span>
                <span class="cost">₦${recipe.cost || 800}</span>
              </div>
            </div>
            <div class="btn-recipe-pick-add">+</div>
          `;

          card.onclick = () => {
            let cost = recipe.cost || 800;
            if (modalState.preferences.localSwap) {
              cost = Math.round(cost * 0.85);
            }
            modalState.meals[day][meal] = {
              id: recipe.id,
              title: recipe.title,
              calories: recipe.calories || 250,
              cost: cost
            };
            saveModalStateToSession();
            activeSlotToPick = null;
            renderManualAddWorkspace();
          };

          grid.appendChild(card);
        });
      };

      search.addEventListener("input", (e) => {
        renderManualPickerCards(e.target.value);
      });

      renderManualPickerCards("");
    } else {
      // Render weekly slots list
      const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
      
      days.forEach(day => {
        ["Breakfast", "Lunch", "Dinner"].forEach(meal => {
          const item = modalState.meals[day][meal];
          const row = document.createElement("div");
          row.className = "modal-meal-row";

          if (item) {
            let metaHtml = "";
            if (modalState.preferences.showCalories) {
              metaHtml += `<span class="modal-meal-cals">⚡ ${item.calories} kcal</span>`;
            }
            metaHtml += `<span class="modal-meal-cost">₦${item.cost}</span>`;

            row.innerHTML = `
              <div class="modal-meal-info">
                <span class="modal-meal-day-tag">${day.substring(0,3)} - ${meal.substring(0,1)}</span>
                <span class="modal-meal-name">${item.title}</span>
                ${metaHtml}
              </div>
              <div class="modal-meal-actions">
                <button class="btn-modal-meal-swap" data-action="remove" data-day="${day}" data-meal="${meal}" style="color:var(--color-primary-orange)">Remove</button>
              </div>
            `;
            row.querySelector("[data-action='remove']").onclick = () => {
              modalState.meals[day][meal] = null;
              saveModalStateToSession();
              renderManualAddWorkspace();
            };
          } else {
            row.innerHTML = `
              <div class="modal-meal-info">
                <span class="modal-meal-day-tag" style="background:#7D7D7D;">${day.substring(0,3)} - ${meal.substring(0,1)}</span>
                <span class="modal-meal-name" style="color:var(--color-muted-grey); font-weight:normal; font-style:italic;">Empty slot</span>
              </div>
              <div class="modal-meal-actions">
                <button class="btn-modal-meal-swap" data-action="add" data-day="${day}" data-meal="${meal}">+ Add Meal</button>
              </div>
            `;
            row.querySelector("[data-action='add']").onclick = () => {
              activeSlotToPick = { day, meal };
              renderManualAddWorkspace();
            };
          }

          mealsWorkspace.appendChild(row);
        });
      });
    }
    validateCurrentStep();
  };

  // Step 5 Summary Page Renderer
  const renderSummaryPage = () => {
    const nameVal = modalState.planName || "Tastebud cravings meal plan";
    document.getElementById("summary-name-val").textContent = nameVal;
    const durVal = modalState.duration === "weekly" ? "Weekly (7 Days)" : "Monthly (30 Days)";
    document.getElementById("summary-duration-val").textContent = durVal;
    document.getElementById("summary-budget-val").textContent = `₦${(modalState.budget || 10000).toLocaleString()}`;
    document.getElementById("summary-swap-val").textContent = modalState.preferences.localSwap ? "Enabled (15% Savings)" : "Disabled";
    document.getElementById("summary-cals-val").textContent = modalState.preferences.showCalories ? "Enabled" : "Disabled";
    document.getElementById("summary-autogen-val").textContent = modalState.preferences.autoGen ? "Enabled" : "Disabled";
    
    const count = getPlannedMealsCount();
    const cost = getPlannedMealsCost();
    
    let mealsSummaryText = `${count} meals planned`;
    if (modalState.duration === "monthly") {
      mealsSummaryText += ` (Est. cost: ₦${cost.toLocaleString()} / week, ₦${(cost * 4).toLocaleString()} monthly)`;
    } else {
      mealsSummaryText += ` (Est. weekly cost: ₦${cost.toLocaleString()})`;
    }
    
    document.getElementById("summary-meals-val").textContent = mealsSummaryText;
  };

  // Bind Navigation footer buttons
  modalBackBtn.addEventListener("click", () => {
    if (modalState.currentStep > 1) {
      goToStep(modalState.currentStep - 1);
    }
  });

  modalNextBtn.addEventListener("click", () => {
    if (modalState.currentStep < 5) {
      goToStep(modalState.currentStep + 1);
    } else {
      completeMealPlanFlow();
    }
  });

  // Modal header close button click
  planModalCloseBtn.addEventListener("click", () => {
    closeCreateMealPlanModal(true);
  });

  // Background overlay click dismisses modal
  modalEl.addEventListener("click", (e) => {
    if (e.target === modalEl) {
      closeCreateMealPlanModal(true);
    }
  });

  // Hook up Create Meal Plan nav buttons to trigger modal
  const createPlanTriggers = document.querySelectorAll(".btn-create-plan");
  createPlanTriggers.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      openCreateMealPlanModal();
    });
  });

  // ==========================================================================
  // REVEAL BASKET ANIMATION ENGINE
  // ==========================================================================
  const revealOverlay = document.getElementById("modal-reveal-container");
  const revealItemsContainer = document.getElementById("reveal-items-container");
  const revealSettleView = document.getElementById("reveal-settle-view");
  const revealCostVal = document.getElementById("reveal-cost-val");
  const revealBtnViewPlan = document.getElementById("reveal-btn-view-plan");

  const completeMealPlanFlow = () => {
    const finalPlan = {};
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    days.forEach(day => {
      finalPlan[day] = {
        Breakfast: modalState.meals[day].Breakfast ? {
          id: modalState.meals[day].Breakfast.id,
          title: modalState.meals[day].Breakfast.title,
          calories: modalState.meals[day].Breakfast.calories,
          cost: modalState.meals[day].Breakfast.cost,
          isStaple: false
        } : null,
        Lunch: modalState.meals[day].Lunch ? {
          id: modalState.meals[day].Lunch.id,
          title: modalState.meals[day].Lunch.title,
          calories: modalState.meals[day].Lunch.calories,
          cost: modalState.meals[day].Lunch.cost,
          isStaple: false
        } : null,
        Dinner: modalState.meals[day].Dinner ? {
          id: modalState.meals[day].Dinner.id,
          title: modalState.meals[day].Dinner.title,
          calories: modalState.meals[day].Dinner.calories,
          cost: modalState.meals[day].Dinner.cost,
          isStaple: false
        } : null
      };
    });

    // Save into multiple plans list
    const savedPlans = JSON.parse(localStorage.getItem("saved_meal_plans") || "[]");
    const newPlanId = "plan_" + Date.now();
    const newPlanObj = {
      id: newPlanId,
      name: modalState.planName || "Tastebud cravings meal plan",
      date: new Date().toLocaleDateString(),
      startDate: new Date().toISOString(),
      duration: modalState.duration || "weekly",
      plan: finalPlan,
      budget: modalState.budget || 10000
    };
    savedPlans.push(newPlanObj);
    localStorage.setItem("saved_meal_plans", JSON.stringify(savedPlans));
    
    // Set this new plan as the current plan
    localStorage.setItem("current_plan_id", newPlanId);
    
    // Legacy support (to make sure other views don't break)
    localStorage.setItem("weekly_budget", modalState.budget || 10000);
    localStorage.setItem("active_meal_plan_name", modalState.planName || "Tastebud cravings meal plan");
    localStorage.setItem("active_meal_plan", JSON.stringify(finalPlan));

    // 2. Hide wizard parts, show reveal layout inside modal
    const modalContentEl = document.querySelector(".meal-plan-modal-content");
    if (modalContentEl) modalContentEl.classList.add("modal-animating");

    const prog = document.querySelector(".modal-progress-container");
    const slider = document.querySelector(".modal-steps-slider-wrapper");
    const footer = document.querySelector(".modal-nav-footer");
    const closeBtn = document.getElementById("plan-modal-close-btn");
    
    if (prog) prog.style.display = "none";
    if (slider) slider.style.display = "none";
    if (footer) footer.style.display = "none";
    if (closeBtn) closeBtn.style.display = "none";
    
    clearModalState();

    // 3. Trigger reveal animation
    runRevealAnimation(finalPlan);
  };

  const PILL_POSITIONS = [
    { left: '20%', top: '25%', labelOffset: { x: 0, y: 55 } },
    { right: '20%', top: '25%', labelOffset: { x: 0, y: 55 } },
    { left: '12%', top: '48%', labelOffset: { x: 0, y: 55 } },
    { right: '12%', top: '48%', labelOffset: { x: 0, y: 55 } },
    { left: '50%', top: '10%', transform: 'translateX(-50%)', labelOffset: { x: 0, y: 55 } },
    { left: '24%', bottom: '20%', labelOffset: { x: 0, y: -35 } },
    { right: '24%', bottom: '20%', labelOffset: { x: 0, y: -35 } }
  ];

  const applyPosStyles = (plate, label, pos) => {
    if (pos.left) {
      plate.style.left = pos.left;
      label.style.left = pos.left;
    }
    if (pos.right) {
      plate.style.right = pos.right;
      label.style.right = pos.right;
    }
    if (pos.top) {
      plate.style.top = pos.top;
      label.style.top = pos.top;
    }
    if (pos.bottom) {
      plate.style.bottom = pos.bottom;
      label.style.bottom = pos.bottom;
    }
    const transformStr = pos.transform || '';
    label.style.transform = `${transformStr} translate(${pos.labelOffset.x}px, ${pos.labelOffset.y}px)`;
  };

  const runRevealAnimation = (plan) => {
    revealOverlay.style.display = "flex";
    revealItemsContainer.innerHTML = "";
    revealSettleView.style.display = "none";
    revealSettleView.style.opacity = "0";

    let totalCost = 0;
    const itemsToAnimate = [];
    const emojis = ["🍲", "🍛", "🍞", "🥗", "🥩", "🍢", "🍳", "🍰"];

    Object.values(plan).forEach(day => {
      Object.values(day).forEach(slot => {
        if (slot) {
          totalCost += slot.cost || 0;
          if (!itemsToAnimate.some(x => x.title === slot.title) && itemsToAnimate.length < 6) {
            itemsToAnimate.push(slot);
          }
        }
      });
    });

    revealCostVal.textContent = `₦${totalCost.toLocaleString()}`;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      itemsToAnimate.forEach((item, idx) => {
        const plate = document.createElement("div");
        plate.className = "reveal-food-plate";
        plate.textContent = emojis[idx % emojis.length];

        const label = document.createElement("div");
        label.className = "reveal-food-label";
        label.textContent = item.title;
        label.style.opacity = "1";

        const pos = PILL_POSITIONS[idx % PILL_POSITIONS.length];
        applyPosStyles(plate, label, pos);

        revealItemsContainer.appendChild(plate);
        revealItemsContainer.appendChild(label);
      });

      revealSettleView.style.display = "flex";
      revealSettleView.style.opacity = "1";
      return;
    }

    // 1. Drop & Settle Phase
    let animationsCount = itemsToAnimate.length;
    const plates = [];
    const labels = [];

    itemsToAnimate.forEach((item, idx) => {
      const plate = document.createElement("div");
      plate.className = "reveal-food-plate";
      plate.textContent = emojis[idx % emojis.length];

      const label = document.createElement("div");
      label.className = "reveal-food-label";
      label.textContent = item.title;

      const pos = PILL_POSITIONS[idx % PILL_POSITIONS.length];
      applyPosStyles(plate, label, pos);

      revealItemsContainer.appendChild(plate);
      revealItemsContainer.appendChild(label);
      
      plates.push(plate);
      labels.push(label);

      const delay = idx * 150;
      const directions = ["top", "left", "right"];
      const dir = directions[idx % directions.length];
      let startX = 0, startY = 0;
      
      if (dir === "top") {
        startY = -400;
        startX = (Math.random() - 0.5) * 200;
      } else if (dir === "left") {
        startX = -400;
        startY = (Math.random() - 0.5) * 200;
      } else {
        startX = 400;
        startY = (Math.random() - 0.5) * 200;
      }

      plate.style.transform = `translate(${startX}px, ${startY}px) scale(0.6)`;
      plate.style.opacity = "0";

      setTimeout(() => {
        const dropAnimation = plate.animate([
          { transform: `translate(${startX}px, ${startY}px) scale(0.6)`, opacity: 0 },
          { transform: `translate(0px, 0px) scale(1.15)`, opacity: 1, offset: 0.85 },
          { transform: `translate(0px, 0px) scale(1)`, opacity: 1 }
        ], {
          duration: 650,
          easing: "cubic-bezier(0.25, 1, 0.5, 1)",
          fill: "forwards"
        });

        dropAnimation.onfinish = () => {
          setTimeout(() => {
            const labelAnimation = label.animate([
              { opacity: 0, transform: `${pos.transform || ''} translate(${pos.labelOffset.x}px, ${pos.labelOffset.y + 10}px)` },
              { opacity: 1, transform: `${pos.transform || ''} translate(${pos.labelOffset.x}px, ${pos.labelOffset.y}px)` }
            ], {
              duration: 350,
              easing: "ease-out",
              fill: "forwards"
            });
            
            labelAnimation.onfinish = () => {
              label.style.opacity = "1";
              
              animationsCount--;
              if (animationsCount === 0) {
                // All items settled. Wait 850ms and animate falling into the basket!
                setTimeout(() => {
                  animatePlatesIntoBasket(plates, labels);
                }, 850);
              }
            };
          }, 80);
        };
      }, delay);
    });
  };

  const animatePlatesIntoBasket = (plates, labels) => {
    // 1. Fade out all pointing labels
    labels.forEach(lbl => {
      lbl.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 300,
        easing: "ease-out",
        fill: "forwards"
      }).onfinish = () => {
        lbl.style.opacity = "0";
      };
    });

    // 2. Measure center of the basket relative to container
    const containerRect = revealItemsContainer.getBoundingClientRect();
    const basketSvg = document.querySelector(".reveal-basket");
    const basketRect = basketSvg.getBoundingClientRect();
    const basketCenterX = basketRect.left + basketRect.width / 2 - containerRect.left;
    const basketCenterY = basketRect.top + basketRect.height / 2 - containerRect.top;

    let activeEnterCount = plates.length;
    
    // 3. Staggered drop into basket
    plates.forEach((plate, pIdx) => {
      setTimeout(() => {
        const plateRect = plate.getBoundingClientRect();
        const plateCenterX = plateRect.left + plateRect.width / 2 - containerRect.left;
        const plateCenterY = plateRect.top + plateRect.height / 2 - containerRect.top;
        
        const deltaX = basketCenterX - plateCenterX;
        const deltaY = basketCenterY - plateCenterY;

        const enterAnimation = plate.animate([
          { transform: 'translate(0px, 0px) scale(1)', opacity: 1 },
          { transform: `translate(${deltaX}px, ${deltaY}px) scale(0.2)`, opacity: 0 }
        ], {
          duration: 550,
          easing: "cubic-bezier(0.55, 0, 1, 0.45)",
          fill: "forwards"
        });

        enterAnimation.onfinish = () => {
          plate.style.display = "none";
          
          // Wobble the basket as each item falls in
          basketSvg.animate([
            { transform: 'scale(1) rotate(0deg)' },
            { transform: 'scale(1.04) rotate(-2deg)', offset: 0.25 },
            { transform: 'scale(0.96) rotate(2deg)', offset: 0.75 },
            { transform: 'scale(1) rotate(0deg)' }
          ], {
            duration: 200,
            easing: "ease-in-out"
          });
          
          activeEnterCount--;
          if (activeEnterCount === 0) {
            // Show final CTA summary & "View Full Plan" button
            setTimeout(showRevealSettleView, 400);
          }
        };
      }, pIdx * 200);
    });
  };

  const showRevealSettleView = () => {
    revealSettleView.style.display = "flex";
    revealSettleView.animate([
      { opacity: 0, transform: "translateY(15px)" },
      { opacity: 1, transform: "translateY(0)" }
    ], {
      duration: 400,
      easing: "ease-out",
      fill: "forwards"
    }).onfinish = () => {
      revealSettleView.style.opacity = "1";
    };
  };

  revealBtnViewPlan.addEventListener("click", () => {
    revealOverlay.style.display = "none";
    closeCreateMealPlanModal(false);
    window.location.hash = "#/meal-planner";
    initMealPlannerPage();
  });

  const initHorizontalCarousel = () => {
    const track = document.getElementById("horizontal-scroll-track");
    const container = document.getElementById("sticky-carousel-container");
    const row = document.getElementById("carousel-cards-row");
    
    if (!track || !container || !row) return;

    let tick = false;

    const updateScroll = () => {
      const isMobile = window.innerWidth <= 768;
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      if (isMobile || prefersReduced) {
        row.style.transform = "";
        tick = false;
        return;
      }

      const trackRect = track.getBoundingClientRect();
      const trackTop = trackRect.top;
      const trackHeight = trackRect.height;
      const viewportHeight = window.innerHeight;

      const totalScrollableDistance = trackHeight - viewportHeight;
      let progress = 0;

      if (trackTop <= 0) {
        progress = -trackTop / totalScrollableDistance;
      }
      
      progress = Math.max(0, Math.min(1, progress));

      const maxTranslatePercent = -200; // 3 cards, translate by -200vw max
      const currentTranslate = progress * maxTranslatePercent;

      row.style.transform = `translateX(${currentTranslate}vw)`;
      tick = false;
    };

    const onScroll = () => {
      if (!tick) {
        requestAnimationFrame(updateScroll);
        tick = true;
      }
    };

    // Keyboard focus synchronization to align scroll progress
    row.querySelectorAll(".carousel-card").forEach((card, idx) => {
      card.addEventListener("focusin", () => {
        const isMobile = window.innerWidth <= 768;
        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (isMobile || prefersReduced) return;

        const totalScrollableDistance = track.offsetHeight - window.innerHeight;
        const targetProgress = idx / 2; // (cardsCount - 1)
        const absoluteTrackTop = track.getBoundingClientRect().top + window.scrollY;
        const targetScrollY = absoluteTrackTop + targetProgress * totalScrollableDistance;
        
        window.scrollTo({
          top: targetScrollY,
          behavior: "smooth"
        });
      });
    });

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    // Initial positioning
    updateScroll();
  };

  const initNourirSwapCarousel = () => {
    const track = document.getElementById("swap-images-track");
    if (!track) return;

    const images = [
      "Assets/akara.jpg",
      "Assets/carrot cake.jpg",
      "Assets/efo.png",
      "Assets/jollof.png",
      "Assets/suya.jpg",
      "Assets/abacha.jpg"
    ];

    // Create 5 cards in the track to represent [Out-Left, Left, Center, Right, Out-Right]
    track.innerHTML = "";
    const cards = [];
    for (let i = 0; i < 5; i++) {
      const card = document.createElement("div");
      card.className = "swap-image-card";
      const img = document.createElement("img");
      img.alt = "Nourir Swap Food";
      card.appendChild(img);
      track.appendChild(card);
      cards.push(card);
    }

    // Index tracking in queue
    let centerQueueIdx = 1;

    const getQueueIdx = (offset) => {
      return (centerQueueIdx + offset + images.length) % images.length;
    };

    const updateCardImages = () => {
      cards[0].querySelector("img").src = images[getQueueIdx(-2)];
      cards[1].querySelector("img").src = images[getQueueIdx(-1)];
      cards[2].querySelector("img").src = images[getQueueIdx(0)];
      cards[3].querySelector("img").src = images[getQueueIdx(1)];
      cards[4].querySelector("img").src = images[getQueueIdx(2)];
    };

    const updateCardClasses = () => {
      cards.forEach(c => {
        c.classList.remove("state-out-left", "state-left", "state-center", "state-right", "state-out-right");
      });
      cards[0].classList.add("state-out-left");
      cards[1].classList.add("state-left");
      cards[2].classList.add("state-center");
      cards[3].classList.add("state-right");
      cards[4].classList.add("state-out-right");
    };

    // Initialize content
    updateCardImages();
    updateCardClasses();

    let isTransitioning = false;

    const rotateLeft = () => {
      if (isTransitioning) return;
      isTransitioning = true;

      // Increment center index
      centerQueueIdx = getQueueIdx(1);

      // Move cards[0] instantly to the right side
      cards[0].style.transition = "none";
      cards[0].classList.remove("state-out-left");
      cards[0].classList.add("state-out-right");
      cards[0].querySelector("img").src = images[getQueueIdx(2)];
      
      // Force reflow
      cards[0].offsetHeight;

      // Restore transition
      cards[0].style.transition = "";

      // Move visible elements leftwards
      cards[1].classList.replace("state-left", "state-out-left");
      cards[2].classList.replace("state-center", "state-left");
      cards[3].classList.replace("state-right", "state-center");
      cards[4].classList.replace("state-out-right", "state-right");

      // Shift DOM cards mapping array
      const moved = cards.shift();
      cards.push(moved);

      setTimeout(() => {
        isTransitioning = false;
      }, 400);
    };

    const rotateRight = () => {
      if (isTransitioning) return;
      isTransitioning = true;

      // Decrement center index
      centerQueueIdx = getQueueIdx(-1);

      // Move cards[4] instantly to the left side
      cards[4].style.transition = "none";
      cards[4].classList.remove("state-out-right");
      cards[4].classList.add("state-out-left");
      cards[4].querySelector("img").src = images[getQueueIdx(-2)];
      
      // Force reflow
      cards[4].offsetHeight;

      // Restore transition
      cards[4].style.transition = "";

      // Move visible elements rightwards
      cards[3].classList.replace("state-right", "state-out-right");
      cards[2].classList.replace("state-center", "state-right");
      cards[1].classList.replace("state-left", "state-center");
      cards[0].classList.replace("state-out-left", "state-left");

      // Shift DOM cards mapping array
      const moved = cards.pop();
      cards.unshift(moved);

      setTimeout(() => {
        isTransitioning = false;
      }, 400);
    };

    // Auto-advance loop (every 1 second)
    let intervalId = setInterval(rotateLeft, 1000);

    const resetInterval = () => {
      clearInterval(intervalId);
      intervalId = setInterval(rotateLeft, 1000);
    };

    // Pause on hover or focus
    const container = document.querySelector(".swap-carousel-container");
    if (container) {
      container.addEventListener("mouseenter", () => clearInterval(intervalId));
      container.addEventListener("mouseleave", resetInterval);
      
      container.addEventListener("focusin", () => clearInterval(intervalId));
      container.addEventListener("focusout", resetInterval);
    }

    // Manual navigation click triggers
    const leftArrow = document.querySelector(".arrow-left");
    const rightArrow = document.querySelector(".arrow-right");

    if (leftArrow) {
      leftArrow.addEventListener("click", () => {
        rotateRight();
        resetInterval();
      });
    }

    if (rightArrow) {
      rightArrow.addEventListener("click", () => {
        rotateLeft();
        resetInterval();
      });
    }
  };

  // Initial call on category setup, routing registration, and run routing on load
  initScrollReveal();
  initRecipesScrollAnimation();
  initCategoryFiltering();
  initHorizontalCarousel();
  initNourirSwapCarousel();
  window.addEventListener("hashchange", handleRoute);
  handleRoute();

});

