import { Photo } from "types/Photo"
import { storage } from "libs/firebase"
import { ref, listAll, getDownloadURL, uploadBytes } from "firebase/storage"
// import { v4 as createId } from 'uuid'

export const getAllPhotos = async () => {
  const list: Photo[] = []

  const imagesFolder = ref(storage, 'images')
  const photoList = await listAll(imagesFolder)

  for (const i in photoList.items) {
    const photoURL = await getDownloadURL(photoList.items[i])

    list.push({
      name: photoList.items[i].name,
      url: photoURL
    })
  }

  return list
}

export const insertImage = async (file: File) => {
  const [fileName] = file.name.split(/\.png$|\.jpg$|\.jpeg$/g)

  if (fileName.length >= 30) {
    return new Error('Nome do arquivo muito grande, máximo permitido de 30 caracteres')
  }

  if (file.type.match(/\/png$|\/jpg$|\/jpeg$/g)) {
    // let randomName = createId()
    let newFile = ref(storage, `images/${fileName}`)

    let upload = await uploadBytes(newFile, file)
    let photoURL = await getDownloadURL(upload.ref)

    return {
      name: upload.ref.name,
      url: photoURL
    } as Photo
  }

  return new Error('Tipo de arquivo não permitido, somente arquivos jpg, jpeg ou png')
}