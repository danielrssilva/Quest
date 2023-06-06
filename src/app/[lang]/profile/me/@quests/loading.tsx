import QuestsSkeleton from '@/app/ui/quests/skeleton'

export default function Loading() {
  return (
    <div className="flex flex-col gap-4">
      <div className="h-7 w-24 animate-pulse rounded-lg bg-gray-200" />
      <div className="flex gap-4">
        <QuestsSkeleton />
        <div className="ml-4 box-border flex w-[8.6525rem] items-center justify-center rounded-lg bg-white px-2 text-lg text-accent">
          <div className="h-6 w-full animate-pulse rounded-lg bg-gray-100" />
        </div>
      </div>
    </div>
  )
}
