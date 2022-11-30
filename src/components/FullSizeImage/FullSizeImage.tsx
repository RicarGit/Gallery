import * as S from './FullSizeImage.styled'
import downloadIcon from './download.svg'

import { FullSizeImageURL } from 'types/FullSizeImageURL'

export const FullSizeImage = ({ url }: FullSizeImageURL) => {
  return (
    <S.Container>
      <a className='maximize' href={url} rel='noreferrer' target='_blank'>
        <img src={downloadIcon} alt='download icon' ></img>
      </a>
    </S.Container>
  )
}