import cardImg1 from '../assets/gallery/grid_0.webp'
import cardImg2 from '../assets/gallery/apocalypa.png'
import cardImg3 from '../assets/gallery/ruiz.png'
import cardImg4 from '../assets/gallery/sandlerz.png'
import cardImg5 from '../assets/gallery/dj.png'

import iconLook from '../assets/icons/look.png'
import iconArrow from '../assets/icons/arrow.png'

import planet1 from '../assets/planets/planet1.png'

import itemImg1 from '../assets/itemsImages/img1.png'
import itemImg2 from '../assets/itemsImages/img2.png'
import itemImg3 from '../assets/itemsImages/img3.png'

import bgColor1 from '../assets/BgBlurColor/1.png'
import bgColor2 from '../assets/BgBlurColor/2.png'
import bgColor3 from '../assets/BgBlurColor/3.png'
import bgColor4 from '../assets/BgBlurColor/4.png'
import bgColor6 from '../assets/BgBlurColor/6.png'
import bgColor7 from '../assets/BgBlurColor/7.png'

import founderImageBlock from '../assets/founderBlock.png'

import world from '../assets/world.png'

export const string = {
  initialBackgroundColor: { r: 27, g: 27, b: 27 },
  hero: {
    text: 'Home',
  },
  sectionOne: {
    eyeBrow: 'About Metaverus',
    text: "<b>Metaverse</b> is a new thing in the future, where you can enjoy the virtual world by feeling like it's really real, you can feel what you feel in this metaverse world, because this is really the <b>madness of the metaverse</b> of today, using only <b>VR</b> devices you can easily explore the metaverse world you want, turn your dreams into reality. Let's explore the madness of the metaverse by scrolling down",
  },
  gallery: {
    eyeBrow: 'The World',
    title: 'Choose the world you want to explore',
    cards: [
      {
        title: 'The Hogwarts',
        enter: 'ENTER METAVERSE',
        img: cardImg1,
        icon: iconLook,
      },
      {
        title: 'The Upside Down',
        enter: 'ENTER METAVERSE',
        img: cardImg2,
        icon: iconLook,
      },
      {
        title: 'Kadirojo Permai',
        enter: 'ENTER METAVERSE',
        img: cardImg3,
        icon: iconLook,
      },
      {
        title: 'Paradise Island',
        enter: 'ENTER METAVERSE',
        img: cardImg4,
        icon: iconLook,
      },
      {
        title: 'Hawkins Labs',
        enter: 'ENTER METAVERSE',
        img: cardImg5,
        icon: iconLook,
      },
    ], // TODO Icon of each card
  },
  highlightBlock1: {
    img: planet1,
    eyeBrow: 'How Metaverus Works',
    title: 'Get started with just a few clicks',
    items: [
      { text: 'Find a world that suits you and you want to enter' },
      { text: 'Enter the world by reading basmalah to be safe' },
      {
        text: 'No need to beat around the bush, just stay on the gas and have fun',
      },
    ],
  },
  highlightBlock2: {
    img: cardImg1,
    eyeBrow: 'Whats New?',
    title: "What's new about Metaversus?",
    items: [
      {
        title: 'A new world',
        text: 'Find a world that suits you and you want to enter',
        icon: iconLook,
      },
      {
        title: 'More realistic',
        text: 'Enter the world by reading basmalah to be safe',
        icon: iconLook,
      },
    ],
  },
  highlightBlock3: {
    eyeBrow: 'People on the World',
    title:
      'Track friends around you and invite them to play together in the same world',
    img: world,
  },
  highlightBlock4: {
    eyeBrow: 'Insight',
    title: 'Insight about metaverse',
    items: [
      {
        img: itemImg1,
        title: 'The launch of the Metaverse makes Elon musk ketar-ketir',
        text: 'Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Diam maecenas sed enim ut sem viverra alique.',
        icon: iconArrow,
      },
      {
        img: itemImg2,
        title: '7 tips to easily master the madness of the Metaverse',
        text: 'Vitae congue eu consequat ac felis donec. Et magnis dis parturient montes nascetur ridiculus mus. Convallis tellus id interdum',
        icon: iconArrow,
      },
      {
        img: itemImg3,
        title: 'With one platform you can explore the whole world virtually',
        text: 'Quam quisque id diam vel quam elementum. Viverra nam libero justo laoreet sit amet cursus sit. Mauris in aliquam sem',
        icon: iconArrow,
      },
    ],
  },
  bgImgs: [
    {
      url: bgColor1,
      top: -718,
      left: -289,
    },
    {
      url: bgColor2,
      top: -337,
      right: 159,
    },
    {
      url: bgColor3,
      top: 650,
      right: -800,
    },
    {
      url: bgColor4,
      top: 1000,
      left: -80,
    },
    {
      url: bgColor6,
      bottom: 675,
      left: -50,
    },
    {
      url: bgColor4,
      bottom: 500,
      left: -250,
    },
    {
      url: bgColor7,
      right: 0,
      bottom: 0,
      left: 0,
    },
  ],
  founderBlock: {
    name: 'Samantha',
    position: 'Founder Metaverus',
    text: "“With the development of today's technology, metaverse is very useful for today's work, or can be called web 3.0. by using metaverse you can use it as anything”",
    image: {
      url: founderImageBlock,
    },
  },
}
