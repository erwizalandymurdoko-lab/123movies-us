// components/layout/AdsterraLayoutWrapper.jsx
"use client";

import { useEffect, useRef } from 'react';
import { getAIOptimizer } from '../../utils/adsterra';

export default function AdsterraLayoutWrapper({ children, countryCode }) {
  const initialized = useRef(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && !initialized.current) {
        const optimizer = getAIOptimizer();
        if (optimizer) {
            optimizer.setGeo(countryCode);
        }

        const nativeContainer = document.getElementById('container-b9c201d00a208a7559228b8eeadfae78');

        const visibleAds = [
            { id: 'native', src: '//fundingfashioned.com/b9c201d00a208a7559228b8eeadfae78/invoke.js' },
            { id: 'social', src: '//fundingfashioned.com/44/28/80/44288099e468f0fae15c4e7eba37581a.js' }
        ];

        visibleAds.forEach(s => {
            if(document.querySelector(`script[src="${s.src}"]`)) return;
            const el = document.createElement('script');
            el.src = s.src;
            el.async = true;
            
            // PERBAIKAN: Masukkan script native ke kontainer footer jika ada
            if (s.id === 'native' && nativeContainer) {
                nativeContainer.appendChild(el);
            } else {
                document.body.appendChild(el);
            }
        });

        setTimeout(() => {
            if(document.querySelector(`script[src*="391e8babb63aadbe47756530ab2f1ede"]`)) return;
            const popunder = document.createElement('script');
            popunder.src = '//fundingfashioned.com/39/1e/8b/391e8babb63aadbe47756530ab2f1ede.js'; 
            document.head.appendChild(popunder);
        }, 3500);

        initialized.current = true;
    }
  }, [countryCode]);

  return <>{children}</>;
}