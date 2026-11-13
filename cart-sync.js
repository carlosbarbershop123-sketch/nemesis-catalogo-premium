(()=>{
  const root=document.querySelector('.v2');
  if(!root)return;
  const cart=new Map();
  const render=()=>{
    const lines=[...cart].filter(([,q])=>q>0).map(([name,q])=>name+' × '+q);
    const summary=lines.length?lines.join(' • '):'Nenhum item selecionado.';
    document.querySelectorAll('.cart-panel-items').forEach(x=>x.textContent=summary);
    const selected=document.querySelector('#v2-selected');
    if(selected)selected.textContent=lines.length?'Carrinho: '+summary:'Nenhum item selecionado.';
  };
  root.querySelectorAll('.choice input[data-item]').forEach(input=>{
    const card=input.closest('.choice');
    if(!card||card.querySelector('.cart-add-control'))return;
    const name=input.dataset.item||card.querySelector('b')?.textContent||'Item';
    const button=document.createElement('button');
    button.type='button';button.className='btn cart-add-control';button.textContent='Adicionar ao carrinho · 0';
    button.onclick=()=>{const q=(cart.get(name)||0)+1;cart.set(name,q);input.checked=true;button.textContent='Adicionado · '+q;render()};
    card.querySelector('div')?.append(button);
  });
  const quantity=root.querySelector('#nfc-quantity'), order=quantity?.closest('.nfc-order');
  if(quantity&&order&&!order.querySelector('.cart-add-control')){
    const button=document.createElement('button');button.type='button';button.className='btn cart-add-control';button.textContent='Adicionar ao carrinho · 0';
    button.onclick=()=>{const q=Math.max(1,Number(quantity.value)||1);quantity.value=q;const check=root.querySelector('#nfc-selected');if(check)check.checked=true;cart.set('Plaquinha NFC + QR Code',q);button.textContent='Adicionado · '+q;render()};order.append(button);
  }
  const finish=document.querySelector('.cart-finish');
  if(finish)finish.onclick=()=>{const lines=[...cart].filter(([,q])=>q>0).map(([name,q])=>'- '+name+' × '+q);if(!lines.length){document.querySelector('.cart-panel')?.classList.add('is-open');return}const phone=(localStorage.getItem('nemesisAdminPhone')||'').replace(/\D/g,'');const message='Olá! Quero finalizar este pedido:\n'+lines.join('\n');if(phone)window.open('https://wa.me/'+(phone.length<=11?'55':'')+phone+'?text='+encodeURIComponent(message),'_blank');else{navigator.clipboard?.writeText(message);document.querySelector('.admin-panel')?.classList.add('is-open')}};
  const style=document.createElement('style');style.textContent='.cart-add-control{display:block;width:100%;margin-top:10px;font-size:13px!important}.choice .cart-add-control{grid-column:1/-1}';document.head.append(style);render();
})();
