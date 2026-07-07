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

// 2. DOM EVENT CONTROLLER
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
  // HYBRID SEARCH EXPERIENCE (Claude Web Search + TheMealDB + Local Generator)
  // ==========================================================================
  const searchInput = document.querySelector(".recipe-search-input");
  const searchIconBtn = document.querySelector(".recipe-search-icon");

  const executeSearch = async (query) => {
    if (!query || query.trim() === "") return;
    
    localStorage.removeItem("last_searched_recipe");

    // Route to search detail view immediately to show loading
    window.location.hash = `#/recipe/search`;
    document.getElementById("recipe-loading").style.display = "flex";
    document.getElementById("recipe-detail-content").style.display = "none";
    document.getElementById("loading-text").textContent = `Searching the web for real "${query}" recipe data...`;

    // 1. Try to check if we can query the Anthropic Claude API (using Dev key in env or user key in storage)
    // Vite loads env variables with VITE_ prefix.
    const devApiKey = import.meta.env?.VITE_ANTHROPIC_API_KEY || "";
    const userApiKey = localStorage.getItem("anthropic_api_key") || "";
    const apiKey = userApiKey || devApiKey;

    if (apiKey) {
      try {
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

        if (response.ok) {
          const responseData = await response.json();
          let text = responseData.content[0].text;
          
          if (text.includes("```json")) {
            text = text.substring(text.indexOf("```json") + 7);
            text = text.substring(0, text.lastIndexOf("```"));
          } else if (text.includes("```")) {
            text = text.substring(text.indexOf("```") + 3);
            text = text.substring(0, text.lastIndexOf("```"));
          }

          const recipe = JSON.parse(text.trim());
          localStorage.setItem("last_searched_recipe", JSON.stringify(recipe));
          renderRecipeDetail(recipe);
          document.getElementById("recipe-loading").style.display = "none";
          document.getElementById("recipe-detail-content").style.display = "block";
          return;
        }
      } catch (err) {
        console.warn("Claude Search failed, falling back to keyless search...", err);
      }
    }

    // 2. Fallback to TheMealDB (Free Keyless International API)
    try {
      const mealDbResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(query)}`);
      if (mealDbResponse.ok) {
        const mealDbData = await mealDbResponse.json();
        if (mealDbData.meals && mealDbData.meals.length > 0) {
          const parsedRecipe = parseMealDBRecipe(mealDbData.meals[0]);
          localStorage.setItem("last_searched_recipe", JSON.stringify(parsedRecipe));
          renderRecipeDetail(parsedRecipe);
          document.getElementById("recipe-loading").style.display = "none";
          document.getElementById("recipe-detail-content").style.display = "block";
          return;
        }
      }
    } catch (err) {
      console.warn("TheMealDB lookup failed:", err);
    }

    // 3. Ultimate Fallback: Smart Heuristics local recipe generator
    setTimeout(() => {
      const generatedRecipe = generateLocalHeuristicRecipe(query);
      localStorage.setItem("last_searched_recipe", JSON.stringify(generatedRecipe));
      renderRecipeDetail(generatedRecipe);
      
      document.getElementById("recipe-loading").style.display = "none";
      document.getElementById("recipe-detail-content").style.display = "block";
    }, 1200);
  };

  // Converts TheMealDB's flat structure into Nourir's detailed layout
  function parseMealDBRecipe(meal) {
    const ingredients = {
      "Ingredients Required": [],
      "Utensils You'll Need": ["Cooking Pot", "Stirring Spoon", "Measuring Cup / Scale"]
    };
    
    for (let i = 1; i <= 20; i++) {
      const ing = meal[`strIngredient${i}`];
      const meas = meal[`strMeasure${i}`];
      if (ing && ing.trim() !== "") {
        ingredients["Ingredients Required"].push(`${meas ? meas.trim() + ' ' : ''}${ing.trim()}`);
      }
    }

    const stepsText = meal.strInstructions.split(/\r?\n/).filter(line => line.trim() !== "");
    const instructions = stepsText.map((text, idx) => {
      const cleanText = text.replace(/^\d+[\.\-\)]\s*/, ""); // strip prepended numbers
      return {
        step: idx + 1,
        title: cleanText.split(" ").slice(0, 3).join(" ") + "...",
        instruction: cleanText,
        note: ""
      };
    });

    return {
      title: meal.strMeal,
      description: `A delicious traditional recipe for ${meal.strMeal} sourced directly from TheMealDB database.`,
      prepTime: "15 mins",
      cookTime: "30 mins",
      totalTime: "45 mins",
      serves: "feeds 4",
      diet: meal.strCategory || "Traditional",
      badge: meal.strArea || "International",
      image: meal.strMealThumb,
      ingredients,
      instructions
    };
  }

  // Smart Heuristics Local Generator (Returns culturally plausible recipes)
  function generateLocalHeuristicRecipe(query) {
    const q = query.toLowerCase();
    
    // Default values
    let title = query.charAt(0).toUpperCase() + query.slice(1);
    let description = `A healthy, modern fit-fam adaptation of the beloved classic ${query}. Perfect for nutritious eating.`;
    let diet = "Naija Fit-Fam";
    let badge = "Healthy Choice";
    let prepTime = "15 mins";
    let cookTime = "30 mins";
    let totalTime = "45 mins";
    let serves = "feeds 4";
    let img = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=700&auto=format&fit=crop&q=60";
    
    let ingredients = {
      "Main Ingredients": [],
      "Healthy Accents": [],
      "Utensils You'll Need": ["Cooking pot", "Kitchen knife", "Cutting board", "Stirring spoon"]
    };
    
    let instructions = [];

    if (q.includes("jollof") || q.includes("rice")) {
      title = q.includes("jollof") ? "Healthy Smoky Jollof Rice" : title;
      description = "Classic West African rice dish made with brown or long-grain parboiled rice, cooked in a flavorful tomato and red bell pepper sauce.";
      diet = "Gluten-Free, Vegetarian Option";
      badge = "Naija Staple";
      img = "Assets/jollof.png";
      ingredients["Main Ingredients"] = [
        "2 cups long-grain parboiled rice (or brown rice for extra fiber)",
        "4 large fresh tomatoes",
        "2 red bell peppers (Tatashe)",
        "1 scotch bonnet pepper (Ata Rodo)",
        "1 large red onion, chopped"
      ];
      ingredients["Healthy Accents"] = [
        "2 tbsp olive oil",
        "2 bay leaves",
        "1 tsp curry powder",
        "1 tsp dried thyme",
        "2 cups low-sodium vegetable or chicken stock",
        "Salt to taste"
      ];
      instructions = [
        {
          step: 1,
          title: "Blend and Reduce the Pepper Base",
          instruction: "Blend the tomatoes, red bell peppers, and scotch bonnet until smooth. Boil the blend in a small pot for 10 minutes until it reduces to a paste.",
          note: "Boiling the base removes excess sour water, making the stew base sweet and savory."
        },
        {
          step: 2,
          title: "Sauté and Stew",
          instruction: "In your main cooking pot, heat olive oil and sauté chopped onions. Add curry, thyme, bay leaves, and the reduced pepper base. Fry on low heat for 12 minutes.",
          note: "Frying the herbs releases their essential oils and intensifies the flavor."
        },
        {
          step: 3,
          title: "Steam the Rice",
          instruction: "Rinse the rice thoroughly. Add the rice and low-sodium stock to the pot. Cover the top of the pot with foil, then seal with the lid. Cook on very low heat for 25-30 minutes.",
          note: "Steaming the rice with foil traps moisture, cooking it to perfection without adding too much liquid."
        }
      ];
    } else if (q.includes("soup") || q.includes("egusi") || q.includes("ogbono") || q.includes("okro") || q.includes("okra")) {
      title = q.includes("egusi") ? "Nutrient-Dense Egusi Soup" : q.includes("okro") || q.includes("okra") ? "Low-Oil Seafood Okra Soup" : title;
      description = "A comforting, traditional African soup packed with nutritious leafy greens, cooked with minimal oils and assorted rich proteins.";
      diet = "Keto, Gluten-Free";
      badge = "Rich & Savory";
      img = "Assets/efo.png";
      ingredients["Main Ingredients"] = [
        "2 cups finely chopped fresh vegetables (Spinach, Ugu, or Bitterleaf)",
        q.includes("egusi") ? "1 cup ground melon seeds (Egusi)" : q.includes("okro") || q.includes("okra") ? "2 cups fresh okra, chopped" : "1.5 cups soup base",
        "300g mixed proteins (skinless chicken breast, shaki, boiled fish chunks)",
        "1 red onion, finely diced"
      ];
      ingredients["Healthy Accents"] = [
        "2 tbsp red palm oil",
        "2 tbsp fermented locust beans (Iru)",
        "2 tbsp ground crayfish",
        "Salt and seasoning cubes to taste"
      ];
      instructions = [
        {
          step: 1,
          title: "Cook the Proteins",
          instruction: "Boil the chicken, shaki, and fish in a pot with chopped onions, seasoning cubes, and salt until tender. Save the stock.",
          note: "Saves time and retains nutrient-rich juices."
        },
        {
          step: 2,
          title: "Prepare Soup Base",
          instruction: q.includes("egusi") 
            ? "Mix ground Egusi with a little warm water to form thick paste blocks. Gently drop them into boiling stock with palm oil and Iru, then let it simmer for 15 minutes."
            : "Heat palm oil in stock, add locust beans, onions, and boiled proteins. Simmer for 5 minutes.",
          note: "Letting the base cook thoroughly ensures a smooth, deep texture."
        },
        {
          step: 3,
          title: "Fold in Vegetables",
          instruction: q.includes("okro") || q.includes("okra") 
            ? "Add the chopped okra and simmer for 3 minutes. Fold in fresh green vegetables, stir well, and turn off heat."
            : "Add fresh spinach or Ugu, stir thoroughly, and let it cook for 2 minutes on low heat before turning off.",
          note: "Overcooking greens destroys vitamins. Residual heat will finish the cooking."
        }
      ];
    } else if (q.includes("suya") || q.includes("beef") || q.includes("chicken") || q.includes("skewers") || q.includes("meat")) {
      title = q.includes("suya") ? "Oven-Grilled Suya Skewers" : title;
      description = "Thinly sliced grilled protein dry-rubbed in Yaji (traditional Northern Nigerian spice blend of ground peanut, ginger, paprika, and garlic).";
      diet = "Keto, High Protein";
      badge = "Spicy & Lean";
      img = "Assets/suya.jpg";
      ingredients["Main Ingredients"] = [
        "500g lean beef sirloin or chicken breast, sliced into thin strips",
        "3 tbsp traditional suya spice (Yaji)",
        "1 red onion, sliced into rings",
        "1 cucumber, sliced"
      ];
      ingredients["Healthy Accents"] = [
        "1 tbsp peanut oil or olive oil",
        "1/2 tsp salt"
      ];
      instructions = [
        {
          step: 1,
          title: "Prep and Thread the Skewers",
          instruction: "Soak wooden skewers in water for 30 minutes. Thread the thin beef or chicken strips onto the skewers in a zigzag pattern.",
          note: "Soaking the skewers prevents them from catching fire under the grill."
        },
        {
          step: 2,
          title: "Apply the Dry Rub",
          instruction: "Brush the threaded meat lightly with olive oil, then dredge generously in the suya spice rub until completely coated.",
          note: "Press the spice mixture into the meat so it sticks securely."
        },
        {
          step: 3,
          title: "Grill to Perfection",
          instruction: "Preheat grill or oven to 400°F (200°C). Place skewers on a foil-lined baking sheet and grill for 12-15 minutes, flipping once, until slightly charred.",
          note: "Serve hot, garnished with fresh raw onions and cucumber slices to cool the heat."
        }
      ];
    } else {
      // General Healthy Recipe
      ingredients["Main Ingredients"] = [
        `500g of fresh ${query} base`,
        "1 red onion, sliced",
        "2 fresh tomatoes, chopped",
        "Fresh green vegetables"
      ];
      ingredients["Healthy Accents"] = [
        "1 tbsp healthy oil (canola or olive oil)",
        "1 tsp ginger-garlic paste",
        "1 pinch of salt",
        "Low-sodium seasoning cubes"
      ];
      instructions = [
        {
          step: 1,
          title: "Prep Work",
          instruction: `Thoroughly wash and clean all ingredients for your ${query}. Dice vegetables and chop meats into bite-sized portions.`,
          note: "Fresh ingredients are key to clean eating."
        },
        {
          step: 2,
          title: "Sauté Aromatics",
          instruction: "Heat oil in a pan. Sauté onions, garlic, and ginger paste until aromatic and translucent.",
          note: "Cooking aromatics slowly unlocks deep flavors naturally without excess sodium."
        },
        {
          step: 3,
          title: "Cook and Simmer",
          instruction: `Add the remaining main ingredients, cover the pan, and simmer on low-medium heat for 20 minutes until thoroughly cooked.`,
          note: `Serve warm and enjoy your healthy ${query}!`
        }
      ];
    }

    return {
      title,
      description,
      prepTime,
      cookTime,
      totalTime,
      serves,
      diet,
      badge,
      image: img,
      ingredients,
      instructions
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
});
