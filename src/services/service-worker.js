export function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js').then((registration) => {
        console.info('ServiceWorker registration successful with scope: ', registration.scope)
      }).catch((err) => {
        console.error('ServiceWorker registration failed: ', err)
      })
    })
  }
}
