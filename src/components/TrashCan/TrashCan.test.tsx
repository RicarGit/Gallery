import { render } from '@testing-library/react'
import { TrashCan } from './TrashCan'

describe('PhotoCard', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <TrashCan name='photo name' photos={[]} setPhotos={() => []} />
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})