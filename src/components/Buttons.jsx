import React from 'react'

function Buttons({ buttonUpdate }) {
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
            Back
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
            onClick={() => buttonUpdate('=')}
            type="button"
            className=" h-10 w-10 rounded-md border bg-gray-800  p-2 hover:bg-gray-600"
          >
            =
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
            className="h-10 w-10 rounded-md border bg-gray-800  p-2 hover:bg-gray-600"
          >
            %
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
