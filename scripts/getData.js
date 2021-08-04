/** @format */

async function searchItems(url, parent) {
  mainContent.innerHTML = null;

  let res = await fetch(url);
  let data = await res.json();

  let { meals } = data;

  let { strMeal, strInstructions, strArea, strMealThumb, strSource } = meals[0];
  console.log(strMealThumb);
  mainContent.style.display = "block";
  let div = document.createElement("div");
  div.setAttribute("class", "itemsDiv");
  let divFlex1 = document.createElement("div");
  divFlex1.setAttribute("class", "divFlex1");
  let img = document.createElement("img");
  img.src = strMealThumb;
  divFlex1.append(img);

  let divFlex2 = document.createElement("div");
  divFlex2.setAttribute("class", "divFlex2");
  let h2 = document.createElement("h2");
  h2.innerText = `${strMeal} - ${strArea} Food`;
  let h3 = document.createElement("h3");
  h3.innerText = `Easy steps to cook ${strMeal}`;
  let p = document.createElement("p");
  p.innerText = strInstructions;
  divFlex2.append(h2, h3, p);

  div.append(divFlex1, divFlex2);
  parent.append(div);
}

export default searchItems;
