import type MarkdownIt from 'markdown-it'

/**
 * <label data-title="npm" for="tab-43">
 *   npm
 * </label>
 * ===========================================>>>>>>
 * <label data-title="npm" for="tab-43">
 *   <span>
 *     npm
 *   </span>
 * </label>
 */
export function codeGroupMdPlugin(md: MarkdownIt) {
  const codeGroupOpenRule = md.renderer.rules['container_code-group_open']

  if (codeGroupOpenRule) {
    md.renderer.rules['container_code-group_open'] = (...args) => {
      const result = codeGroupOpenRule(...args)

      const labelWithSpanRE = /<label([^>]*data-title="[^"]*"[^>]*)>([^<]+)<\/label>/g

      return result.replace(labelWithSpanRE, (match, attributes, text) => {
        return `<label${attributes}><span>${text}</span></label>`
      })
    }
  }
}
