/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import { Gallery } from './components/Gallery/Gallery'
import { GalleryCard } from './components/Gallery/components/GalleryCard'
import { GalleryEnter } from './components/Gallery/components/GalleryEnter'
import { GalleryIcon } from './components/Gallery/components/GalleryIcon'
import { GalleryImage } from './components/Gallery/components/GalleryImage'
import { GalleryTitle } from './components/Gallery/components/GalleryTitle'
import { Hero } from './components/Hero'
import { Paragraph } from './components/Paragraph'
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
import FetchPagesCollection from './service/queries/pagesCollectionQuery'
import { ParallaxEffect } from './components/ParallaxEffect'
import { FounderBlock } from './components/FounderBlock/FounderBlock'
import { Footer } from './components/Footer/Footer'

function App() {
  const { initialBackgroundColor, bgImgs, founderBlock } = string

  const [homeData, setHomeData] = useState(null)
  const { gallerys, heroImage, title, blocks, paragraphs } =
    homeData || ({} as any)

  const [backgroundColor, setBackgroundColor] = useState<RGBType | undefined>(
    undefined
  )

  const [backgroundImage, setBackgroundImage] = useState({
    onHover: false,
    img: '',
  })

  useEffect(() => {
    if (backgroundColor) {
      const bodyStyle = document.body.style
      bodyStyle.transition = 'background 1s ease'
      bodyStyle.backgroundColor = `rgb(${Object.values(backgroundColor)})`
    }
  }, [backgroundColor])

  useEffect(() => {
    FetchPagesCollection('Home').then(page => setHomeData(page))
  }, [])

  if (!homeData) return <div>loading...</div>

  return (
    <main className="text-white transition-[background] duration-500 z-20 max-w-[1440px] px-3 md:px-32 m-auto mt-4 md:mt-14 overflow-hidden">
      <Hero heroText={title} heroImage={heroImage} />

      <ParallaxEffect>
        <Paragraph
          eyeBrow={paragraphs.items[0].eyeBrow}
          paragraph={paragraphs.items[0].paragraph.json}
        />
      </ParallaxEffect>

      <ParallaxEffect>
        {gallerys.items.map((gallery: any) => (
          <Gallery
            key={gallery.title}
            eyeBrow={gallery.eyeBrow}
            title={gallery.title}
            setColorHover={setBackgroundColor}
            initialColorHover={initialBackgroundColor}
            setImageHover={setBackgroundImage}
          >
            {gallery.galleryCard.items.slice(0, 5).map((card: any) => (
              <GalleryCard card={card} key={card.title}>
                <GalleryImage />
                <GalleryIcon />
                <GalleryTitle />
                <GalleryEnter />
              </GalleryCard>
            ))}
          </Gallery>
        ))}
      </ParallaxEffect>

      <ParallaxEffect>
        <HighlightBlock data={blocks.items[0]}>
          <HighlightBlockImage />
          <HighlightBlockBody>
            <EyeBrow
              eyeBrow={blocks.items[1].eyeBrow}
              className="md:text-left"
            />
            <HighlightBlockBodyTitle />
            <HighlightBlockBodyItems />
          </HighlightBlockBody>
        </HighlightBlock>
      </ParallaxEffect>

      <ParallaxEffect>
        <HighlightBlock data={blocks.items[1]}>
          <HighlightBlockBody>
            <EyeBrow
              eyeBrow={blocks.items[1].eyeBrow}
              className="md:text-left"
            />
            <HighlightBlockBodyTitle />
            <HighlightBlockBodyItemsV2 />
          </HighlightBlockBody>
          <HighlightBlockImage />
        </HighlightBlock>
      </ParallaxEffect>

      <ParallaxEffect>
        <HighlightBlock data={blocks.items[2]}>
          <HighlightBlockBody>
            <EyeBrow eyeBrow={blocks.items[2].eyeBrow} />
            <HighlightBlockBodyTitle className="md:text-center" />
            <HighlightBlockImage />
          </HighlightBlockBody>
        </HighlightBlock>
      </ParallaxEffect>

      <ParallaxEffect>
        <HighlightBlock data={blocks.items[3]}>
          <HighlightBlockBody>
            <EyeBrow
              eyeBrow={blocks.items[3].eyeBrow}
              className="text-center"
            />
            <HighlightBlockBodyTitle className="md:text-center" />
            <HighlightBlockBodyItemsV3 />
          </HighlightBlockBody>
        </HighlightBlock>
      </ParallaxEffect>

      <FounderBlock data={founderBlock} />

      <Footer />

      <BackgroundHoverEffect
        img={backgroundImage.img}
        onHover={backgroundImage.onHover}
      />
      <BgImagesDecoration bgImgs={bgImgs} />
    </main>
  )
}

export default App
