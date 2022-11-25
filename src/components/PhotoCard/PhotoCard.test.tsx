import { render } from '@testing-library/react'
import { PhotoCard } from '.'

describe('PhotoCard', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <PhotoCard url='www.google.com' name='image-name' photos={[]} setPhotos={() => []} />
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})