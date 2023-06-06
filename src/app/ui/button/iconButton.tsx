import { classNames } from '@/app/utils';
import { ROUND_BUTTON_SIZE_MAPS } from '@/app/utils/size';
import Link from 'next/link';
import { ReactNode } from 'react';
import { SvgBlob } from 'react-svg-blob';

type IconButtonProps = {
  icon: ReactNode;
  children?: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  active?: boolean;
  prefix?: ReactNode;
  sufix?: ReactNode;
  target?: '_blank' | '_self' | '_parent' | '_top' | 'framename';
  onClick?(): void;
};

type LinkIconProps = IconButtonProps & {
  href: string;
};

export default function IconButton(props: IconButtonProps) {
  const {
    icon,
    size = 'sm',
    onClick,
    disabled,
    children,
    active,
    prefix,
    sufix,
  } = props;
  const calc = Math.floor(Math.random() * 9) + 4;
  return (
    <button
      className={classNames(
        'group relative flex items-center items-center justify-center justify-center gap-1 gap-1 fill-transparent stroke-accent font-medium transition focus:outline-none',
        disabled
          ? 'fill-transparent'
          : 'hover:fill-accent hover:text-accent focus:fill-accent focus:text-accent focus:outline-none active:fill-accent active:text-accent',
        active && 'fill-accent stroke-accent text-accent',
        children ? 'has-dropdown' : ''
      )}
      disabled={disabled}
      onClick={
        !disabled
          ? onClick
          : () => {
              return;
            }
      }
    >
      {prefix}
      <div
        className={classNames(
          'relative items-center justify-center',
          ROUND_BUTTON_SIZE_MAPS[size]
        )}
      >
        <SvgBlob
          variant="solid"
          color=""
          shapeProps={{
            size: 24,
            edges: calc,
          }}
          className={classNames(
            'absolute stroke-transparent opacity-20',
            size === 'sm' ? '-inset-1.5 w-6' : '-inset-2 w-8',
            active && 'fill-accent'
          )}
        />
        {icon}
        {children}
      </div>
      {sufix}
    </button>
  );
}

export function LinkIcon(props: LinkIconProps) {
  const {
    icon,
    size = 'sm',
    active,
    prefix,
    sufix,
    href,
    target = '_self',
  } = props;
  const calc = Math.floor(Math.random() * 9) + 4;
  return (
    <Link
      href={href}
      target={target}
      className={classNames(
        'group relative isolate flex flex h-full items-center items-center justify-center justify-center gap-1 gap-1 fill-transparent font-medium transition hover:fill-accent focus:fill-accent focus:outline-none focus:outline-none active:fill-accent',
        active && 'fill-accent stroke-accent text-accent'
      )}
    >
      {prefix}
      <div
        className={classNames(
          'relative items-center justify-center',
          ROUND_BUTTON_SIZE_MAPS[size]
        )}
      >
        <SvgBlob
          variant="solid"
          color=""
          shapeProps={{
            size: 24,
            edges: calc,
          }}
          className={classNames(
            'absolute -z-10 opacity-20',
            size === 'sm' ? '-inset-1.5 w-6' : '-inset-2 w-8',
            active && 'fill-accent'
          )}
        />
        {typeof icon === 'string' ? (
          <div dangerouslySetInnerHTML={{ __html: icon || '' }} />
        ) : (
          icon
        )}
      </div>
      {sufix}
    </Link>
  );
}
