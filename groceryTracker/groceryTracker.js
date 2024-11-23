let item1;
let item2;
let item3;

function calculateTotal() {
item1 = parseFloat(document.getElementById('item-1').value);
item2 = parseFloat(document.getElementById('item-2').value);
item3 = parseFloat(document.getElementById('item-3').value);

let total = item1 + item2 + item3;

document.getElementById('total').innerText = `Your total is \$${total}`;
}
