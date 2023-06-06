import Loading from '@/app/ui/loading/loading';

export default function LoadingModal() {
  return (
    <div
      className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-gray-50 bg-opacity-60 pl-20 pr-72"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <Loading />
    </div>
  );
}
//
