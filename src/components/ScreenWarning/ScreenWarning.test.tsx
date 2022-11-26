import { render } from '@testing-library/react'
import { ScreenWarning } from './ScreenWarning'

describe('PhotoCard', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <ScreenWarning emoji=''>
        {'children'}
      </ScreenWarning>
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})