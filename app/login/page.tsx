import React from 'react'
import type { Metadata } from 'next'
import Login from '@/components/LoginFragment/Login'

export const metadata: Metadata = {
  title: 'Login | Nguyễn Minh Huy',
  description: 'Nguyen Minh Huy - Web developer '
}
export default function LoginPage() {
  return <Login />
}
