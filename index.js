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

// 2. EXTENDED DETAILED NIGERIAN RECIPES FOR KEYLESS LOCAL SEARCH
const NIGERIAN_EXT_DB = {
  "egusi": {
    id: "egusi",
    title: "Rich Egusi Soup",
    description: "A beloved classic West African soup made with ground melon seeds (egusi), palm oil, leafy green vegetables, and loaded with assorted healthy meats.",
    prepTime: "20 mins",
    cookTime: "35 mins",
    totalTime: "55 mins",
    serves: "feeds 4",
    diet: "Keto Friendly, Gluten-Free",
    badge: "Traditional Soup",
    image: "Assets/stew.jpg",
    ingredients: {
      "Egusi Paste": [
        "2 cups ground egusi (melon seeds)",
        "1 small onion, blended",
        "1/2 cup warm water (to make a paste)"
      ],
      "Base Stew & Greens": [
        "1/3 cup palm oil",
        "2 cups blanched ugwu (pumpkin leaves) or spinach, chopped",
        "3 red bell peppers & 2 scotch bonnets, blended",
        "2 tbsp fermented locust beans (Iru)",
        "3 tbsp ground crayfish"
      ],
      "Proteins": [
        "500g beef, shaki (tripe), and ponmo, cooked",
        "1 smoked fish, cleaned and deboned"
      ],
      "Utensils You'll Need": [
        "Deep cooking pot",
        "Mixing spoon",
        "Food blender"
      ]
    },
    instructions: [
      {
        step: 1,
        title: "Make Egusi Paste",
        instruction: "Mix the ground melon seeds with blended onions and warm water in a bowl to form a thick, smooth paste. Set aside.",
        note: "Whisking the paste helps make the egusi lumps firmer when cooking."
      },
      {
        step: 2,
        title: "Fry the Base",
        instruction: "Heat palm oil in a pot, sauté chopped onions and locust beans (iru) until fragrant. Pour in the blended peppers and cook for 10 minutes until the oil rises.",
        note: "Keep the heat medium so the oil doesn't burn."
      },
      {
        step: 3,
        title: "Add Egusi & Simmer",
        instruction: "Scoop the egusi paste in small balls into the frying pepper base. Do not stir. Cover the pot and simmer on low heat for 10-15 minutes until the egusi balls firm up.",
        note: "This creates the beautiful texture of egusi lumps in your soup!"
      },
      {
        step: 4,
        title: "Combine & Add Greens",
        instruction: "Gently stir the soup, add your cooked meats, smoked fish, crayfish, and seasoning cubes. Simmer for another 5 minutes, then add the chopped greens. Cook for 2 minutes and turn off the heat.",
        note: "Serve alongside pounded yam or fufu."
      }
    ]
  },
  "fufu": {
    id: "fufu",
    title: "Stretchy Cassava Fufu",
    description: "Classic West African swallow made from fermented cassava starch, cooked and pounded into a perfectly smooth, stretchy ball.",
    prepTime: "10 mins",
    cookTime: "20 mins",
    totalTime: "30 mins",
    serves: "feeds 3",
    diet: "Vegan, Gluten-Free",
    badge: "Core Swallow",
    image: "Assets/efo.png",
    ingredients: {
      "Ingredients": [
        "2 cups of fresh wet fufu paste (or high-quality fufu flour)",
        "3 cups water"
      ],
      "Utensils You'll Need": [
        "Non-stick pot",
        "Heavy wooden spatula (turning stick)",
        "Plastic wrap"
      ]
    },
    instructions: [
      {
        step: 1,
        title: "Dissolve and Stir",
        instruction: "Place the fufu paste in a pot, add water, and stir thoroughly with your fingers to break up any lumps until it forms a smooth, milk-like slurry.",
        note: "For fufu flour, use a 1:1.5 ratio of flour to water."
      },
      {
        step: 2,
        title: "Cook on Heat",
        instruction: "Place the pot on medium-low heat. Stir continuously in one direction with your wooden spatula. The mixture will start to thicken and form translucent grey lumps.",
        note: "Stirring constantly is critical to prevent lumps and scorching."
      },
      {
        step: 3,
        title: "Pound & Smooth",
        instruction: "As it becomes thick and dough-like, press and gather the mixture against the sides of the pot vigorously. Splash 2 tablespoons of hot water, cover, and steam on low for 5 minutes. Stir one final time until completely smooth, stretchy, and white.",
        note: "Fufu is ready when the raw, sour smell is replaced by a cooked, mild scent."
      }
    ]
  },
  "amala": {
    id: "amala",
    title: "Yoruba Amala & Ewedu",
    description: "Dark, fluffy yam flour swallow (Amala Dudu) served alongside slippery, nutrient-packed jute leaf soup (Ewedu) and savory Buka stew.",
    prepTime: "15 mins",
    cookTime: "20 mins",
    totalTime: "35 mins",
    serves: "feeds 2",
    diet: "Traditional Swallow",
    badge: "Yoruba Legend",
    image: "Assets/stew.jpg",
    ingredients: {
      "Amala Swallow": [
        "2 cups Elubo (yam flour)",
        "4 cups water"
      ],
      "Ewedu Soup": [
        "2 cups fresh Ewedu leaves (jute leaves)",
        "1 tsp fermented locust beans (Iru)",
        "1/2 tsp ground crayfish",
        "A pinch of kaun (potash) or baking soda"
      ],
      "Utensils You'll Need": [
        "Amala pot",
        "Wooden turning stick (Orogbo)",
        "Ewedu broom (Ijabe) or blender"
      ]
    },
    instructions: [
      {
        step: 1,
        title: "Boil Water for Amala",
        instruction: "Bring 4 cups of water to a rolling boil in a pot. Turn off the heat or reduce to absolute low.",
        note: "Always use clean, boiling hot water for smooth Elubo."
      },
      {
        step: 2,
        title: "Stir in Elubo",
        instruction: "Gradually pour the Elubo flour into the hot water while stirring vigorously with the turning stick. Keep beating the dough against the pot to remove lumps until it is stretchy and smooth.",
        note: "Add a splash of hot water, cover, and steam for 3 minutes on low heat to cook thoroughly."
      },
      {
        step: 3,
        title: "Cook the Ewedu",
        instruction: "Boil the Ewedu leaves with a pinch of potash and iru in 1 cup of water for 5 minutes. Blend briefly or use the traditional Ijabe broom to chop it into a slimy puree. Stir in crayfish and salt.",
        note: "Do not cover the pot while cooking Ewedu, or it will lose its green color."
      }
    ]
  },
  "chin-chin": {
    id: "chin-chin",
    title: "Crunchy Chin Chin",
    description: "A popular fried pastry snack from Nigeria, cut into small cubes, infused with milk and nutmeg, fried to a golden crunch.",
    prepTime: "25 mins",
    cookTime: "15 mins",
    totalTime: "40 mins",
    serves: "feeds 10",
    diet: "Vegetarian Snack",
    badge: "Celebration Crunchy",
    image: "Assets/image-4.png",
    ingredients: {
      "Pastry Dough": [
        "3 cups all-purpose flour",
        "1/2 cup sugar",
        "1/2 tsp ground nutmeg",
        "1/2 cup butter, cold and cubed",
        "1 egg",
        "1/2 cup liquid milk",
        "1/2 tsp baking powder"
      ],
      "Frying": [
        "4 cups vegetable oil for deep frying"
      ],
      "Utensils You'll Need": [
        "Mixing bowl",
        "Rolling pin",
        "Pastry cutter or knife",
        "Frying pan"
      ]
    },
    instructions: [
      {
        step: 1,
        title: "Mix the Dough",
        instruction: "Whisk flour, sugar, baking powder, and nutmeg. Rub in cold butter cubes until it resembles breadcrumbs. Whisk egg and milk together, pour into the flour, and knead into a stiff, smooth dough.",
        note: "If the dough is too sticky, dust with a little flour."
      },
      {
        step: 2,
        title: "Roll and Cut",
        instruction: "Roll the dough flat to a thickness of about 1/4 inch. Use a knife or pastry wheel to cut into tiny 1/2-inch squares.",
        note: "Lightly dust the cut pieces with flour so they don't stick to each other before frying."
      },
      {
        step: 3,
        title: "Deep Fry",
        instruction: "Deep fry in batches in hot vegetable oil on medium heat, stirring constantly with a slotted spoon, until even golden brown (approx 5-7 minutes).",
        note: "Drain thoroughly on paper towels. They will become crunchier as they cool!"
      }
    ]
  }
};

// 3. DOM EVENT CONTROLLER
document.addEventListener("DOMContentLoaded", () => {
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

  // Mobile Menu Hamburger Toggle
  const menuToggleBtn = document.getElementById("menu-toggle-btn");
  const navLinksList = document.querySelector(".nav-links");
  if (menuToggleBtn && navLinksList) {
    menuToggleBtn.addEventListener("click", () => {
      navLinksList.classList.toggle("nav-active");
      menuToggleBtn.classList.toggle("open");
    });
    const links = navLinksList.querySelectorAll("a");
    links.forEach(link => {
      link.addEventListener("click", () => {
        navLinksList.classList.remove("nav-active");
        menuToggleBtn.classList.remove("open");
      });
    });
  }

  // Category Pill Interaction
  const categoryPills = document.querySelectorAll(".category-tag");
  categoryPills.forEach(pill => {
    pill.addEventListener("click", () => {
      categoryPills.forEach(p => p.classList.remove("tag-selected"));
      pill.classList.add("tag-selected");
      console.log("Selected category:", pill.textContent.trim());
    });
  });

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
  // ROUTING ENGINE (ES6 Hash-based)
  // ==========================================================================
  const homeSections = [
    document.querySelector(".hero"),
    document.querySelector(".about-section-full"),
    document.getElementById("recipes"),
    document.getElementById("bento-features"),
    document.querySelector(".todays-nourir-section-full"),
    document.getElementById("video-shows"),
    document.getElementById("blog-callout")
  ].filter(Boolean);

  const recipeDetailSection = document.getElementById("recipe-detail-section");

  const showView = (viewName) => {
    if (viewName === "detail") {
      homeSections.forEach(sec => sec.style.display = "none");
      if (recipeDetailSection) recipeDetailSection.style.display = "block";
      window.scrollTo(0, 0);
    } else {
      homeSections.forEach(sec => sec.style.display = "");
      if (recipeDetailSection) recipeDetailSection.style.display = "none";
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
          window.location.hash = "#";
        }
      } else if (RECIPES_DB[recipeId]) {
        renderRecipeDetail(RECIPES_DB[recipeId]);
      } else {
        window.location.hash = "#";
      }
    } else {
      showView("home");
    }
  };

  window.addEventListener("hashchange", handleRoute);
  handleRoute();

  // ==========================================================================
  // RENDERING ENGINE
  // ==========================================================================
  function renderRecipeDetail(recipe) {
    document.getElementById("r-prep-cook-time").textContent = recipe.prepTime || recipe.totalTime;
    document.getElementById("r-serves").textContent = recipe.serves;
    document.getElementById("r-diet").textContent = recipe.diet || "Nourir Recipe";
    document.getElementById("r-title").textContent = recipe.title;
    document.getElementById("r-description").textContent = recipe.description;
    
    const badgeElement = document.getElementById("r-badge-tag");
    if (badgeElement) {
      badgeElement.textContent = recipe.badge || recipe.diet || "Plant Based";
    }

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

    const instructionsList = document.getElementById("r-instructions-list");
    instructionsList.innerHTML = "";

    if (recipe.instructions) {
      recipe.instructions.forEach(step => {
        const stepBlock = document.createElement("div");
        stepBlock.className = "instruction-step";

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
    }

    const moreLikeGrid = document.getElementById("r-more-like-this-grid");
    moreLikeGrid.innerHTML = "";
    
    const items = Object.values(RECIPES_DB)
      .filter(x => x.id !== recipe.id)
      .slice(0, 4);

    items.forEach(item => {
      const card = document.createElement("div");
      card.className = "recipe-card";
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
  }

  const bindCardClicks = () => {
    const homepageCards = document.querySelectorAll(".recipe-grid .recipe-card");
    const recipeIds = Object.keys(RECIPES_DB);
    homepageCards.forEach((card, idx) => {
      if (recipeIds[idx]) {
        card.style.cursor = "pointer";
        card.addEventListener("click", () => {
          window.location.hash = `#/recipe/${recipeIds[idx]}`;
        });
      }
    });

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
  // MULTI-SOURCE SEARCH CONTROLLER (Keyless Web Search by Default)
  // ==========================================================================
  const searchInput = document.querySelector(".recipe-search-input");
  const searchIconBtn = document.querySelector(".recipe-search-icon");

  const executeSearch = async (query) => {
    if (!query || query.trim() === "") return;
    
    localStorage.removeItem("last_searched_recipe");
    const cleanQuery = query.toLowerCase().trim();

    // Switch view to Detail page and show loading
    window.location.hash = `#/recipe/search`;
    document.getElementById("recipe-loading").style.display = "flex";
    document.getElementById("recipe-detail-content").style.display = "none";
    document.getElementById("loading-text").textContent = `Searching for real "${query}" recipe data...`;

    // 1. Check local DB first (fuzzy matching)
    const matchedId = Object.keys(RECIPES_DB).find(key => 
      key === cleanQuery || cleanQuery.includes(key) || 
      RECIPES_DB[key].title.toLowerCase().includes(cleanQuery)
    );

    if (matchedId) {
      setTimeout(() => {
        renderRecipeDetail(RECIPES_DB[matchedId]);
        document.getElementById("recipe-loading").style.display = "none";
        document.getElementById("recipe-detail-content").style.display = "block";
      }, 600);
      return;
    }

    // 2. Check extended local Nigerian database
    const matchedExtKey = Object.keys(NIGERIAN_EXT_DB).find(key => 
      key === cleanQuery || cleanQuery.includes(key) || 
      NIGERIAN_EXT_DB[key].title.toLowerCase().includes(cleanQuery)
    );

    if (matchedExtKey) {
      setTimeout(() => {
        const recipe = NIGERIAN_EXT_DB[matchedExtKey];
        localStorage.setItem("last_searched_recipe", JSON.stringify(recipe));
        renderRecipeDetail(recipe);
        document.getElementById("recipe-loading").style.display = "none";
        document.getElementById("recipe-detail-content").style.display = "block";
      }, 700);
      return;
    }

    // 3. Fallback to TheMealDB (Free Keyless Global Recipe Database)
    try {
      const mealDbRes = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(query)}`);
      const data = await mealDbRes.json();
      if (data.meals && data.meals.length > 0) {
        const meal = data.meals[0];
        const parsedRecipe = parseMealDbRecipe(meal);
        localStorage.setItem("last_searched_recipe", JSON.stringify(parsedRecipe));
        renderRecipeDetail(parsedRecipe);
        
        document.getElementById("recipe-loading").style.display = "none";
        document.getElementById("recipe-detail-content").style.display = "block";
        return;
      }
    } catch (err) {
      console.warn("TheMealDB failed:", err);
    }

    // 4. Fallback to Wikipedia API to get real descriptions & images, then generate a detailed recipe
    try {
      const wikiRes = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(query)}`);
      if (wikiRes.ok) {
        const wikiData = await wikiRes.json();
        const generatedRecipe = generateRecipeFromWiki(query, wikiData);
        localStorage.setItem("last_searched_recipe", JSON.stringify(generatedRecipe));
        renderRecipeDetail(generatedRecipe);
        
        document.getElementById("recipe-loading").style.display = "none";
        document.getElementById("recipe-detail-content").style.display = "block";
        return;
      }
    } catch (err) {
      console.warn("Wikipedia failed:", err);
    }

    // 5. Final fallback (smart mock generator)
    setTimeout(() => {
      const fallbackRecipe = generateLocalMockRecipe(query);
      localStorage.setItem("last_searched_recipe", JSON.stringify(fallbackRecipe));
      renderRecipeDetail(fallbackRecipe);
      
      document.getElementById("recipe-loading").style.display = "none";
      document.getElementById("recipe-detail-content").style.display = "block";
    }, 1000);
  };

  // Helper: Parse TheMealDB meal to Nourir layout
  function parseMealDbRecipe(meal) {
    const ingredientsList = [];
    for (let i = 1; i <= 20; i++) {
      const ing = meal[`strIngredient${i}`];
      const meas = meal[`strMeasure${i}`];
      if (ing && ing.trim() !== "") {
        ingredientsList.push(`${meas ? meas.trim() + " " : ""}${ing.trim()}`);
      }
    }

    // Split instructions
    const rawSteps = meal.strInstructions.split(/\r?\n/).filter(line => line.trim().length > 5);
    const instructions = rawSteps.map((stepText, idx) => {
      const cleanText = stepText.replace(/^\d+[\.\s\-]+/, '').trim();
      return {
        step: idx + 1,
        title: cleanText.split(/[,\.]/)[0].substring(0, 30) || "Preparation",
        instruction: cleanText,
        note: ""
      };
    });

    return {
      id: meal.idMeal,
      title: meal.strMeal,
      description: `A delicious traditional dish classified under ${meal.strCategory || "International"} cuisine. Sourced from the global culinary index.`,
      prepTime: "15 mins",
      cookTime: "30 mins",
      totalTime: "45 mins",
      serves: "feeds 4",
      diet: meal.strCategory || "International Meal",
      badge: meal.strArea || "World Recipe",
      image: meal.strMealThumb,
      ingredients: {
        "Recipe Ingredients": ingredientsList,
        "Utensils You'll Need": ["Cooking pot", "Stirring spoon", "Chef Knife"]
      },
      instructions: instructions.length > 0 ? instructions : [
        {
          step: 1,
          title: "Cooking",
          instruction: meal.strInstructions
        }
      ]
    };
  }

  // Helper: Parse Wikipedia article data to Nourir recipe details
  function generateRecipeFromWiki(query, wikiData) {
    const title = wikiData.title || query;
    const desc = wikiData.extract || `A customized recipe for preparing delicious ${query}.`;
    const image = (wikiData.originalimage && wikiData.originalimage.source) || `https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=700&auto=format&fit=crop&q=60`;
    
    return {
      id: "wiki-recipe",
      title: title,
      description: desc,
      prepTime: "15 mins",
      cookTime: "35 mins",
      totalTime: "50 mins",
      serves: "feeds 4",
      diet: "Nutritional",
      badge: "Wikipedia Sourced",
      image: image,
      ingredients: {
        "Required Ingredients": [
          `Main elements of ${title}`,
          "Sliced red onion",
          "2 bell peppers",
          "Scotch bonnet pepper",
          "Salt and seasoning powder"
        ],
        "Pantry & Oil": [
          "2 tbsp vegetable oil or olive oil",
          "Water as required",
          "Fresh herbs for garnishing"
        ],
        "Utensils You'll Need": [
          "Skillet or cooking pot",
          "Prep knife",
          "Serving plates"
        ]
      },
      instructions: [
        {
          step: 1,
          title: "Preparation",
          instruction: `Prepare and wash all raw ingredients. Thinly slice the onions, chop the peppers, and portion out elements for the ${title}.`,
          note: "Having everything chopped beforehand ensures a smooth cooking process."
        },
        {
          step: 2,
          title: "Cook the Base",
          instruction: "Heat the oil in your pot. Sauté the onions until translucent. Stir in the chopped peppers and cook on medium-low heat for 8 minutes.",
          note: "Cover to trap the heat and lock in natural flavors."
        },
        {
          step: 3,
          title: "Add Main Ingredients & Simmer",
          instruction: `Incorporate the main parts of the ${title} into the pan. Stir thoroughly to combine with the aromatics. Cook for 20 minutes, adding a splash of water if the mix gets dry.`,
          note: "Season with salt and seasoning cubes to taste during this step."
        },
        {
          step: 4,
          title: "Serve",
          instruction: "Garnish with fresh herbs, remove from heat, and plate beautifully.",
          note: "Best enjoyed warm!"
        }
      ]
    };
  }

  // Fallback: Generate generic mock recipe
  function generateLocalMockRecipe(query) {
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

  // ==========================================================================
  // API KEY CONFIG MODAL LOGIC (Optional)
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

    const clearKeyBtn.addEventListener("click", () => {
      localStorage.removeItem("anthropic_api_key");
      apiKeyInput.value = "";
      alert("Anthropic API Key cleared!");
      closeModal();
    });
  }
});
