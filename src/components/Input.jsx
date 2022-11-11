/* eslint-disable react/prop-types */
import React from 'react'

function Input({ value, inputUpdate, inputRef, buttonUpdate }) {
  return (
    <div className="flex flex-col gap-1">
      <input
        ref={inputRef}
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            buttonUpdate('=')
          }
        }}
        onChange={inputUpdate}
        value={value.join('')}
        className="h-8 w-full rounded-sm border bg-gray-900 px-1"
        type="text"
        inputMode="numeric"
      />
    </div>
  )
}

export default Input
