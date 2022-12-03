import * as S from './TrashCan.styled'
import deleteIcon from './delete.svg'
import { api } from 'services/api'
import { Card } from 'types/Card'

export const TrashCan = ({ name, photos, setPhotos }: Omit<Card, 'url'>) => {
  const handleDeleteImage = () => {
    const filteredPhotos = photos.filter(photo => photo.name !== name)

    api.deleteImage(name)
    setPhotos(filteredPhotos)
  }

  return (
    <S.TrashCan>
      <img
        className='trashCan'
        src={deleteIcon}
        alt='trash icon'
        onClick={handleDeleteImage}
      >
      </img>
    </S.TrashCan>
  )
}