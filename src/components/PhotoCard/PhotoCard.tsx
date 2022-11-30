import * as S from './PhotoCard.styled'
import { Card } from 'types/Card'
import { removeFileExtension } from 'utils/removeFileExtension'
import { capitalizeName } from 'utils/capitalizeName'

import { TrashCan } from 'components/TrashCan'
import { Download } from 'components/Download'

export const PhotoCard = ({ url, name, photos, setPhotos }: Card) => {
  const fileNameWithoutExtension = removeFileExtension(name)
  const capitalizedFileName = capitalizeName(fileNameWithoutExtension)

  return (
    <S.Container>
      <img className='cardImage' src={url} alt={capitalizedFileName} />
      <p>{capitalizedFileName}</p>
      <Download url={url} name={name} />
      <TrashCan name={name} photos={photos} setPhotos={setPhotos} />
    </S.Container>
  )
}