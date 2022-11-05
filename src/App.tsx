import * as S from './App.styles'
import * as Photos from './services/photos'

import { useState, useEffect, FormEvent } from 'react'
import { Photo } from './types/Photo'

import { PhotoItem } from './components/PhotoItem'
import { ScreenWarning } from './components/ScreenWarning'

export function App() {
  const [uploading, setUploading] = useState(false)
  const [loading, setLoading] = useState(false)
  const [photos, setPhotos] = useState<Photo[]>([])

  useEffect(() => {
    const getPhotos = async () => {
      setLoading(true)
      setPhotos(await Photos.getAllPhotos())
      setLoading(false)
    }

    getPhotos()
  }, [])

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const file = formData.get('image') as File

    if (file && file.size > 0) {
      setUploading(true)
      let result = await Photos.insertImage(file)
      setUploading(false)

      if (result instanceof Error) {
        alert(`${result.name} - ${result.message}`)
      } else {
        let newPhotoList = [...photos]
        newPhotoList.push(result)
        setPhotos(newPhotoList)
      }
    }
  }

  return (
    <S.Container>
      <S.Area>
        <S.Heading>Galeria de fotos</S.Heading>

        <S.UploadForm method='POST' onSubmit={handleFormSubmit}>
          <input type='file' name='image' />
          <input type='submit' value='Enviar' />
          {uploading && 'Enviando...'}
        </S.UploadForm>

        {loading &&
          <ScreenWarning emoji='⌛️'>
            Carregando...
          </ScreenWarning>
        }

        {!loading && photos.length > 0 &&
          <S.PhotoList>
            {photos.map(({ url, name }, index) => (
              <PhotoItem key={index} url={url} name={name} />
            ))}
          </S.PhotoList>
        }

        {!loading && photos.length === 0 &&
          <ScreenWarning emoji='🤔'>
            Não há fotos cadastradas...
          </ScreenWarning>
        }
      </S.Area>
    </S.Container >
  )
}