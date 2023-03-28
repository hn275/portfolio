export const scrollToID = (id: string) =>
  window.document.querySelector(id)?.scrollIntoView();
