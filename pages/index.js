import React from 'react'
import { HeroBanner, FooterBanner, Product } from '../ecommerce/components'
import { client } from '../ecommerce/lib/client'

const Home = ({products, vendor}) => {
  return (
    <>
      <HeroBanner herobanner={vendor} />
      <div className="products-heading">
        <h2>Chocolates from around the world</h2>
        <p>Tickle your sweet tooth</p>
      </div>
      <div className='products-container'>
         {products?.map((product) => (
          <ui> {product.title} </ui>))}
      </div>
      <FooterBanner />

    </>
  )
}

export const getServerSideProps = async () => {
  const pquery = '*[_type == "Product"]'
  const products = await client.fetch(pquery)

  const vquery = '*[_type == "Vendor"]'
  const vendor = await client.fetch(vquery)

  const cquery = '*[_type == "Category"]'
  const category = await client.fetch(cquery)

  return {
    props: {products, category,vendor}
  }
}

export default Home