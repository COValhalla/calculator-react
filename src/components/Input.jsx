import React from 'react'

function Input({ value }) {
  return (
    <div on className="flex flex-col gap-1">
      {/* Text Input */}
      <input
        value={value.join(' ')}
        className="h-8 w-[270px] rounded-sm border bg-gray-900 px-1"
        type="text"
      />
    </div>
  )
}

export default Input
