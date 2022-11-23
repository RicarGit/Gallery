export const removeFileExtension = (fileName: string) => {
  const [fileNameWithoutExtension] = fileName.split(/\.(pn|jp|jpe)g$/g)
  return fileNameWithoutExtension
}