import Loading from '@/app/ui/loading/loading';

export default function LoadingModal() {
  return (
    <div className="fixed bottom-5 right-80 z-10 flex h-10 w-80 flex-col items-center gap-2 rounded-lg bg-white p-4">
      <div className="text lg flex w-full justify-between font-bold uppercase">
        <h1>Inbox</h1>
      </div>
      <Loading />
    </div>
  );
}
