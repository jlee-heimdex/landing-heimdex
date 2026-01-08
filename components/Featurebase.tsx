'use client';

import { useEffect } from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    Featurebase: ((...args: unknown[]) => void) & { q?: unknown[] };
  }
}

export default function Featurebase() {
  useEffect(() => {
    const appId = process.env.NEXT_PUBLIC_FEATUREBASE_APP_ID;

    if (!appId) {
      console.warn('Featurebase: NEXT_PUBLIC_FEATUREBASE_APP_ID is not set');
      return;
    }

    // Initialize Featurebase queue
    if (typeof window.Featurebase !== 'function') {
      window.Featurebase = function (...args: unknown[]) {
        (window.Featurebase.q = window.Featurebase.q || []).push(args);
      };
    }

    // Boot Featurebase messenger
    window.Featurebase('boot', {
      appId,
      theme: 'dark',
      language: 'en',
    });
  }, []);

  return (
    <Script
      src="https://do.featurebase.app/js/sdk.js"
      id="featurebase-sdk"
      strategy="afterInteractive"
    />
  );
}
