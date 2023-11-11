"use strict";

const basketCountEl = document.querySelector('.cartIconWrap span');
const basketTotalvalueEl = document.querySelector('.basketTotalValue');
const basketTotalEl = document.querySelector('.basketTotal');
const basketEL = document.querySelector('.basket');

document.querySelector('.cartIconWrap').addEventListener('click', () =>
	basketEL.classList.toggle('hidden'));

const basket = {};

document.querySelector('.featuredItems').addEventListener('click', event => {
	if (!event.target.closest(".addToCard")) {
		return;
	}
	const featuredItemEL = event.target.closest('.featuredItem');
	const id = +featuredItemEL.dataset.id;
	const name = featuredItemEL.dataset.name;
	const price = +featuredItemEL.dataset.price;
	addToCart(id, name, price);
});

function addToCart(id, name, price) {
	if (!(id in basket)) {
		basket[id] = { id, name, price, count: 0 };
	}
	basket[id].count++;
	basketCountEl.textContent = getTotalBasketCount().toString();
	basketTotalvalueEl.textContent = getTotalBasketPrice().toFixed(2);
	renderProductInBasket(id);
};

function getTotalBasketCount() {
	return Object.values(basket).reduce((acc, product) => acc + product.count, 0);
}

function getTotalBasketPrice() {
	return Object.values(basket).reduce((acc, product) =>
		acc + product.count * product.price, 0);
}

function renderProductInBasket(id) {
	const basketRowEl =
		basketEL.querySelector(`.basketRow[data-productId = "${id}"]`);
	if (!basketRowEl) {
		renderNewProductInBasket(id);
		return;
	};
	basketRowEl.querySelector('.productCount').textContent = basket[id].count;
	basketRowEl.querySelector('.productTotalRow').textContent = basket[id].count * basket[id].price;
}

function renderNewProductInBasket(productId) {
	const productRow = `
	<div class="basketRow" data-productId="${productId}" >
			<div>${basket[productId].name}</div>
		<div>
			<span class="productCount">${basket[productId].count}</span> шт.
		</div>
		<div>$${basket[productId].price}</div>
		<div>
			$<span class-"productTotalRow">${(basket[productId].price * basket[productId].count.toFixed(2))}
		</div>
	</div >
		`;
	basketTotalEl.insertAdjacentHTML('beforebegin', productRow);
};