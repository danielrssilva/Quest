import { format } from 'date-fns';
import { TFunction } from 'i18next';
import { Draggable, Droppable } from 'react-beautiful-dnd';

interface QuestsProps {
  quests?: Quest[];
  t: TFunction;
}
interface DraggableQuestsProps {
  quests?: Quest[];
  t: TFunction;
  setQuests: React.Dispatch<React.SetStateAction<Quest[]>>;
}

export function DraggableQuests({
  t,
  quests = [],
  setQuests,
}: DraggableQuestsProps) {
  const userQuests = new Array(13).fill(null);
  const handleRemove = (i: number) => {
    const newQuests = [...quests];
    newQuests.splice(i, 1);
    setQuests(newQuests);
  };
  for (let i = 0; i < 13; i++) {
    const quest = i <= quests?.length ? quests[i] : null;
    userQuests[i] = (
      <Droppable droppableId={`${i}`} type="QUEST" direction="horizontal">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="flex gap-2"
          >
            <div
              key={`achievement-container-${quest?.id || i}`}
              className="has-tooltip flex h-10 w-10 items-center justify-center rounded-lg border border-dashed border-accent bg-accent-light text-disabled"
              onContextMenu={(e) => {
                e.preventDefault();
                handleRemove(i);
              }}
            >
              {provided.placeholder}
              <Draggable
                key={quest?.id || `${i}-empty`}
                draggableId={quest?.id || `${i}-empty`}
                index={i}
              >
                {(p) => (
                  <div
                    ref={p.innerRef}
                    {...p.draggableProps}
                    {...p.dragHandleProps}
                  >
                    {quest && <Quest data={quest} t={t} />}
                  </div>
                )}
              </Draggable>
            </div>
          </div>
        )}
      </Droppable>
    );
  }
  return <>{userQuests}</>;
}

export default function Quests({ t, quests = [] }: QuestsProps) {
  const userQuests = [];
  for (let i = 0; i < 13; i++) {
    const quest = i <= quests?.length ? quests[i] : null;
    userQuests.push(
      <div
        key={`achievement-container-${quest?.id || i}`}
        className="has-tooltip flex h-10 w-10 cursor-default items-center justify-center rounded-lg bg-white text-disabled"
      >
        {quest ? <Quest data={quest} t={t} /> : <TrophySvg />}
      </div>
    );
  }
  return <>{userQuests}</>;
}

interface QuestProps {
  data: Quest;
  t: TFunction;
}

export const Quest = ({ data, t }: QuestProps) => {
  const { id, icon, playersPercentage, date, completed, isSecret } = data;
  return (
    <>
      <span className="tooltip top-12 box-border w-72 rounded-lg bg-white p-4 text-foreground shadow-[0_0_5px_rgba(116,9,134,0.2)]">
        <div className="flex flex-col gap-4">
          <h1 className="text-center text-lg font-semibold">
            {t(`${id}.name`)}
          </h1>
          <p className="text-justify">
            {isSecret && !completed
              ? t('secret-description')
              : t(`${id}.description`)}
          </p>
          <div className="text-secondary flex justify-between text-xs">
            <p>{playersPercentage}%</p>
            <p>{date && format(new Date(date), 'dd/MM/yyyy')}</p>
            <p className="uppercase text-accent">
              {completed ? t('completed') : t('incomplete')}
            </p>
          </div>
        </div>
      </span>
      <span
        className="stroke-accent"
        dangerouslySetInnerHTML={{
          __html: icon,
        }}
      />
    </>
  );
};

const TrophySvg = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="stroke-disabled"
  >
    <g clipPath="url(#clip0_46_5739)">
      <path
        d="M12 14.5714V23.1428"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.71436 23.1428H16.2858"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.00003 9.42855C4.63606 9.42855 3.32796 8.88672 2.36349 7.92225C1.39901 6.95777 0.857178 5.64967 0.857178 4.2857V2.57141H6.85718V9.42855H6.00003Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 9.42855C19.3639 9.42855 20.672 8.88672 21.6365 7.92225C22.601 6.95777 23.1428 5.64967 23.1428 4.2857V2.57141H17.1428V9.42855H18Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.1429 9.42855C17.1429 10.7925 16.6011 12.1006 15.6366 13.0651C14.6721 14.0296 13.364 14.5714 12 14.5714C10.6361 14.5714 9.32796 14.0296 8.36349 13.0651C7.39901 12.1006 6.85718 10.7925 6.85718 9.42855V0.857117H17.1429V9.42855Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

// const DraggableQuest = ({ data, t }: QuestProps) => {
//   const { id, icon, playersPercentage, date, completed } = data;
//   return (
//     <>
//       <span className="tooltip top-12 box-border w-72 rounded-lg bg-white p-4 text-foreground shadow-[0_0_5px_rgba(116,9,134,0.2)]">
//         <div className="flex flex-col gap-4">
//           <h1 className="text-center text-lg font-semibold">
//             {t(`${id}.name`)}
//           </h1>
//           <p className="text-justify">{t(`${id}.description`)}</p>
//           <div className="text-secondary flex justify-between text-xs">
//             <p>{playersPercentage}%</p>
//             <p>{date && format(new Date(date), 'dd/MM/yyyy')}</p>
//             <p className="uppercase text-accent">
//               {completed ? t('completed') : t('incomplete')}
//             </p>
//           </div>
//         </div>
//       </span>
//       <span
//         className="text-accent"
//         dangerouslySetInnerHTML={{
//           __html: icon,
//         }}
//       ></span>
//     </>
//   );
// };
