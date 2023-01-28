import { Gallery } from './components/Gallery'
import { Hero } from './components/Hero'
import { Navigation } from './components/Navigation'
import { Paragraph } from './components/Paragraph'
import { SocialsIcons } from './components/SocialsIcons'
import { string } from './data/strings'

function App() {
  const { hero, sectionOne, gallery } = string

  return (
    <div className="min-h-screen flex flex-col items-center  text-white  mx-auto py-9 relative">
      <Navigation />
      <SocialsIcons />
      <Hero heroText={hero.text} />
      <Paragraph eyeBrow={sectionOne.eyeBrow} paragraph={sectionOne.text} />
      <Gallery
        cards={gallery.cards}
        eyeBrow={gallery.eyeBrow}
        title={gallery.title}
      />
    </div>
  )
}

export default App
