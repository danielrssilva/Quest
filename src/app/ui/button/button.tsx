import classNames from '@/app/utils/classNames';
import {
  FONT_SIZE_MAPS,
  ROUND_SIZE_MAPS,
  BUTTON_BACKGROUND_SIZE_MAPS,
  BUTTON_SIZE_MAPS,
  ROUND_BUTTON_BACKGROUND_SIZE_MAPS,
} from '@/app/utils/size';
import { ReactNode } from 'react';

interface ButtonProps {
  children?: ReactNode;
  onClick?: () => void;
  size?: Size;
  className?: string;
  iconButton?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button(props: ButtonProps) {
  const {
    children,
    onClick,
    size = 'sm',
    className,
    iconButton,
    type = 'button',
  } = props;
  return (
    <div className={className}>
      <button
        type={type}
        onClick={onClick}
        className={classNames(
          'relative flex items-center justify-center rounded-full uppercase transition hover:bg-accent-light focus:bg-accent-light focus:outline-none',
          iconButton && ROUND_BUTTON_BACKGROUND_SIZE_MAPS[size],
          !iconButton && BUTTON_BACKGROUND_SIZE_MAPS[size],
          FONT_SIZE_MAPS[size]
        )}
      >
        <div className="flex items-center justify-center fill-accent stroke-accent text-accent">
          {children}
        </div>
        <span
          className={classNames(
            'absolute rounded-full border border-solid border-accent',
            iconButton && ROUND_SIZE_MAPS[size],
            !iconButton && BUTTON_SIZE_MAPS[size]
          )}
        />
      </button>
    </div>
  );
}
