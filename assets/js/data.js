/**
 * ============================================================
 *  CREPES BAKU
 *  DATA FILE — Məhsulları, Qaleryanı, FAQ-ı burada dəyişin
 * ============================================================
 */

// ─── MENU ────────────────────────────────────────────────────
const MENU_DATA = [
  {
    id: 'sirin',
    label: { az: '🍫 Şirin Kreplər', en: '🍫 Sweet Crepes', ru: '🍫 Сладкие Крепы' },
    items: [
      {
        id: 's1',
        name: { az: '"Crepes" Bounty® ilə', en: '"Crepes" with Bounty®', ru: '"Crepes" с Bounty®' },
        desc: { az: 'Kokos, qaymaq, qatılaşdırılmış süd', en: 'Coconut, cream, condensed milk', ru: 'Кокос, сливки, сгущённое молоко' },
        price: 5.99,
        img: 'assets/images/bounty.jpg',
        popular: true
      },
      {
        id: 's2',
        name: { az: '"Crepes" Nutella® ilə', en: '"Crepes" with Nutella®', ru: '"Crepes" с Nutella®' },
        desc: { az: 'Nutella', en: 'Nutella', ru: 'Nutella' },
        price: 5.99,
        img: 'assets/images/nutellaile.jpg',
        popular: true
      },
      {
        id: 's3',
        name: { az: '"Crepes" Snickers® ilə', en: '"Crepes" with Snickers®', ru: '"Crepes" со Snickers®' },
        desc: { az: 'Karamel, Araxis, Nutella®', en: 'Caramel, Araxis, Nutella®', ru: 'Карамель, Araxis, Nutella®' },
        price: 5.99,
        img: 'assets/images/snickers.jpg',
        popular: true
      },
      {
        id: 's4',
        name: { az: '"Crepes" Banan Qaymaq ilə', en: '"Crepes" with Banana & Cream', ru: '"Crepes" с Бананом и Сливками' },
        desc: { az: 'Banan, qaymaq, qatılaşdırılmış süd', en: 'Banana, cream, condensed milk', ru: 'Банан, сливки, сгущённое молоко' },
        price: 5.99,
        img: 'assets/images/bananqaymaq2.jpg',
        popular: true
      },
      {
        id: 's5',
        name: { az: '"Crepes" Banan Qaymaq və Nutella® ilə', en: '"Crepes" with Banana, Cream & Nutella®', ru: '"Crepes" с Бананом, Сливками и Nutella®' },
        desc: { az: 'Banan, qaymaq, Nutella®', en: 'Banana, cream, Nutella®', ru: 'Банан, сливки, Nutella®' },
        price: 5.99,
        img: 'assets/images/bananqaymaqnutella.jpg',
        popular: true
      },
      {
        id: 's6',
        name: { az: '"Crepes" Giləmeyvə ilə', en: '"Crepes" with Berries', ru: '"Crepes" с Ягодами' },
        desc: { az: 'Çiyələk', en: 'Strawberry', ru: 'Клубника' },
        price: 5.99,
        img: 'assets/images/gile.jpg',
        popular: false
      },
      {
        id: 's7',
        name: { az: '"Crepes" Ştrudel ilə', en: '"Crepes" Strudel', ru: '"Crepes" Штрудель' },
        desc: { az: 'Alma, darçın, qatılaşdırılmış süd', en: 'Apple, cinnamon, condensed milk', ru: 'Яблоко, корица, сгущённое молоко' },
        price: 5.99,
        img: 'assets/images/crepe-food.jpg',
        popular: false
      },
      {
        id: 'sn1',
        name: { az: 'Crepes Sadə', en: 'Plain Crepe', ru: 'Простой Крепе' },
        desc: { az: 'Sadə krep', en: 'Plain crepe', ru: 'Простой крепе' },
        price: 2.00,
        img: 'assets/images/crep.jpg',
        popular: false
      },
      {
        id: 'sn2',
        name: { az: 'Crepes Duzlu Karamel ilə', en: 'Crepes with Salted Caramel', ru: 'Крепе с Солёной Карамелью' },
        desc: { az: 'Duzlu karamel', en: 'Salted caramel', ru: 'Солёная карамель' },
        price: 5.99,
        img: 'assets/images/bananqaymaq.jpg',
        popular: false
      },
      {
        id: 'sn3',
        name: { az: 'Crepes Fıstıq və Nutella ilə', en: 'Crepes with Peanut & Nutella', ru: 'Крепе с Арахисом и Нутеллой' },
        desc: { az: 'Fıstıq, Nutella', en: 'Peanut, Nutella', ru: 'Арахис, Нутелла' },
        price: 5.99,
        img: 'assets/images/bananqaymaq.jpg',
        popular: false
      },
      {
        id: 'sn4',
        name: { az: 'Crepes Extra Nutella və Banan Qaymaq ilə', en: 'Crepes Extra Nutella & Banana Cream', ru: 'Крепе Экстра Нутелла и Банан со Сливками' },
        desc: { az: 'Extra Nutella, banan, qaymaq', en: 'Extra Nutella, banana, cream', ru: 'Экстра Нутелла, банан, сливки' },
        price: 7.99,
        img: 'assets/images/bananqaymaq.jpg',
        popular: false
      },
      {
        id: 'sn5',
        name: { az: 'Əlavə Nutella (kiçik)', en: 'Extra Nutella (small)', ru: 'Дополнительная Нутелла (маленькая)' },
        desc: { az: 'Əlavə Nutella porsiyon (kiçik)', en: 'Extra Nutella portion (small)', ru: 'Дополнительная порция Нутеллы (маленькая)' },
        price: 1.00,
        img: 'assets/images/nutella.jpg',
        popular: false
      },
      {
        id: 'sn6',
        name: { az: 'Əlavə Nutella (böyük)', en: 'Extra Nutella (large)', ru: 'Дополнительная Нутелла (большая)' },
        desc: { az: 'Əlavə Nutella porsiyon (böyük)', en: 'Extra Nutella portion (large)', ru: 'Дополнительная порция Нутеллы (большая)' },
        price: 2.00,
        img: 'assets/images/nutella.jpg',
        popular: false
      }
    ]
  },
  {
    id: 'doyumlu',
    label: { az: '🧀 Doyumlu Kreplər', en: '🧀 Savory Crepes', ru: '🧀 Сытные Крепы' },
    items: [
      {
        id: 'd1',
        name: { az: '"Crepes" Blindoq', en: '"Crepes" Blindoq', ru: '"Crepes" Блиндок' },
        desc: { az: 'Sosis, holland pendiri', en: 'Sausage, Holland cheese', ru: 'Сосиска, голландский сыр' },
        price: 5.99,
        img: 'assets/images/blindoq.jpg',
        popular: false
      },
      {
        id: 'd2',
        name: { az: '"Crepes" Julyen ilə', en: '"Crepes" with Julienne', ru: '"Crepes" с Жюльеном' },
        desc: { az: 'Qöbələk, qaymaq, holland pendiri', en: 'Mushroom, cream, Holland cheese', ru: 'Грибы, сливки, голландский сыр' },
        price: 11.49,
        img: 'assets/images/julyen.jpg',
        popular: false
      },
      {
        id: 'd3',
        name: { az: '"Crepes" Şirin və Turş Sousda Toyuq ilə', en: '"Crepes" Chicken in Sweet & Sour Sauce', ru: '"Crepes" Курица в Кисло-Сладком Соусе' },
        desc: { az: 'Toyuq, şirin və turş sousu, holland pendiri', en: 'Chicken, sweet & sour sauce, Holland cheese', ru: 'Курица, кисло-сладкий соус, голландский сыр' },
        price: 11.49,
        img: 'assets/images/soustoyuq.jpg',
        popular: false
      },
      {
        id: 'd4',
        name: { az: '"Crepes" Ədviyyatlı Toyuq Tərəvəz ilə', en: '"Crepes" Spicy Chicken & Vegetables', ru: '"Crepes" Пряная Курица с Овощами' },
        desc: { az: 'Toyuq əti, ədviyyatlı sousu, mangal salatı, holland pendiri', en: 'Chicken, spicy sauce, grilled salad, Holland cheese', ru: 'Курица, пряный соус, мангал-салат, голландский сыр' },
        price: 11.49,
        img: 'assets/images/toyuqterevez.jpg',
        popular: false
      },
      {
        id: 'd5',
        name: { az: '"Crepes" Pendir ilə', en: '"Crepes" with Cheese', ru: '"Crepes" с Сыром' },
        desc: { az: 'Holland pendiri', en: 'Holland cheese', ru: 'Голландский сыр' },
        price: 5.99,
        img: 'assets/images/pendir.jpg',
        popular: false
      },
      {
        id: 'dn1',
        name: { az: 'Crepes Ət və Pendir ilə', en: 'Crepes with Meat & Cheese', ru: 'Крепе с Мясом и Сыром' },
        desc: { az: 'Ət, pendir', en: 'Meat, cheese', ru: 'Мясо, сыр' },
        price: 7.99,
        img: 'assets/images/bananqaymaq.jpg',
        popular: false
      }
    ]
  },
  {
    id: 'soyuq',
    label: { az: '🧊 Soyuq İçkilər', en: '🧊 Cold Drinks', ru: '🧊 Холодные Напитки' },
    items: [
      {
        id: 'i1',
        name: { az: 'Coca-Cola® 500 ml', en: 'Coca-Cola® 500 ml', ru: 'Coca-Cola® 500 мл' },
        desc: { az: 'Soyuq içki', en: 'Cold drink', ru: 'Холодный напиток' },
        price: 2.99,
        img: 'assets/images/colo.jpg',
        popular: false
      },
      {
        id: 'i2',
        name: { az: 'Fanta® 500 ml', en: 'Fanta® 500 ml', ru: 'Fanta® 500 мл' },
        desc: { az: 'Soyuq içki', en: 'Cold drink', ru: 'Холодный напиток' },
        price: 2.99,
        img: 'assets/images/fanta.jpg',
        popular: false
      },
      {
        id: 'i3',
        name: { az: 'Sprite® 500 ml', en: 'Sprite® 500 ml', ru: 'Sprite® 500 мл' },
        desc: { az: 'Soyuq içki', en: 'Cold drink', ru: 'Холодный напиток' },
        price: 2.99,
        img: 'assets/images/sprite.jpg',
        popular: false
      },
      {
        id: 'ci1',
        name: { az: 'Ayran', en: 'Ayran', ru: 'Айран' },
        desc: { az: 'Soyuq içki', en: 'Cold drink', ru: 'Холодный напиток' },
        price: 1.00,
        img: 'assets/images/ayran.jpg',
        popular: false
      },
      {
        id: 'ci2',
        name: { az: 'Su', en: 'Water', ru: 'Вода' },
        desc: { az: 'Soyuq su', en: 'Cold water', ru: 'Холодная вода' },
        price: 1.00,
        img: 'assets/images/su.jpg',
        popular: false
      },
      {
        id: 'ci3',
        name: { az: 'Coca-Cola / Fanta / Sprite 0.33 ml', en: 'Coca-Cola / Fanta / Sprite 0.33 ml', ru: 'Coca-Cola / Fanta / Sprite 0.33 мл' },
        desc: { az: 'Soyuq içki 0.33 ml', en: 'Cold drink 0.33 ml', ru: 'Холодный напиток 0.33 мл' },
        price: 1.00,
        img: 'assets/images/colo.jpg',
        popular: false
      },
      {
        id: 'ci4',
        name: { az: 'Coca-Cola / Fanta / Sprite 0.5 ml', en: 'Coca-Cola / Fanta / Sprite 0.5 ml', ru: 'Coca-Cola / Fanta / Sprite 0.5 мл' },
        desc: { az: 'Soyuq içki 0.5 ml', en: 'Cold drink 0.5 ml', ru: 'Холодный напиток 0.5 мл' },
        price: 2.00,
        img: 'assets/images/fanta.jpg',
        popular: false
      },
      {
        id: 'ci5',
        name: { az: 'Bizon', en: 'Bizon', ru: 'Бизон' },
        desc: { az: 'Enerji içkisi', en: 'Energy drink', ru: 'Энергетический напиток' },
        price: 2.00,
        img: 'assets/images/sprite.jpg',
        popular: false
      },
      {
        id: 'ci6',
        name: { az: 'Cappy', en: 'Cappy', ru: 'Cappy' },
        desc: { az: 'Meyvə suyu', en: 'Fruit juice', ru: 'Фруктовый сок' },
        price: 2.00,
        img: 'assets/images/cappy.jpg',
        popular: false
      },
      {
        id: 'ci7',
        name: { az: 'Fuse Tea', en: 'Fuse Tea', ru: 'Fuse Tea' },
        desc: { az: 'Soyuq çay', en: 'Iced tea', ru: 'Холодный чай' },
        price: 2.00,
        img: 'assets/images/fusetea.jpg',
        popular: false
      }
    ]
  },
  {
    id: 'isti',
    label: { az: '☕ İsti İçkilər', en: '☕ Hot Drinks', ru: '☕ Горячие Напитки' },
    items: [
      {
        id: 'hi1',
        name: { az: 'Çay (S)', en: 'Tea (S)', ru: 'Чай (S)' },
        desc: { az: 'İsti çay', en: 'Hot tea', ru: 'Горячий чай' },
        price: 1.00,
        img: 'assets/images/cay.jpg',
        popular: false
      },
      {
        id: 'hi2',
        name: { az: 'Çay (M)', en: 'Tea (M)', ru: 'Чай (M)' },
        desc: { az: 'İsti çay', en: 'Hot tea', ru: 'Горячий чай' },
        price: 2.00,
        img: 'assets/images/cay.jpg',
        popular: false
      },
      {
        id: 'hi3',
        name: { az: 'Çay (XL)', en: 'Tea (XL)', ru: 'Чай (XL)' },
        desc: { az: 'İsti çay', en: 'Hot tea', ru: 'Горячий чай' },
        price: 3.00,
        img: 'assets/images/cay.jpg',
        popular: false
      },
      {
        id: 'hi4',
        name: { az: 'Espresso Lavazza (S)', en: 'Espresso Lavazza (S)', ru: 'Эспрессо Lavazza (S)' },
        desc: { az: 'İsti qəhvə', en: 'Hot coffee', ru: 'Горячий кофе' },
        price: 2.00,
        img: 'assets/images/espresso.jpg',
        popular: false
      },
      {
        id: 'hi5',
        name: { az: 'Americano Lavazza (M)', en: 'Americano Lavazza (M)', ru: 'Американо Lavazza (M)' },
        desc: { az: 'İsti qəhvə', en: 'Hot coffee', ru: 'Горячий кофе' },
        price: 3.00,
        img: 'assets/images/americano.jpg',
        popular: false
      },
      {
        id: 'hi6',
        name: { az: 'Latte Lavazza (S)', en: 'Latte Lavazza (S)', ru: 'Латте Lavazza (S)' },
        desc: { az: 'İsti süd qəhvəsi', en: 'Hot milk coffee', ru: 'Горячий кофе с молоком' },
        price: 4.00,
        img: 'assets/images/latte.jpg',
        popular: false
      },
      {
        id: 'hi7',
        name: { az: 'Latte Lavazza (M)', en: 'Latte Lavazza (M)', ru: 'Латте Lavazza (M)' },
        desc: { az: 'İsti süd qəhvəsi', en: 'Hot milk coffee', ru: 'Горячий кофе с молоком' },
        price: 6.00,
        img: 'assets/images/latte.jpg',
        popular: false
      },
      {
        id: 'hi8',
        name: { az: 'Cappuchino Lavazza (S)', en: 'Cappuccino Lavazza (S)', ru: 'Капучино Lavazza (S)' },
        desc: { az: 'İsti cappuchino', en: 'Hot cappuccino', ru: 'Горячий капучино' },
        price: 4.00,
        img: 'assets/images/cappucino.jpg',
        popular: false
      },
      {
        id: 'hi9',
        name: { az: 'Cappuchino Lavazza (M)', en: 'Cappuccino Lavazza (M)', ru: 'Капучино Lavazza (M)' },
        desc: { az: 'İsti cappuchino', en: 'Hot cappuccino', ru: 'Горячий капучино' },
        price: 6.00,
        img: 'assets/images/cappucino.jpg',
        popular: false
      },
      {
        id: 'hi10',
        name: { az: 'Mokka Lavazza (S)', en: 'Mocha Lavazza (S)', ru: 'Мокка Lavazza (S)' },
        desc: { az: 'İsti mokka', en: 'Hot mocha', ru: 'Горячая мокка' },
        price: 5.00,
        img: 'assets/images/mokka.jpg',
        popular: false
      },
      {
        id: 'hi11',
        name: { az: 'Mokka Lavazza (M)', en: 'Mocha Lavazza (M)', ru: 'Мокка Lavazza (M)' },
        desc: { az: 'İsti mokka', en: 'Hot mocha', ru: 'Горячая мокка' },
        price: 7.00,
        img: 'assets/images/mokka.jpg',
        popular: false
      },
      {
        id: 'hi12',
        name: { az: 'Nescafe', en: 'Nescafe', ru: 'Нескафе' },
        desc: { az: 'İsti qəhvə', en: 'Hot coffee', ru: 'Горячий кофе' },
        price: 2.00,
        img: 'assets/images/nes.jpg',
        popular: false
      },
      {
        id: 'hi13',
        name: { az: 'Kakao', en: 'Cocoa', ru: 'Какао' },
        desc: { az: 'İsti kakao', en: 'Hot cocoa', ru: 'Горячее какао' },
        price: 2.00,
        img: 'assets/images/kakao.jpg',
        popular: false
      },
      {
        id: 'hi14',
        name: { az: 'Sirop', en: 'Syrup', ru: 'Сироп' },
        desc: { az: 'Sirop əlavəsi', en: 'Syrup addition', ru: 'Добавка сиропа' },
        price: 1.00,
        img: 'assets/images/sirop.jpg',
        popular: false
      }
    ]
  },
  {
    id: 'setler',
    label: { az: '🎁 Setlər', en: '🎁 Sets', ru: '🎁 Сеты' },
    items: [
      {
        id: 'st1',
        name: { az: 'Doyumlu Krep + Şirin Krep + İçki', en: 'Savory Crepe + Sweet Crepe + Drink', ru: 'Сытный Крепе + Сладкий Крепе + Напиток' },
        desc: { az: 'Sərfəli set - doyumlu krep, şirin krep və bir içki', en: 'Value set - savory crepe, sweet crepe and a drink', ru: 'Выгодный сет - сытный крепе, сладкий крепе и напиток' },
        price: 10.00,
        img: 'assets/images/bananqaymaq.jpg',
        popular: true
      },
      {
        id: 'st2',
        name: { az: 'Çay (M) və Mini Crepes', en: 'Tea (M) & Mini Crepes', ru: 'Чай (M) и Мини Крепе' },
        desc: { az: 'Orta ölçülü çay və mini krepler', en: 'Medium tea and mini crepes', ru: 'Чай среднего размера и мини-крепе' },
        price: 2.00,
        img: 'assets/images/caykrep.jpg',
        popular: false
      },
      {
        id: 'st3',
        name: { az: 'Nescafe və Mini Crep', en: 'Nescafe & Mini Crepe', ru: 'Нескафе и Мини Крепе' },
        desc: { az: 'Nescafe və mini krep', en: 'Nescafe and mini crepe', ru: 'Нескафе и мини-крепе' },
        price: 3.00,
        img: 'assets/images/bananqaymaq.jpg',
        popular: false
      }
    ]
  }
];

// ─── GALLERY ─────────────────────────────────────────────────
const GALLERY_IMAGES = [
  { type: "image", src: "assets/images/foto1.jpg" },
  { type: "image", src: "assets/images/foto2.jpg" },
  { type: "image", src: "assets/images/foto3.jpg" }
];

// ─── FAQ ──────────────────────────────────────────────────────
const FAQ_DATA = {
  az: [
    {
      q: 'Sifariş necə verə bilərəm?',
      a: 'Saytımızın "Sifariş Et" bölməsindən menyudan istədiyiniz məhsulları seçin, məlumatlarınızı doldurun və WhatsApp vasitəsilə sifariş verin. Həmçinin bilavasitə nömrəmizi — +994 50 538 47 49 — zəng edərək sifariş edə bilərsiniz.'
    },
    {
      q: 'Çatdırılma xidməti varmı?',
      a: 'Hal-hazırda çatdırılma xidmətimiz mövcuddur. Sifarişinizin çatdırılma müddəti ünvana görə dəyişir. Ətraflı məlumat üçün bizimlə əlaqə saxlayın.'
    },
    {
      q: 'Rezervasiya necə edilir?',
      a: '"Rezervasiya" bölməsinə keçin, adınızı, telefon nömrənizi, tarixi, saatı və neçə nəfər olduğunuzu qeyd edin. Göndər düyməsinə basdıqda WhatsApp vasitəsilə biz sizinlə əlaqə saxlayarıq.'
    },
    {
      q: 'Ödəniş üsulları nələrdir?',
      a: 'Nağd ödəniş və bank kartı ilə ödəniş qəbul edirik. Onlayn sifariş üçün çatdırılmada ödəniş edilir.'
    },
    {
      q: 'Allerji məlumatı ala bilərəmmi?',
      a: 'Bəli. Hər məhsulun tərkibi menyuda göstərilmişdir. Əlavə allerji məlumatı üçün bizimlə WhatsApp vasitəsilə əlaqə saxlayın: +994 50 538 47 49.'
    },
    {
      q: 'Minimum sifariş məbləği varmı?',
      a: 'Minimum sifariş məbləği yoxdur. İstədiyiniz sayda məhsul sifariş edə bilərsiniz.'
    },
    {
      q: 'İş saatları nə vaxtdandır?',
      a: 'Bazar ertəsindən Cümə axşamına qədər 09:00–22:00, Cümə və Şənbə günləri 09:00–23:00, Bazar günü isə 10:00–22:00 saatlarında xidmətinizdəyik.'
    },
    {
      q: 'Qruplar üçün xüsusi endirim varmı?',
      a: '10 nəfər və ya daha çox qruplar üçün xüsusi endirimlər tətbiq edilir. Ətraflı məlumat üçün bizimlə əlaqə saxlayın.'
    }
  ],
  en: [
    {
      q: 'How can I place an order?',
      a: 'Go to the "Order" section of our website, select the products you want from the menu, fill in your details and place your order via WhatsApp. You can also call us directly at +994 50 538 47 49.'
    },
    {
      q: 'Do you have a delivery service?',
      a: 'Yes, we currently offer delivery. Delivery time varies depending on your location. Please contact us for more information.'
    },
    {
      q: 'How do I make a reservation?',
      a: 'Go to the "Reservation" section, enter your name, phone number, date, time and number of people. After pressing Send, we will contact you via WhatsApp.'
    },
    {
      q: 'What payment methods do you accept?',
      a: 'We accept cash and bank card payments. For online orders, payment is made upon delivery.'
    },
    {
      q: 'Can I get allergy information?',
      a: 'Yes. The ingredients for each product are listed in the menu. For additional allergy information, please contact us via WhatsApp: +994 50 538 47 49.'
    },
    {
      q: 'Is there a minimum order amount?',
      a: 'There is no minimum order amount. You can order as many products as you like.'
    },
    {
      q: 'What are your working hours?',
      a: 'Monday to Thursday 09:00–22:00, Friday and Saturday 09:00–23:00, Sunday 10:00–22:00.'
    },
    {
      q: 'Are there special discounts for groups?',
      a: 'Special discounts apply for groups of 10 or more people. Please contact us for more information.'
    }
  ],
  ru: [
    {
      q: 'Как сделать заказ?',
      a: 'Перейдите в раздел "Заказ" нашего сайта, выберите нужные продукты из меню, заполните данные и оформите заказ через WhatsApp. Также можно позвонить нам напрямую: +994 50 538 47 49.'
    },
    {
      q: 'Есть ли у вас служба доставки?',
      a: 'Да, в настоящее время мы предоставляем доставку. Время доставки зависит от вашего адреса. Свяжитесь с нами для получения подробной информации.'
    },
    {
      q: 'Как сделать резервацию?',
      a: 'Перейдите в раздел "Резервация", введите имя, номер телефона, дату, время и количество человек. После нажатия кнопки отправки мы свяжемся с вами через WhatsApp.'
    },
    {
      q: 'Какие способы оплаты вы принимаете?',
      a: 'Мы принимаем наличные и банковские карты. Для онлайн-заказов оплата производится при доставке.'
    },
    {
      q: 'Можно ли получить информацию об аллергенах?',
      a: 'Да. Состав каждого продукта указан в меню. Для получения дополнительной информации об аллергенах свяжитесь с нами через WhatsApp: +994 50 538 47 49.'
    },
    {
      q: 'Есть ли минимальная сумма заказа?',
      a: 'Минимальной суммы заказа нет. Вы можете заказать любое количество продуктов.'
    },
    {
      q: 'Каковы часы работы?',
      a: 'Понедельник–четверг 09:00–22:00, пятница и суббота 09:00–23:00, воскресенье 10:00–22:00.'
    },
    {
      q: 'Есть ли специальные скидки для групп?',
      a: 'Для групп от 10 человек действуют специальные скидки. Свяжитесь с нами для получения подробной информации.'
    }
  ]
};
