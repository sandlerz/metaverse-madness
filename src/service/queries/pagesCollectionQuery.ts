import Fercher from '../Fercher'

export const pagesCollectionQuery = `{
  pagesCollection(limit: 1) {
    items {
      title
      heroImage {
        url
        height
      }
      paragraphs: paragraphCollection(limit: 1) {
        items {
          ... on ParagraphBlock {
            eyeBrow
						paragraph {
              json
            }
          }
        }
      }
      gallerys: gallerysCollection(limit: 1) {
        items {
          ... on Gallery{
            title
            eyeBrow
            galleryCard: cardsCollection {
              items {
                ... on GalleryCard {
                  title
                  enter
                  image {
                    url
                  }
                  icon {
                    url
                  }
                }
              }
            }
          }
        }
      }
      blocks: blocksCollection(limit: 4) {
        items {
          ... on Block {
            title
						eyeBrow
						image {
              url
            }
            items: blockItemsCollection(limit: 4) {
              items {
                ... on BlockItem {
                  title
                  icon {
                    url
                  }
                  image {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}`

const FetchPagesCollection = async (page: string) => {
  const {
    pagesCollection: { items },
  } = await Fercher(pagesCollectionQuery)

  console.log(items.filter((item: any) => item.title === page)[0], 'query file')

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return items.filter((item: any) => item.title === page)[0]
}

export default FetchPagesCollection
