import * as S from './styles'
import deleteIcon from './delete.svg'

import { api } from 'services/api'
import { Card } from 'types/Card'

export const TrashCan = ({ name, photos, setPhotos }: Omit<Card, 'url'>) => {
  return (
    <S.TrashCan>
      <img className='trashCan' src={deleteIcon} alt='trash icon' onClick={() => {
        const filteredPhotos = photos.filter(photo => photo.name !== name)

        api.deleteImage(name)
        setPhotos(filteredPhotos)
      }} >
      </img>
    </S.TrashCan>
  )
}