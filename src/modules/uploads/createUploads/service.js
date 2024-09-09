export const createUploadsService = async ({ files }) => {
  const newfiles = files.map(file => {
    return {
      ...file,
      name: file.filename,
      size: file.size,
      type: file.mimetype,
      preview: `https://${RAILWAY_PUBLIC_DOMAIN}/${file.path.split('src/')[1]}`
    }
  })

  return newfiles
}
