import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"
import { FileText, Home, Search } from "lucide-react"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "字数统计器",
  description: "字数统计,在线字数统计工具，统计字符、汉字、英文、数字和标点符号",
    generator: 'fengjun.wang'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="icon" href="/favicon.ico" />
        {/* Baidu Analytics */}
        <Script id="baidu-analytics" strategy="afterInteractive">
          {`
            var _hmt = _hmt || [];
            (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?fe9440bb9ea47ce70692e6675ab4fad5";
              var s = document.getElementsByTagName("script")[0]; 
              s.parentNode.insertBefore(hm, s);
            })();
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <header className="bg-white border-b">
            <div className="container mx-auto px-4">
              <nav className="flex items-center h-14">
                <Link href="/" className="flex items-center text-xl font-bold">
                  <FileText className="mr-2 h-5 w-5" />
                  字数统计
                </Link>
                <div className="ml-auto flex space-x-4">
                  <Link href="/" className="flex items-center text-gray-600 hover:text-gray-900">
                    <Home className="mr-1 h-4 w-4" />
                    首页
                  </Link>
                  <Link href="/about" className="flex items-center text-gray-600 hover:text-gray-900">
                    <Search className="mr-1 h-4 w-4" />
                    工具说明
                  </Link>
                </div>
              </nav>
            </div>
          </header>
          <div className="flex flex-col min-h-screen">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'