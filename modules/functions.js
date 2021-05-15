export const replaceClass = (elem, oldC, newC) => {
  elem.classList.contains(oldC)
    ? elem.classList.replace(oldC, newC)
    : elem.classList.add(newC);
};

export const callReplace = (elem1, oldC1, newC1, elem2, oldC2, newC2) => {
  replaceClass(elem1, oldC1, newC1);
  replaceClass(elem2, oldC2, newC2);
};
