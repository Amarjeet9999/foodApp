/** @format */

function navbar() {
  return `<header id="header">
    <h3><a href="index.html">Home</a></h3>
    <div class="icons">
      <h3> <a href="">All</a></h3>
      <h3> <a href="">Login</a></h3>
      <h3> <a href="">Register</a></h3>
    </div>
  </header>`;
}

function searchBar() {
  return `<h1 class="heading">Search your Dish</h1>
  <div class="searchDiv">
    <input type="text" id="search" />
    <div id="searchItems" class="icon">
      <i class="material-icons">search</i>
    </div>
  </div>
  <div class="buttons">
      <button><a href="dayMeal.html">Today Feature</a></button>
      <button><a href="latest.html">Latest Recipe</a></button>
  </div>
  <div id="mainContent"></div>`;
}
function content() {
  return `<div id="mainContent"></div>`;
}
export { navbar, searchBar, content };
