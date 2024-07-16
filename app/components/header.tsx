import type { FC } from 'react'
import React from 'react'
import {
  Bars3Icon,
  PencilSquareIcon,
} from '@heroicons/react/24/solid'
import AppIcon from '@/app/components/base/app-icon'
import { signOut } from 'next-auth/react'
export type IHeaderProps = {
  title: string
  isMobile?: boolean
  onShowSideBar?: () => void
  onCreateNewChat?: () => void
}
const Header: FC<IHeaderProps> = ({
  title,
  isMobile,
  onShowSideBar,
  onCreateNewChat,
}) => {
  return (
    <div className="shrink-0 flex items-center justify-between h-12 px-3 bg-gray-600">
      <div className='flex flex-row'>
        {isMobile
          ? (
            <div
              className='flex items-center justify-center h-8 w-8 cursor-pointer'
              onClick={() => onShowSideBar?.()}
            >
              <Bars3Icon className="h-4 w-4 text-gray-500" />
            </div>
          )
          : <div></div>}
          {isMobile
          ? (
            <div className='flex items-center justify-center h-8 w-8 cursor-pointer'
              onClick={() => onCreateNewChat?.()}
            >
              <PencilSquareIcon className="h-4 w-4 text-gray-500" />
            </div>)
          : <h1 className='text-3xl font-bold' >Iris AI</h1>}
        </div>
      <div className='flex items-center space-x-2'>
        <AppIcon size="small" />
        <div className=" text-sm text-gray-800 font-bold">{title}</div>
      </div>
      
      <button onClick={() => {signOut()}} className=' text-red-500 text-xl pb-1'>Sign out <i className="fa-solid fa-arrow-right-from-bracket color-white pt-1  text-red-500"></i></button>
    </div>
  )
}

export default React.memo(Header)
