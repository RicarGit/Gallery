import { render } from '@testing-library/react'
import { UploadForm } from './UploadForm'

describe('PhotoCard', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <UploadForm photos={[]} setPhotos={() => ''} uploading={false} loading={false} setUploading={() => true} />
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})