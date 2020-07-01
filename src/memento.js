/**
 * Without violating encapsulation, capture and externalize an object's internal
 * state so that the object can be restored to this state later.
 *
 * In JS world: Memento is about save and restore functions. If you want a
 * multiple checkpoints, save memento’s to the list.
 */

let textbox = {};
let memento = null;

function initTextbox() {
  textbox = { ...textbox, ...{ text: "", color: "BLACK", width: 100 } };
}

function typeText(text) {
  textbox = { ...textbox, text: textbox.text + text };
}

function save() {
  memento = textbox.text;
}

function restore() {
  textbox = { ...textbox, text: memento };
}

function crash() {
  textbox = {};
}

initTextbox();
typeText("'Like A Virgin' ");
typeText("it's not about this sensitive girl ");
save();
typeText("who meets nice fella");
crash();
initTextbox();
restore();
console.log("Textbox text after the restoration:", textbox.text);
