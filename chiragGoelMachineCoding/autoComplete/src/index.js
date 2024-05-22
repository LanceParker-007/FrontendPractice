import { generateDebounce, getSuggestions } from "./utils.js";

// getSuggestions("ap").then((data) => console.log(data));

const inputBox = document.getElementById("search-input");
const suggestionBox = document.getElementById("suggestions-box");

const handleResetState = () => {
  suggestionBox.classList.remove("suggestions-visible");
};

const handleRenderSuggestionListItems = (list = []) => {
  const suggFrag = document.createDocumentFragment();

  list.forEach((val) => {
    const el = document.createElement("div");
    el.innerHTML = val;
    el.classList.add("dropdown-item");
    el.setAttribute("data-key", val);
    suggFrag.appendChild(el);
  });

  suggestionBox.innerHTML = "";
  suggestionBox.appendChild(suggFrag);
};

const handleSearch = async (keyword) => {
  const result = await getSuggestions(keyword);
  console.log(result);

  // Always check with array length not simply array
  if (result.length) {
    suggestionBox.classList.add("suggestions-visible");
    handleRenderSuggestionListItems(result);
  }
};

// Use single dependency principle
const handleInputChange = (event) => {
  const value = event.target.value;
  console.log(value);
  if (value) handleSearch(value);
  else {
    console.log("here");
    handleResetState();
  }
};

const handleSelect = (event) => {
  const { key } = event.target.dataset;
  console.log(key);
  if (key) {
    inputBox.value = key;
    handleResetState();
  }
};

// IIFE(Immediately invoke function expression)
(() => {
  inputBox.addEventListener("input", generateDebounce(handleInputChange));
  suggestionBox.addEventListener("click", handleSelect);
})();
