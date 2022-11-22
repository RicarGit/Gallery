import { SetStateAction } from 'react'
import { Photo } from 'types/Photo'

export type Upload = {
  photos: Photo[]
  setPhotos: React.Dispatch<SetStateAction<Photo[]>>
  uploading: boolean
  setUploading: React.Dispatch<SetStateAction<boolean>>
}