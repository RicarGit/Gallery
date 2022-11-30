import { render } from '@testing-library/react'
import { Download } from './Download'

describe('Download', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <Download url='http://www.google.com' name='image name' />
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})