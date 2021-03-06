
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {
          id: 1,
          user_id: 5,
          title: "Shrimp Scampi",
          source: "Mom",
          type: "Dinner",
          ingredients: [
          "Kosher Salt", 
          "12 Ounces of Linguine", 
          "1 1/4 pounds large shrimp", 
          "1/3 cup extra-virgin olive oil", 
          "5 cloves garlic, minced", 
          "1/4 teaspoon red pepper flakes", 
          "1/3 cup dry white wine", 
          "juice of 1/2 lemon", 
          "4 tablespoons unsalted butter",
          "1/4 cup finely chopped fresh parsley"
        ],
          instructions: [
            {"step": 1, instructions: "Bring a large pot of salted water to a boil. Add the linguine and cook as the label directs. Reserve 1 cup cooking water, then drain."},
            {"step": 2, instructions: "Meanwhile, season the shrimp with salt. Heat the olive oil in a large skillet over medium-high heat. Add the garlic and red pepper flakes and cook until the garlic is just golden, 30 seconds to 1 minute. Add the shrimp and cook, stirring occasionally, until pink and just cooked through, 1 to 2 minutes per side. Remove the shrimp to a plate. Add the wine and lemon juice to the skillet and simmer until slightly reduced, 2 minutes."},
            {"step": 3, instructions: "Return the shrimp and any juices from the plate to the skillet along with the linguine, butter and 1/2 cup of the reserved cooking water. Continue to cook, tossing, until the butter is melted and the shrimp is hot, about 2 minutes, adding more of the reserved cooking water as needed. Season with salt; stir in the parsley. Serve with lemon wedges."},
          ],
        },
          {
            id: 2,
            user_id: 5,
            title: "Gradmas Famous Beef Stew",
            source: "Grandma",
            type: "Dinner",
            ingredients: [
            "4 sprigs flat-leaf parsley", 
            "4 sprigs thyme", 
            "1 sprig rosemary", 
            "2 fresh bay leaves", 
            "2 tablespoons olive oil", 
            "3 pounds beef chuck roast, cut into 2-inch pieces", 
            "1 large onion, chopped", 
            "5 cloves garlic, chopped", 
            "7 medium carrots (about 12 ounces), peeled, cut diagonally into 1-inch pieces",
            "3 large stalks celery, cut diagonally into 1-inch pieces",
            "1/2 cup dry red wine", 
            "2 tablespoons all-purpose flour", 
            "4 cups low-sodium chicken broth", 
            "1 1/2 pounds small red potatoes, halved", 
            "One 28-ounce can diced tomatoes", 
            "Kosher salt and freshly ground black pepper", 
            "Chopped flat-leaf parsley, for serving", 
            "7 medium carrots (about 12 ounces), peeled, cut diagonally into 1-inch pieces",
            "3 large stalks celery, cut diagonally into 1-inch pieces"
          ],
            instructions: [
              {"step": 1, instructions: "Arrange a rack in the lower third of the oven and preheat to 275 degrees F. Tie the parsley, thyme, rosemary and bay leaves together with kitchen twine."},
              {"step": 2, instructions: "Heat the oil in a large Dutch oven or other heavy pot over medium-high heat. Working in batches, cook the beef in a single layer spaced about an inch apart, turning a few times, until the pieces are browned on at least three sides, 8 to 10 minutes per batch. As the beef finishes browning, transfer to a large plate."},
              {"step": 3, instructions: "Reduce the heat to medium. Add the onion and garlic to the pot and cook, stirring occasionally, until the onions are tender and beginning to brown, about 6 minutes. Add the carrots and celery and continue to cook until they are brightly colored and fragrant, about 4 minutes. Stir in the wine, scraping up any browned bits on the bottom of the pot, and cook until it evaporates, about 4 minutes. Sprinkle the vegetables with the flour, stir to evenly coat them and cook for 1 minute. Add the broth, potatoes, tomatoes and the reserved beef with any accumulated juices. Season with 3 tablespoons salt and 1 teaspoon pepper. Add the herb bundle and bring the stew to a simmer."},
              {"step": 4, instructions: "Cover the pot and then transfer to the oven. Bake until the beef is tender but still holds its shape, 1 1/2 to 2 hours. Let the stew cool for 30 minutes before serving. Discard the herb bundle and serve topped with chopped parsley."},
            ],
          },
          {
            id: 3,
            user_id: 5,
            title: "Breakfast Casserole",
            source: "Auntie Ann",
            type: "Breakfast",
            ingredients: [
            "20 ounces refrigerated shredded hash browns", 
            "1/4 cup butter", 
            "salt", 
            "pepper", 
            "12 large eggs", 
            "1 1/2 cups half and half", 
            "1 cup sharp cheddar cheese", 
            "1 cup shredded swiss cheese", 
            "8 ounces diced ham",
            "1/3 cup green onions",
            "2 1/2 tablespoons chopped fresh parsley"
          ],
            instructions: [
              {"step": 1, instructions: "Heat oven, prepare baking dish: Preheat oven to 350 degrees. Spray a 13 by 9-inch baking dish with non-stick cooking spray."},
              {"step": 2, instructions: "Melt butter in a large 12-inch non-stick skillet over medium high heat. Spread hash browns into an even layer in pan. Let cook until golden brown on bottom about 6 – 8 minutes, then turn potatoes and continue to cook 3 minutes longer."},
              {"step": 3, instructions: "Pour hash browns into prepared baking dish, set aside."},
              {"step": 4, instructions: "Add eggs to a large mixing bowl and break yolks and stir together with a fork until blended."},
              {"step": 5, instructions: "Stir in remaining ingredients: Then stir in half and half, cheddar, Swiss, ham, green onions, parsley and season with salt and pepper to taste."},
              {"step": 6, instructions: "Pour liquid mixture over hash browns: Pour evenly over hash brown layer in baking dish then spread out with a spatula to even out top as needed."},
              {"step": 7, instructions: "Bake in preheated oven until center is just set, about 40 – 50 minutes. Let cool about 5 minutes before slicing and serving."},
            ],
          },
          {
            id: 4,
            user_id: 5,
            title: "Perfect Banana Pudding",
            source: "Grandma",
            ingredients: [
            " 1 1/3 cups whole milk", 
            "1 package instant vanilla pudding mix", 
            "1 sprig rosemary", 
            "1 can sweetened condensed milk", 
            "3 cups heavy cream", 
            "1 tablespoon pure vanilla extract", 
            "1 box vanilla wafer cookies", 
            "4 bananas, sliced into coins ", 
            "2 tsp. granulated sugar",
          ],
            instructions: [
              {"step": 1, instructions: "In a large mixing bowl, combine milk, vanilla pudding mix and sweetened condensed milk. Whisk thoroughly, breaking up any lumps, and refrigerate for at least 5 minutes, or until set."},
              {"step": 2, instructions: "In another large bowl, combine heavy cream and vanilla. Beat until stiff peaks form, 2 to 3 minutes. Set aside half of the mixture for topping the dish. Fold remaining half into the pudding mixture."},
              {"step": 3, instructions: "Cover the bottom of a 3-quart trifle dish with vanilla wafers. Top with one-third of the pudding mixture. Cover with another layer of the wafer cookies—you may want to also stand some cookies up vertically, so you see the full circle along the edge of the trifle dish. Top with an even layer of banana slices. Continue layering the pudding, wafer cookies and banana slices until you reach the top, ending with a final layer of banana pudding."},
              {"step": 4, instructions: "Refrigerate for at least 3 hours, or up to overnight."},
              {"step": 4, instructions: "Sweeten the remaining whipped cream: Add sugar to whipped cream, stirring to combine. Just before serving, dollop on top of the banana pudding, then sprinkle crumbled wafer cookies on top."},
            ],
          },
      ]);
    });
};
