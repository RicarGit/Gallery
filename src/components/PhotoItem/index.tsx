import { SetStateAction } from 'react'
import { api } from 'services/api'
import { Photo } from 'types/Photo'
import * as S from './styles'

type lala = {
  photos: Photo[]
  setPhotos: React.Dispatch<SetStateAction<Photo[]>>
} & Photo

export const PhotoItem = ({ url, name, photos, setPhotos }: lala) => {
  return (
    <S.Container>
      <img src={url} alt={name} />
      <p>{name}</p>
      <div className='remove-icon' onClick={() => {
        api.deleteImage(name)
        setPhotos(photos.filter(photo => photo.name !== name))
      }} >
        ❌
      </div>
    </S.Container>
  )
}