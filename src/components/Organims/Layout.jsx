import React from 'react'
import Text from '../Atoms/Text'
import { Nav } from '../Molecules/Nav'
import { Outlet } from 'react-router'

export const Layout = () => {
  return (
    <div>
        <Text text={"Bienvenidos"} desing={"text-white mb-4"}/>
        <Nav/>

        <main>
            <Outlet/>
        </main>
    </div>
  )
}
