export default function Loading() {
  return (
    <div className="relative box-border flex h-full flex-col items-center gap-2 overflow-hidden">
      <div className="absolute left-1 top-0 h-9 w-9 rounded-full border border-solid border-disabled" />
      <div className="flex flex-col items-center gap-2">
        <div className="mb-1 h-5 w-24 animate-pulse rounded-lg bg-gray-200" />
        <div className="h-3	w-64 animate-pulse rounded-lg bg-gray-200" />
      </div>
      <div
        className="relative my-2 flex 
        w-[39.6875rem] flex-col items-center gap-2 
        after:absolute after:top-[-0.3rem] after:h-[calc(100%+0.6rem)] after:w-[calc(100%-0.475rem)]
        after:rounded-lg after:border after:border-disabled after:content-['']"
      >
        <div className="h-64 w-full animate-pulse rounded-lg bg-gray-200" />
        <div className="flex w-full flex-col items-center gap-1 rounded-lg bg-white px-6 py-4">
          <div className="h-4	w-full animate-pulse rounded-lg bg-gray-100" />
          <div className="h-4	w-full animate-pulse rounded-lg bg-gray-100" />
          <div className="h-4	w-full animate-pulse rounded-lg bg-gray-100" />
          <div className="h-4	w-full animate-pulse rounded-lg bg-gray-100" />
          <div className="h-4	w-full animate-pulse rounded-lg bg-gray-100" />
          <div className="h-4	w-full animate-pulse rounded-lg bg-gray-100" />
          <div className="h-4	w-full animate-pulse rounded-lg bg-gray-100" />
          <div className="h-4	w-full animate-pulse rounded-lg bg-gray-100" />
        </div>
        <div className="h-24 w-full animate-pulse rounded-lg bg-gray-200" />
        <div className="flex w-full flex-col items-center gap-1 rounded-lg bg-white px-6 py-4">
          <div className="h-4	w-full animate-pulse rounded-lg bg-gray-100" />
          <div className="h-4	w-full animate-pulse rounded-lg bg-gray-100" />
          <div className="h-4	w-full animate-pulse rounded-lg bg-gray-100" />
          <div className="h-4	w-full animate-pulse rounded-lg bg-gray-100" />
          <div className="h-4	w-full animate-pulse rounded-lg bg-gray-100" />
          <div className="h-4	w-full animate-pulse rounded-lg bg-gray-100" />
          <div className="h-4	w-full animate-pulse rounded-lg bg-gray-100" />
          <div className="h-4	w-full animate-pulse rounded-lg bg-gray-100" />
          <div className="h-4	w-full animate-pulse rounded-lg bg-gray-100" />
          <div className="h-4	w-full animate-pulse rounded-lg bg-gray-100" />
          <div className="h-4	w-full animate-pulse rounded-lg bg-gray-100" />
          <div className="h-4	w-full animate-pulse rounded-lg bg-gray-100" />
          <div className="h-4	w-full animate-pulse rounded-lg bg-gray-100" />
          <div className="mt-2 flex w-full justify-between">
            <div className="flex gap-2">
              <div className="h-9 w-9 rounded-full border border-solid border-disabled p-1">
                <div className="h-full w-full animate-pulse rounded-full rounded-lg bg-gray-100" />
              </div>
              <div className="flex flex-col gap-1">
                <div className="h-4	w-12 animate-pulse rounded-lg bg-gray-100" />
                <div className="h-3	w-24 animate-pulse rounded-lg bg-gray-100" />
              </div>
            </div>
            <div className="flex flex-col items-end gap-1">
              <div className="h-3 w-28 animate-pulse rounded-full bg-gray-100" />
              <div className="flex gap-4">
                <div className="h-4 w-12 animate-pulse rounded-full bg-gray-100" />
                <div className="h-4 w-28 animate-pulse rounded-full bg-gray-100" />
                <div className="h-4 w-20 animate-pulse rounded-full bg-gray-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-5	w-28 animate-pulse rounded-lg bg-gray-200" />
      <div className="h-5 w-72 animate-pulse rounded-lg bg-gray-200" />
    </div>
  );
}
