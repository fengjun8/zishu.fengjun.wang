import CharacterCounter from "@/components/character-counter"
import { SiteFooter } from "@/components/site-footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "字数统计器-在线字数统计工具-查字数-统计字符字节汉字数字标点符号-计算word文章字数",
  description:
    "字数统计在线工具，可以统计word文档、英文、中文、数字、汉字、字母和标点符号的字数。支持统计字数,统计字节数,统计字符数,统计word字数,在线字数统计,在线查字数,计算字数等功能,支持手机移动端查询多少字数。",
  keywords:
    "字数统计,查字数,字数统计工具,字符统计,字节统计,字数计算,统计字数,英语字数统计,统计字符数,统计word字数,在线字数统计,在线查字数,计算字数,字数统计工具,Calculate,Count,number of words",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex-grow">
        <CharacterCounter />
      </div>
      <SiteFooter />
    </main>
  )
}
