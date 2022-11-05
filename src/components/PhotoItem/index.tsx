import { Photo } from '../../types/Photo'
import * as S from './styles'

export const PhotoItem = ({ url, name }: Photo) => {
  return (
    <S.Container>
      <img src={url} alt={name} />
      <p>{name}</p>
    </S.Container>
  )
}