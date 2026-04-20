import { namedMatchRegex, parseCodeTitle, stripCodeTitle } from './utils'

import type MarkdownIt from 'markdown-it'
/**
 * <div class="code-block-tab-wrapper">
 *   <div class="code-block-tab">
 *     <div class="before-wing" aria-hidden="true"></div>
 *     <div class="code-block-tab-x">
 *       <span class="code-block-tab-icon" data-icon="pnpm" aria-hidden="true"></span>
 *       <span class="code-block-tab-text">pnpm</span>
 *     </div>
 *     <div class="after-wing" aria-hidden="true"></div>
 *   </div>
 *   ${fenceRule(...args)}
 * </div>
 */
function renderCodeTab(
  escapeHtml: MarkdownIt['utils']['escapeHtml'],
  titleText: string,
  iconText: string | null,
) {
  const iconMarkup = iconText
    ? `<span class="code-block-tab-icon" data-icon="${escapeHtml(iconText)}" aria-hidden="true"></span>`
    : ''

  return `<div class="code-block-tab">
        <div class="before-wing" aria-hidden="true"></div>
        <div class="code-block-tab-x">
          ${iconMarkup}
          <span class="code-block-tab-text">${escapeHtml(titleText)}</span>
        </div>
        <div class="after-wing" aria-hidden="true"></div>
      </div>`
}

export function mdPluginCodeTab(md: MarkdownIt) {
  const fenceRule = md.renderer.rules.fence
  if (!fenceRule) {
    return
  }

  md.renderer.rules.fence = (...args) => {
    const [tokens, idx] = args
    const token = tokens[idx]

    let isOnCodeGroup = false
    for (let i = idx - 1; i >= 0; i--) {
      if (tokens[i].type === 'container_code-group_open') {
        isOnCodeGroup = true
        break
      }

      if (tokens[i].type === 'container_code-group_close') {
        break
      }
    }

    const parsedTitle = parseCodeTitle(token.info)
    if (isOnCodeGroup || !parsedTitle || (token as any).src) {
      return fenceRule(...args)
    }

    const namedIconMatch = parsedTitle.text.match(namedMatchRegex)
    const titleText = namedIconMatch
      ? parsedTitle.text.replace(namedIconMatch[0], '').trim()
      : parsedTitle.text
    const originalInfo = token.info
    token.info = stripCodeTitle(token.info)

    const rendered = `<div class="code-block-tab-wrapper">
          ${renderCodeTab(
            md.utils.escapeHtml,
            titleText,
            parsedTitle.showIcon ? parsedTitle.iconText : null,
          )}
          ${fenceRule(...args)}
        </div>
        `

    token.info = originalInfo

    return rendered
  }
}
