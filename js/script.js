const menuData = {
  "products": [
    {
      "name": "Assorted Muffins",
      "type": "bakery",
      "price": "$1.75",
      "img": "muffins.jpg"
      },
    {
      "name": "Fresh Baked Brownie",
      "type": "bakery",
      "price": "$2.00",
      "img": "brownies.jpg"
      },
    {
      "name": "Fresh Ground Coffee",
      "type": "beverage",
      "price": "$2.25"
      },
    {
      "name": "Assorted Scones",
      "type": "bakery",
      "price": "$2.50",
      "img": "scones.jpg"
      },
    {
      "name": "Espresso",
      "type": "beverage",
      "price": "$2.75",
      "img": "espresso.jpg"
      },
    {
      "name": "Americano",
      "type": "beverage",
      "price": "$2.85",
      "img": "americano.jpg"
      },
    {
      "name": "Cappuccino",
      "type": "beverage",
      "price": "$3.50",
      "img": "cappuccino.jpg"
      },
    {
      "name": "Latte",
      "type": "beverage",
      "price": "$3.50",
      "img": "latte.jpg"
      },
    {
      "name": "Moonflowers T-shirt",
      "type": "other",
      "price": "$12.00"
      },
    {
      "name": "Mocha",
      "type": "beverage",
      "price": "$3.75",
      "img": "mocha.jpg"
      },
    {
      "name": "Breve",
      "type": "beverage",
      "price": "$3.75",
      "img": "breve.jpg"
      },
    {
      "name": "Slice of Chocolate Cake",
      "type": "bakery",
      "price": "$3.75",
      "img": "choc-cake.jpg"
      },
    {
      "name": "Slice of Strawberry Cream Cake",
      "type": "bakery",
      "price": "$3.75",
      "img": "white-cake.jpg"
      }
    ]
};

let locationsData = {
  "locations": [
    {
      "id": "gridania",
      "name": "Gridania Avenue",
      "hours": [
        {
          "day": "Monday - Thursday",
          "time": "6AM - 8PM"
        },
        {
          "day": "Friday",
          "time": "6AM - 10PM"
        },
        {
          "day": "Saturday - Sunday",
          "time": "8AM - 8PM"
        }
      ],
      "staff": [
        {
          "id": "leilahMoon",
          "name": "Leilah Moonflower",
          "img": "Leilah.png",
          "text": "The Moonflower sisters, Leilah and Khisa, are the proud founders of Moonflower's Coffee. After their adventuring days came to an end, they decided there was nothing more relaxing than sitting down to a slice of cake with a fine cup of coffee. Khisa manages the Limsa store and is also responsible for all the fine baked goods."
        },
        {
          "id": "hastan",
          "name": "Hastan",
          "img": "Hastan.png",
          "text": "Hastan is our bean buyer and a pro coffee roaster. He has traveled the world to ensure that Moonflower's bean are top notch, environmentally friendly, and fair-trade certified. He's always happy to share pictures and stories from his trips and will tell you more about coffee than you ever wanted to know."
        }
      ]
    },
    {
      "id": "limsa",
      "name": "Limsa Lane",
      "hours": [
        {
          "day": "Monday",
          "time": "Closed"
        },
        {
          "day": "Tuesday - Thursday",
          "time": "6AM - 8PM"
        },
        {
          "day": "Friday",
          "time": "6AM - 10PM"
        },
        {
          "day": "Saturday - Sunday",
          "time": "8AM - 10PM"
        }
      ],
      "staff": [
        {
          "id": "khisaMoon",
          "name": "Khisa Moonflower",
          "img": "Khisa.png",
          "text": "The Moonflower sisters, Khisa and Leilah, are the proud founders of Moonflower's Coffee. After their adventuring days came to an end, they decided there was nothing more relaxing than sitting down to a slice of cake with a fine cup of coffee. Khisa manages the Limsa store and is also responsible for all the fine baked goods."
        },
        {
          "id": "noirterel",
          "name": "Noirterel",
          "img": "Noirterel.png",
          "text": "Noirterel is our newest employee and we're happy to welcome him to the team. Noirterel works with Hastan to roast our beans and has been known to help out in the bakery as well. You can thank him for the awesome apricot and cardamom scones that we featured in the spring."
        }
      ]
    }
  ]
}

console.log(menuData);
console.log(locationsData);