import SearchForm from '@/components/search/SearchForm'
import React from 'react'
import { chakra_Petch } from '../layout'

const route = () => {
  return (
    <main className='min-h-screen'>
        <div className='container mx-auto p-2'>
          
           <SearchForm  domain={process.env.DOMAIN} font={chakra_Petch.className} />
           

        </div>
    </main>
  )
}

export default route