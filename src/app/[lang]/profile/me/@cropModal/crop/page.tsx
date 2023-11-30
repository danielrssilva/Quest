'use client';

import { useRef, useState } from 'react';
import Cropper, { ReactCropperElement } from 'react-cropper';
import { useRouter } from 'next/navigation';

import { useTranslation } from '@/app/i18n/client';
import Button from '@/app/ui/button';
import IconButton from '@/app/ui/button/iconButton';
import { CloseIcon } from '@/app/ui/icons';
import { useEditUserContext } from '@/app/stores/editUser';

interface LogProps {
  params: { lang: string };
}

export default function Log({ params }: LogProps) {
  const { t } = useTranslation(params.lang, 'profile');
  const { edittedUser, setEdittedUser } = useEditUserContext();
  const router = useRouter();

  const cropperRef = useRef<ReactCropperElement>(null);
  const [cropData, setCropData] = useState(edittedUser?.avatar || '');
  const [zoom, setZoom] = useState(0.01);

  const onCrop = () => {
    if (typeof cropperRef.current?.cropper !== 'undefined') {
      setCropData(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());
    }
  };

  const onSave = () => {
    const newUser = { ...edittedUser, avatar: cropData } as User;
    setEdittedUser(newUser);
    router.back();
  };
  return (
    <div
      className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-gray-50 bg-opacity-60 pl-20 pr-72"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="after:background-none relative my-1 flex justify-center gap-2 after:pointer-events-none after:absolute after:top-[-0.3rem]  after:h-[calc(100%+0.6rem)] after:w-[calc(100%-0.475rem)] after:rounded-lg after:border after:border-accent after:content-['']">
        <div className="flex w-96 grow flex-col items-center gap-4 rounded-lg bg-white px-5 py-4">
          <div className="flex w-full justify-between">
            <h1 className="text-lg font-bold uppercase">{t('crop-title')}</h1>
            <IconButton icon={<CloseIcon />} onClick={router.back} size="sm" />
          </div>
          <div className="rounded-lg bg-foreground shadow-[inset_0_4px_4px_rgba(0,0,0,0.25)]">
            <Cropper
              ref={cropperRef}
              zoomTo={zoom}
              initialAspectRatio={1}
              src={edittedUser?.avatar}
              viewMode={2}
              background={false}
              guides={false}
              aspectRatio={1}
              className="rounded-lg"
              cropend={onCrop}
              crossOrigin="anonymous"
              zoomOnTouch={false}
              zoomOnWheel={false}
              checkCrossOrigin={false}
              style={{ height: 350, width: 350 }}
            />
          </div>
          <input
            type="range"
            name="zoom"
            id="zoom"
            onChange={(e) => {
              setZoom(Number(e.target.value));
              onCrop();
            }}
            min={0.01}
            max={2}
            step={0.01}
            defaultValue={0.01}
            className="range border-none bg-foreground accent-accent"
          />
          <div className="flex gap-4">
            <Button onClick={router.back}>{t('crop-cancel')}</Button>
            <Button onClick={onSave}>{t('crop-save')}</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
