// footer 
class MyFooter extends HTMLElement {
 connectedCallback(){
  this.innerHTML = `
  <footer>
 &copy;2021 Buy&Cook Local. All Rights Reserved
  </footer>
  `
 }
}

customElements.define('my-footer', MyFooter);

// navigation bar 
class MyHeader extends HTMLElement {
 connectedCallback(){
  this.innerHTML = `
<!-- navbar -->
 <nav class="navbar fixed-top navbar-expand-lg navbar-fixed-top navbar-light" style="background-color: #ffffff;">
  <div class="container">
   <a href="test.html" class="navbar-brand" style="color:  var(--clr-gold)">Buy&Cook Local</a>
   <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
    <span class="navbar-toggler-icon"></span>
   </button>

   <div class="collapse navbar-collapse" id="navmenu">
    <ul class="navbar-nav ms-auto">
     <li class="nav-item">
      <a href=index.html class="nav-link">Offers</a>
     </li>
     <li class="nav-item">
      <a href="about.html" class="nav-link">About Us</a>
     </li>
     <li class="nav-item">
      <a href="farmers.html" class="nav-link">Farmers</a>
     </li>
     <li class="nav-item">
      <a href="recipe.html" class="nav-link">Recipes</a>
     </li>
     <li class="nav-item">
      <a href="events.html" class="nav-link">Events</a>
     </li>
     <li class="nav-item">
      <a href="box.html" class="nav-link">Boxes</a>
     </li>

      <li class="nav-item dropdown">
       <a href="#" class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Log in
       </a>
       <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
 <form class="px-2 py-3">
  <div class="form-group">
   <label for="exampleDropdownFormEmail1">Email address</label>
   <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com">
  </div>
  <div class="form-group">
   <label for="exampleDropdownFormPassword1">Password</label>
   <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password">
  </div>
  <div class="form-group">
   <div class="form-check">
    <input type="checkbox" class="form-check-input" id="dropdownCheck">
    <label class="form-check-label" for="dropdownCheck">
     Remember me
    </label>
   </div>
  </div>
  <button type="submit" class="btn btn-primary">Sign in</button>
 </form>
 <div class="dropdown-divider"></div>
 <a class="dropdown-item" href="#">New around here? Sign up</a>
 <a class="dropdown-item" href="#">Forgot password?</a>

       </ul>
   </div>
   <form class="d-flex">
    <input type="text" class="form-control me-1">
    <button type="submit" class="btn btn-outline-primary">Search</button>
   </form>
  </div>
 </nav>
  `
}
}
customElements.define('my-header', MyHeader);


// var title = document.getElementById('same-content');

// title.setAttribute("style", "text-align: center");


// leave a comment 
class MyComment extends HTMLElement {
 connectedCallback(){
  this.innerHTML = `
   <section class="leave-comment">
    <div class="container-comment">
     <h2 class="title">Leave a Comment</h2>
     <form>


<!-- just trying -->

<div class="new-class">
 <input id="message" class="input-text" type="text" name="">
 <label for="message" class="label">Add Your Comment</label>
</div>



      <!-- <textarea class="textarea-comment"placeholder="Add Your Comment"></textarea> -->
      <div class="btn-comment">
       <input type="submit" value="Comment">
       <button id='clear'>Cancel</button>
      </div>
     </form>
    </div>
  </section>
  `
 }
}
customElements.define('my-comment', MyComment);