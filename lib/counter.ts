export function countCharacters(text: string) {
  // Default values
  const stats = {
    totalChars: 0,
    chineseChars: 0,
    chinesePunctuation: 0,
    englishChars: 0,
    englishPunctuation: 0,
    numberChars: 0,
    englishWords: 0,
    numberWords: 0,
    paragraphs: 0,
  }

  if (!text) return stats

  // Total characters
  stats.totalChars = text.length

  // Chinese characters
  stats.chineseChars = (text.match(/[\u4e00-\u9fa5]/g) || []).length

  // Chinese punctuation
  stats.chinesePunctuation = (text.match(/[\u3000-\u303F\uFF00-\uFFEF]/g) || []).length

  // English characters
  stats.englishChars = (text.match(/[a-zA-Z]/g) || []).length

  // English punctuation
  stats.englishPunctuation = (text.match(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/g) || []).length

  // Number characters
  stats.numberChars = (text.match(/[0-9]/g) || []).length

  // English words
  const englishWordsMatch = text.match(/[a-zA-Z]+/g)
  stats.englishWords = englishWordsMatch ? englishWordsMatch.length : 0

  // Number words
  const numberWordsMatch = text.match(/[0-9]+/g)
  stats.numberWords = numberWordsMatch ? numberWordsMatch.length : 0

  // Paragraphs
  stats.paragraphs = text.split(/\n/).filter((line) => line.trim().length > 0).length || 0

  return stats
}
