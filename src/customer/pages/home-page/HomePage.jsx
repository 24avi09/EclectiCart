import React from 'react'
import { MainCarousel } from '../../components'
import HomeSectionCorosel from '../../components/home-section-corosel/HomeSectionCorosel'
import { mens_kurta } from '../../../data/mens_kurta'

export const HomePage = () => {
  return (
    <div>
        <MainCarousel/>
        <div className='py-20 space-y-10 flex-col justify-center px-5 lg:px-10' >
          <HomeSectionCorosel data={mens_kurta} sectionName="Men's Kurta" />
          <HomeSectionCorosel data={mens_kurta} sectionName="Men's Shoes" />
          <HomeSectionCorosel data={mens_kurta} sectionName="Men's Shirt" />
          <HomeSectionCorosel data={mens_kurta} sectionName="Women's Saree" />
          <HomeSectionCorosel data={mens_kurta} sectionName="Women's dress" />
        </div>
    </div>
  )
}