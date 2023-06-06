'use client';

import {
  INPUT_BACKGROUND_SIZE_MAPS,
  classNames,
  FONT_SIZE_MAPS,
} from '@/app/utils';
import { useState } from 'react';
import { FieldValues } from 'react-hook-form';

interface InputProps extends FieldValues {
  placeholder?: string;
  size?: Size;
  maxLength?: number;
  textAlign?: 'left' | 'center' | 'right';
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input(props: InputProps) {
  const {
    placeholder,
    size = 'sm',
    maxLength,
    textAlign,
    defaultValue,
    onChange,
  } = props;
  return (
    <div className="relative flex w-full items-center justify-center">
      <input
        className={classNames(
          'w-full resize-none rounded-[1.5rem] bg-accent-light px-2 font-medium font-medium text-accent transition placeholder:text-accent hover:bg-accent-light focus:outline-none',
          INPUT_BACKGROUND_SIZE_MAPS[size],
          FONT_SIZE_MAPS[size],
          `text-${textAlign}`
        )}
        placeholder={placeholder}
        maxLength={maxLength}
        defaultValue={defaultValue}
        onChange={onChange}
      />
      <span
        className={classNames(
          'background-none pointer-events-none absolute h-[101%] w-[98%] rounded-[1.5rem] border border-solid border-accent'
        )}
      />
    </div>
  );
}

interface TextAreaProps extends Omit<InputProps, 'size'> {
  rows?: number;
  cols?: number;
  showCount?: boolean;
  size: Size | 'full';
}

export function TextArea(props: TextAreaProps) {
  const [value, setValue] = useState('');
  const {
    placeholder,
    size = 'sm',
    maxLength,
    rows,
    cols,
    showCount,
    defaultValue,
  } = props;

  return (
    <div className="text-area relative flex h-full w-full items-center justify-center">
      <textarea
        className={classNames(
          'w-full resize-none rounded-[1rem] bg-accent-light px-2 pt-0.5 font-medium font-medium text-accent transition placeholder:text-accent hover:bg-accent-light focus:outline-none',
          size !== 'full'
            ? (FONT_SIZE_MAPS[size], INPUT_BACKGROUND_SIZE_MAPS[size])
            : 'h-[calc(100%-3px)] py-2 text-sm'
          // value.length > 50 || value.search(/\n/g) !== -1
          //   ? 'h-32 pb-6 pr-0 pt-2'
          //   : INPUT_BACKGROUND_SIZE_MAPS[size]
        )}
        placeholder={placeholder}
        cols={cols}
        rows={rows}
        maxLength={maxLength}
        onChange={(e) => setValue(e.target.value)}
        defaultValue={defaultValue}
      />
      <span
        className={classNames(
          'background-none pointer-events-none absolute h-[101%] w-[99%] rounded-[1rem] border border-solid border-accent'
        )}
      />
      {showCount && (
        <span className="absolute bottom-1 right-4 rounded-full bg-accent-light px-2 text-sm text-accent">
          {value.length}/{maxLength}
        </span>
      )}
    </div>
  );
}

interface SelectProps {
  placeholder?: string;
  size?: Size;
  options: { value: string; text: string }[];
}
export function Select(props: SelectProps) {
  const { placeholder, size = 'sm', options } = props;
  return (
    <div className="relative flex w-full items-center justify-center">
      <select
        className={classNames(
          'w-full rounded-[1rem] bg-accent-light px-2 font-medium font-medium text-accent transition placeholder:text-accent hover:bg-accent-light focus:outline-none',
          INPUT_BACKGROUND_SIZE_MAPS[size],
          FONT_SIZE_MAPS[size]
        )}
        defaultValue={placeholder}
      >
        <option value={placeholder} hidden disabled>
          {placeholder}
        </option>
        {options.map(({ value, text }) => (
          <option key={value} value={value}>
            {text}
          </option>
        ))}
      </select>
      <span
        className={classNames(
          'background-none pointer-events-none absolute h-[101%] w-[96%] rounded-[1rem] border border-solid border-accent'
        )}
      />
    </div>
  );
}
