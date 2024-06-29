import React from 'react'
import Hero from '../Hero/Hero'
import Offers from '../Offers/Offers'
import Popular from '../item/Popular'
import NewCollection from '../Components/Newcollections/NewCollection'
import Newsletter from '../Components/News/Newsletter'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollection/>
      <Newsletter/>
    </div>
  )
}

export default Shop