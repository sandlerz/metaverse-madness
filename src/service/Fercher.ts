/* eslint-disable no-console */
const TOKEN_ACCESS = '6v5OwiyXFsoz8dSRshtCMmS9yGBXRO69_iDGSmCCHuk'

export default async (query: string) => {
  try {
    const res = await fetch(
      'https://graphql.contentful.com/content/v1/spaces/4ka5qydwyydg/environments/master',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + TOKEN_ACCESS,
        },
        body: JSON.stringify({
          query,
        }),
      }
    )
    const { data, errors } = await res.json()

    if (errors) {
      throw new Error(JSON.stringify(errors, null, 2))
    }

    return data
  } catch (error) {
    console.error('Contentful', error)
  }
}
