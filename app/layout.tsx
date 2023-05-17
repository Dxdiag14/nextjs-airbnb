import { Nunito } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar/Navbar'
import ClientOnly from './components/ClientOnly'
import RegisterModal from './components/Modal/RegisterModal'
import ToasterProvider from './providers/ToasterProvide'
import LoginModal from './components/Modal/LoginModal'
import getCurrentUser from './actions/getCurrentUser'

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone'
}

const font = Nunito({
  subsets: ['latin'],
})

//Get rid of the console error of toLowerCase
const someVar = undefined;
const str = someVar || ''; // 👉️ ""
const result = str.toLowerCase();
console.log(result); // 👉️ ""


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser()

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={font.className}>
      <ClientOnly>
        <ToasterProvider />
        <LoginModal />
        <RegisterModal />
        <Navbar currentUser={currentUser} />
      </ClientOnly>
        {children}
      </body>
    </html>
  )
}
