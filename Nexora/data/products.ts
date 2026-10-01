export const products = [
  {
    id: 1,
    name: "Titan Ultra 16 Pro Max 5G (Natural Titanium, 256GB)",
    price: 134900,
    oldPrice: 144900,
    image: "/assets/images/img_31.jpg",
    category: "smartphones",
    brand: "Apple",
    rating: 4.9,
    reviews: 3120,
    badge: "Bestseller",
    badgeType: "bestseller",
    delivery: "Free 1-Day Delivery",
    deliveryType: "green",
    colors: ["#B8B4AA", "#35363A", "#E5E6E8", "#C2A58F"],
    specs: "A18 Pro 3nm • 48MP Periscope • 4,685mAh",
    ram: "8GB",
    storage: "256GB",
    emi: "₹6,540/mo"
  },
  {
    id: 2,
    name: "Galaxy S25 Ultra 5G (Titanium Gray, 512GB with S-Pen)",
    price: 129999,
    oldPrice: 139999,
    image: "/assets/images/img_21.jpg",
    category: "smartphones",
    brand: "Samsung",
    rating: 4.8,
    reviews: 2840,
    badge: "AI Powered",
    badgeType: "ai",
    delivery: "S-Pen Included",
    deliveryType: "blue",
    colors: ["#646467", "#202227", "#837B72"],
    specs: "Snapdragon 8 Elite • 200MP Quad Cam • 5,000mAh",
    ram: "12GB",
    storage: "512GB",
    emi: "₹6,300/mo"
  },
  {
    id: 3,
    name: "Pixel 9 Pro XL (Obsidian, 256GB Tensor G4)",
    price: 109999,
    oldPrice: 119999,
    image: "/assets/images/img_28.jpg",
    category: "smartphones",
    brand: "Google Pixel",
    rating: 4.7,
    reviews: 1100,
    badge: "Pure Gemini AI",
    badgeType: "premium",
    delivery: "Titan M2 Chip",
    deliveryType: "neutral",
    colors: ["#1F2022", "#ECEBE7", "#A8B2A6"],
    specs: "Tensor G4 • 50MP Pro Triple • 7 Yrs Android OS",
    ram: "16GB",
    storage: "256GB",
    emi: "₹5,330/mo"
  },
  {
    id: 4,
    name: "OnePlus 13 5G (Midnight Black, 16GB/512GB Snapdragon 8 Elite)",
    price: 69999,
    oldPrice: 74999,
    image: "/assets/images/img_37.jpg",
    category: "smartphones",
    brand: "OnePlus",
    rating: 4.8,
    reviews: 1940,
    badge: "Snapdragon 8 Elite",
    badgeType: "flagship",
    delivery: "100W In-Box Charger",
    deliveryType: "green",
    colors: ["#18191B", "#1B3B36", "#3F5B82"],
    specs: "16GB LPDDR5X • 6000mAh Glacier • 100W SuperVOOC",
    ram: "16GB",
    storage: "512GB",
    emi: "₹3,390/mo"
  },
  {
    id: 5,
    name: "ROG Phone 9 Pro (16GB/512GB, 185Hz Matrix Display)",
    price: 84999,
    oldPrice: 94999,
    image: "/assets/images/img_33.jpg",
    category: "smartphones",
    brand: "Asus ROG",
    rating: 4.6,
    reviews: 890,
    badge: "185Hz Matrix",
    badgeType: "gaming",
    delivery: "AirTrigger Ultrasonic",
    deliveryType: "red",
    colors: ["#1a1a2e", "#16213e", "#0f3460"],
    specs: "AirTrigger Ultrasonic • Active AeroCooling • 5,800mAh",
    ram: "16GB",
    storage: "512GB",
    emi: "₹4,120/mo"
  },
  {
    id: 6,
    name: "Xiaomi 15 Ultra (16GB/1TB, Leica Optics)",
    price: 79999,
    oldPrice: 89999,
    image: "/assets/images/img_13.jpg",
    category: "smartphones",
    brand: "Xiaomi",
    rating: 4.7,
    reviews: 1520,
    badge: "Leica Optics",
    badgeType: "premium",
    delivery: "Leica Summilux Lens",
    deliveryType: "neutral",
    colors: ["#2C2C2C", "#F5F5F5", "#8B7355"],
    specs: "Snapdragon 8 Elite • 50MP Leica Quad • 5,410mAh",
    ram: "16GB",
    storage: "1TB",
    emi: "₹3,880/mo"
  }
];

export const categories = [
  { id: 'smartphones', name: 'Smartphones', icon: 'smartphone', price: 'FROM ₹19,999', desc: 'Flagship 5G & Next-Gen Foldables' },
  { id: 'laptops', name: 'Laptops', icon: 'laptop_mac', price: 'FROM ₹2,49,900', desc: 'Creator Workstations & Ultrabooks' },
  { id: 'cameras', name: 'Cameras', icon: 'photo_camera', price: 'FROM ₹49,990', desc: 'Mirrorless & Cinema Lenses' },
  { id: 'docks', name: 'Docks & Chargers', icon: 'memory', price: 'FROM ₹2,990', desc: 'GaN Fast Charging & TB4 Docks' }
];

export const testimonials = [
  {
    id: 1,
    name: "Kabir Mehta",
    role: "Director of Photography, VisualWorks Mumbai",
    avatar: "/assets/images/img_47.jpg",
    quote: "We ordered three M4 Max StealthBooks for a commercial film grade in Bandra. Nexora's white-glove driver had them unboxed and color-calibrated at our studio in under 3 hours with official Apple care registered on site.",
    rating: 5
  },
  {
    id: 2,
    name: "Ananya Sen",
    role: "Lead Tech Columnist & Creator, BLR",
    avatar: "/assets/images/img_36.jpg",
    quote: "The trade-in program is completely unmatched in India. No arguing with doorstep delivery executives over micro-scratches. They scanned the device, credited ₹68,000, and handed me the Phantom 16 Pro sealed.",
    rating: 5
  },
  {
    id: 3,
    name: "Vikramaditya Rao",
    role: "Managing Partner, CyberPulse Ventures",
    avatar: "/assets/images/img_44.jpg",
    quote: "The AcousticElite Pro headphones have transformed my long-haul flights between Delhi and SF. Zero ear fatigue, pristine DAC audio output, and Nexora's 2-year no-questions-asked replacement warranty gives real peace of mind.",
    rating: 5
  }
];

export const tradeInDevices = [
  { value: 68000, label: 'Apple MacBook Pro 14" M1 Max (32GB / 1TB)' },
  { value: 42000, label: 'Apple iPhone 14 Pro Max 256GB' },
  { value: 54000, label: 'Sony Alpha 7 IV Full-Frame Camera' },
  { value: 31000, label: 'Samsung Galaxy S23 Ultra 256GB' },
  { value: 18000, label: 'iPad Pro 11-inch 3rd Gen (Wi-Fi)' }
];
