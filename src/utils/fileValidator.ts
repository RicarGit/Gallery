import { Validate } from "types/Validate"
import { removeFileExtension } from "./removeFileExtension"

export const fileValidator = ({ file, photos, event }: Validate) => {
  const fileNameWithoutExtension = removeFileExtension(file.name)

  if (file.size <= 0) {
    return alert('Selecione algum arquivo jpg, jpeg ou png para fazer upload.')
  }

  if (fileNameWithoutExtension.length > 25) {
    event.currentTarget.reset()
    return alert('Nome do arquivo muito grande, máximo permitido de 25 caracteres.')
  }

  const hasSameName = photos.find(photo => {
    return photo.name === file.name
  })

  if (hasSameName) {
    event.currentTarget.reset()
    return alert('O nome do arquivo já existe.')
  }

  return true
}