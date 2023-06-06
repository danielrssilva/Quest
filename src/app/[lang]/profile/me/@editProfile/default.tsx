'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  AddIcon,
  CellphoneIcon,
  ControllerIcon,
  MouseIcon,
} from '@/app/ui/icons';
import Button from '@/app/ui/button';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import { useTranslation } from '@/app/i18n/client';
import { useUserContext } from '@/app/stores/user';
import { capitalize } from 'lodash';
import IconButton, { LinkIcon } from '@/app/ui/button/iconButton';
import { Input, Select, TextArea } from '@/app/ui/input/input';
import { classNames } from '@/app/utils';
import { useRouter } from 'next/navigation';
import { useEditUserContext } from '@/app/stores/editUser';

interface ProfileProps extends Params {
  params: {
    lang: string;
    gametag: string;
  };
}

export default function EditProfile({ params }: ProfileProps) {
  const router = useRouter();
  const { user } = useUserContext();
  const { edittedUser, setEdittedUser } = useEditUserContext();
  const { t } = useTranslation(params.lang, 'profile');

  const handlePhotoDelete = () => {
    if (edittedUser) {
      const newUser = { ...edittedUser, avatar: '' };
      setEdittedUser(newUser);
    }
  };

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      const [fileType, fileSubtype] = file.type.split('/');
      const reader = new FileReader();
      reader.onloadend = () => {
        if (edittedUser) {
          setEdittedUser({ ...edittedUser, avatar: reader.result as string });
        }
      };
      reader.readAsDataURL(file);
      fileType !== 'video' &&
        fileSubtype !== 'gif' &&
        router.push(`${params.lang}/profile/me/crop`);
    }
  };

  useEffect(() => {
    if (user) {
      setEdittedUser(user);
    }
  }, [user, setEdittedUser]);

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-lg font-bold uppercase">{t('profile')}</h1>
      <div className="w-[44.74rem] rounded-lg bg-white p-4">
        <div className="flex gap-4">
          <div className="flex flex-col items-center justify-center gap-2">
            {edittedUser?.social.map((url, i) => (
              <div key={url === 'ADD' ? `social-add-${i}` : `social-${url}`}>
                {url === 'ADD' ? (
                  <IconButton icon={<AddIcon />} size="md" />
                ) : (
                  <LinkIcon
                    size="md"
                    icon={
                      <div className="flex h-4 w-4 items-center justify-center fill-accent stroke-accent text-accent">
                        o
                      </div>
                    }
                    href={`${url}`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="relative box-border flex h-44 w-44 items-center justify-center">
            <div className="z-10 h-full w-44 rounded-full border border-solid border-accent  p-3">
              <div className="h-full rounded-full bg-accent-light">
                {edittedUser?.avatar ? (
                  <div className="relative cursor-pointer">
                    <Link href={`/${params.lang}/profile/me/crop`}>
                      <Image
                        src={edittedUser.avatar}
                        alt="user avatar"
                        width={150}
                        height={150}
                        className="h-[9.375rem] w-[9.375rem] rounded-full object-cover"
                      />
                    </Link>
                    <button
                      className="absolute bottom-3 left-5 h-6 w-6 rounded-full bg-accent stroke-white text-sm text-white"
                      onClick={handlePhotoDelete}
                    >
                      {/* <TrashIcon /> */}
                    </button>
                    <label
                      htmlFor="profile-reupload"
                      className="absolute bottom-3 right-5 h-6 w-6 cursor-pointer rounded-full bg-accent-light stroke-accent text-sm text-accent"
                    >
                      {/* <UploadIcon /> */}
                      <input
                        type="file"
                        name="profile picture upload"
                        id="profile-reupload"
                        className="hidden"
                        onChange={handleUpload}
                      />
                    </label>
                  </div>
                ) : (
                  <label
                    htmlFor="profile-upload"
                    className="relative flex h-full w-full cursor-pointer flex-col items-center justify-center gap-3 rounded-full border 
                              bg-accent-light text-center text-sm text-accent after:pointer-events-none after:absolute after:inset-0 after:animate-spin-slowest after:rounded-full 
                              after:border-2 after:border-dashed after:border-accent after:bg-none after:content-['']"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="stroke-accent"
                    >
                      <g clipPath="url(#clip0_61_2240)">
                        <path
                          d="M0.857147 18V19.7143C0.857147 20.6236 1.21837 21.4957 1.86135 22.1387C2.50433 22.7816 3.3764 23.1429 4.28572 23.1429H19.7143C20.6236 23.1429 21.4957 22.7816 22.1387 22.1387C22.7816 21.4957 23.1429 20.6236 23.1429 19.7143V18"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6.85715 6.85712L12 0.857117L17.1429 6.85712"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 0.857117V16.2857"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                    </svg>

                    <span className="font-semibold">
                      Upload profile picture
                    </span>
                    <input
                      type="file"
                      name="profile picture upload"
                      id="profile-upload"
                      className="hidden"
                      onChange={handleUpload}
                    />
                    <span className="w-24 text-[0.625rem] leading-[0.8rem]">
                      You can upload images and gifs
                    </span>
                  </label>
                )}
              </div>
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
                className="fill-accent-light"
              />
            </svg>
          </div>
          <div className="flex grow flex-col justify-between">
            <div className="flex items-center justify-between gap-2 text-accent">
              <div className="grow">
                <Input
                  defaultValue={edittedUser?.username}
                  placeholder={edittedUser?.username}
                />
              </div>
              <span className="text-lg">#</span>
              <div className="w-20">
                <Input
                  defaultValue={edittedUser?.gametag}
                  placeholder={edittedUser?.gametag}
                  textAlign="center"
                  maxLength={6}
                />
              </div>
              <button className="has-dropdown">
                <span className="whitespace-nowrap text-sm uppercase text-accent">
                  Where do you play?
                </span>
                <div className="dropdown inset-x-0 z-10 flex cursor-pointer flex-col rounded-lg bg-white">
                  <input
                    type="checkbox"
                    name="pc"
                    id="pc"
                    className="hidden"
                    defaultChecked={edittedUser?.platforms.pc}
                    onChange={() =>
                      setEdittedUser({
                        ...edittedUser,
                        platforms: {
                          ...edittedUser?.platforms,
                          pc: !edittedUser?.platforms.pc,
                        },
                      } as User)
                    }
                  />
                  <label
                    htmlFor="pc"
                    className={classNames(
                      'flex w-full cursor-pointer items-center gap-2 rounded-lg px-4 py-2 transition hover:stroke-accent hover:text-accent',
                      edittedUser?.platforms.pc
                        ? 'bg-accent-pink stroke-accent text-accent hover:bg-accent-light'
                        : 'stroke-foreground text-foreground hover:bg-accent-pink'
                    )}
                  >
                    <MouseIcon />
                    PC
                    {/* <CheckIcon /> */}
                  </label>
                  <input
                    type="checkbox"
                    name="console"
                    id="console"
                    className="hidden"
                    defaultChecked={user?.platforms.console}
                    onChange={() =>
                      setEdittedUser({
                        ...edittedUser,
                        platforms: {
                          ...edittedUser?.platforms,
                          console: !edittedUser?.platforms.console,
                        },
                      } as User)
                    }
                  />
                  <label
                    htmlFor="console"
                    className={classNames(
                      'flex w-full cursor-pointer items-center gap-2 rounded-lg px-4 py-2 transition hover:stroke-accent hover:text-accent',
                      edittedUser?.platforms.console
                        ? 'bg-accent-pink stroke-accent text-accent hover:bg-accent-light'
                        : 'stroke-foreground text-foreground hover:bg-accent-pink'
                    )}
                  >
                    <ControllerIcon />
                    Console
                    {/* <CheckIcon /> */}
                  </label>
                  <input
                    type="checkbox"
                    name="mobile"
                    id="mobile"
                    className="hidden"
                    defaultChecked={user?.platforms.mobile}
                    onChange={() =>
                      setEdittedUser({
                        ...edittedUser,
                        platforms: {
                          ...edittedUser?.platforms,
                          mobile: !edittedUser?.platforms.mobile,
                        },
                      } as User)
                    }
                  />
                  <label
                    htmlFor="mobile"
                    className={classNames(
                      'flex w-full cursor-pointer items-center gap-2 rounded-lg px-4 py-2 transition hover:stroke-accent hover:text-accent',
                      edittedUser?.platforms.mobile
                        ? 'bg-accent-pink stroke-accent text-accent hover:bg-accent-light'
                        : 'stroke-foreground text-foreground hover:bg-accent-pink'
                    )}
                  >
                    <CellphoneIcon />
                    Mobile
                    {/* <CheckIcon /> */}
                  </label>
                </div>
              </button>
            </div>
            <div className="flex h-24 w-[28.5rem] justify-between gap-4">
              <div className="h-full w-full">
                <TextArea
                  defaultValue={edittedUser?.description}
                  placeholder="Your bio..."
                  size="full"
                  showCount
                  maxLength={250}
                />
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <Button size="lg" iconButton>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.571411 9.77142L3.69141 13.7829C3.79669 13.9196 3.93159 14.0308 4.08598 14.108C4.24037 14.1852 4.41024 14.2264 4.58284 14.2286C4.75266 14.2305 4.92078 14.1946 5.07499 14.1235C5.22919 14.0523 5.36559 13.9476 5.47427 13.8171L15.4286 1.77142"
                      stroke="#740986"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Button>
                <Button size="sm" iconButton>
                  X
                </Button>
              </div>
            </div>
            <div className="flex justify-between gap-4">
              {edittedUser?.tags?.map((tag) => (
                <div key={`edit-profile-tag-${tag}`}>
                  <Select
                    options={[]}
                    placeholder={capitalize(t(`tags.${tag}`) || '')}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
