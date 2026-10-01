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
 */
export const WHATSAPP_NUMBER = '916282328496';

/** Last 4 digits, used only for display/diagnostics. */
export const WHATSAPP_DISPLAY_NUMBER = '+91 62823 28496';

/** Free express shipping on every order (matches the cart drawer messaging). */
export const SHIPPING_COST = 0;

/** GST rate, mirrors the 18% applied in CartContext. */
export const GST_RATE = 0.18;

/** A wa.me number must be 8-15 digits and contain nothing else. */
export function isWhatsAppConfigured(): boolean {
  return /^\d{8,15}$/.test(WHATSAPP_NUMBER);
}

export interface WhatsAppOrderTotals {
  subtotal: number;
  gst: number;
  shipping: number;
  total: number;
}

export interface WhatsAppOrderItem {
  name: string;
  specs?: string;
  qty: number;
  price: number;
}

const inr = (value: number): string => `₹${value.toLocaleString('en-IN')}`;

/**
 * Builds the plain-text order message. Every cart line is included, with its
 * configuration/variant, quantity and line total.
 */
export function buildWhatsAppOrderMessage(
  items: WhatsAppOrderItem[],
  totals: WhatsAppOrderTotals,
): string {
  const lines: string[] = [];

  lines.push('Hello, I want to place an order.');
  lines.push('');
  lines.push(`Order Details:`);
  lines.push('');

  if (items.length === 0) {
    lines.push('(No items in cart)');
  } else {
    items.forEach((item, index) => {
      const prefix = items.length > 1 ? `${index + 1}. ` : '';
      lines.push(`${prefix}Product: ${item.name}`);
      lines.push(`Configuration: ${item.specs && item.specs.trim() ? item.specs.trim() : 'Standard'}`);
      lines.push(`Quantity: ${item.qty}`);
      lines.push(`Line Total: ${inr(item.price * item.qty)}`);
      if (items.length > 1) lines.push('');
    });
  }

  const totalQty = items.reduce((sum, i) => sum + i.qty, 0);
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

/**
 * Canonical WhatsApp click-to-chat URL:
 *   https://wa.me/PHONE_NUMBER?text=ENCODED_MESSAGE
 */
export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function isMobileDevice(): boolean {
  if (typeof navigator === 'undefined') return false;
  return /Android|iPhone|iPad|iPod|Windows Phone|BlackBerry|Opera Mini|IEMobile/i.test(
    navigator.userAgent,
  );
}

/**
 * Opens WhatsApp in a new tab.
 *
 * Mobile  -> tries the `whatsapp://` deep link first so the native app opens when
 *            installed; if the app is missing the browser does not hand off, so we
 *            fall back to the wa.me universal link after a short delay.
 * Desktop -> opens the wa.me link in a new tab, which serves WhatsApp Web.
 */
export function openWhatsApp(message: string): void {
  if (typeof window === 'undefined') return;

  const webUrl = buildWhatsAppUrl(message);

  if (isMobileDevice()) {
    const deepLink = `whatsapp://send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;

    const fallback = window.setTimeout(() => {
      window.location.href = webUrl;
    }, 1500);

    // Leaving the page means the app took over - cancel the fallback.
    window.addEventListener(
      'pagehide',
      () => {
        window.clearTimeout(fallback);
      },
      { once: true },
    );

    window.location.href = deepLink;
    return;
  }

  window.open(webUrl, '_blank', 'noopener,noreferrer');
}