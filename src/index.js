import xss from 'xss'

export default function (Alpine) {
  Alpine.safe = (html) => xss(html.toString())

  Alpine.magic('safe', () => (html) => Alpine.safe(html))

  Alpine.directive('safe', (el, { expression }, { effect, evaluateLater }) => {
    const evaluate = evaluateLater(expression)

    effect(() => evaluate((html) => (el.innerHTML = Alpine.safe(html))))
  })
}
