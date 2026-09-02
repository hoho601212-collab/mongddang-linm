'use client';

import { useEffect } from 'react';

const IMAGE_PATTERN = /linm-[a-z0-9-]+\.webp/i;

export function AutoImageLoader() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>('.image-placeholder, .visual-frame');

    targets.forEach((target) => {
      const match = target.textContent?.match(IMAGE_PATTERN);
      if (!match) return;

      const filename = match[0];
      const img = new Image();
      img.onload = () => {
        target.style.backgroundImage = `url('/images/${filename}')`;
        target.style.backgroundSize = 'cover';
        target.style.backgroundPosition = 'center';
        target.style.backgroundRepeat = 'no-repeat';
        target.classList.add('auto-image-loaded');
      };
      img.src = `/images/${filename}`;
    });
  }, []);

  return null;
}
