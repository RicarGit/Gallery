import * as S from './FullSizeImage.styled'
import maximizeIcon from './maximize.svg'

import { FullSizeImageURL } from 'types/FullSizeImageURL'

export const FullSizeImage = ({ url }: FullSizeImageURL) => {
  return (
    <S.Container>
      <a className='maximize' href={url} rel='noreferrer' target='_blank'>
        <img src={maximizeIcon} alt='maximize icon' ></img>
      </a>
    </S.Container>
  )
}