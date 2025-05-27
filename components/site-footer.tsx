"use client"

import Link from "next/link"
import { ArrowUp, MessageSquare } from "lucide-react"

// 浮动按钮组件
export function FloatingButtons() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  return (
    <div className="fixed right-6 bottom-5 flex flex-col gap-3 z-10">
      <Link
        href="http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=MXV4lbFjqckRUh3HKPkLLlWeVe2aYQFf&authKey=yrVBJboQzFqu%2FM6cHNzsM5JAXJwjRIgSdiaQdppyyHqrLH5utNkGbhNqSFP4ds7l&noverify=0&group_code=651856790"
        target="_blank"
        className="flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-all"
        aria-label="QQ交流群"
      >
        <img src="/images/qq-logo.png" alt="QQ" className="w-5 h-5" />
      </Link>
      <Link
        href="https://www.fengjun.wang/feedback"
        target="_blank"
        className="flex items-center justify-center w-10 h-10 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all"
        aria-label="建议反馈"
      >
        <MessageSquare size={16} />
      </Link>
      <button
        onClick={scrollToTop}
        className="flex items-center justify-center w-10 h-10 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 transition-all"
        aria-label="返回顶部"
      >
        <ArrowUp size={16} />
      </button>
    </div>
  )
}

// 页脚组件
export function SiteFooter() {
  return (
    <footer className="bg-[#2B3A67] text-white py-6 text-center mt-12 w-full">
      <div className="container mx-auto px-4">
        <p className="mb-2">
          © {new Date().getFullYear()}{" "}
          <Link href="/" className="hover:text-gray-200">
            字数统计工具
          </Link>{" "}
          版权所有
        </p>
        <p className="mb-2">
          <a
            href="http://beian.miit.gov.cn/"
            rel="noreferrer external nofollow"
            target="_blank"
            className="hover:text-gray-200"
          >
            粤ICP备2022149896号
          </a>
        </p>
        <p>
          <Link href="https://www.fengjun.wang/about" className="hover:text-gray-200">
            关于我们
          </Link>
        </p>
      </div>
    </footer>
  )
}
