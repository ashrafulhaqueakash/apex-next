let lenisInstance = null;

export function setLenisInstance(instance) {
  lenisInstance = instance;
}

export function scrollToSelector(selector, { immediate = false } = {}) {
  if (typeof document === "undefined") return false;
  const node = document.querySelector(selector);
  if (!node) return false;
  lenisInstance?.resize();
  const top = Math.max(0, node.getBoundingClientRect().top + window.scrollY - 88);
  if (lenisInstance) {
    lenisInstance.scrollTo(top, { immediate });
  } else {
    window.scrollTo({ top, behavior: immediate ? "auto" : "smooth" });
  }
  return true;
}
