const keywords = ['Transformação', 'Cooperativismo', 'Agricultura familiar', 'Comida saudável']

const track = [...keywords, ...keywords, ...keywords]

export function KeywordsBar() {
  return (
    <div className="bg-brand-yellow text-brand-navy group flex min-h-(--keywords-bar-height) items-center overflow-hidden text-base font-extrabold tracking-wider uppercase motion-reduce:overflow-x-auto">
      <div className="animate-marquee flex w-max group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        {[0, 1].map((copy) => (
          <ul key={copy} aria-hidden={copy === 1} className="flex shrink-0 items-center">
            {track.map((keyword, index) => (
              <li key={`${keyword}-${index}`} className="flex items-center gap-10 pr-10">
                <span className="whitespace-nowrap">{keyword}</span>
                <span aria-hidden className="bg-brand-teal size-2 rounded-full" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}
