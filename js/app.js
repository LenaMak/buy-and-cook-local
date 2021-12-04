const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});
const menu = [
  {
    id: 1,
    title: "potatoes",
    category: "vegetables",
    // price: 15.99,
    img: "./images/potato.jpeg",
    desc: `We are happy to offer you potatoes coming from  Albert Meiner Hof`,
  },
  {
    id: 2,
    title: "apples",
    category: "fruit",
    price: 13.99,
    img: "./images/apples.jpg",
    desc: `Our appples are crispy and sweet, and sour, you can find what suits you best.`,
  },
  {
    id: 3,
    title: "milk",
    category: "dairy",
    price: 6.99,
    img: "./images/milk.jpg",
    desc: `Our farmers offer you fresh milk coming directly from their farms.`,
  },
  {
    id: 4,
    title: "pumpkin",
    category: "vegetables",
    price: 20.99,
    img: "./images/pumpkin.jpeg",
    desc: `It's a pumpkin season. Why not cook something with this delicious vegetable? `,
  },
  {
    id: 5,
    title: "pears",
    category: "fruit",
    price: 22.99,
    img: "./images/pears.jpg",
    desc: `Pears taste great when you just eat them, or you can always bake a cake. `,
  },
  {
    id: 6,
    title: "cheese",
    category: "dairy",
    price: 18.99,
    img: "./images/cheese.jpg",
    desc: `We offer different types of cheese to satisfy any need. Check our offers.`,
  },
  {
    id: 7,
    title: "cauliflower",
    category: "vegetables",
    price: 8.99,
    img: "./images/cauliflower.jpeg",
    desc: `You can still get some regional cauliflower. Hurry up, the season is almost over. `,
  },
  {
    id: 8,
    title: "mushrooms",
    category: "vegetables",
    price: 12.99,
    img: "./images/mushrooms.jpg",
    desc: `You can cook so many dishes with mushrooms, you'll definitely find the best recipe. `,
  },
  {
    id: 9,
    title: "butter",
    category: "dairy",
    price: 16.99,
    img: "./images/butter.jpg",
    desc: `You can use butter to make delicious mashed potatoes or for any other recipe.`,
  },
  {
    id: 10,
    title: "goose",
    category: "meat",
    price: 22.99,
    img: "./images/goose.jpg",
    desc: `This is a special offer. We don't sell goose meat often. Try it now.`,
  },
   {
    id: 11,
    title: "carp",
    category: "fish",
    price: 22.99,
    img: "./images/carp.jpg",
    desc: `Tired of meat? Why not try our current fish offers? We definitely have something to surprise you.`,
  },
     {
    id: 12,
    title: "honey",
    category: "other",
    price: 22.99,
    img: "./images/honey.jpg",
    desc: `Our honey is regional, it comes from a farm which specializes in honey.`,
  },
      {
    id: 13,
    title: "jam",
    category: "other",
    price: 22.99,
    img: "./images/jam.jpg",
    desc: `We have different kinds of jam: made from apples, strawberry and even gooseberry`,
  },
      {
    id: 14,
    title: "kale",
    category: "vegetables",
    price: 22.99,
    img: "./images/kale.jpg",
    desc: `Make a fresh salad with kale, remind yourself of summer greenery.`,
  },
      {
    id: 15,
    title: "garlic",
    category: "vegetables",
    price: 22.99,
    img: "./images/garlic.jpg",
    desc: `Garlic goes in almost every dish, make sure you have enough of it at home.`,
  },
      {
    id: 16,
    title: "lettuce",
    category: "vegetables",
    price: 22.99,
    img: "./images/lettuce.jpg",
    desc: `Didn't know that you could also eat lettuce in late autumn? Yes you can.`,
  },
      {
    id: 17,
    title: "leek",
    category: "vegetables",
    price: 22.99,
    img: "./images/leek.jpg",
    desc: `It is time for an amazing cream soup with leek and potatoes. Nobody can resist.`,
  },
      {
    id: 18,
    title: "radish",
    category: "vegetables",
    price: 22.99,
    img: "./images/radish.jpg",
    desc: `One more reminder of the summer is radish. Eat it now before winter comes.`,
  },
      {
    id: 19,
    title: "brussels sprouts",
    category: "vegetables",
    price: 22.99,
    img: "./images/brussels-sprouts.jpg",
    desc: `Brussels sprouts are coming from the farm nearby and will definitely not disappoint you.`,
  },
      {
    id: 20,
    title: "beetroot",
    category: "vegetables",
    price: 22.99,
    img: "./images/beetroot.jpg",
    desc: `Get some beetroot and make a delicious soup. Even though it does take some time, but it's worth it.`,
  },
      {
    id: 21,
    title: "spinach",
    category: "vegetables",
    price: 22.99,
    img: "./images/spinach.jpg",
    desc: `Spinach is rich in vitamins, and you can never get too many of them. `,
  },
      {
    id: 22,
    title: "savoy cabbage",
    category: "vegetables",
    price: 22.99,
    img: "./images/savoy-cabbage.jpg",
    desc: `Savoy cabbage is a new offer on our platform. Try it and let us know what you think.`,
  },
      {
    id: 23,
    title: "curds",
    category: "dairy",
    price: 22.99,
    img: "./images/curds.jpg",
    desc: `Fancy a cheesecake? Get some curds and cook one. You'll love it.`,
  },
        {
    id: 24,
    title: "chicken",
    category: "meat",
    price: 22.99,
    img: "./images/chicken.jpg",
    desc: `Chicken is great for anyone. Even if you are on a diet, you can still indulge yourself in a piece.`,
  },
        {
    id: 25,
    title: "pork",
    category: "meat",
    price: 22.99,
    img: "./images/pork.jpg",
    desc: `For meat lovers: get some and you can cook so many easy dishes.`,
  },
        {
    id: 26,
    title: "beef",
    category: "meat",
    price: 22.99,
    img: "./images/beef.jpg",
    desc: `This one is probably not for everyone. But it's definitely worth trying.`,
  },
          {
    id: 27,
    title: "char fish",
    category: "fish",
    price: 22.99,
    img: "./images/char.jpeg",
    desc: `A delicatesse you would love to have on your table during these cold winter evenings.`,
  },
          {
    id: 28,
    title: "tench",
    category: "fish",
    price: 22.99,
    img: "./images/schleie.jpeg",
    desc: `Get some fish from our local suppliers and try out new recipes from our website.`,
  },
          {
    id: 29,
    title: "walnuts",
    category: "other",
    price: 22.99,
    img: "./images/walnut.jpg",
    desc: `Walnuts are so rich in fat, but in a good sense. Take care of yourself, eat them smartly.`,
  },
          {
    id: 30,
    title: "apple juice",
    category: "other",
    price: 22.99,
    img: "./images/apple-juice.jpg",
    desc: `Amazing fresh apple juice coming directly from our partner to your table.`,
  },
];
// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}