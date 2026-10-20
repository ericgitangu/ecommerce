import SanityClient from '@sanity/client'
import ImageUrlBuilder from '@sanity/image-url'

export const client = SanityClient({
    projectId: 'ehall014',
    dataset: 'production',
    apiVersion: '2022-07-18',
    useCdn: true,
})

const builder = ImageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)