export default function QuestsSkeleton() {
  const skeleton = [];
  for (let i = 0; i < 13; i++) {
    skeleton.push(
      <div
        key={`achievement-skeleton-container-${i}`}
        className='flex h-10 w-10 cursor-default items-center justify-center rounded-lg bg-white text-disabled bg-white'
      >
        <div className="w-6 h-6 pulsate bg-gray-100 rounded" />
      </div>
    );
  }
  return <>{skeleton}</>;
}
