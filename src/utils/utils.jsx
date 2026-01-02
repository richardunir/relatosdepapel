export const renderStartElements = (total, location) => {
  const elements = [];
  for (let i = 0; i < total; i++) {
    elements.push(<span className={`${location}__stars`} key={i}>⭐</span>);
  }
  return elements;
}

export function getRandomSample(arr, n) {
  if (!Array.isArray(arr) || arr.length === 0) return [];
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, Math.min(n, copy.length));
} 