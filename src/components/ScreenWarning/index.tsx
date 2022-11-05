import * as S from './styles'
import { Warning } from '../../types/Warning'

export const ScreenWarning = ({ emoji, children }: Warning) => {
  return (
    <S.ScreenWarning>
      <div className="emoji">{emoji}</div>
      {children}
    </S.ScreenWarning>
  )
}