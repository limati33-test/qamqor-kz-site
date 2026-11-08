const tr={
ru:{top:'Тепло, которое хочется дарить · QAMQOR',navCatalog:'Каталог',navAbout:'О бренде',navContact:'Контакты',cart:'Корзина',heroEyebrow:'Коллекция шарфов',heroTitle:'Тепло<br>в каждом<br>прикосновении.',heroText:'Мягкие однотонные шарфы в лаконичных оттенках. Выбери свой цвет и добавь любимые шарфы в корзину.',heroButton:'Выбрать шарф',catalogEyebrow:'Найди свой оттенок',catalogTitle:'Карточки товаров',catalogText:'Настоящие фотографии шарфов QAMQOR. Выберите любимый оттенок.',all:'Все',light:'Светлые',dark:'Тёмные',bright:'Яркие',aboutEyebrow:'О бренде',aboutTitle:'Простота.<br>Мягкость. Забота.',aboutText:'QAMQOR — шарфы, которые становятся частью повседневного образа и тёплым подарком близким. Красота живёт в приятной фактуре, спокойных оттенках и внимании к деталям.',aboutButton:'Смотреть коллекцию',footerContact:'Вопросы и заказы',photo:'Фото скоро',views:['Спереди','Сбоку','Детали','На модели'],viewSoon:'Фото этого ракурса добавим позже',desc:'Однотонный шарф',price:'14 990 ₸',note:'Наличие и детали — по запросу',details:'Подробнее',add:'В корзину +',whatsapp:'Заказать в WhatsApp',added:'добавлен в корзину',empty:'Корзина пока пуста',modal:'Фотография товара. Состав и размер уточняйте в WhatsApp.',meta:'Цена: 14 990 ₸ · Состав и размер: уточняются',order:'Здравствуйте! Меня интересуют шарфы QAMQOR:'},
kk:{top:'Жақындарыңызға жылулық сыйлаңыз · QAMQOR',navCatalog:'Каталог',navAbout:'Бренд туралы',navContact:'Байланыс',cart:'Себет',heroEyebrow:'Орамалдар топтамасы',heroTitle:'Әрбір<br>жанасудағы<br>жылулық.',heroText:'Күнделікті киім үлгіңізге жарасатын жұмсақ орамалдар. Әр түстің өз әсемдігі бар. Өзіңізге ұнағанын таңдап, жақындарыңызға жылулық сыйлаңыз.',heroButton:'Орамалды таңдау',catalogEyebrow:'QAMQOR топтамасы',catalogTitle:'Өзіңізге ұнаған орамалды таңдаңыз',catalogText:'Түстерді қарап, өзіңізге ұнағанын таңдаңыз.',all:'Барлығы',light:'Ашық түстер',dark:'Қою түстер',bright:'Қанық түстер',aboutEyebrow:'Бренд туралы',aboutTitle:'Қарапайымдық.<br>Жұмсақтық. Қамқорлық.',aboutText:'QAMQOR — күнделікті киім үлгіңізді толықтырып, жақындарыңызға жылы сыйлық бола алатын орамалдар. Әсемдік жағымды матадан, үйлесімді түстерден және әрбір бөлшекке деген ықыластан көрінеді.',aboutButton:'Топтаманы көру',footerContact:'Сұрақтар мен тапсырыстар',photo:'Фото кейін қосылады',views:['Алдынан','Қырынан','Бөлшектері','Модельде'],viewSoon:'Бұл ракурстың фотосын кейін қосамыз',desc:'Бір түсті орамал',price:'14 990 ₸',note:'Қолжетімділігі мен толық ақпаратын WhatsApp арқылы нақтылаңыз',details:'Толығырақ',add:'Себетке қосу +',whatsapp:'WhatsApp арқылы тапсырыс беру',added:'себетке қосылды',empty:'Себет әзірге бос',modal:'Құрамы мен өлшемі туралы ақпаратты WhatsApp арқылы нақтылаңыз.',meta:'Бағасы: 14 990 ₸ · Құрамы мен өлшемі: нақтыланады',order:'Сәлеметсіз бе! QAMQOR орамалдарына тапсырыс бергім келеді:'}};
const UNIT_PRICE=14990;
const money=n=>new Intl.NumberFormat('ru-RU').format(n)+' ₸';
let lang='kk';
const items=[
  ['Чёрный', 'Қара', 'dark', '#171717', 'black.jpg'],
  ['Коричневый', 'Қоңыр', 'dark', '#65432f', 'brown.jpg'],
  ['Бежевый', 'Беж', 'light', '#cbb99d', 'beige.jpg'],
  ['Белый', 'Ақ', 'light', '#f5f3ed', 'white.jpg'],
  ['Красный', 'Қызыл', 'bright', '#b51f2c', 'red.jpg'],
  ['Голубой', 'Көгілдір', 'light', '#a9cbd8', 'sky.jpg'],
  ['Оранжевый', 'Қызғылт сары', 'bright', '#c88a24', 'mustard.jpg'],
  ['Серо-голубой', 'Сұр-көгілдір', 'light', '#7296a7', 'steel.jpg'],
  ['Песочный', 'Құм түсті', 'light', '#d8c59e', 'sand.jpg'],
  ['Тёмно-синий', 'Қою көк', 'dark', '#152344', 'navy.jpg'],
  ['Изумрудный', 'Зүбәржат түсті', 'bright', '#087b70', 'emerald.jpg']
];
const cartKey='qamqor-cart-v2';
let cart={};
try {const saved=JSON.parse(localStorage.getItem(cartKey)||'{}');if(saved&&typeof saved==='object'&&!Array.isArray(saved)){for(const [k,v] of Object.entries(saved)){if(items.some(p=>p[0]===k)&&Number.isInteger(v)&&v>0&&v<=99)cart[k]=v}}}catch(e){}
const nameOf=p=>p[lang==='kk'?1:0];
const photoOf=p=>'images/'+p[4];
function persist(){try{localStorage.setItem(cartKey,JSON.stringify(cart))}catch(e){}updateCount();renderCart()}
function updateCount(){document.getElementById('count').textContent=Object.values(cart).reduce((a,b)=>a+b,0)}
function setLang(l){lang=l;document.documentElement.lang=l==='kk'?'kk':'ru';document.title=l==='kk'?'QAMQOR — орамалдар':'QAMQOR — шарфы';document.querySelector('.cart-close').setAttribute('aria-label',l==='kk'?'Жабу':'Закрыть');document.querySelector('.close').setAttribute('aria-label',l==='kk'?'Жабу':'Закрыть');document.querySelectorAll('[data-t]').forEach(e=>e.innerHTML=tr[l][e.dataset.t]);document.getElementById('ru').classList.toggle('active',l==='ru');document.getElementById('kk').classList.toggle('active',l==='kk');render(document.querySelector('.filter.active').dataset.group);if(document.getElementById('modal').style.display==='flex'&&currentGalleryProduct){details(currentGalleryProduct[0])}renderCart()}
function render(g='all'){let list=g==='all'?items:items.filter(x=>x[2]===g);document.getElementById('products').innerHTML=list.map(p=>{let n=nameOf(p);return `<article class="product"><div class="product-photo" onclick="details('${p[0]}')" role="button" tabindex="0" onkeydown="if(event.key==='Enter')details('${p[0]}')"><img class="product-img" src="${photoOf(p)}" alt="QAMQOR — ${n}" loading="lazy"><span class="tag">QAMQOR</span></div><div class="product-info"><div class="product-title"><h3>${n}</h3><span class="dot" style="background:${p[3]}"></span></div><p class="desc">${tr[lang].desc}</p><div class="price">${tr[lang].price}</div><div class="actions"><button class="add" onclick="add('${p[0]}')">${tr[lang].add}</button></div></div></article>`}).join('')}
function filter(g,b){document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));b.classList.add('active');render(g)}
function add(n){if(!items.some(p=>p[0]===n))return;cart[n]=Math.min(99,(cart[n]||0)+1);persist();notify(nameOf(items.find(p=>p[0]===n))+' — '+tr[lang].added)}
function quantity(n,d){if(!cart[n])return;cart[n]=Math.min(99,cart[n]+d);if(cart[n]<=0)delete cart[n];persist()}
function removeItem(n){delete cart[n];persist()}
function showCart(){document.getElementById('cartOverlay').classList.add('open');document.getElementById('cartPanel').classList.add('open');document.body.classList.add('cart-open');renderCart()}
function closeCart(){document.getElementById('cartOverlay').classList.remove('open');document.getElementById('cartPanel').classList.remove('open');document.body.classList.remove('cart-open')}
function renderCart(){const list=Object.entries(cart);const kaz=lang==='kk';document.getElementById('cartTitle').textContent=tr[lang].cart;document.getElementById('cartItems').innerHTML=list.length?list.map(([n,qty])=>{const p=items.find(p=>p[0]===n);return `<div class="cart-item"><img src="${photoOf(p)}" alt="${nameOf(p)}"><div class="cart-item-info"><h3>${nameOf(p)}</h3><small>${money(UNIT_PRICE)} × ${qty} = ${money(UNIT_PRICE*qty)}</small><div class="qty"><button onclick="quantity('${n}',-1)" aria-label="${kaz?'Санын азайту':'Уменьшить количество'}">−</button><span>${qty}</span><button onclick="quantity('${n}',1)" aria-label="${kaz?'Санын арттыру':'Увеличить количество'}">+</button></div><button class="remove" onclick="removeItem('${n}')">${kaz?'Өшіру':'Удалить'}</button></div></div>`}).join(''):`<div class="cart-empty">${kaz?'Себет әзірге бос. Топтамадан орамал таңдаңыз.':'Корзина пока пуста. Выберите шарф из коллекции.'}</div>`;const total=Object.values(cart).reduce((a,b)=>a+b,0);document.getElementById('cartSummary').textContent=kaz?`Барлығы: ${total} дана · ${money(total*UNIT_PRICE)}`:`Всего: ${total} шт. · ${money(total*UNIT_PRICE)}`;document.getElementById('cartHelp').textContent=kaz?'Тапсырысты растау үшін WhatsApp ашылады.':'Для подтверждения заказа откроется WhatsApp.';const checkout=document.getElementById('cartCheckout');checkout.disabled=total===0;checkout.textContent=kaz?'Тапсырысты рәсімдеу':'Оформить заказ'}
function checkoutWhatsApp(){
 const selected=Object.entries(cart).filter(([id,qty])=>qty>0&&items.some(p=>p[0]===id));
 if(!selected.length)return;
 const kaz=lang==='kk';
 const totalQty=selected.reduce((sum,[id,qty])=>sum+qty,0);
 const lines=selected.map(([id,qty],i)=>{
  const product=items.find(p=>p[0]===id);
  return `${i+1}. ${nameOf(product)} — ${qty} ${kaz?'дана':'шт.'} × ${money(UNIT_PRICE)} = ${money(qty*UNIT_PRICE)}`;
 });
 const message=[kaz?'Сәлеметсіз бе! QAMQOR тапсырысымды рәсімдегім келеді:':'Здравствуйте! Хочу оформить заказ QAMQOR:', '', ...lines, '', kaz?`Барлығы: ${totalQty} дана`:`Всего: ${totalQty} шт.`, kaz?`Жалпы сома: ${money(totalQty*UNIT_PRICE)}`:`Итого: ${money(totalQty*UNIT_PRICE)}`].join('\n');
 const url='https://wa.me/77067408022?text='+encodeURIComponent(message);
 // Открываем WhatsApp ровно один раз в новой вкладке.
 // Раньше window.open с 'noopener' всегда возвращал null, из-за этого срабатывал запасной
 // переход location.href и открывался второй дубликат (api.whatsapp.com).
 const link=document.createElement('a');
 link.href=url;
 link.target='_blank';
 link.rel='noopener noreferrer';
 document.body.appendChild(link);
 link.click();
 link.remove();
}
let currentGalleryProduct=null,galleryIndex=0;
function drawGallery(){const p=currentGalleryProduct;if(!p)return;const img=document.getElementById('galleryImage');img.src=photoOf(p);img.alt='QAMQOR — '+nameOf(p);document.getElementById('galleryThumbs').innerHTML=`<button class="gallery-thumb active" type="button">${lang==='kk'?'Тауар фотосы':'Фото товара'}</button>`;document.querySelectorAll('.gallery-arrow').forEach(e=>e.style.display='none')}
function selectView(i){galleryIndex=0;drawGallery()}
function changeView(d){drawGallery()}
function details(n){currentGalleryProduct=items.find(x=>x[0]===n);if(!currentGalleryProduct)return;document.getElementById('modalTitle').textContent=nameOf(currentGalleryProduct);document.getElementById('modalText').textContent=tr[lang].modal;document.getElementById('modalMeta').textContent=tr[lang].price;document.getElementById('modalAdd').textContent=tr[lang].add;drawGallery();document.getElementById('modal').style.display='flex'}
function closeModal(){document.getElementById('modal').style.display='none'}
function notify(s){let e=document.getElementById('toast');e.textContent=s;e.style.display='block';clearTimeout(window.tm);window.tm=setTimeout(()=>e.style.display='none',3000)}
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeCart();closeModal()}});
updateCount();setLang('kk');

/* Шапка: скрывается при прокрутке вниз, возвращается при прокрутке вверх */
(function(){
  const header=document.querySelector('header');
  if(!header)return;
  let lastY=window.scrollY,ticking=false;
  function update(){
    const y=window.scrollY,diff=y-lastY;
    if(y<=header.offsetHeight||diff<-4){header.classList.remove('header-hidden')}
    else if(diff>4&&!document.body.classList.contains('cart-open')){header.classList.add('header-hidden')}
    if(Math.abs(diff)>4)lastY=y;
    ticking=false;
  }
  window.addEventListener('scroll',()=>{if(!ticking){ticking=true;requestAnimationFrame(update)}},{passive:true});
})();