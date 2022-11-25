import { render } from '@testing-library/react'
import { UploadForm } from '.'

describe('PhotoCard', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <UploadForm photos={[]} setPhotos={() => ''} uploading={false} setUploading={() => true} />
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})