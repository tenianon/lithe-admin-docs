export function isSetEqual(set1: Set<string>, set2: Set<string>) {
  try {
    if (set1.size !== set2.size) {
      return false
    }
    for (const item of set1) {
      if (!set2.has(item)) {
        return false
      }
    }
    return true
  } catch {
    return false
  }
}

export const namedMatchRegex = /\s~([^~]+)~/

const codeTitleBracketRE = /\[((?:[^[\]]|\[[^[\]]*\])*)\]/
const codeTitleCurlyRE = /\{((?:[^{}]|\{[^{}]*\})*)\}/

export interface ParsedCodeTitle {
  raw: string[]
  text: string
  iconText: string | null
  showIcon: boolean
}

export function parseCodeTitle(info: string): ParsedCodeTitle | null {
  const bracketMatch = info.match(codeTitleBracketRE)
  const curlyMatch = info.match(codeTitleCurlyRE)
  const bracketText = bracketMatch?.[1]?.trim() || ''
  const curlyText = curlyMatch?.[1]?.trim() || ''
  const text = curlyText || bracketText

  if (!text) {
    return null
  }

  return {
    raw: [bracketMatch?.[0], curlyMatch?.[0]].filter(
      (value): value is string => Boolean(value),
    ),
    text,
    iconText: bracketText || null,
    showIcon: Boolean(bracketText),
  }
}

export function stripCodeTitle(info: string) {
  const parsedTitle = parseCodeTitle(info)

  if (!parsedTitle) {
    return info.trim()
  }

  return parsedTitle.raw
    .reduce((currentInfo, titleToken) => currentInfo.replace(titleToken, ' '), info)
    .replace(/\s{2,}/g, ' ')
    .trim()
}

export function extractCodeLang(info: string) {
  return (
    /^[a-zA-Z0-9-_]+/
      .exec(info)?.[0]
      .replace(/-vue$/, '')
      .replace(/^vue-html$/, 'template')
      .replace(/^ansi$/, '') || ''
  )
}

export function extractHtmlCodeTitle(info: string) {
  return info.replace(/<!--[^]*?-->/g, '').match(/data-title="(.*?)"/)?.[1] || ''
}
