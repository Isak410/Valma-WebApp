import { getLocaleOnServer } from '@/i18n/server'
import { getServerSession } from 'next-auth'
import SessionProvider from "./components/SessionProvider"

import './styles/globals.css'
import './styles/markdown.scss'

const LocaleLayout = async({
  children,
}: {
  children: React.ReactNode
}) => {
  const locale = getLocaleOnServer()
  const session = await getServerSession()
  return (
    <html lang={locale ?? 'nb-NO'} className="h-full">
      <body className="h-full">
        <div className="overflow-x-auto">
          <div className="w-screen h-screen min-w-[300px]">
            <SessionProvider session={session}>
              {children}
            </SessionProvider>
          </div>
        </div>
      </body>
    </html>
  )
}

export default LocaleLayout
