/**
 * Sweet Delight - Product Catalog Data
 * Contains comprehensive details for traditional Indian sweets.
 */

const SWEET_CATEGORIES = [
  { id: "all", name: "All Sweets", icon: "✨" },
  { id: "traditional", name: "Traditional Sweets", icon: "🪔" },
  { id: "milk", name: "Milk Sweets", icon: "🥛" },
  { id: "dry-fruit", name: "Dry Fruit Sweets", icon: "🥜" },
  { id: "festival", name: "Festival Specials", icon: "🎉" },
  { id: "cakes-desserts", name: "Cakes & Desserts", icon: "🍰" },
  { id: "gift-boxes", name: "Gift Boxes", icon: "🎁" }
];

const SWEETS_DATA = [
  {
    id: "gulab-jamun",
    name: "Gulab Jamun",
    tagline: "Golden melt-in-mouth milk dumplings in rose syrup",
    category: "traditional",
    categoryName: "Traditional Sweets",
    price: 180, // Price for 500g
    unit: "500g",
    rating: 4.9,
    reviewsCount: 342,
    badge: "Best Seller",
    isBestSeller: true,
    isNew: false,
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
    localImage: "assets/images/sweets/gulab-jamun.svg",
    fallbackColor: "#6B0F24",
    shortDescription: "Soft, melt-in-the-mouth golden fried milk solids soaked in aromatic rose and cardamom flavored sugar syrup.",
    description: "Our signature Gulab Jamun is crafted using fresh Khoya (mawa) delicately hand-rolled and slow-fried to a deep golden blush in pure cow desi ghee. They are then gently steeped in a fragrant, saffron-infused rose water syrup until every bite bursts with heavenly sweetness and aroma.",
    ingredients: [
      "Pure Khoya (Milk Solids)",
      "Desi Cow Ghee",
      "Organic Cane Sugar",
      "Kashmiri Saffron",
      "Green Cardamom Powder",
      "Damascus Rose Water"
    ],
    shelfLife: "10 days (Store refrigerated or consume warm)",
    vegetarian: true,
    nutrition: {
      energy: "380 kcal / 100g",
      protein: "6.2g",
      carbs: "54g",
      fat: "15g"
    }
  },
  {
    id: "mysore-pak",
    name: "Mysore Pak",
    tagline: "Melt-in-mouth royal ghee delicacy from Mysore",
    category: "traditional",
    categoryName: "Traditional Sweets",
    price: 250,
    unit: "500g",
    rating: 4.8,
    reviewsCount: 289,
    badge: "Best Seller",
    isBestSeller: true,
    isNew: false,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
    localImage: "assets/images/sweets/mysore-pak.svg",
    fallbackColor: "#8B4513",
    shortDescription: "Royal South Indian delicacy crafted with roasted gram flour, pure desi ghee, and fine sugar, boasting a porous golden texture.",
    description: "Born in the royal kitchens of the Mysore Palace, our Mysore Pak is prepared strictly following the century-old recipe. Gram flour is freshly ground, sieved, and folded gently into bubbling pure cow ghee and melted sugar, creating a melt-in-your-mouth texture with authentic honey-combed pores.",
    ingredients: [
      "Aromatic Besan (Bengal Gram Flour)",
      "Premium Pure Desi Ghee (Cow)",
      "Refined Cane Sugar",
      "Aromatic Cardamom"
    ],
    shelfLife: "25 days at room temperature",
    vegetarian: true,
    nutrition: {
      energy: "540 kcal / 100g",
      protein: "5.8g",
      carbs: "48g",
      fat: "35g"
    }
  },
  {
    id: "palkova",
    name: "Palkova",
    tagline: "Thick, creamy slow-simmered milk sweet",
    category: "milk",
    categoryName: "Milk Sweets",
    price: 300,
    unit: "500g",
    rating: 5.0,
    reviewsCount: 415,
    badge: "Best Seller",
    isBestSeller: true,
    isNew: false,
    image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=800&q=80",
    localImage: "assets/images/sweets/palkova.svg",
    fallbackColor: "#D4AF37",
    shortDescription: "Rich, creamy and traditional milk-based sweet prepared with slowly reduced milk and sugar. A thick, creamy milk-based sweet.",
    description: "Palkova is a celebrated delicacy prepared in the authentic Srivilliputhur tradition. It is a thick, creamy milk-based sweet prepared with slowly reduced milk and sugar. We simmer farm-fresh, full-cream cow's milk in heavy brass vats over gentle heat for hours until it condenses into a velvety, luscious, caramelized fudge that dissolves on the tongue.",
    ingredients: [
      "Farm Fresh Full-Cream Cow Milk",
      "Organic White Sugar",
      "Clarified Pure Desi Ghee",
      "Green Cardamom Essence"
    ],
    shelfLife: "14 days refrigerated",
    vegetarian: true,
    nutrition: {
      energy: "410 kcal / 100g",
      protein: "9.5g",
      carbs: "52g",
      fat: "18.5g"
    }
  },
  {
    id: "kaju-katli",
    name: "Kaju Katli",
    tagline: "Diamond-cut silver garnished royal cashew fudge",
    category: "dry-fruit",
    categoryName: "Dry Fruit Sweets",
    price: 450,
    unit: "500g",
    rating: 4.9,
    reviewsCount: 520,
    badge: "Best Seller",
    isBestSeller: true,
    isNew: false,
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80",
    localImage: "assets/images/sweets/kaju-katli.svg",
    fallbackColor: "#C0A060",
    shortDescription: "Exquisite diamond-shaped confection made from premium cashew nut paste, delicately garnished with edible silver vark.",
    description: "The crown jewel of Indian mithai. Made exclusively with high-grade Goan cashew nuts ground into a velvety paste and gently cooked with pure sugar syrup. Rolled paper-thin with extreme precision, finished with edible silver vark, and sliced into iconic diamond diamonds.",
    ingredients: [
      "Grade-A Goan Whole Cashew Nuts (Kaju)",
      "Fine White Sugar",
      "Desi Ghee (touch for rolling)",
      "Certified 100% Edible Silver Leaf (Vark)"
    ],
    shelfLife: "20 days in a cool, dry place",
    vegetarian: true,
    nutrition: {
      energy: "460 kcal / 100g",
      protein: "10.2g",
      carbs: "58g",
      fat: "22g"
    }
  },
  {
    id: "laddu",
    name: "Laddu",
    tagline: "Traditional Motichoor saffron ghee laddu",
    category: "traditional",
    categoryName: "Traditional Sweets",
    price: 220,
    unit: "500g",
    rating: 4.8,
    reviewsCount: 310,
    badge: "Festival Special",
    isBestSeller: false,
    isNew: false,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    localImage: "assets/images/sweets/laddu.svg",
    fallbackColor: "#E76F51",
    shortDescription: "Classic royal Motichoor Laddu prepared from tiny gram flour pearls fried in desi ghee, scented with saffron and melon seeds.",
    description: "Handcrafted Motichoor Laddus made of microscopic gram flour pearls (boondi) slow-fried in pure desi ghee, soaked in warm saffron syrup, and hand-bound with crunchy melon seeds, cashews, and aromatic green cardamom.",
    ingredients: [
      "Fine Besan Flour",
      "Desi Cow Ghee",
      "Kashmiri Kesar (Saffron)",
      "Melon Seeds (Magaz)",
      "Cardamom & Mace"
    ],
    shelfLife: "15 days at room temperature",
    vegetarian: true,
    nutrition: {
      energy: "420 kcal / 100g",
      protein: "5.5g",
      carbs: "62g",
      fat: "17g"
    }
  },
  {
    id: "rasgulla",
    name: "Rasgulla",
    tagline: "Spongy, juicy chhena spheres in light syrup",
    category: "milk",
    categoryName: "Milk Sweets",
    price: 200,
    unit: "500g",
    rating: 4.7,
    reviewsCount: 275,
    badge: "New",
    isBestSeller: false,
    isNew: true,
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
    localImage: "assets/images/sweets/rasgulla.svg",
    fallbackColor: "#F5F5DC",
    shortDescription: "Spongy, pillowy dumplings made from freshly curdled cottage cheese (chhena) steeped in light, fragrant cardamom syrup.",
    description: "Authentic Bengal-style Rasgulla hand-kneaded from pristine fresh cow-milk chhena. Boiled gently in thin, crystal-clear sugar syrup infused with rose water and crushed cardamom, resulting in an irresistibly soft, bouncy, and juicy texture.",
    ingredients: [
      "Fresh Cow Milk Chhena (Paneer)",
      "Semolina (Suji, a pinch)",
      "Clarified Sugar Syrup",
      "Rose Essence & Cardamom"
    ],
    shelfLife: "7 days (Always keep chilled)",
    vegetarian: true,
    nutrition: {
      energy: "260 kcal / 100g",
      protein: "7.0g",
      carbs: "50g",
      fat: "3.5g"
    }
  },
  {
    id: "badam-halwa",
    name: "Badam Halwa",
    tagline: "Rich almond paste roasted in pure cow ghee and saffron",
    category: "dry-fruit",
    categoryName: "Dry Fruit Sweets",
    price: 350,
    unit: "500g",
    rating: 4.9,
    reviewsCount: 198,
    badge: "Royal Special",
    isBestSeller: true,
    isNew: false,
    image: "https://images.unsplash.com/photo-1505253758473-96b3015f27eb?auto=format&fit=crop&w=800&q=80",
    localImage: "assets/images/sweets/badam-halwa.svg",
    fallbackColor: "#DDAA33",
    shortDescription: "Decadent royal halwa made with blanched Mamra almonds slowly roasted in rich desi ghee and infused with Kashmiri saffron.",
    description: "An opulent dessert reserved for celebrations. Mamra almonds are blanched, hand-peeled, ground to a coarse paste, and roasted patiently in generous amounts of pure ghee until fragrant and amber-tinted, flavored with crushed saffron and cardamom.",
    ingredients: [
      "Mamra Almonds (Badam)",
      "Pure Desi Cow Ghee",
      "Kashmiri Mongra Kesar",
      "Pure Milk & Sugar",
      "Nutmeg & Cardamom"
    ],
    shelfLife: "18 days refrigerated",
    vegetarian: true,
    nutrition: {
      energy: "490 kcal / 100g",
      protein: "11g",
      carbs: "45g",
      fat: "30g"
    }
  },
  {
    id: "jangiri",
    name: "Jangiri",
    tagline: "Crisp, juicy floral swirls soaked in saffron nectar",
    category: "festival",
    categoryName: "Festival Specials",
    price: 200,
    unit: "500g",
    rating: 4.8,
    reviewsCount: 240,
    badge: "Festival Special",
    isBestSeller: false,
    isNew: false,
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80",
    localImage: "assets/images/sweets/jangiri.svg",
    fallbackColor: "#FF5722",
    shortDescription: "Elaborately piped, golden-orange swirls of fermented black gram batter, fried crisp and immersed in saffron-infused syrup.",
    description: "Known as the Queen of Festival Sweets. Urad dal is soaked and aerated to fluffy perfection, piped intricately into hot ghee in concentric floral rosettes, and soaked in cardamom and rose sugar syrup while warm for that trademark crispy exterior and luscious juicy center.",
    ingredients: [
      "Skinless Urad Dal (Black Gram)",
      "Rice Flour",
      "Desi Ghee",
      "Sugar Syrup",
      "Natural Saffron Extract",
      "Green Cardamom"
    ],
    shelfLife: "8 days at room temperature",
    vegetarian: true,
    nutrition: {
      energy: "370 kcal / 100g",
      protein: "4.8g",
      carbs: "65g",
      fat: "11g"
    }
  },
  {
    id: "kesar-peda",
    name: "Kesar Peda",
    tagline: "Velvety saffron milk fudge with pistachios",
    category: "milk",
    categoryName: "Milk Sweets",
    price: 280,
    unit: "500g",
    rating: 4.8,
    reviewsCount: 165,
    badge: "New",
    isBestSeller: false,
    isNew: true,
    image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=800&q=80",
    localImage: "assets/images/sweets/kesar-peda.svg",
    fallbackColor: "#E0A838",
    shortDescription: "Rich Mathura-style milk fudge made from slow-cooked mawa, laced with aromatic Kashmiri saffron and crunchy pistachios.",
    description: "Prepared from slow-simmered condensed mawa, infused with aromatic saffron threads and cardamom, stamped with traditional heritage wooden seals, and garnished with Iranian pistachios.",
    ingredients: [
      "Fresh Condensed Mawa (Khoya)",
      "Kashmiri Kesar",
      "Green Cardamom",
      "Pistachio Slivers",
      "Cane Sugar"
    ],
    shelfLife: "15 days refrigerated",
    vegetarian: true,
    nutrition: {
      energy: "410 kcal / 100g",
      protein: "8.5g",
      carbs: "53g",
      fat: "18g"
    }
  },
  {
    id: "anjeer-barfi",
    name: "Anjeer Dry Fruit Barfi",
    tagline: "No-added-sugar royal Turkish fig and nut slice",
    category: "dry-fruit",
    categoryName: "Dry Fruit Sweets",
    price: 520,
    unit: "500g",
    rating: 4.9,
    reviewsCount: 180,
    badge: "Healthy Choice",
    isBestSeller: false,
    isNew: true,
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80",
    localImage: "assets/images/sweets/anjeer-barfi.svg",
    fallbackColor: "#5B2C36",
    shortDescription: "Naturally sweet luxury barfi made from Turkish figs, California almonds, pistachios, and cashews roasted in pure ghee.",
    description: "A guilt-free royal delight without any added cane sugar. Turkish sun-dried figs are pureed and simmered with crunchy roasted California almonds, cashews, and pistachios in ghee, formed into dense, aromatic rolls.",
    ingredients: [
      "Sun-Dried Turkish Figs (Anjeer)",
      "California Almonds",
      "Whole Cashew Nuts",
      "Pistachios",
      "Pure Cow Ghee"
    ],
    shelfLife: "30 days at room temperature",
    vegetarian: true,
    nutrition: {
      energy: "430 kcal / 100g",
      protein: "9.8g",
      carbs: "42g",
      fat: "25g"
    }
  },
  {
    id: "rasmalai-cake",
    name: "Rasmalai Dessert Jar",
    tagline: "Fusion milk dessert with saffron rabdi crumble",
    category: "cakes-desserts",
    categoryName: "Cakes & Desserts",
    price: 320,
    unit: "500g",
    rating: 4.9,
    reviewsCount: 215,
    badge: "Trending",
    isBestSeller: false,
    isNew: true,
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
    localImage: "assets/images/sweets/rasmalai-cake.svg",
    fallbackColor: "#F4D06F",
    shortDescription: "Fusion dessert featuring spongy cottage cheese discs layered in thickened saffron-pistachio rabdi and delicate milk crumble.",
    description: "The modern sweet lover's dream! Layers of delicate sponge infused with saffron milk, topped with mini chhena rasmalai patties, simmered almond-pistachio rabdi, and edible dried rose petals.",
    ingredients: [
      "Fresh Cow Milk Chhena",
      "Reduced Saffron Rabdi",
      "Pistachios & Almonds",
      "Cardamom Extract",
      "Edible Dried Rose Petals"
    ],
    shelfLife: "4 days (Keep strictly chilled)",
    vegetarian: true,
    nutrition: {
      energy: "310 kcal / 100g",
      protein: "7.8g",
      carbs: "44g",
      fat: "12g"
    }
  },
  {
    id: "royal-gift-box",
    name: "Royal Heritage Mithai Box",
    tagline: "Curated imperial gift hamper of 4 signature sweets",
    category: "gift-boxes",
    categoryName: "Gift Boxes",
    price: 850,
    unit: "1kg",
    rating: 5.0,
    reviewsCount: 388,
    badge: "Premium Gift",
    isBestSeller: true,
    isNew: false,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    localImage: "assets/images/sweets/royal-gift-box.svg",
    fallbackColor: "#7A1228",
    shortDescription: "An imperial assortment of our finest handcrafted sweets in an embossed royal gold gift box: Kaju Katli, Badam Halwa, Palkova & Motichoor Laddu.",
    description: "The ultimate gifting experience for Diwali, weddings, and milestones. Housed inside a lavish velvet-touch embossed box with golden foil, containing 250g each of our four legendary creations: Kaju Katli, Badam Halwa, Palkova, and Motichoor Laddu.",
    ingredients: [
      "Assorted Cashews, Almonds & Desi Ghee",
      "Full Cream Milk Palkova",
      "Saffron Motichoor Pearls",
      "Edible Silver Leaf"
    ],
    shelfLife: "20 days",
    vegetarian: true,
    nutrition: {
      energy: "450 kcal / 100g",
      protein: "8.5g",
      carbs: "53g",
      fat: "23g"
    }
  }
];

// Weight options and price multipliers
const WEIGHT_CONFIG = {
  "250g": { multiplier: 0.55, label: "250g (Half portion)" },
  "500g": { multiplier: 1.0, label: "500g (Standard)" },
  "1kg": { multiplier: 1.9, label: "1kg (Family Pack - 5% OFF)" }
};

// Calculate price for selected weight
function calculatePriceByWeight(basePrice, weight) {
  const config = WEIGHT_CONFIG[weight] || WEIGHT_CONFIG["500g"];
  return Math.round(basePrice * config.multiplier);
}
