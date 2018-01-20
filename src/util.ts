export const noop = () => {};

export const idx = (obj, accessor) => {
  try {
    return accessor(obj);
  } catch (error) {
    return undefined;
  }
};

export const isClient = typeof window === 'object';

export const debounce = (fn, delay) => {
  let timeout;

  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay)
  }
};

export const on = (obj, ...args) => obj.addEventListener(...args);

export const off = (obj, ...args) => obj.removeEventListener(...args);
