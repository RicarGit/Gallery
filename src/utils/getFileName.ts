export const getFileName = (file: File) => {
  const [fileName] = file.name.split(/\.png$|\.jpg$|\.jpeg$/)
  return fileName
}