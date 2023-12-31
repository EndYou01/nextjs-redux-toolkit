import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from '../../redux/providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'NextJS - Redux Toolkit',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <div className="container mx-auto">
                    <Providers>
                        {children}
                    </Providers>
                </div>
            </body>
        </html>
    )
}
