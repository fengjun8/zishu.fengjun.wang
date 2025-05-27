"use client"

import { Info, HelpCircle, Settings, Zap, BookOpen, Shield, Users, Code } from "lucide-react"
import { FloatingButtons, SiteFooter } from "@/components/site-footer"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">字数统计工具说明</h1>

        <div className="max-w-4xl mx-auto space-y-8">
          <section className="bg-white p-6 rounded-lg shadow-md border-t">
            <h2 className="text-2xl font-semibold flex items-center mb-4">
              <Info className="mr-2 h-6 w-6 text-blue-500" />
              工具简介
            </h2>
            <p className="text-gray-700 mb-4">
              字数统计工具是一款专业的在线文本分析工具，可以帮助用户快速统计文本中的字符数量、单词数量、段落数量等信息。无论您是学生、作家、编辑、翻译人员还是网站内容创作者，都可以使用本工具来精确计算文本的字数和其他相关数据。
            </p>
            <p className="text-gray-700">
              本工具完全免费，无需下载安装，直接在浏览器中使用，支持中文、英文等多种语言的文本统计，是您写作和编辑过程中的得力助手。
            </p>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-md border-t">
            <h2 className="text-2xl font-semibold flex items-center mb-4">
              <HelpCircle className="mr-2 h-6 w-6 text-green-500" />
              如何使用
            </h2>
            <ol className="list-decimal pl-6 space-y-3 text-gray-700">
              <li>在文本框中输入或粘贴您需要统计字数的文本内容。</li>
              <li>系统会自动实时统计并显示各项数据，包括字符总数、中文字符数、英文字符数等。</li>
              <li>您可以使用工具栏中的功能按钮对文本进行处理，如清除行尾空格、段落整理等。</li>
              <li>统计结果会即时更新，无需刷新页面。</li>
              <li>完成后，您可以复制处理后的文本或清空文本框继续新的统计。</li>
            </ol>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-md border-t">
            <h2 className="text-2xl font-semibold flex items-center mb-4">
              <Settings className="mr-2 h-6 w-6 text-purple-500" />
              功能特点
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border p-4 rounded-md">
                <h3 className="font-medium mb-2">实时统计</h3>
                <p className="text-gray-700">输入文本后自动计算，无需点击任何按钮，即时获取统计结果。</p>
              </div>
              <div className="border p-4 rounded-md">
                <h3 className="font-medium mb-2">多维度统计</h3>
                <p className="text-gray-700">不仅统计总字符数，还包括中英文字符、标点符号、数字等详细分类。</p>
              </div>
              <div className="border p-4 rounded-md">
                <h3 className="font-medium mb-2">文本处理工具</h3>
                <p className="text-gray-700">提供多种文本处理功能，如清除行尾空格、段落整理、标点转换等。</p>
              </div>
              <div className="border p-4 rounded-md">
                <h3 className="font-medium mb-2">跨平台兼容</h3>
                <p className="text-gray-700">支持电脑、手机等多种设备，随时随地进行字数统计。</p>
              </div>
            </div>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-md border-t">
            <h2 className="text-2xl font-semibold flex items-center mb-4">
              <Zap className="mr-2 h-6 w-6 text-yellow-500" />
              统计项目说明
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li>
                <strong>字符总数：</strong>包括所有中文字符、英文字母、数字、标点符号和空格等。
              </li>
              <li>
                <strong>中文字符：</strong>仅统计中文汉字的数量，不包括中文标点。
              </li>
              <li>
                <strong>中文标点：</strong>包括所有中文标点符号，如"。"、"，"、"："等。
              </li>
              <li>
                <strong>英文字符：</strong>仅统计英文字母的数量，不区分大小写。
              </li>
              <li>
                <strong>英文标点：</strong>包括所有英文标点符号，如"."、","、":"等。
              </li>
              <li>
                <strong>数字字符：</strong>统计所有数字的数量。
              </li>
              <li>
                <strong>英文单词：</strong>统计由英文字母组成并由空格、标点或换行分隔的单词数量。
              </li>
              <li>
                <strong>数字单词：</strong>统计由数字组成并由空格、标点或换行分隔的数字组合数量。
              </li>
              <li>
                <strong>段落总数：</strong>统计文本中的段落数量，以换行符为分隔依据。
              </li>
            </ul>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-md border-t">
            <h2 className="text-2xl font-semibold flex items-center mb-4">
              <BookOpen className="mr-2 h-6 w-6 text-red-500" />
              使用场景
            </h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-medium mb-1">学生论文写作</h3>
                <p>快速统计论文字数，确保符合学校或期刊的字数要求。</p>
              </div>
              <div>
                <h3 className="font-medium mb-1">专业写作人员</h3>
                <p>作家、编辑、记者等可以精确计算稿件字数，便于计费或控制篇幅。</p>
              </div>
              <div>
                <h3 className="font-medium mb-1">网站内容创作</h3>
                <p>博客作者、SEO专员可以控制文章长度，优化内容结构。</p>
              </div>
              <div>
                <h3 className="font-medium mb-1">翻译工作</h3>
                <p>翻译人员可以比较原文与译文的字数差异，评估翻译工作量。</p>
              </div>
              <div>
                <h3 className="font-medium mb-1">社交媒体</h3>
                <p>控制微博、推特等平台的字符数量，确保不超过平台限制。</p>
              </div>
            </div>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-md border-t">
            <h2 className="text-2xl font-semibold flex items-center mb-4">
              <Shield className="mr-2 h-6 w-6 text-indigo-500" />
              隐私保障
            </h2>
            <p className="text-gray-700 mb-4">
              我们高度重视用户隐私，所有文本统计和处理均在您的浏览器本地完成，不会将您的文本内容上传至服务器。您可以放心使用本工具处理敏感或机密文档，无需担心信息泄露的风险。
            </p>
            <p className="text-gray-700">
              本工具不会保存您的任何文本内容，关闭或刷新页面后，所有数据将被清除。这确保了您的数据安全和隐私保护。
            </p>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-md border-t">
            <h2 className="text-2xl font-semibold flex items-center mb-4">
              <Users className="mr-2 h-6 w-6 text-teal-500" />
              用户反馈
            </h2>
            <p className="text-gray-700 mb-4">
              我们非常重视用户的反馈和建议，这是我们不断改进工具的重要依据。如果您在使用过程中遇到任何问题，或者有任何功能建议，欢迎通过以下方式联系我们：
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>点击页面右侧的"建议反馈"按钮</li>
              <li>加入我们的QQ交流群进行讨论</li>
              <li>发送邮件至我们的客服邮箱</li>
            </ul>
            <p className="text-gray-700 mt-4">我们会认真考虑每一条反馈，并在后续版本中不断优化和完善工具功能。</p>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-md border-t">
            <h2 className="text-2xl font-semibold flex items-center mb-4">
              <Code className="mr-2 h-6 w-6 text-blue-500" />
              技术支持
            </h2>
            <p className="text-gray-700 mb-4">
              本工具采用最新的Web技术开发，支持所有现代浏览器，包括但不限于Chrome、Firefox、Safari、Edge等。为了获得最佳体验，建议使用最新版本的浏览器。
            </p>
            <p className="text-gray-700">
              如果您在使用过程中遇到技术问题，可以尝试清除浏览器缓存或使用隐私模式访问。如问题依然存在，欢迎通过反馈渠道联系我们，我们的技术团队将竭诚为您服务。
            </p>
          </section>
        </div>
      </div>

      <SiteFooter />
      <FloatingButtons />
    </div>
  )
}
