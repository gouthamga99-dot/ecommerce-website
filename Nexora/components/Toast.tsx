'use client';

import { useEffect, useState } from 'react';

interface ToastMessage {
  id: number;
  label: string;
  message: string;
}

let toastId = 0;
let addToastFn: ((label: string, message: string) => void) | null = null;

export function showToast(label: string, message: string) {
  if (addToastFn) addToastFn(label, message);
}

export default function Toast() {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  useEffect(() => {
    addToastFn = (label, message) => {
      const id = ++toastId;
      setToasts(prev => [...prev, { id, label, message }]);
      setTimeout(() => {
        setToasts(prev => prev.filter(t => t.id !== id));
      }, 3000);
    };
    return () => { addToastFn = null; };
  }, []);

  return (
    <div className="toast-container">
      {toasts.map(t => (
        <div key={t.id} className="toast">
          <div className="toast-icon">
            <span className="material-symbols-outlined">check_circle</span>
          </div>
          <div className="toast-content">
            <span className="toast-label">{t.label}</span>
            <span className="toast-message">{t.message}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
