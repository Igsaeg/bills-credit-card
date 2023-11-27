let money = 117200000000
function add(t, i) {
    const type = [-1, 1];
    let amt = parseFloat(document.getElementById('inp' + i).value) || 0;
    money += (t == 0) ? (amt == 0) ? 0 : items[i].price : -items[i].price;
    amt += type[t];
    if (amt < 0) { amt = 0 }
    if (money < 0) {
        money += items[i].price
        amt--;
    }
    const sell = document.querySelectorAll('button:nth-child(1)');
    sell[i].style.backgroundColor = (amt == 0) ? `#F0F0F0` : `red`;
    sell[i].style.color = (amt == 0) ? `#333` : `#F0F0F0`;
    document.getElementById('inp' + i).value = amt;
    document.getElementById('money').innerHTML = `$${money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
    const buy = document.getElementsByClassName('buyBtn');
    for (let i = 0; i < items.length; i++) {
        document.querySelectorAll('button:nth-child(3)')[i].style.backgroundColor = (items[i].price <= money) ? `#00CE52` : `#F0F0F0`;
    }
}
window.onload = function() {
    for (let i = 0; i < items.length; i++) {
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `
            <img src="assets/items/${items[i].name}.png" alt="${items[i].name}" height="120">
            <p class="name">${items[i].name}</p>
            <p class="price">$${items[i].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
            <div class="controls">
                <button onclick="add(0, ${i})">Sell</button>
                <input type="number" id="inp${i}" placeholder="0" tabindex="-1">
                <button onclick="add(1, ${i})">Buy</button>
            </div>
        `;
        itemDiv.classList.add('item');
        document.getElementById('items').appendChild(itemDiv);
    }
}