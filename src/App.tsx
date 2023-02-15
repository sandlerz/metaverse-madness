import { useState } from 'react'
import { Gallery } from './components/Gallery/Gallery'
import { GalleryCard } from './components/Gallery/components/GalleryCard'
import { GalleryEnter } from './components/Gallery/components/GalleryEnter'
import { GalleryIcon } from './components/Gallery/components/GalleryIcon'
import { GalleryImage } from './components/Gallery/components/GalleryImage'
import { GalleryTitle } from './components/Gallery/components/GalleryTitle'
import { Hero } from './components/Hero'
import { Navigation } from './components/Navigation'
import { Paragraph } from './components/Paragraph'
import { SocialsIcons } from './components/SocialsIcons'
import { string } from './data/strings'
import { RGBType } from './interfaces/interfaces'
import { HighlightBlock } from './components/HighlightBlock/HighlightBlock'
import { HighlightBlockImage } from './components/HighlightBlock/components/HighlightBlockImage'
import { HighlightBlockBody } from './components/HighlightBlock/components/HighlightBlockBody/HighlightBlockBody'
import { HighlightBlockBodyItems } from './components/HighlightBlock/components/HighlightBlockBody/components/HighlightBlockBodyItems'
import { EyeBrow } from './components/EyeBrow'
import { HighlightBlockBodyTitle } from './components/HighlightBlock/components/HighlightBlockBody/components/HighlightBlockBodyTitle'
import { HighlightBlockBodyItemsV2 } from './components/HighlightBlock/components/HighlightBlockBody/components/HighlightBlockBodyItemsV2'
import { BackgroundHoverEffect } from './components/BackgroundHoverEffect/BackgroundHoverEffect'
import { HighlightBlockBodyItemsV3 } from './components/HighlightBlock/components/HighlightBlockBody/components/HighlightBlockBodyItemsV3'
import { BgImagesDecoration } from './components/BgImagesDecoration/BgImagesDecoration'

function App() {
  const {
    hero,
    sectionOne,
    gallery,
    initialBackgroundColor,
    highlightBlock1,
    highlightBlock2,
    highlightBlock3,
    highlightBlock4,
    bgImgs,
  } = string

  const [backgroundColor, setBackgroundColor] = useState<RGBType>(
    initialBackgroundColor
  )

  const [backgroundImage, setBackgroundImage] = useState({
    onHover: false,
    img: '',
  })

  return (
    <main
      className="min-h-screen flex flex-col items-center  text-white  mx-auto py-9 relative transition-[background] duration-500 z-20 overflow-hidden"
      style={{
        backgroundColor: `rgb(${Object.values(backgroundColor)})`,
      }}
    >
      <Navigation />
      <SocialsIcons />
      <Hero heroText={hero.text} />
      <Paragraph
        eyeBrow={sectionOne.eyeBrow}
        paragraph={sectionOne.text}
        className="section-space page-width"
      />

      <Gallery
        eyeBrow={gallery.eyeBrow}
        title={gallery.title}
        setColorHover={setBackgroundColor}
        initialColorHover={initialBackgroundColor}
        setImageHover={setBackgroundImage}
        className="section-space page-width"
      >
        {gallery.cards.map(card => (
          <GalleryCard card={card} key={card.title}>
            <GalleryImage />
            <GalleryIcon />
            <GalleryTitle />
            <GalleryEnter />
          </GalleryCard>
        ))}
      </Gallery>

      <HighlightBlock
        data={highlightBlock1}
        className="section-space page-width"
      >
        <HighlightBlockImage />
        <HighlightBlockBody>
          <EyeBrow eyeBrow={highlightBlock1.eyeBrow} />
          <HighlightBlockBodyTitle />
          <HighlightBlockBodyItems />
        </HighlightBlockBody>
      </HighlightBlock>

      <HighlightBlock
        data={highlightBlock2}
        className="section-space page-width"
      >
        <HighlightBlockBody>
          <EyeBrow eyeBrow={highlightBlock1.eyeBrow} />
          <HighlightBlockBodyTitle />
          <HighlightBlockBodyItemsV2 />
        </HighlightBlockBody>
        <HighlightBlockImage />
      </HighlightBlock>

      <HighlightBlock
        data={highlightBlock3}
        className="section-space page-width flex-col"
      >
        <HighlightBlockBody>
          <EyeBrow eyeBrow={highlightBlock3.eyeBrow} className="text-center" />
          <HighlightBlockBodyTitle className="text-center w-[962px] mx-auto" />
          <HighlightBlockImage />
        </HighlightBlockBody>
      </HighlightBlock>

      <HighlightBlock
        data={highlightBlock4}
        className="section-space page-width flex-col"
      >
        <HighlightBlockBody>
          <EyeBrow eyeBrow={highlightBlock4.eyeBrow} className="text-center" />
          <HighlightBlockBodyTitle className="text-center w-[962px] mx-auto" />
          <HighlightBlockBodyItemsV3 />
        </HighlightBlockBody>
      </HighlightBlock>

      <BackgroundHoverEffect
        img={backgroundImage.img}
        onHover={backgroundImage.onHover}
      />

      <BgImagesDecoration bgImgs={bgImgs} />
    </main>
  )
}

export default App
