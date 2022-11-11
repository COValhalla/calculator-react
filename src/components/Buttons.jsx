import React, { useEffect } from 'react'

function Buttons({ buttonUpdate }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress)

    function handleKeyPress(e) {
      if (e.key === 'Escape') {
        buttonUpdate('clear')
      } else if (e.key === 'Enter') {
        buttonUpdate('=')
      }
    }

    return () => {
      window.removeEventListener('keypress', handleKeyPress)
    }
  }, [buttonUpdate])

  return (
    <div className="flex flex-col">
      <div className="flex gap-1">
        {/* Column 1 */}
        <div className="flex flex-col gap-1">
          <button
            onClick={() => {
              buttonUpdate('back')
            }}
            type="button"
            className="h-10 w-10 rounded-md border  bg-red-700 hover:bg-red-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="m-auto h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z"
              />
            </svg>
          </button>
          <button
            onClick={() => buttonUpdate('7')}
            type="button"
            className=" h-10 w-10 rounded-md border bg-gray-800  p-2 hover:bg-gray-600 "
          >
            7
          </button>
          <button
            onClick={() => buttonUpdate('4')}
            type="button"
            className=" h-10 w-10 rounded-md border bg-gray-800  p-2 hover:bg-gray-600"
          >
            4
          </button>
          <button
            onClick={() => buttonUpdate('1')}
            type="button"
            className=" h-10 w-10 rounded-md border bg-gray-800  p-2 hover:bg-gray-600"
          >
            1
          </button>
          <button
            onClick={() => buttonUpdate('0')}
            type="button"
            className=" h-10 w-10 rounded-md border bg-gray-800  p-2 hover:bg-gray-600"
          >
            0
          </button>
        </div>
        {/* Column 2 */}
        <div className="flex flex-col gap-1">
          <button
            onClick={() => buttonUpdate('(')}
            type="button"
            className=" h-10 w-10 rounded-md border bg-gray-800  p-2 hover:bg-gray-600"
          >
            (
          </button>
          <button
            onClick={() => buttonUpdate('8')}
            type="button"
            className=" h-10 w-10 rounded-md border bg-gray-800  p-2 hover:bg-gray-600"
          >
            8
          </button>
          <button
            onClick={() => buttonUpdate('5')}
            type="button"
            className=" h-10 w-10 rounded-md border bg-gray-800  p-2 hover:bg-gray-600"
          >
            5
          </button>
          <button
            onClick={() => buttonUpdate('2')}
            type="button"
            className=" h-10 w-10 rounded-md border bg-gray-800  p-2 hover:bg-gray-600"
          >
            2
          </button>
          <button
            onClick={() => buttonUpdate('.')}
            type="button"
            className=" h-10 w-10 rounded-md border bg-gray-800  p-2 hover:bg-gray-600"
          >
            .
          </button>
        </div>
        {/* Column 3 */}
        <div className="flex flex-col gap-1">
          <button
            onClick={() => buttonUpdate(')')}
            type="button"
            className=" h-10 w-10 rounded-md border bg-gray-800  p-2 hover:bg-gray-600"
          >
            )
          </button>
          <button
            onClick={() => buttonUpdate('9')}
            type="button"
            className=" h-10 w-10 rounded-md border bg-gray-800  p-2 hover:bg-gray-600"
          >
            9
          </button>
          <button
            onClick={() => buttonUpdate('6')}
            type="button"
            className=" h-10 w-10 rounded-md border bg-gray-800  p-2 hover:bg-gray-600"
          >
            6
          </button>
          <button
            onClick={() => buttonUpdate('3')}
            type="button"
            className=" h-10 w-10 rounded-md border bg-gray-800  p-2 hover:bg-gray-600"
          >
            3
          </button>
          <button
            onClick={() => buttonUpdate('%')}
            type="button"
            className=" h-10 w-10 rounded-md border bg-gray-800  p-2 hover:bg-gray-600"
          >
            %
          </button>
        </div>
        {/* Column 4 */}
        <div className="flex flex-col gap-1">
          <button
            // Special modulus function needed
            onClick={() => {
              buttonUpdate('%')
            }}
            type="button"
            className="h-10 w-10 rounded-md border bg-gray-800    hover:bg-gray-600"
          >
            mod
          </button>

          <button
            onClick={() => buttonUpdate('/')}
            type="button"
            className=" h-10 w-10 rounded-md border bg-gray-800  p-2 hover:bg-gray-600"
          >
            /
          </button>
          <button
            onClick={() => buttonUpdate('*')}
            type="button"
            className=" h-10 w-10 rounded-md border bg-gray-800  p-2 hover:bg-gray-600"
          >
            ×
          </button>
          <button
            onClick={() => buttonUpdate('-')}
            type="button"
            className=" h-10 w-10 rounded-md border bg-gray-800  p-2 hover:bg-gray-600"
          >
            -
          </button>
          <button
            onClick={() => buttonUpdate('+')}
            type="button"
            className=" h-10 w-10 rounded-md border bg-gray-800  p-2 hover:bg-gray-600"
          >
            +
          </button>
        </div>
        {/* Column 5, pi, square root, exponent, equals */}
        <div className="flex flex-col gap-1">
          <button
            onClick={() => buttonUpdate('pi')}
            type="button"
            className=" h-10 w-10 rounded-md border bg-gray-800  p-2 hover:bg-gray-600"
          >
            &Pi;
          </button>

          <button
            onClick={() => buttonUpdate('sqrt(')}
            type="button"
            className=" h-10 w-10 rounded-md border bg-gray-800  p-2 hover:bg-gray-600"
          >
            &#8730;
          </button>
          <button
            onClick={() => buttonUpdate('^')}
            type="button"
            className=" h-10 w-10 rounded-md border bg-gray-800  p-2 hover:bg-gray-600"
          >
            x&#178;
          </button>
          <div className="flex flex-grow">
            <button
              onClick={() => buttonUpdate('=')}
              type="button"
              className="w-10 rounded-md border bg-green-800 p-2 hover:bg-green-700"
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Buttons
