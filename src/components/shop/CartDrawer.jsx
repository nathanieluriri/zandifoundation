import React, { useState } from 'react';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import { useCart } from '@/context/CartContext';
import { formatNaira, ORDER_WHATSAPP_NUMBER } from '@/data/products';

const emptyForm = { name: '', phone: '', email: '', address: '', note: '' };

const CartDrawer = () => {
  const { items, total, count, updateQuantity, removeItem, clearCart, isOpen, setIsOpen } =
    useCart();
  const [step, setStep] = useState('cart'); // 'cart' | 'details'
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});

  const handleOpenChange = (open) => {
    setIsOpen(open);
    if (!open) setStep('cart');
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Please enter your name';
    if (!/^\+?\d[\d\s-]{6,}$/.test(form.phone.trim())) next.phone = 'Please enter a valid phone number';
    if (!form.address.trim()) next.address = 'Please enter a delivery address';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  // Until Paystack is connected, the order is sent to the foundation on WhatsApp.
  const placeOrder = () => {
    if (!validate()) return;

    const lines = items.map(
      (i) =>
        `• ${i.product.name}${i.size ? ` – Size ${i.size}` : ''} x${i.quantity} = ${formatNaira(i.lineTotal)}`
    );

    const message = [
      'Hello ZandI Foundation, I would like to order:',
      '',
      ...lines,
      '',
      `Total: ${formatNaira(total)}`,
      '',
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.email ? `Email: ${form.email}` : null,
      `Delivery address: ${form.address}`,
      form.note ? `Note: ${form.note}` : null,
    ]
      .filter((l) => l !== null)
      .join('\n');

    window.open(
      `https://wa.me/${ORDER_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer'
    );

    clearCart();
    setForm(emptyForm);
    setStep('cart');
    setIsOpen(false);
  };

  const inputClass =
    'w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-700';

  return (
    <Sheet open={isOpen} onOpenChange={handleOpenChange}>
      <SheetContent className="bg-white w-full sm:max-w-md flex flex-col p-0">
        <SheetHeader className="p-6 pb-4 border-b border-gray-100 text-left">
          <SheetTitle className="text-blue-900 text-xl">
            {step === 'cart' ? `Your Cart (${count})` : 'Delivery Details'}
          </SheetTitle>
          <SheetDescription className="text-gray-600">
            {step === 'cart'
              ? 'Every purchase supports the work of ZandI Foundation.'
              : 'We will confirm your order and payment on WhatsApp.'}
          </SheetDescription>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-grow flex flex-col items-center justify-center text-center px-6">
            <ShoppingBag size={48} className="text-gray-300 mb-4" />
            <p className="text-gray-600">Your cart is empty.</p>
          </div>
        ) : step === 'cart' ? (
          <>
            <div className="flex-grow overflow-y-auto px-6 py-4 space-y-4">
              {items.map((item) => (
                <div key={item.key} className="flex gap-4 border-b border-gray-100 pb-4">
                  <img
                    src={item.product.images[0].src}
                    alt={item.product.name}
                    className="w-20 h-20 object-contain rounded-lg border border-gray-100 bg-white"
                  />
                  <div className="flex-grow min-w-0">
                    <p className="font-semibold text-blue-900 text-sm">{item.product.name}</p>
                    {item.size && <p className="text-xs text-gray-500">Size: {item.size}</p>}
                    <p className="text-sm font-semibold text-gray-900 mt-1">
                      {formatNaira(item.lineTotal)}
                    </p>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-gray-300 rounded-md">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="p-2 hover:bg-gray-100"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm font-semibold">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="p-2 hover:bg-gray-100"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.key)}
                        className="p-2 hover:bg-red-50 rounded-md"
                        aria-label="Remove item"
                      >
                        <Trash2 size={16} className="text-red-600" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-100 p-6 space-y-4">
              <div className="flex justify-between text-lg font-bold">
                <span className="text-gray-900">Total</span>
                <span className="text-blue-900">{formatNaira(total)}</span>
              </div>
              <button
                type="button"
                onClick={() => setStep('details')}
                className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-xl transition-colors"
              >
                <span className="text-white">Checkout</span>
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="flex-grow overflow-y-auto px-6 py-4 space-y-4">
              <button
                type="button"
                onClick={() => setStep('cart')}
                className="inline-flex items-center gap-1 text-sm text-blue-700 hover:underline"
              >
                <ArrowLeft size={16} className="text-blue-700" />
                <span className="text-blue-700">Back to cart</span>
              </button>

              {[
                { name: 'name', label: 'Full name *', type: 'text', autoComplete: 'name' },
                { name: 'phone', label: 'Phone number *', type: 'tel', autoComplete: 'tel' },
                { name: 'email', label: 'Email (optional)', type: 'email', autoComplete: 'email' },
              ].map((f) => (
                <div key={f.name}>
                  <label htmlFor={f.name} className="block text-sm font-semibold text-gray-700 mb-1">
                    {f.label}
                  </label>
                  <input
                    id={f.name}
                    name={f.name}
                    type={f.type}
                    autoComplete={f.autoComplete}
                    value={form[f.name]}
                    onChange={handleChange}
                    className={inputClass}
                  />
                  {errors[f.name] && <p className="text-xs text-red-600 mt-1">{errors[f.name]}</p>}
                </div>
              ))}

              <div>
                <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-1">
                  Delivery address *
                </label>
                <textarea
                  id="address"
                  name="address"
                  rows={3}
                  value={form.address}
                  onChange={handleChange}
                  className={inputClass}
                />
                {errors.address && <p className="text-xs text-red-600 mt-1">{errors.address}</p>}
              </div>

              <div>
                <label htmlFor="note" className="block text-sm font-semibold text-gray-700 mb-1">
                  Note (optional)
                </label>
                <textarea
                  id="note"
                  name="note"
                  rows={2}
                  value={form.note}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
            </div>

            <div className="border-t border-gray-100 p-6 space-y-4">
              <div className="flex justify-between text-lg font-bold">
                <span className="text-gray-900">Total</span>
                <span className="text-blue-900">{formatNaira(total)}</span>
              </div>
              <button
                type="button"
                onClick={placeOrder}
                className="w-full bg-[#1f9d55] hover:bg-[#17803f] text-white font-semibold py-3 rounded-xl transition-colors"
              >
                <span className="text-white">Send order on WhatsApp</span>
              </button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
