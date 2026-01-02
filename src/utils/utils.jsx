export const renderStartElements = (total, location) => {
  const elements = [];
  for (let i = 0; i < total; i++) {
    elements.push(<span className={`${location}__stars`} key={i}>⭐</span>);
  }
  return elements;
}