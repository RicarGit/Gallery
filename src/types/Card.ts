import { SetStateAction } from "react"
import { Photo } from "./Photo"

export type Card = {
  photos: Photo[]
  setPhotos: React.Dispatch<SetStateAction<Photo[]>>
} & Photo