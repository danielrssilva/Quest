export default function Skeleton() {
  return (
    <div className="flex flex-col items-center gap-4">
      <hr className="h-px w-5 rounded-sm bg-background" />
      <div className="h-4 w-4 animate-pulse	rounded bg-background" />
      <div className="flex flex-col items-center gap-2">
        <div className="h-8 w-8 animate-pulse	rounded-full bg-background" />
        <div className="h-8 w-8 animate-pulse	rounded-full bg-background" />
        <div className="h-8 w-8 animate-pulse	rounded-full bg-background" />
        <div className="h-8 w-8 animate-pulse	rounded-full bg-background" />
      </div>
      <hr className="h-px w-5 rounded-sm bg-background" />
      <div className="h-4 w-4 animate-pulse	rounded bg-background" />
      <div className="flex flex-col items-center gap-2">
        <div className="h-8 w-8 animate-pulse	rounded-full bg-background" />
        <div className="h-8 w-8 animate-pulse	rounded-full bg-background" />
        <div className="h-8 w-8 animate-pulse	rounded-full bg-background" />
        <div className="h-8 w-8 animate-pulse	rounded-full bg-background" />
        <div className="h-8 w-8 animate-pulse	rounded-full bg-background" />
        <div className="h-8 w-8 animate-pulse	rounded-full bg-background" />
      </div>
    </div>
  );
}
