'use client';

import { useEffect } from 'react';

const IMAGE_PATTERN = /linm-[a-z0-9-]+\.webp/i;
const TARGET_SELECTOR = '.image-placeholder, .visual-frame, .premium-placeholder, .compact-placeholder';

function loadTarget(target: HTMLElement) {
  const match = target.textContent?.match(IMAGE_PATTERN);
  if (!match) return;

  const filename = match[0];
  if (target.dataset.autoImage === filename) return;
  target.dataset.autoImage = filename;

  const img = new Image();
  img.onload = () => {
    target.style.backgroundImage = `url('/images/${filename}')`;
    target.style.backgroundSize = 'cover';
    target.style.backgroundPosition = 'center';
    target.style.backgroundRepeat = 'no-repeat';
    target.classList.add('auto-image-loaded');
  };
  img.onerror = () => {
    delete target.dataset.autoImage;
    target.classList.remove('auto-image-loaded');
  };
  img.src = `/images/${filename}`;
}

function scanImages(root: ParentNode = document) {
  root.querySelectorAll<HTMLElement>(TARGET_SELECTOR).forEach(loadTarget);
}

export function AutoImageLoader() {
  useEffect(() => {
    scanImages();

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          if (!(node instanceof HTMLElement)) continue;

          if (node.matches(TARGET_SELECTOR)) loadTarget(node);
          scanImages(node);
        }
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return null;
}
