'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { useTranslation } from '@/app/i18n/client';
import { useUserContext } from '@/app/stores/user';
import Button from '@/app/ui/button';
import { useEditUserContext } from '@/app/stores/editUser';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from 'react-beautiful-dnd';
import { DraggableQuests, Quest } from '@/app/ui/quests/quests';
import { getUserGametag } from '@/app/utils';

interface LogProps {
  params: { lang: string };
}

export default function Log({ params }: LogProps) {
  const { t } = useTranslation(params.lang, 'profile');
  const { t: tQuests } = useTranslation(params.lang, 'quests');
  const { edittedUser, setEdittedUser } = useEditUserContext();
  const { user, setUser } = useUserContext();
  const router = useRouter();

  const [userQuests, setUserQuests] = useState<UserQuest>();
  const [profileQuests, setProfileQuests] = useState<Quest[]>(
    edittedUser?.completedQuests || []
  );

  const onSave = () => {
    const newUser = { ...edittedUser, completedQuests: profileQuests };
    setUser(newUser as User);
    router.back();
  };

  useEffect(() => {
    setEdittedUser(user);
    setProfileQuests(user?.completedQuests || []);
    fetch(
      `http://localhost:3000/api/user/${getUserGametag(
        user?.username,
        user?.gametag
      )}/quests`
    )
      .then((response) => response.json())
      .then((json) => {
        setUserQuests(json);
      })
      .catch((error) => console.error(error));
    // setIsLoading(false);
  }, [user]);

  const onDragEnd = (result: DropResult) => {
    console.log(result);
    if (!result.destination) {
      const items = Array.from(profileQuests);
      items.splice(result.source.index, 1);
      setProfileQuests(items);
      return;
    }
    const items = Array.from(profileQuests);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    console.log(items);
    setProfileQuests(items);
  };

  return (
    <div
      className="fixed left-0 top-0 z-50 flex h-full w-full select-none items-center justify-center bg-gray-50 bg-opacity-60 pl-20 pr-72"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="after:background-none relative my-1 flex justify-center gap-2 after:pointer-events-none after:absolute after:top-[-0.3rem]  after:h-[calc(100%+0.6rem)] after:w-[calc(100%-0.475rem)] after:rounded-lg after:border after:border-accent after:content-['']">
          <div className="flex grow flex-col items-center gap-4 rounded-lg bg-white px-5 py-4">
            <div className="flex w-full items-center justify-between">
              <div className="flex items-baseline gap-2">
                <h1 className="text-lg font-bold uppercase">
                  {t('quests-modal.title')}
                </h1>
                <p className="">{t('quests-modal.subtitle')}</p>
              </div>
              <p>{userQuests?.profileQuests?.length}/14</p>
            </div>
            <div className="flex gap-2">
              <DraggableQuests
                quests={profileQuests}
                t={tQuests}
                setQuests={setProfileQuests}
              />
            </div>
            <div className="flex w-full justify-between">
              <div className="flex items-baseline gap-2">
                <h1 className="text-lg font-bold uppercase">
                  {t('quests-modal.quests')}
                </h1>
                <p className="">
                  {userQuests?.completedTotal}/{userQuests?.questsTotal}
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              {/* {userQuests?.profileQuests?.map((quest, i) => (
                <div
                  key={`achievement-${quest?.id}`}
                  className="has-tooltip flex h-10 w-10 cursor-grab items-center justify-center rounded-lg border border-dashed border-accent bg-accent-light text-disabled"
                >
                  <Draggable
                    key={`achievement-${quest?.id}`}
                    draggableId={`achievement-${quest?.id}`}
                    index={i}
                  >
                    {(p) => (
                      <div
                        ref={p.innerRef}
                        {...p.draggableProps}
                        {...p.dragHandleProps}
                      >
                        <div className="has-tooltip flex h-10 w-10 cursor-grab items-center justify-center rounded-lg border border-solid border-accent bg-accent-light">
                          <Quest data={quest} t={tQuests} />
                        </div>
                      </div>
                    )}
                  </Draggable>
                </div>
              ))} */}
            </div>

            <div className="flex w-full justify-end gap-4">
              <Button onClick={onSave}>{t('save')}</Button>
            </div>
          </div>
        </div>
      </DragDropContext>
    </div>
  );
}
