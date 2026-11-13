const { chromium } = require('C:/Users/carlo/Documents/Codex/2026-10-27/realtime-voice-chat-2/work/ctrlia-bridge/node_modules/playwright');
const path = require('path');
const assert = require('assert');
(async () => {
  const browser = await chromium.launch({headless:true,executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe'});
  const page = await browser.newPage({viewport:{width:390,height:844}});
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto('file:///'+path.join(__dirname,'dist','index.html').replace(/\\/g,'/'),{waitUntil:'domcontentloaded',timeout:60000});
  await page.locator('#nemesis-cart-toggle').waitFor({timeout:30000});
  const cart=page.locator('#nemesis-cart-panel');
  await page.locator('.nfc-order .nemesis-add-control').click();
  assert.match(await cart.locator('.nemesis-cart-total').innerText(),/60,00/);
  await page.locator('.nfc-product .add-nfc').first().click();
  await page.locator('.nfc-product .add-nfc').first().click();
  for(const name of ['Cadastro no Google','Atualização do Google','Biosite personalizado']){
    const section=page.locator('.block').filter({has:page.locator('h2', {hasText:name})}).first();
    await section.locator('.sales-cta').first().click();
  }
  const names=await cart.locator('.nemesis-cart-row').allInnerTexts();
  for(const name of ['Plaquinha NFC','Wi‑Fi na mesa','Cadastro no Google','Atualização do Google','Biosite personalizado']) assert(names.some(x=>x.includes(name)),name+' missing');
  assert.match(await cart.locator('.nemesis-cart-total').innerText(),/660,00/);
  await cart.locator('[data-minus]').first().click();
  assert.match(await cart.locator('.nemesis-cart-total').innerText(),/600,00/);
  const toggle=page.locator('#nemesis-cart-toggle');
  await toggle.hover();const first=await toggle.boundingBox();await page.waitForTimeout(300);const second=await toggle.boundingBox();
  assert(Math.abs(first.x-second.x)<1&&Math.abs(first.y-second.y)<1,'cart trembles on hover');
  assert(!errors.length,'page errors: '+errors.join('; '));
  console.log('PASS: 5 produtos, soma, redução, carrinho estável no hover');
  await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});
