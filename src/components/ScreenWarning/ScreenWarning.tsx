import * as S from './ScreenWarning.styled'

export type Warning = {
  emoji: string
  children: string
}

export const ScreenWarning = ({ emoji, children }: Warning) => {
  return (
    <S.ScreenWarning>
      <div className="emoji">{emoji}</div>
      {children}
    </S.ScreenWarning>
  )
}