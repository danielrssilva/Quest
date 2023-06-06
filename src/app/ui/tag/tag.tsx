import classNames from '@/app/utils/classNames';
import { COLOR_MAPS, FILL_COLOR_MAPS } from '@/app/utils/colors';
import { ReactNode } from 'react';
import { SvgBlob } from 'react-svg-blob';

type TagProps = {
  color?: Color;
  icon?: string;
  children?: ReactNode;
};

export default function Tag(props: TagProps) {
  const { children, icon, color = 'accent' } = props;
  const calc = Math.floor(Math.random() * 9) + 4;
  return (
    <div className="flex items-center">
      <div className="relative flex h-4 w-7 items-center justify-center">
        <SvgBlob
          variant="solid"
          color=""
          shapeProps={{
            size: 24,
            edges: calc,
          }}
          className={classNames('absolute left-0 w-7 ', FILL_COLOR_MAPS[color])}
        />
        {icon && (
          <div
            dangerouslySetInnerHTML={{
              __html: icon,
            }}
          />
        )}
      </div>
      <p
        className={classNames(
          'z-10 text-xs',
          COLOR_MAPS[color],
          icon ? '-ml-1' : '-ml-4 uppercase'
        )}
      >
        {children}
      </p>
    </div>
  );
}

// export interface TagProps {
//   children: string;
//   type?: "ghost" | "bordered";
//   icon?: ReactNode;
//   shape?: "default" | "rounded";
//   closable?: boolean;
//   onClose?: () => void;
// }
