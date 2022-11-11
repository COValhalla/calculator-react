import React, { useState, useCallback, useRef } from 'react'
import { evaluate } from 'mathjs'
import Display from './components/Display'
import Input from './components/Input'
import Buttons from './components/Buttons'

function App() {
  const [value, setValue] = useState([])
  const [result, setResult] = useState([])
  const [error, setError] = useState('')

  const inputRef = useRef(null)

  const buttonUpdate = useCallback(
    (input) => {
      if (input === '=' && value.length > 0) {
        try {
          const evalResult = evaluate(value.join(''))
          const clone = structuredClone(result)
          setResult([...clone, { input: value.join(''), evalResult }])
          setValue([])
          setError('')
        } catch (err) {
          setError(err.message)
        }
      } else if (input === 'back') {
        setValue((prevValue) =>
          prevValue.filter((_, index) => index !== prevValue.length - 1),
        )
      } else if (input === 'clear') {
        setValue([])
      } else if (input !== '=') {
        setValue((prevValue) => [...prevValue, input])
        inputRef.current.focus()
      }
    },
    [value, result],
  )

  const inputUpdate = (input) => {
    setValue(input.target.value.split(''))
    inputRef.current.focus()
  }
  const inputAdd = (input) => {
    setValue((prevValue) => [...prevValue, input])
    inputRef.current.focus()
  }

  return (
    <div className="m-3 mx-auto flex w-min flex-col items-center gap-2 rounded bg-slate-900 p-3 text-gray-200">
      <h1 className="text-2xl font-bold">Calculator</h1>
      <Display inputAdd={inputAdd} inputUpdate={inputUpdate} result={result} />
      <Input
        buttonUpdate={buttonUpdate}
        value={value}
        inputUpdate={inputUpdate}
        inputRef={inputRef}
      />
      {error !== '' && <p className="text-xs text-red-500">{error}</p>}
      <Buttons buttonUpdate={buttonUpdate} />
    </div>
  )
}

export default App
