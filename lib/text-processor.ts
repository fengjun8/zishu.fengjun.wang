// Clear trailing spaces from each line
export function clearTrailingSpaces(text: string): string {
  if (!text) return ""
  return text
    .split("\n")
    .map((line) => line.trimEnd())
    .join("\n")
}

// Organize paragraphs - remove extra line breaks and ensure consistent spacing
export function organizeParas(text: string): string {
  if (!text) return ""
  // Split by line breaks, remove empty lines, and join with single line breaks
  return text
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0)
    .join("\n")
}

// Convert to Chinese punctuation
export function convertToChinesePunctuation(text: string): string {
  if (!text) return ""

  return text
    .replace(/\./g, "。")
    .replace(/,/g, "，")
    .replace(/;/g, "；")
    .replace(/:/g, "：")
    .replace(/\?/g, "？")
    .replace(/!/g, "！")
    .replace(/\(/g, "（")
    .replace(/\)/g, "）")
    .replace(/\[/g, "【")
    .replace(/\]/g, "】")
    .replace(/\{/g, "｛")
    .replace(/\}/g, "｝")
    .replace(/</g, "《")
    .replace(/>/g, "》")
    .replace(/"/g, '"')
    .replace(/'/g, "'")
}

// Convert to English punctuation
export function convertToEnglishPunctuation(text: string): string {
  if (!text) return ""

  return text
    .replace(/。/g, ".")
    .replace(/，/g, ",")
    .replace(/；/g, ";")
    .replace(/：/g, ":")
    .replace(/？/g, "?")
    .replace(/！/g, "!")
    .replace(/（/g, "(")
    .replace(/）/g, ")")
    .replace(/【/g, "[")
    .replace(/】/g, "]")
    .replace(/｛/g, "{")
    .replace(/｝/g, "}")
    .replace(/《/g, "<")
    .replace(/》/g, ">")
    .replace(/"/g, '"')
    .replace(/"/g, '"')
    .replace(/'/g, "'")
}

// Merge multiple spaces into a single space
export function mergeSpaces(text: string): string {
  if (!text) return ""
  return text.replace(/\s+/g, " ")
}
