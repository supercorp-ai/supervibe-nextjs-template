'use client'
import { useEffect } from 'react'
import { PageError } from '@/components/PageError'

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    window.parent.postMessage(
      {
        type: 'child-console-error',
        data: [JSON.stringify({
          message: error.message,
          stack: error.stack,
          name: error.name,
          digest: error.digest,
        })],
      },
      '*'
    );
  }, [error])

  return (
    <html>
      <body>
        <PageError />
      </body>
    </html>
  )
}
