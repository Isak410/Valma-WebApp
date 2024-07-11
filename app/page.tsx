import type { FC } from 'react'
import React from 'react'

import type { IMainProps } from '@/app/components'
import Main from '@/app/components'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

const App: FC<IMainProps> = async({
  params,
}: any) => {
  const session = await getServerSession()
  if (session && session.user?.name && session.user?.email) {
    return (
      <Main params={params} />
    )
  } else {
    redirect('/signin') //kan ikke gjør signin herfra, så redirekter til ny side
  }
  
}

export default React.memo(App)
