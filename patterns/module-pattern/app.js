// Basic structure

(function () {
  // Declare private variables and functions

  return {
    // Declare public variables and functions
  };
})();

// STANDART MODULE PATTERN
const UICtrl = (function () {
  let text = "Hello world";

  const changeText = function () {
    const element = document.querySelector("h1");
    element.textContent = text;
  };

  return {
    callChangeText: function () {
      changeText();
    },
  };
})();

UICtrl.callChangeText();
// UICtrl.changeText(); // can not do that
// UICtrl.text; // can not do that

// REVEALING MODULE PATTERN
const ItemCtrl = (function () {
  let data = [];

  function add(item) {
    data.push(item);
    console.log("Item added");
  }

  function get(id) {
    return data.find((item) => {
      return item.id === id;
    });
  }

  return {
    add: add,
    get: get,
  };
})();

ItemCtrl.add({ id: 1, name: "John" });
ItemCtrl.get(1);
