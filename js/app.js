document.addEventListener('DOMContentLoaded', ()=>{
  const addButtons = document.querySelectorAll('.add');
  const cartCount = document.getElementById('cart-count');
  const cartItemsEl = document.getElementById('cart-items');
  const cartTotalEl = document.getElementById('cart-total');
  const cartBtn = document.getElementById('cart-btn');
  const cartEl = document.getElementById('cart');

  let cart = JSON.parse(localStorage.getItem('cart') || '[]');

  function format(n){return Number(n).toFixed(2)}

  function renderCart(){
    cartCount.textContent = cart.reduce((s,i)=>s+i.qty,0);
    if(cart.length===0){cartItemsEl.textContent='Empty';cartTotalEl.textContent='0.00';return}
    cartItemsEl.innerHTML='';
    cart.forEach(it=>{
      const div = document.createElement('div');
      div.className='cart-item';
      div.innerHTML = `<div>${it.name} x${it.qty}</div><div>$${format(it.price*it.qty)}</div>`;
      cartItemsEl.appendChild(div);
    });
    const total = cart.reduce((s,i)=>s+i.price*i.qty,0);
    cartTotalEl.textContent = format(total);
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  function addToCart(id,name,price){
    const existing = cart.find(i=>i.id===id);
    if(existing){existing.qty+=1}else cart.push({id,name,price,qty:1});
    renderCart();
  }

  addButtons.forEach(btn=>{
    btn.addEventListener('click', e=>{
      const card = e.target.closest('.food-card');
      const id = card.dataset.id;
      const name = card.dataset.name;
      const price = parseFloat(card.dataset.price);
      addToCart(id,name,price);
    })
  })

  cartBtn.addEventListener('click', ()=>{
    cartEl.scrollIntoView({behavior:'smooth'});
  })

  // Checkout button
  const checkoutBtn = document.getElementById('checkout');
  if(checkoutBtn){
    checkoutBtn.addEventListener('click', ()=>{
      if(cart.length === 0){
        alert('Your cart is empty!');
        return;
      }
      window.location.href = 'checkout.html';
    })
  }

  // initial render
  renderCart();
});
