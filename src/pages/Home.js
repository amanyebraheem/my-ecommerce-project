import React from 'react'
import Hero from '../compoent/Hero/Hero'
import LatestCollection from '../compoent/LatestCollection/LatestCollection'
import BestSeller from '../compoent/BestSeller/BestSeller'
import OurPolicy from '../compoent/OurPolicy/OurPolicy'
import Newsletterbox from '../compoent/Newsletterbox/Newsletterbox'

const Home = () => {
  return (
    <div>


<Hero />
<LatestCollection />
<BestSeller />
<OurPolicy />
<Newsletterbox />
    </div>
  )
}

export default Home