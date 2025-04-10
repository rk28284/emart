import React from 'react'
import { Header } from './Header/Header'
import { Footer } from './Footer/Footer'

export const Layout = ({children, searchQuery, setSearchQuery}) => {
  return (
    <>
    <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
        {children}
    <Footer/>
    </>
  )
}
