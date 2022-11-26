import { render } from '@testing-library/react'
import { FullSizeImage } from './FullSizeImage'

describe('FullSizeImage', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <FullSizeImage url='http://www.google.com' />
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})