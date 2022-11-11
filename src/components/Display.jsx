import React from 'react'
import { v4 as uuidv4 } from 'uuid'

function Display({ result, inputUpdate, inputAdd }) {
  const reversedResult = result.slice(0).reverse()
  return (
    <div className="h-20 w-full overflow-auto border bg-gray-800">
      {/* Column 1, string */}
      <div className="flex max-w-[260px] flex-col text-xs">
        {reversedResult.map((item) => (
          <div key={uuidv4()} className="flex  px-2">
            <button
              onClick={() => inputUpdate({ target: { value: item.input } })}
              type="button"
              className="w-7/12 cursor-default truncate text-left"
            >
              {item.input}
            </button>
            <p className="w-1/12 text-center">=</p>
            <button
              onClick={() => inputAdd(item.evalResult)}
              type="button"
              className="w-4/12 cursor-default truncate text-right"
            >
              {item.evalResult}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Display
