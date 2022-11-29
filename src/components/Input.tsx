import React from 'react';
import { Value } from '../interfaces';

type AppProps = {
  value: Value['input'];
  inputUpdate: (input: string) => void;
  inputRef: React.RefObject<HTMLInputElement>;
  buttonUpdate: (input: string) => void;
};

function Input({ value, inputUpdate, inputRef, buttonUpdate }: AppProps) {
  return (
    <div className="flex flex-col gap-1">
      <input
        ref={inputRef}
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            buttonUpdate('=');
          }
        }}
        onChange={(e) => inputUpdate(e.target.value)}
        value={value.join('')}
        className="h-10 w-full rounded-sm border bg-gray-900 px-1 text-lg font-medium"
        type="text"
        inputMode="numeric"
      />
    </div>
  );
}

export default Input;
