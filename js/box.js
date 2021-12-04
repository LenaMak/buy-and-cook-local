const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});
const menu = [
  {
    id: 1,
    title: "#01 Box",
    category: "November",
    price: 14.99,
    img: "./images-recipe/roast-pork.jpeg",
    desc: `Try roast pork served with potato dumplings and braised red cabbage cooked accroding to Mr Baumann's recipe. `,
  },
  {
    id: 2,
    title: "#02 Box",
    category: "November",
    price: 14.99,
    img: "./images-recipe/heaven-and-earth.jpeg",
    desc: `Have you ever heard of "Heaven and Earth"? Not sure what it means? Order our box and cook with us. It comes with home-made backed sausages.`,
  },
  {
    id: 3,
    title: "#03 Box",
    category: "December",
    price: 14.99,
    img: "./images-recipe/apple-strudel.jpg",
    desc: `Order a box and cook a traditional apple strudel with us to surprise your family and friends with its amazing taste.`,
  },
  {
    id: 4,
    title: "#04 Box",
    category: "December",
    price: 14.99,
    img: "./images-recipe/gnocchi.jpg",
    desc: `Everything you need to cook with us potato noodles (gnocchi) with small pork meatballs in tomato sauce.`,
  },
  {
    id: 5,
    title: "Create your own box",
    category: "Yours",
    price: 14.99,
    img: "./images-recipe/create-box.jpg",
    desc: `Choose regional fresh vegetables, fruit, meat, fish, dairy products or some honey from our local farmers. The offer differs depending on the month.`,
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
              <h4 class="price">$${item.price}</h4>
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