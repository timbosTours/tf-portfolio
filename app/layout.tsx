import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Providers from './Providers'
import './globals.css'
import { Roboto } from 'next/font/google'
import { Suspense } from 'react'
import Loading from './components/Loading';




const roboto = Roboto({
  weight: '400',
  subsets: ['latin']
})


export const metadata = {
  title: 'Timothy Fawcett Developer Portfolio',
  description: 'My Creative Portfolio',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
  }) {
  return (
    <html lang="en">
      <body >
        <Suspense fallback={<Loading/>}>
        <Providers>
        {children}
          </Providers>
        </Suspense>
      </body>
    </html>
  )
}
