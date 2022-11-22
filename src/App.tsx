import * as S from './App.styles'
import { useState, useEffect, FormEvent } from 'react'
import { Photo } from './types/Photo'

import { PhotoCard } from './components/PhotoCard'
import { ScreenWarning } from './components/ScreenWarning'

import { fileValidator } from 'utils/fileValidator'
import { api } from './services/api'

export function App() {
  const [uploading, setUploading] = useState(false)
  const [loading, setLoading] = useState(false)
  const [photos, setPhotos] = useState<Photo[]>([])

  const inputSubmit = document.querySelector("input[type=submit]")

  if (inputSubmit && (loading || uploading)) {
    inputSubmit.setAttribute('disabled', '')
  } else {
    inputSubmit?.removeAttribute('disabled')
  }

  useEffect(() => {
    const getPhotos = async () => {
      setLoading(true)
      setPhotos(await api.getAllPhotos())
      setLoading(false)
    }

    getPhotos()
  }, [])

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const file = formData.get('image') as File
    const isFileValid = fileValidator({ file, photos, event })

    if (file && isFileValid) {
      setUploading(true)
      let result = await api.insertImage(file)
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
          <input type='submit' value={uploading ? 'Enviando...' : 'Enviar'} />
        </S.UploadForm>

        {loading &&
          <ScreenWarning emoji='⌛️'>Carregando...</ScreenWarning>
        }

        {!loading && photos.length > 0 &&
          <S.PhotoList>
            {photos.map(({ url, name }, index) => (
              <PhotoCard
                key={index}
                url={url}
                name={name}
                photos={photos}
                setPhotos={setPhotos}
              />
            ))}
          </S.PhotoList>
        }

        {!loading && photos.length === 0 &&
          <ScreenWarning emoji='🤔'>Não há fotos cadastradas...</ScreenWarning>
        }
      </S.Area>
    </S.Container >
  )
}