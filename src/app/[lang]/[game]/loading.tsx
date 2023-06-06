import { SkeletonNews } from '@/app/ui/news/news';

export default function Loading() {
  return (
    <div className="flex flex-col items-center gap-4 px-4">
      <div className="flex flex-col items-center gap-1">
        <div className="h-6 w-6 animate-pulse rounded bg-gray-200" />
        <div className="h-6 w-24 animate-pulse rounded-lg bg-gray-200" />
      </div>
      <div className="flex gap-4">
        <div className="flex justify-between gap-8">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-7 w-24 rounded-lg bg-gray-200" />
                <div className="h-5 w-5 rounded bg-gray-200" />
              </div>
              <div className="h-7 w-24 rounded-lg bg-gray-200" />
            </div>
            <div className="flex gap-4">
              <div className="after:background-none object-fit relative my-1 flex justify-center gap-2 after:pointer-events-none after:absolute after:top-[-0.3rem]  after:h-[calc(100%+0.6rem)] after:w-[calc(100%-0.475rem)] after:rounded-lg after:border after:border-gray-300 after:content-['']">
                <div className="h-[9.125rem] w-[16.25rem] animate-pulse rounded-lg bg-gray-200" />
              </div>
              <div className="flex h-[9.5rem] w-[27rem] flex-col justify-center gap-2 rounded-lg bg-white p-4">
                <div className="h-3 w-full animate-pulse rounded-lg bg-gray-200" />
                <div className="h-3 w-full animate-pulse rounded-lg bg-gray-200" />
                <div className="h-3 w-full animate-pulse rounded-lg bg-gray-200" />
                <div className="h-3 w-full animate-pulse rounded-lg bg-gray-200" />
                <div className="h-3 w-full animate-pulse rounded-lg bg-gray-200" />
                <div className="h-3 w-full animate-pulse rounded-lg bg-gray-200" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="whitespace-nowrap text-lg font-bold uppercase">
              <div className="h-7 w-24 rounded-lg bg-gray-200" />
            </h1>
            <div className="flex flex-col gap-4">
              <div className="flex w-[9.25rem] items-center gap-2 rounded-lg bg-white	p-2 text-base font-semibold">
                <div className="h-6 w-full animate-pulse rounded-lg bg-gray-200" />
              </div>
              <div className="flex w-[9.25rem] items-center gap-2 rounded-lg bg-white	p-2 text-base font-semibold">
                <div className="h-6 w-full animate-pulse rounded-lg bg-gray-200" />
              </div>
              <div className="flex w-[9.25rem] items-center gap-2 rounded-lg bg-white	p-2 text-base font-semibold">
                <div className="h-6 w-full animate-pulse rounded-lg bg-gray-200" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex justify-between gap-8">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between ">
              <div className="flex items-center gap-2">
                <div className="h-7 w-24 rounded-lg bg-gray-200" />
                {/* Notification icon: <div className="h-5 w-5 rounded bg-gray-200" /> */}
              </div>
              {/* View all: <div className="h-7 w-24 rounded-lg bg-gray-200" /> */}
            </div>
            <div className="flex flex-col gap-4">
              <SkeletonNews compact />
              <SkeletonNews compact inverted />
              <SkeletonNews compact />
            </div>
            {/* Logs here */}
          </div>
          <div className="flex flex-col gap-2">
            <div className="h-7 w-24 rounded-lg bg-gray-200" />
            <div className="flex w-[25.75rem] flex-col gap-4 rounded-lg bg-white p-4">
              <div className="grid grid-flow-col grid-cols-3 grid-rows-2 items-center gap-x-2 gap-y-4">
                <div className="flex flex-col gap-2">
                  <div className="h-4 w-24 animate-pulse rounded-lg bg-gray-200" />
                  <div className="h-4 w-28 animate-pulse rounded-lg bg-gray-200" />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="h-4 w-24 animate-pulse rounded-lg bg-gray-200" />
                  <div className="h-4 w-28 animate-pulse rounded-lg bg-gray-200" />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="h-4 w-24 animate-pulse rounded-lg bg-gray-200" />
                  <div className="h-4 w-28 animate-pulse rounded-lg bg-gray-200" />
                </div>
                <div className="col-start-1 row-start-2 flex flex-col gap-2">
                  <div className="h-4 w-24 animate-pulse rounded-lg bg-gray-200" />
                  <div className="flex gap-2">
                    <div className="h-4 w-4 rounded-lg bg-gray-200" />
                    <div className="h-4 w-4 rounded-lg bg-gray-200" />
                    <div className="h-4 w-4 rounded-lg bg-gray-200" />
                  </div>
                </div>
                <div className="col-start-2 row-start-2 flex flex-col gap-2">
                  <div className="h-4 w-24 animate-pulse rounded-lg bg-gray-200" />
                  <div className="flex gap-2">
                    <div className="h-4 w-24 animate-pulse rounded-lg bg-gray-200" />
                    <hr className="h-4 w-px animate-pulse rounded-full bg-gray-200" />
                    <div className="h-4 w-24 animate-pulse rounded-lg bg-gray-200" />
                  </div>
                </div>
              </div>
            </div>
            {/* Review section here */}
            <div className="h-7 w-24 rounded-lg bg-gray-200" />
            <div className="grid grid-flow-row grid-cols-2 gap-4">
              <div className="after:background-none object-fit relative my-1 flex h-[120px] w-[200px] justify-center gap-2 after:pointer-events-none after:absolute after:top-[-0.3rem] after:h-[calc(100%+0.6rem)] after:w-[calc(100%-0.475rem)] after:rounded-lg after:border after:border-gray-300 after:content-['']">
                <div className="h-[7.5rem] w-[12.5rem] animate-pulse rounded-lg bg-gray-200" />
              </div>
              <div className="after:background-none object-fit relative my-1 flex h-[120px] w-[200px] justify-center gap-2 after:pointer-events-none after:absolute after:top-[-0.3rem] after:h-[calc(100%+0.6rem)] after:w-[calc(100%-0.475rem)] after:rounded-lg after:border after:border-gray-300 after:content-['']">
                <div className="h-[7.5rem] w-[12.5rem] animate-pulse rounded-lg bg-gray-200" />
              </div>
              <div className="after:background-none object-fit relative my-1 flex h-[120px] w-[200px] justify-center gap-2 after:pointer-events-none after:absolute after:top-[-0.3rem] after:h-[calc(100%+0.6rem)] after:w-[calc(100%-0.475rem)] after:rounded-lg after:border after:border-gray-300 after:content-['']">
                <div className="h-[7.5rem] w-[12.5rem] animate-pulse rounded-lg bg-gray-200" />
              </div>
              <div className="after:background-none object-fit relative my-1 flex h-[120px] w-[200px] justify-center gap-2 after:pointer-events-none after:absolute after:top-[-0.3rem] after:h-[calc(100%+0.6rem)] after:w-[calc(100%-0.475rem)] after:rounded-lg after:border after:border-gray-300 after:content-['']">
                <div className="h-[7.5rem] w-[12.5rem] animate-pulse rounded-lg bg-gray-200" />
              </div>
              <div className="after:background-none object-fit relative my-1 flex h-[120px] w-[200px] justify-center gap-2 after:pointer-events-none after:absolute after:top-[-0.3rem] after:h-[calc(100%+0.6rem)] after:w-[calc(100%-0.475rem)] after:rounded-lg after:border after:border-gray-300 after:content-['']">
                <div className="h-[7.5rem] w-[12.5rem] animate-pulse rounded-lg bg-gray-200" />
              </div>
              <div className="after:background-none object-fit relative my-1 flex h-[120px] w-[200px] justify-center gap-2 after:pointer-events-none after:absolute after:top-[-0.3rem] after:h-[calc(100%+0.6rem)] after:w-[calc(100%-0.475rem)] after:rounded-lg after:border after:border-gray-300 after:content-['']">
                <div className="h-[7.5rem] w-[12.5rem] animate-pulse rounded-lg bg-gray-200" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
