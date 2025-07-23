const allImports = {
  sponsors: import.meta.glob('../assets/sponsors/*.{png,jpg,jpeg,svg,webp}', {
    eager: true,
    import: 'default',
  }),
}

export const loadImagesFromDir = (folderName) => {
  const files = allImports[folderName];
  if (!files) {
    throw new Error(`Folder "${folderName}" is not registered in loadImagesFromDir`);
  }

  return Object.entries(files).map(([path, logo]) => {
    const name = path.split('/').pop().replace(/\.(png|jpe?g|svg|webp)$/, '');
    return { name, logo };
  });
};

