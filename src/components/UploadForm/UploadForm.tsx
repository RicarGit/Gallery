import * as S from './UploadForm.styled'
import { SetStateAction } from 'react'
import { FormEvent } from 'react'

import { Photo } from 'types/Photo'
import { fileValidator } from 'utils/fileValidator'
import { api } from 'services/api'


export type Upload = {
  photos: Photo[]
  setPhotos: React.Dispatch<SetStateAction<Photo[]>>
  uploading: boolean
  setUploading: React.Dispatch<SetStateAction<boolean>>
}

export const UploadForm = ({ photos, setPhotos, uploading, setUploading }: Upload) => {
  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const file = formData.get('image') as File
    const isFileValid = fileValidator({ file, photos, event })

    if (file && isFileValid) {
      setUploading(true)
      const result = await api.insertImage(file)
      setUploading(false)

      if (result instanceof Error) {
        alert(`${result.name} - ${result.message}`)
      } else {
        const newPhotoList = [...photos]

        newPhotoList.push(result)
        setPhotos(newPhotoList)
      }
    }
  }

  return (
    <S.Form method='POST' onSubmit={handleFormSubmit}>
      <input type='file' name='image' />
      <button type='submit'>{uploading ? 'Enviando...' : 'Enviar'}</button>
    </S.Form>
  )
}
