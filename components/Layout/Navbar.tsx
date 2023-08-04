'use client'
import React, { useEffect, useState } from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem
} from '@nextui-org/react'
import Image from 'next/image'
import Button from '@/components/Button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbars() {
  const menuItems = [
    { label: 'Home', url: '/' },
    { label: 'Blog', url: '/blog' },
    { label: 'Profile', url: '/profile' },
    { label: 'Project', url: '/project' },
    { label: 'Contact', url: '/contact' },
    { label: 'Login', url: '/login' }
  ]
  const pathName = usePathname()
  const [active, setActive] = useState('')

  useEffect(() => {
    const activeItem = menuItems.find((item) => item.url === pathName)
    if (activeItem) {
      setActive(activeItem.label)
    } else {
      setActive('')
    }
  }, [pathName])

  return (
    <Navbar disableAnimation isBordered className='text-white bg-black'>
      <NavbarContent className='sm:hidden' justify='start'>
        <NavbarMenuToggle />
      </NavbarContent>
      <NavbarContent className='hidden sm:flex gap-10 text-[14px] font-medium' justify='center'>
        <NavbarBrand>
          <Image src='/logo.svg' width={100} height={100} alt='avatar-logo' />
        </NavbarBrand>
        <NavbarItem>
          <Link href='/' className={`hover:text-[#81f8ff]  ${active === 'Home' && `text-red-600`} `}>
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color='foreground'
            href='/blog'
            className={`hover:text-[#81f8ff]  ${active === 'Blog' && `text-red-600`} `}
          >
            Blog
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color='foreground'
            href='/profile'
            className={`hover:text-[#81f8ff]  ${active === 'Profile' && `text-red-600`} `}
          >
            Profile
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color='foreground'
            href='/project'
            className={`hover:text-[#81f8ff]  ${active === 'Project' && `text-red-600`} `}
          >
            Project
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color='foreground'
            href='/contact'
            className={`hover:text-[#81f8ff]  ${active === 'Contact' && `text-red-600`} `}
          >
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify='end' className='text-[15px]'>
        <NavbarItem className='hidden md:flex'>
          <Link href='/login' className='hover:text-[#81f8ff]  hover:underline'>
            <Button>Login</Button>
          </Link>
        </NavbarItem>
        <NavbarItem className='block md:hidden'>
          <Link href='/' className='hover:text-[#81f8ff]  hover:underline'>
            <Button>Welcome !</Button>
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className='w-full'
              color={index === 2 ? 'warning' : index === menuItems.length - 1 ? 'danger' : 'foreground'}
              href={item.url}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
