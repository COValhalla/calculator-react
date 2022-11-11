import React from 'react'
import { v4 as uuidv4 } from 'uuid'

function Display({ result }) {
  const reversedResult = result.slice(0).reverse()
  return (
    <div className="h-20 w-full overflow-auto border bg-gray-800">
      {/* Column 1, string */}
      <div className="flex flex-col text-xs">
        {reversedResult.map((item) => (
          <div className="flex px-2">
            <p key={uuidv4()} className="w-7/12 truncate">
              {item.input}
            </p>
            <p key={uuidv4()} className="w-1/12 text-center">
              =
            </p>
            <p key={uuidv4()} className="w-4/12 truncate text-right">
              {item.evalResult}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Display
