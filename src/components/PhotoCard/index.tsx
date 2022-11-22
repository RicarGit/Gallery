import * as S from './styles'
import { Card } from 'types/Card'

import { TrashCan } from 'components/TrashCan'
import { FullSizeImage } from 'components/FullSizeImage'

export const PhotoCard = ({ url, name, photos, setPhotos }: Card) => {

  return (
    <S.Container>
      <img className='cardImage' src={url} alt={name} />
      <p>{name}</p>
      <TrashCan name={name} photos={photos} setPhotos={setPhotos} />
      <FullSizeImage url={url} />
    </S.Container>
  )
}