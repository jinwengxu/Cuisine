import Recipe from './recipe.interface'
import Cuisine from './cuisine.interface'

export const cuisines: Cuisine[] = [
    {
        id: 1,
        type: "chinese",
        description: "Chinese cuisine is an important part of Chinese culture and includes cuisines originating from the diverse regions of China as well as from Overseas Chinese who have settled in other parts of the world.",
        src: "https://cdn.pixabay.com/photo/2018/11/10/00/38/fried-rice-3805769_960_720.jpg",
        recipes: [
            {
                number: 1,
                name: "chow mein",
                meal: "Main Course",
                ingredients: ["Egg noodles", " Chicken breats ", " Vegetable oil", " Soy sauce "],
                steps: ["Cook egg noodles in boiling water for 3-5 mins", " Drain noodles thoroughtly and toss them with oil", " Marinade chicken shreds with soy sauce", " Stir-fry chicken shreds for about 2 mins", " Add noodles and stir-fry with chicken for 3-4 minutes", " Add soy sauce and give the mixture a few final stirs", " Put on a warm platter and serve immediately."]
            },
            {
                number: 2,
                name: "cashew chicken",
                meal: "Main Course",
                ingredients: ["Chicken breats", " Cashew nuts", " Salt", " Vegetable oil", " Light soy sauce", " Shredded spring onion"],
                steps: ["Mix chicken with salt", " Heat the vegetable oil and stir in chicken", " Stir-fry cashew nuts in wok for 1 minute", " Return the chicken to the wok and stir-fry for 2 minutes", " Scatter over the spirng onions and serve immediately."]
            },
            {
                number: 3,
                name: "pineapple fried rice",
                meal: "Main Course",
                ingredients: ["Two beaten eggs", " Fresh pineapple chunks", " Cooked long-grain rice", " Chopped spring onion", " Frozen peas", " Sunflower oil", " Low-salt soy sauce"],
                steps: ["Make a thin omelette", " Cut omelette into ribbons", " Stir-fry onions, rice, peas. Add soy sauce", " Stir through the pineapple and omelette ribbons."]
            },
            {
                number: 4,
                name: "pumpkin pancake",
                meal: "Dessert",
                ingredients: ["Thin pumkin slices", " Sugar"," Sweet Rice flour"],
                steps: ["Prepare pumkin puree", " Add sugar as desired sweetness", " Add sweet rice flour to form a putty-like dough", " Form the cakes as flat disc with 1/2 inch thickness", " Fry the cakes and enjoy."]
            }
        ]
    },
    {
        id: 2,
        type: "indian",
        description: "Indian cuisine consists of a variety of regional and traditional cuisines native to the Indian subcontinent. Given the diversity in soil, climate, culture, ethnic groups, and occupations, these cuisines vary substantially and use locally available spices, herbs, vegetables, and fruits.",
        src: "https://cdn.pixabay.com/photo/2021/02/28/09/38/food-6056720_960_720.jpg",
        recipes: [
            {
                number: 1,
                name: "indian lamb chops",
                meal: "Main Course",
                ingredients: ["Lamb chops", " Kashmiri chilli powder", " Vegetable oil", " Black pepper", " Ginger & garlic paste", " Garam masala and turmeric"],
                steps: ["Put the lamb with marinade ingredients and mix well. Chill for at least 2 hours", " Add the second marinade and rub it into the lamb. Chill for 4 hours", " Barbecue the lamb on a high heat until cooked to medium."]
            },            
            {
                number: 2,
                name: "saag aloo",
                meal: "Main Course",
                ingredients: ["Potato chunks", " Sliced red chilli", " Spinach leaves", " Finely chopped onion", " Black mustard seeds", " Sunflower oil", " Salt"],
                steps: ["Fry onion and stir in potatos chunks and red chilli", " Add mustard seeds, salt and a splash of water, cover, and cook for 8-10 minutes", " Add spinach leaves and let it wilt into the pan", " Take off the heat and serve."]
            },
            {
                number: 3,
                name: "chicken jalfrezi",
                meal: "Main Course",
                ingredients: ["Roughly chopped onion", " Green chilli", " Vegetable oil", " Plum tomatoes", " Spices", " Diced chicken breasts", "Vegetables"],
                steps: ["Marinate chicken breasts with spices", " Make the sauce with onion and chilli. Add water and simmer for around 20 minutes", " Add the tomatoes to the pan and simmer for around 10 minutes", " Fry the marinated chicken and stir continuously", " Add the sauce and simmer for around 10-20 minutes", " Serve with basmati rice or naan bread."]
            },
            {
                number: 4,
                name: "coconut pastries",
                meal: "Dessert",
                ingredients: ["Flour", " Melted and cooled ghee", " Whole milk", " Sugar", " Grated coconut", " Finely chopped almonds", " Raisins"],
                steps: ["Make the filling with milk, almonds and rasins", " Make the pastry dough", " Divide and shape the dough into balls about 20g each", " Roll out each ball to a circle about 10com in diameter", " Fry the gujiyas in batches for 6-8 minutes until the pastry is golden on both sides", " Drain on kitchen paper and leave to cool before serving at room temperature."]
            }
        ]
    },
    {
        id: 3,
        type: "italian",
        description: "Italian cuisine is generally characterized by its simplicity, with many dishes having only two to four main ingredients. Italian cooks rely chiefly on the quality of the ingredients rather than on elaborate preparation.",
        src: "https://cdn.pixabay.com/photo/2021/06/28/14/11/italian-food-6371757_960_720.jpg",
        recipes: [
            {
                number: 1,
                name: "porchetta ragu",
                meal: "Main Course",
                ingredients: ["Olive oil", " Diced pork shoulder", " Pork sausages", " Chopped onion and carrot", " Spices", " Tomato sauce", " Double cream", " Rigatoni pasta"],
                steps: ["Fry the diced pork until browned", " Squeeze the sausagemeat from the skins into the pan and fry. Scoop into the bowl with the diced pork", " Fry the vegetables and spices. Return meat to the pan", " Add tomato sauce and cook over a low heat for 2 hours", " Stir in the cream. Season to taste", "Cook the pasta. Toss with the ragu, and serve with parmesan."]
            },            
            {
                number: 2,
                name: "tomato bruschetta",
                meal: "Apetizer",
                ingredients: ["Finely chopped red onion", " Chopped medium tomatoes", " Finely chopped fresh basil", " Balsamic vinegar", " Olive oil", " Crusty loaf bread"],
                steps: ["Mix the onions, tomatoes, garlic and basil", " Add the balsamic vinegar and oliv oil", " Add salt and pepper to tase. Mix again. Cover and chill for at least an hour", " Slice the gauette loaf diagonally into 12 thick slices and lightly toast them until they are light brown on both sides", " Serve the mixture on the warm slices of bread."]
            },
            {
                number: 3,
                name: "beef stew",
                meal: "Main Course",
                ingredients: ["Sliced onion and garlic clove", " Olive oil", " Sliced beef", " Sliced yellow pepper", " Chopped tomato", " Chopped rosemary", " Pitted olives"],
                steps: ["Cook onion and garlic until softened", " Tip in the beef strips, pepper, tomatoes and rosemary, then bring to the boil", " Simmer for 15 minutes until the meat is cookd through, adding some boiling water if needed", " Stir through the olives and serve with mash or polenta."]
            },
            {
                number: 4,
                name: "minestrone soup",
                meal: "Main Course",
                ingredients: ["Olive oil", " Chopped onion, celery and carrot", "Spices", " Cannellini beans", " Chopped tomatoes", " Small pasta"],
                steps: ["Fry the onion, celery and carrot for 10 minutes", " Tip the beans, chopped tomatoes", " Season to taste. Bring to the simmer and cook for 30 minutes", " Add the pasta and the greens, and cook for a further 10 mins", " Ladle into bowls and scatter with the basil and some parmesan."]
            }
        ]
    }    
];