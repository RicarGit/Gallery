import * as S from './styles'
import { Card } from 'types/Card'
import { removeFileExtension } from 'utils/removeFileExtension'
import { capitalizeName } from 'utils/capitalizeName'

import { TrashCan } from 'components/TrashCan'
import { FullSizeImage } from 'components/FullSizeImage'

export const PhotoCard = ({ url, name, photos, setPhotos }: Card) => {
  const fileNameWithoutExtension = removeFileExtension(name)
  const capitalizedFileName = capitalizeName(fileNameWithoutExtension)

  return (
    <S.Container>
      <img className='cardImage' src={url} alt={capitalizedFileName} />
      <p>{capitalizedFileName}</p>
      <FullSizeImage url={url} />
      <TrashCan name={name} photos={photos} setPhotos={setPhotos} />
    </S.Container>
  )
}