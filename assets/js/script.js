// For Login Purpose
var key = localStorage.getItem("code");

if(key == "secretKey"){

}else{
    window.location.href="login.html";
}
// For Login Purpose //

// Further Added for CART

window.onload = function () {
	//cart box
	const iconShopping = document.querySelector('.iconShopping');
	const cartCloseBtn = document.querySelector('.fa-close');
	const cartBox = document.querySelector('.cartBox');
	iconShopping.addEventListener("click", function () {
		cartBox.classList.add('active');
	});
	cartCloseBtn.addEventListener("click", function () {
		cartBox.classList.remove('active');
	});


	// adding data to localstorage
	const attToCartBtn = document.getElementsByClassName('attToCart');
	let items = [];
	for (let i = 0; i < attToCartBtn.length; i++) {
		attToCartBtn[i].addEventListener("click", function (e) {
			if (typeof (Storage) !== 'undefined') {
				let item = {
					id: i + 1,
					name: e.target.parentElement.children[0].textContent,
					price: e.target.parentElement.children[1].children[0].textContent,
					no: 1
				};
				if (JSON.parse(localStorage.getItem('items')) === null) {
					items.push(item);
					localStorage.setItem("items", JSON.stringify(items));
					window.location.reload();
				} else {
					const localItems = JSON.parse(localStorage.getItem("items"));
					localItems.map(data => {
						if (item.id == data.id) {
							item.no = data.no + 1;
						} else {
							items.push(data);
						}
					});
					items.push(item);
					localStorage.setItem('items', JSON.stringify(items));
					
					window.location.reload();
				}
			} else {
				alert('local storage is not working on your browser');
			}
		});
	}
	// adding data to shopping cart 
	const iconShoppingP = document.querySelector('.iconShopping p');
	let no = 0;
	JSON.parse(localStorage.getItem('items')).map(data => {
		no = no + data.no
			;
	});
	iconShoppingP.innerHTML = no;


	//adding cartbox data in table

	let inTotal = 0;

	const cardBoxTable = cartBox.querySelector('table');
	let tableData = '';
	tableData += '<tr><th>S no.</th><th>Item Name</th><th>Quantity</th><th>item Price</th><th></th></tr>';
	if (JSON.parse(localStorage.getItem('items'))[0] === null) {
		tableData += '<tr><td colspan="5">No items found</td></tr>'
	} else {
		JSON.parse(localStorage.getItem('items')).map(data => {
			tableData += '<tr><td>' + data.id + '</td><td>' + data.name + '</td><td>' + data.no + '</td><td>' + data.price + '$</td><td><a href="#" onclick=Delete(this);>Delete</a></td></tr>';
			inTotal = inTotal + data.no*data.price;
		});
	}
	cardBoxTable.innerHTML = tableData;

	localStorage.setItem("cartTotal",inTotal);

	let itemsBrought = document.getElementById('itemsBrought').innerText;

	localStorage.setItem("itemsBrought", itemsBrought);
}