// Import helpers.
import { getNumberInfos } from '@/helpers/number-info';

/**
 * Will find #root element and set HTML to "Hello World!".
 */
const editDom = (): void => {
  const root = document.getElementById('root'); // Get root element.
  if (root) {
    const numberInfos = getNumberInfos(0, 10);

    root.innerHTML = numberInfos.reduce((string, numberInfo) => {
      return `${string}<p>${numberInfo}</p>`;
    }, '');
  }
};

editDom(); // Call editDom.
