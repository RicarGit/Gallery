export const disableSubmitWhileLoadOrUpload = (loading: boolean, uploading: boolean) => {
  const submitButton = document.querySelector("button[type=submit]")

  submitButton && (loading || uploading)
    ? submitButton.setAttribute('disabled', '')
    : submitButton?.removeAttribute('disabled')
}