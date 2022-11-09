import { storage } from "libs/firebase"
import { ref, listAll, getDownloadURL, uploadBytes } from "firebase/storage"

import { Photo } from "types/Photo"
import { getFileName } from "utils/getFileName"

export const api = {
  async getAllPhotos() {
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
  },

  async insertImage(file: File) {
    const fileName = getFileName(file)
    const form = document.querySelector('form')
    const isAValidImageExtension = file.type.match(/\/png$|\/jpg$|\/jpeg$/g)

    if (isAValidImageExtension) {
      const newFile = ref(storage, `images/${fileName}`)

      const upload = await uploadBytes(newFile, file)
      const photoURL = await getDownloadURL(upload.ref)
      form?.reset()
      alert(`Arquivo ${file.name} adicionado com sucesso!`)

      return {
        name: upload.ref.name,
        url: photoURL
      }
    }

    form?.reset()
    return new Error('Tipo de arquivo não permitido, somente arquivos jpg, jpeg ou png')
  }
}
