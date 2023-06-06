import Card from '@/app/ui/card'

export default function Loading() {
  return (
    <div className="flex flex-col gap-4">
      <div className="h-7 w-24 animate-pulse rounded-lg bg-gray-200" />
      <Card>
        <div className="flex gap-4">
          <div className="flex animate-pulse flex-col items-center justify-center gap-2">
            <div className="h-4 w-4 rounded-lg bg-gray-100" />
            <div className="h-4 w-4 rounded-lg bg-gray-100" />
            <div className="h-4 w-4 rounded-lg bg-gray-100" />
            <div className="h-4 w-4 rounded-lg bg-gray-100" />
            <div className="h-4 w-4 rounded-lg bg-gray-100" />
          </div>
          <div className="relative box-border flex h-44 w-44 items-center justify-center">
            <div className="z-10 h-full w-full rounded-full border border-solid border-gray-100 p-3">
              <div className="h-full w-full rounded-full" />
            </div>
            <svg
              width="178"
              height="166"
              viewBox="0 0 178 166"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-0 top-0 h-full w-full animate-spin-slowest"
            >
              <path
                d="M0 94.7051C0 52.7795 33.4809 12.7692 78.4048 12.7692C114.217 12.7692 143.036 37.4564 143.036 74.4872C143.036 96.6205 125.871 121.308 99.5952 121.308C76.2857 121.308 63.5714 106.41 63.5714 88.3205C59.7571 88.3205 57.2143 94.7051 57.2143 101.09C57.2143 118.754 78.1929 137.269 102.774 137.269C134.983 137.269 168.464 107.687 168.464 63.8462C168.464 36.6051 155.326 13.8333 144.095 0C157.869 11.7051 178 34.9026 178 71.2949C178 113.221 144.519 153.231 99.5952 153.231C63.7833 153.231 34.9643 128.544 34.9643 91.5128C34.9643 69.3795 52.1286 44.6923 78.4048 44.6923C101.714 44.6923 114.429 59.5897 114.429 77.6795C118.243 77.6795 120.786 71.2949 120.786 64.9103C120.786 47.2462 99.8071 28.7308 75.2262 28.7308C43.0167 28.7308 9.53571 58.3128 9.53571 102.154C9.53571 129.395 22.6738 152.167 33.9048 166C20.131 154.295 0 131.097 0 94.7051Z"
                className="fill-gray-100"
              />
            </svg>
          </div>
          <div className="flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <div className="h-4 w-full animate-pulse rounded-lg bg-gray-100" />
            </div>
            <div className="flex gap-4">
              <div className="flex h-24 w-96 flex-col gap-2">
                <div className="h-5 w-full animate-pulse rounded-lg bg-gray-100" />
                <div className="h-5 w-full animate-pulse rounded-lg bg-gray-100" />
                <div className="h-5 w-full animate-pulse rounded-lg bg-gray-100" />
                <div className="h-5 w-full animate-pulse rounded-lg bg-gray-100" />
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="flex h-14 w-14 animate-pulse items-center justify-center rounded-full bg-gray-100" />
                <div className="h-8 w-8 animate-pulse rounded-full bg-gray-100" />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="h-4 w-24 animate-pulse rounded-lg bg-gray-100" />
              <div className="h-4 w-24 animate-pulse rounded-lg bg-gray-100" />
              <div className="h-4 w-24 animate-pulse rounded-lg bg-gray-100" />
              <div className="h-4 w-24 animate-pulse rounded-lg bg-gray-100" />
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
