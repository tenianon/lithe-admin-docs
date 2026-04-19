import type MarkdownIt from 'markdown-it'

const collapseFlagRE = /(^|\s)collapse(?=\s|$)/

export function codeBlockCollapseMdPlugin(md: MarkdownIt) {
  const fenceRule = md.renderer.rules.fence
  if (!fenceRule) return

  let collapseId = 0

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

    if (isOnCodeGroup || !collapseFlagRE.test(token.info)) {
      return fenceRule(...args)
    }

    const originalInfo = token.info
    token.info = token.info
      .replace(collapseFlagRE, ' ')
      .replace(/\s{2,}/g, ' ')
      .trim()

    const fenceHtml = fenceRule(...args)
    token.info = originalInfo

    collapseId += 1
    const inputId = `code-block-collapse-${collapseId}`

    return `<div class="code-block-collapse">
      <input id="${inputId}" class="code-block-collapse__state" type="checkbox">
      <div class="code-block-collapse__body">
        ${fenceHtml}
      </div>
      <label class="code-block-collapse__toggle" for="${inputId}">
      </label>
    </div>`
  }
}
