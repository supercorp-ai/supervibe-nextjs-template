import { useCallback } from 'react';

export const PageError = () => {
  const onClick = useCallback(() => {
    window.parent.postMessage({ type: 'supervibe-request-fix' }, '*');
  }, [])

  return (
    <div>
      <div>
        An error occurred. Ask Supervibe to fix it.
      </div>
      <button
        onClick={onClick}
      >
        Ask Supervibe to fix it
      </button>
    </div>
  )
}
