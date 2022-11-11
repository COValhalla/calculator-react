import React, {
  useCallback,
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react'
import stringMath from 'string-math'

const InputContext = createContext()

function ResultProvider({ children }) {
  const [result, setResult] = useState(['initial result', 'second result'])

  const updateResult = useCallback((value) => {
    console.log('Update Result :>> ', value)
    if (value === '=') {
      console.log('Equals Pressed:', value)
      setResult(stringMath(value))
    }
  }, [])

  const value = useMemo(
    () => ({ updateResult, result }),
    [updateResult, result],
  )

  return <InputContext.Provider value={value}>{children}</InputContext.Provider>
}

const useResult = () => useContext(InputContext)

export { ResultProvider, useResult }
