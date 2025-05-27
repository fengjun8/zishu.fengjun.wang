"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import {
  FileText,
  Trash2,
  AlignJustify,
  FileSpreadsheet,
  Type,
  Braces,
  Info,
  HelpCircle,
  Database,
  Cpu,
  Code,
  Hash,
  Edit,
  PenTool,
  Smartphone,
  MessageSquare,
} from "lucide-react"
import Link from "next/link"
import { countCharacters } from "@/lib/counter"
import {
  clearTrailingSpaces,
  organizeParas,
  convertToChinesePunctuation,
  convertToEnglishPunctuation,
  mergeSpaces,
} from "@/lib/text-processor"
import { FloatingButtons } from "@/components/site-footer"

export default function CharacterCounter() {
  const [text, setText] = useState("")
  const [stats, setStats] = useState({
    totalChars: 0,
    chineseChars: 0,
    chinesePunctuation: 0,
    englishChars: 0,
    englishPunctuation: 0,
    numberChars: 0,
    englishWords: 0,
    numberWords: 0,
    paragraphs: 0,
  })
  const [showBackToTop, setShowBackToTop] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  // Handle text input
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value
    setText(newText)
    updateStats(newText)
  }

  // Update statistics
  const updateStats = (text: string) => {
    const stats = countCharacters(text)
    setStats(stats)
  }

  // Text processing functions
  const handleClearTrailingSpaces = () => {
    const processed = clearTrailingSpaces(text)
    setText(processed)
    updateStats(processed)
  }

  const handleOrganizeParas = () => {
    const processed = organizeParas(text)
    setText(processed)
    updateStats(processed)
  }

  const handleConvertToChinesePunctuation = () => {
    const processed = convertToChinesePunctuation(text)
    setText(processed)
    updateStats(processed)
  }

  const handleConvertToEnglishPunctuation = () => {
    const processed = convertToEnglishPunctuation(text)
    setText(processed)
    updateStats(processed)
  }

  const handleMergeSpaces = () => {
    const processed = mergeSpaces(text)
    setText(processed)
    updateStats(processed)
  }

  const handleClearText = () => {
    setText("")
    updateStats("")
  }

  // Show/hide back to top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true)
      } else {
        setShowBackToTop(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">字数在线统计器</h1>

      <div className="grid grid-cols-1 gap-6">
        <div className="col-span-1">
          <Card>
            <CardContent className="p-6">
              <div className="mb-6">
                <p className="text-gray-700 mb-4">
                  字数统计工具用于统计文本内容中的字符总数、中文字符数、英文单词数、标点符号数量等，可以方便的帮你统计文章或Word文档的字符个数，同时还有一些排版整理功能。
                </p>
                <p className="text-gray-700 mb-4">请在下面的文本框中输入要统计字数的内容</p>

                <Textarea
                  ref={textareaRef}
                  placeholder="请输入要统计字数的内容"
                  className="min-h-[200px] mb-4"
                  value={text}
                  onChange={handleTextChange}
                />

                <div className="flex flex-wrap gap-2 mb-6">
                  <Button onClick={handleClearText} variant="destructive" className="flex items-center">
                    <Trash2 className="mr-1 h-4 w-4" /> 清空文本
                  </Button>
                  <Button onClick={handleClearTrailingSpaces} variant="outline" className="flex items-center">
                    <FileText className="mr-1 h-4 w-4" /> 清除行尾空格
                  </Button>
                  <Button onClick={handleOrganizeParas} variant="outline" className="flex items-center">
                    <AlignJustify className="mr-1 h-4 w-4" /> 段落整理
                  </Button>
                  <Button onClick={handleConvertToChinesePunctuation} variant="outline" className="flex items-center">
                    <FileSpreadsheet className="mr-1 h-4 w-4" /> 转中文标点
                  </Button>
                  <Button onClick={handleConvertToEnglishPunctuation} variant="outline" className="flex items-center">
                    <Type className="mr-1 h-4 w-4" /> 转英文标点
                  </Button>
                  <Button onClick={handleMergeSpaces} variant="outline" className="flex items-center">
                    <Braces className="mr-1 h-4 w-4" /> 合并空格
                  </Button>
                </div>

                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <FileText className="mr-2 h-5 w-5 text-blue-500" /> 字数统计结果
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <StatCard label="字符总数" value={stats.totalChars} color="bg-blue-500" />
                  <StatCard label="中文字符" value={stats.chineseChars} color="bg-purple-500" />
                  <StatCard label="中文标点" value={stats.chinesePunctuation} color="bg-pink-500" />
                  <StatCard label="英文字符" value={stats.englishChars} color="bg-green-500" />
                  <StatCard label="英文标点" value={stats.englishPunctuation} color="bg-yellow-500" />
                  <StatCard label="数字字符" value={stats.numberChars} color="bg-orange-500" />
                  <StatCard label="英文单词" value={stats.englishWords} color="bg-teal-500" />
                  <StatCard label="数字单词" value={stats.numberWords} color="bg-indigo-500" />
                  <StatCard label="段落总数" value={stats.paragraphs} color="bg-cyan-500" unit="行" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 关于字数统计 - Now displayed directly below the counter */}
          <Card className="mt-6">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Info className="mr-2 h-5 w-5 text-blue-500" /> 字数统计说明
              </h2>
              <ol className="list-decimal pl-6 space-y-4">
                <li>
                  "字符总数"是指汉字、英文字母、数字、标点符号和空格等所有字符的总和。每个英文字母、英文标点、数字、汉字、空格均算一个字符；
                </li>
                <li>"中文字符数"是指所有汉字的总和。比如："我爱你"，中文字符数为3个；</li>
                <li>"中文标点数"是指所有中文标点符号的总和；</li>
                <li>"英文字符数"是指所有英文字母的总和。比如："I Love You 3000"，英文字符数为9个；</li>
                <li>"英文标点数"是指所有半角英文标点符号的总和；</li>
                <li>"数字字符"是指所有数字的总和；</li>
                <li>"英文单词"是指由英文字母组成并由空格、标点或换行分隔的单词数量；</li>
                <li>"数字单词"是指由数字组成并由空格、标点或换行分隔的数字组合数量；</li>
                <li>"段落总数"是指文本中的换行数量。</li>
              </ol>

              <div className="mt-6">
                <Link href="/about" className="text-blue-500 hover:text-blue-700 flex items-center">
                  <Info className="mr-1 h-4 w-4" /> 查看更多字数统计工具说明
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* 常见问题解答 */}
          <Card className="mt-6">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <HelpCircle className="mr-2 h-5 w-5 text-teal-500" /> 常见问题解答
              </h2>

              <div className="space-y-4">
                <div>
                  <h4 className="font-medium flex items-center mb-2">
                    <Database className="mr-2 h-4 w-4 text-blue-500" /> 网页编码中，一个汉字占多少字节？
                  </h4>
                  <p className="text-gray-700">
                    GBK编码，一个汉字占两个字节。
                    <br />
                    UTF-16编码，通常汉字占两个字节，CJKV扩展B区、扩展C区、扩展D区中的汉字占四个字节（一般字符的Unicode范围是U+0000至U+FFFF，而这些扩展部分的范围大于U+20000，因而要用两个UTF-16）。
                    <br />
                    UTF-8编码是变长编码，通常汉字占三个字节，扩展B区以后的汉字占四个字节。
                  </p>
                </div>

                <div>
                  <h4 className="font-medium flex items-center mb-2">
                    <Type className="mr-2 h-4 w-4 text-purple-500" /> word中如何空两个字?
                  </h4>
                  <p className="text-gray-700">
                    word文档中按几下空格键就等于两个汉字的长度？
                    <br />
                    一般首行缩进2个字符，1汉字=2字符，也可以在了段落前点击右键-段落-缩进和间距-4字符。
                  </p>
                </div>

                <div>
                  <h4 className="font-medium flex items-center mb-2">
                    <FileText className="mr-2 h-4 w-4 text-green-500" /> 小说中的字数?
                  </h4>
                  <p className="text-gray-700">
                    短篇小说:字数以五千至一万五千字为原则。
                    <br />
                    中篇小说:字数以三万至七万字为原则。
                    <br />
                    中长篇小说一般没有明确的字数规定， 但作为严格的出版部门，一般以字数在8万以上。作为长篇小说，
                    2万-6万字或4万-8万字或者更低一些称为中篇小说。
                    <br />
                    微型小说，指的是篇幅微小，不超过一千五百个字。
                  </p>
                </div>

                <div>
                  <h4 className="font-medium flex items-center mb-2">
                    <MessageSquare className="mr-2 h-4 w-4 text-yellow-500" /> 短信和微博最长能发多少字？
                  </h4>
                  <p className="text-gray-700">
                    目前每单位短信最多是140个英文字符/70个汉字符，超过这个的手机将自动分割成相应条数（按条数收费），并在收件人的手机上自动组合。
                    <br />
                    如果字数太多的话，比如1000个汉字，建议使用彩信进行发送（如果双方都支持彩信的话），这样会比较划算，因为单位彩信的文字最大容量是1000个中文字符。一条彩信=？条普通短信。
                    <br />
                    微博之所以要限定140个字符，就是源于从手机发短信最多的字符就是140个，根据人眼一次性识别内容的物理特性定的。更为了手机发布阅读方便。
                  </p>
                </div>

                <div>
                  <h4 className="font-medium flex items-center mb-2">
                    <Edit className="mr-2 h-4 w-4 text-red-500" /> 小说或者投稿如何计字数
                  </h4>
                  <p className="text-gray-700">
                    字数不包括标点；字符数（不计空格）包括标点，不包括空格；字符数（计空格）既包括标点，也包括空格。
                    <br />
                    考试作文计字数的话，不包括空格和标点，算字数。
                    <br />
                    向出版社、报社投稿的话，包括空格和标点，算字符数（计空格）。
                    <br />
                    根据国家1996年颁布的《标点符号用法》，常用的标点符号有16种：句号、问号、叹号、逗号、顿号、分号、冒号、引号、括号、破折号、省略号、着重号、连接号、间隔号、书名号和专名号。没有空格。所以不算标点符号。
                  </p>
                </div>

                <div>
                  <h4 className="font-medium flex items-center mb-2">
                    <PenTool className="mr-2 h-4 w-4 text-indigo-500" /> 论坛签名的长度？
                  </h4>
                  <p className="text-gray-700">
                    在很多论坛大家都会因为自己的权限不够，签名长度短的可怜，根本达不到自己想要的推广效果。在这给大家一个小技巧，但不是所有的论坛都可以。在签名时省略网页标签的后半部分，为您的签名主要内容增加字符长度，也就是省去诸如：[/url][/size][/color][/b]等标签的结束标签，也可以省略网址前缀"http://"。在您点击保存后，系统会自动为你添加，而不占用你的签名长度。
                  </p>
                </div>

                <div>
                  <h4 className="font-medium flex items-center mb-2">
                    <Smartphone className="mr-2 h-4 w-4 text-orange-500" /> 用手机上QQ和微信发一条信息占用多少流量？
                  </h4>
                  <p className="text-gray-700">
                    英文，数字：1个字节=1个字母。
                    <br />
                    汉字：2个字节=1个汉字。
                    <br />
                    B（Byte，字节）是计算机中最基本的计量单位，还有b（bit，位，注意这个b和大写B的差别），b，位，是计算机中最小的单位，1B=8b。一个英文字母或数字在电脑中占用一个字节的空间，一个汉字占用两个字节（称为字），即1字=2字节。512字=1024字节=1KB=1/1024MB。
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 位,字,字节,字长,字符串,字符,字数区别及计算方法 */}
          <Card className="mt-6">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <HelpCircle className="mr-2 h-5 w-5 text-green-500" /> 位,字,字节,字长,字符串,字符,字数区别及计算方法
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2 flex items-center">
                    <Database className="mr-2 h-4 w-4 text-blue-500" /> 位
                  </h3>
                  <p className="text-gray-700">
                    位是信息技术中使用的术语，也称比特（bit）。是最小的信息单位。Bit是二进制数字的缩写(BInarydigiT)，因为位实在是太小了，用来表示大数目时不方便，所以有了字节（byte），一个在信息技术和数码技术领域中，用于表示信息的数量的单位。即，一个字节有8个位。
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2 flex items-center">
                    <Type className="mr-2 h-4 w-4 text-purple-500" /> 字
                  </h3>
                  <p className="text-gray-700">
                    在计算机中，一串数码作为一个整体来处理或运算的，称为一个计算机字，简称字。字通常分为若干个字节(每个字节一般是8位)。在存储器中，通常每个单元存储一个字，因此每个字都是可以寻址的。字的长度用位数来表示。
                  </p>
                  <p className="text-gray-700 mt-2">
                    在计算机的运算器、控制器中，通常都是以字为单位进行传送的。字出现在不同的地址其含义是不相同。例如，送往控制器去的字是指令，而送往运算器去的字就是一个数。
                  </p>
                  <p className="text-gray-700 mt-2">
                    "字"由若干个字节构成，字的位数叫做字长，字长就是说字所对应的二进制数的长度。不同的机器有不同的字长。例如一台8位机，它的1个字就等于1个字节，字长为8位。如果是一台16位机，那么，它的1个字就由2个字节构成，字长为16位。前期的DOS就是8位的，后期的DOS是16位的，Win9X是基于DOS的，所以也是16位的，NT核心的Windows是32位的，现在也有了64位的XP/2003，CPU也有了64位的，这个操作系统和CPU所说的位就是bit的意思，即二进制数的长度。字节是固定由8位二进制构成，64位系统就代表了64位的二进制代表一个字，换算成字节就是64/8=8，即是说由8字节构成一个字，32位系统就是32/8=4，4个字节代表一个字。
                  </p>
                  <p className="text-gray-700 mt-2">
                    如在ARM体系结构中，字的长度为32位，而在8位/16位处理器体系结构中，字的长度一般为16位。
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2 flex items-center">
                    <Database className="mr-2 h-4 w-4 text-yellow-500" /> 字节
                  </h3>
                  <p className="text-gray-700">
                    字节(Byte)是计算机信息技术用于计量存储容量和传输容量的一种计量单位，1个字节等于8位二进制。
                  </p>
                  <p className="text-gray-700 mt-2">由字节引申出的计量单位</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                    <div>1kilobyte[kB]=1000(10³)byte</div>
                    <div>1megabyte[MB]=1000000(10⁶)byte</div>
                    <div>1gigabyte[GB]=1000000000(10⁹)byte</div>
                    <div>1terabyte[TB]=1000000000000(10¹²)byte</div>
                    <div>1petabyte[PB]=1000000000000000(10¹⁵)byte</div>
                    <div>1exabyte[EB]=1000000000000000000(10¹⁸)byte</div>
                    <div>1zettabyte[ZB]=1000000000000000000000(10²¹)byte</div>
                    <div>1yottabyte[YB]=1000000000000000000000000(10²⁴)byte</div>
                    <div>1nonabyte[NB]=1000000000000000000000000000(10²⁷)byte</div>
                    <div>1doggabyte[DB]=1000000000000000000000000000000(10³⁰)byte</div>
                    <div>1kibibyte[KiB]=1024(2¹⁰)byte</div>
                    <div>1mebibyte[MiB]=1048576(2²⁰)byte</div>
                    <div>1gibibyte[GiB]=1073741824(2³⁰)byte</div>
                    <div>1tebibyte[TiB]=1099511627776(2⁴⁰)byte</div>
                    <div>1pebibyte[PiB]=1125899906842624(2⁵⁰)byte</div>
                    <div>1exbibyte[EiB]=1152921504606846976(2⁶⁰)byte</div>
                    <div>1zebibyte[ZiB]=1180591620717411303424(2⁷⁰)byte</div>
                    <div>1yobibyte[YiB]=1208925819614629174706176(2⁸⁰)byte</div>
                    <div>1nobibyte[NiB]=1237940039285380274899124224(2⁹⁰)byte</div>
                    <div>1dogbibyte[DiB]=1267650600228229401496703205376(2¹⁰⁰)byte</div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2 flex items-center">
                    <Cpu className="mr-2 h-4 w-4 text-red-500" /> 字长
                  </h3>
                  <p className="text-gray-700">
                    字长是直接用二进制代码指令表达的计算机语言，指令是用0和1组成的一串代码，它们有一定的位数，并分成若干字长段，各段的编码表示不同的含义，例如某台计算机字长为16位，即有16个二进制数组成一条指令或其它信息。16个0和1可组成各种排列组合，通过线路变成电信号，让计算机执行各种不同的操作。
                  </p>
                  <p className="text-gray-700 mt-2">字长由微处理器对外数据通路的数据总线条数决定。</p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2 flex items-center">
                    <Code className="mr-2 h-4 w-4 text-green-500" /> 字符串
                  </h3>
                  <p className="text-gray-700">
                    字符串或串(String)是由数字、字母、下划线组成的一串字符。一般记为s="a1a2···an"(n≥0)。它是编程语言中表示文本的数据类型。
                  </p>
                  <p className="text-gray-700 mt-2">
                    通常以串的整体作为操作对象，如：在串中查找某个子串、求取一个子串、在串的某个位置上插入一个子串以及删除一个子串等。两个字符串相等的充要条件是：长度相等，并且各个对应位置上的字符都相等。设p、q是两个串，求q在p中首次出现的位置的运算叫做模式匹配。串的两种最基本的存储方式是顺序存储方式和链接存储方式。
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2 flex items-center">
                    <Type className="mr-2 h-4 w-4 text-indigo-500" /> 字符
                  </h3>
                  <p className="text-gray-700">字符(Character)是指人类语言最小的表义符号。</p>
                  <p className="text-gray-700 mt-2">
                    字符是指计算机中使用的字母、数字、字和符号，包括：1、2、3、A、B、C、~！·#￥%……—*（）——+等等。1个汉字字符存储需要2个字节，1个英文字符存储需要1个字节。例如在VB中求字符串的长度时，len（str（1234））=4。
                  </p>
                  <p className="text-gray-700 mt-2">
                    字符是可使用多种不同字符方案或代码页来表示的抽象实体。例如，UnicodeUTF-16编码将字符表示为16位整数序列，而UnicodeUTF-8编码则将相同的字符表示为8位字节序列。公共语言运行库使用UnicodeUTF-16（Unicode转换格式，16位编码形式）表示字符。
                  </p>
                  <p className="text-gray-700 mt-2">
                    针对公共语言运行库的应用程序使用编码将字符表示形式从本机字符方案映射至其他方案。应用程序使用解码将字符从非本机方案映射至本机方案。
                  </p>
                  <p className="text-gray-700 mt-2">
                    电脑和通讯设备会使用字符编码的方式来表达字符。意思是指，会将一个字符指定给某个东西。传统上，是代表整数量的位元序列，如此，则可透过网络来传输，同时亦便于储存。两个常用的例子是ASCII和用于统一码的UTF-8。根据谷歌的统计，UTF-8是目前最常用于网页的编码方式。相较于大部分的字符编码把字符对应到数字或位元串，摩斯密码则是使用不定长度的电子脉冲的序列来表现字符。
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2 flex items-center">
                    <Hash className="mr-2 h-4 w-4 text-orange-500" /> 字数
                  </h3>
                  <p className="text-gray-700">
                    不管书中标题多大，插图多少，都按横格字数乘每页行数乘总页数求出全书字数。若全页都是照片或插图，则不算字数。
                  </p>
                  <p className="text-gray-700 mt-2">字数计算有两种方法，一是包含符号，一是不含符号。</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <FloatingButtons />
    </div>
  )
}

// Stat card component
function StatCard({
  label,
  value,
  color,
  unit = "个",
}: { label: string; value: number; color: string; unit?: string }) {
  return (
    <div className="flex items-center justify-between p-3 rounded-md bg-white border">
      <span className="font-medium">{label}</span>
      <div className="flex items-center">
        <span className={`${color} text-white px-3 py-1 rounded-md font-semibold`}>{value}</span>
        <span className="ml-2">{unit}</span>
      </div>
    </div>
  )
}
