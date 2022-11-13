import * as S from './styles'
import deleteIcon from './delete.svg'

import { api } from 'services/api'
import { Photo } from 'types/Photo'
import { SetStateAction } from 'react'

type Card = {
  photos: Photo[]
  setPhotos: React.Dispatch<SetStateAction<Photo[]>>
} & Photo

export const PhotoCard = ({ url, name, photos, setPhotos }: Card) => {
  return (
    <S.Container>
      <img src={url} alt={name} />
      <p>{name}</p>
      <img className='delete-icon' src={deleteIcon} alt='trash icon' onClick={() => {
        const filteredPhotos = photos.filter(photo => photo.name !== name)

        api.deleteImage(name)
        setPhotos(filteredPhotos)
      }} >
      </img>
    </S.Container>
  )
}