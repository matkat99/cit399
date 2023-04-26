export const random = (number) => {
  return Math.floor(Math.random() * number);
};

export const qs = (selector, element = document) => {
  return element.querySelector(selector);
};
