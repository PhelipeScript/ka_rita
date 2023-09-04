import { PictureCollectionContainer, PictureContent } from './styles'

import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'

export function PictureCollection() {
  return (
    <PictureCollectionContainer>
      <PictureContent $gridArea="img1">
        <img src={img1} alt="" />
      </PictureContent>
      <PictureContent $gridArea="img2">
        <img src={img2} alt="" />
      </PictureContent>
      <PictureContent $gridArea="img3">
        <img src={img3} alt="" />
      </PictureContent>
    </PictureCollectionContainer>
  )
}
