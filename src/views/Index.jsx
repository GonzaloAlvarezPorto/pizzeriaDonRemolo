import React from 'react'
import { Header } from './aHeader/Header'
import { Footer } from './cFooter/Footer'
import { Main } from './bMainViews/Main'

export const Index = () => {
    return (
        <>
            <Header />
            <Main/>
            <Footer />
        </>
    )
}
