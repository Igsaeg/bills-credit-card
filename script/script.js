let money = 117200000000
function add(t, i) {
    const type = [-1, 1];
    let amt = parseFloat(document.getElementById('inp' + i).value) || 0;
    amt += type[t];
    money += (t == 0) ? (amt < 0) ? 0: items[i - 1].price : -items[i - 1].price;
    document.getElementById('inp' + i).value = (amt < 0) ? 0 : amt;
    document.getElementById('money').innerHTML = `$${money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
}
window.onload = function() {
    for (let i = 0; i < items.length; i++) {
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `
            <img src="assets/items/item${i + 1}.png" alt="${items[i].name}" height="120">
            <p class="name">${items[i].name}</p>
            <p class="price">$${items[i].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
            <div class="controls">
                <button onclick="add(0, ${i + 1})">Sell</button>
                <input type="number" id="inp${i + 1}" placeholder="0">
                <button onclick="add(1, ${i + 1})">Buy</button>
            </div>
        `;
        itemDiv.classList.add('item');
        document.getElementById('items').appendChild(itemDiv);
    }
}