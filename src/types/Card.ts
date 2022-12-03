import { SetStateAction } from "react"
import { Photo } from "./Photo"

export type Card = Photo & {
  photos: Photo[]
  setPhotos: React.Dispatch<SetStateAction<Photo[]>>
}