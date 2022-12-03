import * as S from './Download.styled'
import downloadIcon from './download.svg'
import { api } from 'services/api'

export type DownloadImage = {
  url: string
  name: string
}

export const Download = ({ url, name }: DownloadImage) => {
  return (
    <S.Container>
      <div className='download' onClick={() => api.downloadImage(url, name)}>
        <img src={downloadIcon} alt='download icon' ></img>
      </div>
    </S.Container>
  )
}