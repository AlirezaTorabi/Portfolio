'use client';

import * as React from 'react';
import { GlyphBackground as GlyphBackgroundBase } from './glyph';

/**
 * Wraps GlyphBackground so its WebGL setup is deferred until after the
 * initial render completes. This keeps the main thread free for LCP.
 */
export function DeferredGlyphBackground(
  props: React.ComponentProps<typeof GlyphBackgroundBase>,
) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    // Defer until after the browser has painted the initial content.
    const raf = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  if (!mounted) {
    return (
      <div
        aria-hidden="true"
        className="size-full bg-background"
        suppressHydrationWarning
      />
    );
  }

  return <GlyphBackgroundBase {...props} />;
}