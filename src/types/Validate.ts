import { FormEvent } from "react"
import { Photo } from "./Photo"

export type Validate = {
  file: File
  photos: Photo[]
  e: FormEvent<HTMLFormElement>
}