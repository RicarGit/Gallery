import { storage } from "libs/firebase"
import { ref, listAll, getDownloadURL, uploadBytes, deleteObject } from "firebase/storage"
import { Photo } from "types/Photo"

export const api = {
  async getAllPhotos() {
    const list: Photo[] = []
    const storageRef = ref(storage, 'images')
    const photoList = await listAll(storageRef)

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
    const form = document.querySelector('form')
    const isValidImageExtension = file.type.match(/(pn|jp|jpe)g$/g)

    if (isValidImageExtension) {
      const newFile = ref(storage, `images/${file.name}`)
      const upload = await uploadBytes(newFile, file)
      const photoURL = await getDownloadURL(upload.ref)

      form?.reset()
      alert(`Arquivo "${file.name}" adicionado com sucesso!`)

      return {
        name: upload.ref.name,
        url: photoURL
      }
    }

    form?.reset()
    return new Error('Tipo de arquivo não permitido, somente arquivos jpg, jpeg ou png')
  },

  deleteImage(fileName: string) {
    const imageRef = ref(storage, `images/${fileName}`)

    deleteObject(imageRef)
      .then(() => alert(`arquivo "${fileName}" deletado com sucesso!`))
      .catch(() => alert(`Ops, erro ao deletar arquivo, tente novamente.`))
  }
}
