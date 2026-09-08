import { formatDate, truncateText } from "@lib/utils"
import type { CollectionEntry } from "astro:content"
import placeholder from "@/assets/img/placeholder.png"

type Props = {
  entry: CollectionEntry<"blog"> | CollectionEntry<"projects">
  pill?: boolean
}

export default function ArrowCard({ entry, pill }: Props) {
  const { title, summary, tags, date } = entry.data;
  return (
    <a href={`/${entry.collection}/${entry.slug}`} class="flex border rounded-lg hover:bg-black/5 hover:dark:bg-white/10 border-black/15 dark:border-white/20 transition-colors duration-300 ease-in-out h-32">

      <div class="relative w-32 h-32 flex-shrink-0 overflow-hidden bg-neutral-100 dark:bg-neutral-800">
          <img
          src={entry.data.coverImage?.src || placeholder.src}
          alt={title}
          class="w-full h-full object-cover" />
      </div>
      <div class="group p-4 gap-3 flex-grow flex">
        <div class="flex-grow flex flex-col w-full group-hover:text-black group-hover:dark:text-white blend">
            {/*
            <div class="mb-3 flex flex-wrap items-center gap-2">
              {pill &&
              <div class="text-sm capitalize px-2 py-0.5 rounded-full border border-black/15 dark:border-white/25">
                {entry.collection === "blog" ? "post" : "project"}
              </div>
              }
              <div class="text-sm uppercase">
                {formatDate(date)}
              </div>
            </div>
            */}
          <div class="flex-none font-semibold text-black dark:text-white line-clamp-2">
            {title}
          </div>

          <div class="text-sm line-clamp-2 flex-grow">
            {summary}
          </div>
          <ul class="flex-none flex flex-wrap mt-2 gap-1">
            {tags.map((tag: string) => ( // this line has an error; Parameter 'tag' implicitly has an 'any' type.ts(7006)
              <li class="text-xs uppercase py-0.5 px-2 rounded bg-black/5 dark:bg-white/20 text-black/75 dark:text-white/75">
                {truncateText(tag, 20)}
              </li>
            ))}
          </ul>
        </div>
        <div class="flex-none flex items-center h-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="stroke-current group-hover:stroke-black group-hover:dark:stroke-white">
            <line x1="5" y1="12" x2="19" y2="12" class="scale-x-0 group-hover:scale-x-100 translate-x-4 group-hover:translate-x-1 transition-all duration-300 ease-in-out" />
            <polyline points="12 5 19 12 12 19" class="translate-x-0 group-hover:translate-x-1 transition-all duration-300 ease-in-out" />
          </svg>
        </div>
        </div>
    </a>
  )
}
