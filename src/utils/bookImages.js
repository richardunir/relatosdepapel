export const bookImages = Object.fromEntries(
  Object.entries(
    import.meta.globEager('/src/resources/assets/books_image/*.{png,jpg,jpeg,webp}')
  ).map(([path, mod]) => {
    const name = path.split('/').pop().replace(/\.[^/.]+$/, '');
    return [name, mod.default];
  })
);

export default bookImages;