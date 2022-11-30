import * as S from './Download.styled'
import downloadIcon from './download.svg'

import { DownloadImage } from 'types/DownloadImage'
import { api } from 'services/api'

export const Download = ({ url, name }: DownloadImage) => {
  return (
    <S.Container>
      <div className='download' onClick={() => api.downloadImage(url, name)}>
        <img src={downloadIcon} alt='download icon' ></img>
      </div>
    </S.Container>
  )
}