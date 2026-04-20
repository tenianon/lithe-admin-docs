import type MarkdownIt from 'markdown-it'
import {
  extractCodeLang,
  extractHtmlCodeTitle,
  parseCodeTitle,
  stripCodeTitle,
} from './utils'

function renderCodeGroup(
  escapeHtml: MarkdownIt['utils']['escapeHtml'],
  groupName: string,
  tabId: string,
  title: string,
  iconText: string | null,
  checked: boolean,
) {
  const escapedTitle = escapeHtml(title)
  const escapedIconText = iconText ? escapeHtml(iconText) : ''
  const checkedAttr = checked ? ' checked' : ''
  const iconAttr = iconText ? ` data-icon="${escapedIconText}"` : ''
  const iconMarkup = iconText
    ? `<span class="code-group-tab-icon" data-icon="${escapedIconText}" aria-hidden="true"></span>`
    : ''

  return `<input type="radio" name="${groupName}" id="${tabId}"${checkedAttr}><label data-title="${escapedTitle}"${iconAttr} for="${tabId}">
        <div class="before-wing" aria-hidden="true"></div>
        <div class="code-group-tab-x">
          ${iconMarkup}
          <span class="code-group-tab-icon-text">${escapedTitle}</span>
        </div>
        <div class="after-wing" aria-hidden="true"></div>
        </label>`
}

function resolveCodeGroupTab(token: any): [title: string, iconText: string | null] | null {
  if (token.type === 'html_block') {
    const title = extractHtmlCodeTitle(token.content)
    return title ? [title, null] : null
  }

  if (token.type !== 'fence' || token.tag !== 'code') {
    return null
  }

  const parsedTitle = parseCodeTitle(token.info)
  const strippedInfo = stripCodeTitle(token.info)
  const title = parsedTitle?.text || extractCodeLang(strippedInfo) || 'txt'

  token.info = strippedInfo

  return [title, parsedTitle?.showIcon ? parsedTitle.iconText : null]
}

/**
 * <label data-title="npm" for="tab-43">
 *   <div class="before-wing" aria-hidden="true"></div>
 *   <span class="code-group-x">
 *     <span class="code-group-icon" aria-hidden="true"></span>
 *     <span class="code-group-icon-text">npm</span>
 *   </span>
 *   <div class="after-wing" aria-hidden="true"></div>
 * </label>
 */
export function mdPluginCodeGroup(md: MarkdownIt) {
  const codeGroupOpenRule = md.renderer.rules['container_code-group_open']

  if (!codeGroupOpenRule) {
    return
  }

  md.renderer.rules['container_code-group_open'] = (...args) => {
    const [tokens, idx] = args
    const escapeHtml = md.utils.escapeHtml

    if (tokens[idx].nesting !== 1) {
      return codeGroupOpenRule(...args)
    }

    let tabs = ''
    let isFirstTab = true
    const groupName = `group-${idx}`

    for (
      let i = idx + 1;
      !(tokens[i].nesting === -1 && tokens[i].type === 'container_code-group_close');
      ++i
    ) {
      const token = tokens[i]
      const tab = resolveCodeGroupTab(token)
      if (!tab) {
        continue
      }

      const tabId = `tab-${i}`
      tabs += renderCodeGroup(
        escapeHtml,
        groupName,
        tabId,
        tab[0],
        tab[1],
        isFirstTab,
      )

      if (isFirstTab && token.type === 'fence') {
        token.info += ' active'
      }

      isFirstTab = false
    }

    return `<div class="vp-code-group"><div class="tabs">${tabs}</div><div class="blocks">
`
  }
}
