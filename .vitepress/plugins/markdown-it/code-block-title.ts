import type MarkdownIt from 'markdown-it'
import { namedMatchRegex } from './utils'
/**
 * <div class="code-block-tab-wrapper">
 *   <div class="code-block-tab">
 *     <div class="code-block-tab-x">
 *       <span class="code-block-tab-icon" data-title="${md.utils.escapeHtml(title[1])}"></span>
 *       <span class="code-block-tab-text" data-title="${md.utils.escapeHtml(title[1])}">${namedIconMatch ? title[1].replace(namedIconMatch[0], '') : title[1]}</span>
 *     </div>
 *   </div>
 *   ${fenceRule(...args)}
 * </div>
 */
export function codeBlockTitleMdPlugin(md: MarkdownIt) {
  // code block rule
  const fenceRule = md.renderer.rules.fence
  if (fenceRule) {
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
      const title = token.info.match(/\[((?:[^[\]]|\[[^[\]]*\])*)\]/)

      // only render code block not in code-group
      if (!isOnCodeGroup && title && !(token as any).src) {
        const namedIconMatch = title[1].match(namedMatchRegex)
        return `<div class="code-block-tab-wrapper">
        <div class="code-block-tab">
        <div class=code-block-tab-x>
            <span class="code-block-tab-icon" data-title="${md.utils.escapeHtml(title[1])}"></span>
            <span class="code-block-tab-text" data-title="${md.utils.escapeHtml(title[1])}">${namedIconMatch ? title[1].replace(namedIconMatch[0], '') : title[1]}</span>
          </div>
        </div>
          ${fenceRule(...args)}
        </div>
        `
      }

      return fenceRule(...args)
    }
  }
}
