import * as S from './App.styled'
import { useState, useEffect } from 'react'
import { Photo } from './types/Photo'
import { api } from './services/api'

import { disableSubmitWhileLoadOrUpload } from 'utils/disableSubmitWhileLoadOrUpload'
import { PhotoCard, ScreenWarning, UploadForm } from 'components'

export function App() {
  const [uploading, setUploading] = useState(false)
  const [loading, setLoading] = useState(false)
  const [photos, setPhotos] = useState<Photo[]>([])

  disableSubmitWhileLoadOrUpload(loading, uploading)

  useEffect(() => {
    const getPhotos = async () => {
      setLoading(true)
      setPhotos(await api.getAllPhotos())
      setLoading(false)
    }

    getPhotos()
  }, [])

  return (
    <S.Container>
      <S.Area>
        <S.Heading>Galeria de fotos</S.Heading>

        <UploadForm
          photos={photos}
          setPhotos={setPhotos}
          uploading={uploading}
          setUploading={setUploading}
        />

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