module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[project]/context/CartContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CartProvider",
    ()=>CartProvider,
    "useCart",
    ()=>useCart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$whatsapp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/whatsapp.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
const CartContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function CartProvider({ children }) {
    const [cart, setCart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isCartOpen, setIsCartOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            const saved = localStorage.getItem('nexora_cart');
            if (saved) setCart(JSON.parse(saved));
        } catch (e) {}
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        localStorage.setItem('nexora_cart', JSON.stringify(cart));
    }, [
        cart
    ]);
    const addToCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((item)=>{
        setCart((prev)=>{
            const existing = prev.find((i)=>i.id === item.id);
            if (existing) {
                return prev.map((i)=>i.id === item.id ? {
                        ...i,
                        qty: i.qty + item.qty
                    } : i);
            }
            return [
                ...prev,
                item
            ];
        });
    }, []);
    const removeFromCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id)=>{
        setCart((prev)=>prev.filter((i)=>i.id !== id));
    }, []);
    const updateQty = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id, delta)=>{
        setCart((prev)=>prev.map((i)=>{
                if (i.id === id) {
                    const newQty = i.qty + delta;
                    return newQty > 0 ? {
                        ...i,
                        qty: newQty
                    } : i;
                }
                return i;
            }).filter((i)=>i.qty > 0));
    }, []);
    const clearCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>setCart([]), []);
    const openCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>setIsCartOpen(true), []);
    const closeCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>setIsCartOpen(false), []);
    const cartCount = cart.reduce((sum, i)=>sum + i.qty, 0);
    const subtotal = cart.reduce((sum, i)=>sum + i.price * i.qty, 0);
    const gst = Math.round(subtotal * 0.18);
    const shipping = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$whatsapp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHIPPING_COST"];
    const total = subtotal + gst;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CartContext.Provider, {
        value: {
            cart,
            addToCart,
            removeFromCart,
            updateQty,
            clearCart,
            cartCount,
            subtotal,
            gst,
            shipping,
            total,
            isCartOpen,
            openCart,
            closeCart
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/context/CartContext.tsx",
        lineNumber: 89,
        columnNumber: 5
    }, this);
}
function useCart() {
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(CartContext);
    if (!ctx) throw new Error('useCart must be used within CartProvider');
    return ctx;
}
}),
"[project]/lib/whatsapp.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * WhatsApp order checkout.
 *
 * The single place the WhatsApp business number is configured. Change the value of
 * WHATSAPP_NUMBER below and the whole site follows.
 *
 * Format rules for https://wa.me/:
 *   - digits only
 *   - full international format, country code first, NO "+" and NO spaces/dashes
 *     e.g. India +91 62823 28496  ->  "916282328496"
 *
 * Friendly format for the number below: +91 62823 28496
 */ __turbopack_context__.s([
    "GST_RATE",
    ()=>GST_RATE,
    "SHIPPING_COST",
    ()=>SHIPPING_COST,
    "WHATSAPP_DISPLAY_NUMBER",
    ()=>WHATSAPP_DISPLAY_NUMBER,
    "WHATSAPP_NUMBER",
    ()=>WHATSAPP_NUMBER,
    "buildWhatsAppOrderMessage",
    ()=>buildWhatsAppOrderMessage,
    "buildWhatsAppUrl",
    ()=>buildWhatsAppUrl,
    "isWhatsAppConfigured",
    ()=>isWhatsAppConfigured,
    "openWhatsApp",
    ()=>openWhatsApp
]);
const WHATSAPP_NUMBER = '916282328496';
const WHATSAPP_DISPLAY_NUMBER = '+91 62823 28496';
const SHIPPING_COST = 0;
const GST_RATE = 0.18;
function isWhatsAppConfigured() {
    return /^\d{8,15}$/.test(WHATSAPP_NUMBER);
}
const inr = (value)=>`₹${value.toLocaleString('en-IN')}`;
function buildWhatsAppOrderMessage(items, totals) {
    const lines = [];
    lines.push('Hello, I want to place an order.');
    lines.push('');
    lines.push(`Order Details:`);
    lines.push('');
    if (items.length === 0) {
        lines.push('(No items in cart)');
    } else {
        items.forEach((item, index)=>{
            const prefix = items.length > 1 ? `${index + 1}. ` : '';
            lines.push(`${prefix}Product: ${item.name}`);
            lines.push(`Configuration: ${item.specs && item.specs.trim() ? item.specs.trim() : 'Standard'}`);
            lines.push(`Quantity: ${item.qty}`);
            lines.push(`Line Total: ${inr(item.price * item.qty)}`);
            if (items.length > 1) lines.push('');
        });
    }
    const totalQty = items.reduce((sum, i)=>sum + i.qty, 0);
    if (items.length > 1) {
        lines.push(`Total Items: ${items.length} (${totalQty} unit${totalQty === 1 ? '' : 's'})`);
        lines.push('');
    }
    lines.push(`Subtotal: ${inr(totals.subtotal)}`);
    lines.push(`GST (${GST_RATE * 100}%): ${inr(totals.gst)}`);
    lines.push(`Shipping: ${inr(totals.shipping)}`);
    lines.push(`Total: ${inr(totals.total)}`);
    lines.push('');
    lines.push('Please confirm availability and delivery details.');
    return lines.join('\n');
}
function buildWhatsAppUrl(message) {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
function isMobileDevice() {
    if (typeof navigator === 'undefined') return false;
    return /Android|iPhone|iPad|iPod|Windows Phone|BlackBerry|Opera Mini|IEMobile/i.test(navigator.userAgent);
}
function openWhatsApp(message) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
    const webUrl = undefined;
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0qyubxa._.js.map