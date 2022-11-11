import React, { useState, useCallback } from 'react'
import { evaluate } from 'mathjs'
import Display from './components/Display'
import Input from './components/Input'
import Buttons from './components/Buttons'

function App() {
  const [value, setValue] = useState([])
  const [result, setResult] = useState('')

  const buttonUpdate = useCallback(
    (input) => {
      if (input === '=') {
        console.log(value)
        setResult(evaluate(value.join('')).toFixed(4))
      } else if (input === 'back') {
        setValue((prevValue) =>
          prevValue.filter((_, index) => index !== prevValue.length - 1),
        )
      } else {
        setValue((prevValue) => [...prevValue, input])
      }
    },
    [value],
  )

  return (
    <div className="mx-auto flex w-[400px] flex-col gap-2 text-gray-200">
      <h1 className="text-3xl font-bold underline">Calculator</h1>
      <Display result={result} />
      <Input value={value} />
      <Buttons buttonUpdate={buttonUpdate} />
    </div>
  )
}

export default App
