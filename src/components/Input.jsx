import React from 'react'

function Input({ value, inputUpdate, inputRef }) {
  return (
    <div on className="flex flex-col gap-1">
      <input
        ref={inputRef}
        autoFocus
        onChange={inputUpdate}
        value={value.join('')}
        className="h-8 w-full rounded-sm border bg-gray-900 px-1"
        type="text"
      />
    </div>
  )
}

export default Input
