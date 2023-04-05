export function scrollToID(id: string) {
  window.document.querySelector(id)?.scrollIntoView();
}
