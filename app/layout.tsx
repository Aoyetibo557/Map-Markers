import './globals.css'
import type { Metadata } from 'next'
import {ReduxProvider} from './redux/provider';
import { Inter } from 'next/font/google'
import Image from 'next/image';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          {children}
          <Analytics />
        </ReduxProvider>
      </body>
    </html>
  )
}
