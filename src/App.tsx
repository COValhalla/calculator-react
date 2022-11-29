import { useState, useCallback, useRef } from 'react';
import { evaluate } from 'mathjs';
import Display from './components/Display';
import Input from './components/Input';
import Buttons from './components/Buttons';
import { Value, Result } from './interfaces';

function App() {
  const [value, setValue] = useState([] as Value[]);
  const [result, setResult] = useState([] as Result[]);
  const [error, setError] = useState('');

  const inputRef = useRef(null);

  const buttonUpdate = useCallback(
    (input: string) => {
      if (input === '=' && value.length > 0) {
        try {
          const evalResult = evaluate(value.join(''));
          const clone = structuredClone(result);
          setResult([...clone, { input: value.join(''), result: evalResult }]);
          setValue([]);
          setError('');
        } catch (err: any) {
          setError(err.message);
        }
      } else if (input === 'back') {
        setValue((prevValue) =>
          prevValue.filter((_, index) => index !== prevValue.length - 1)
        );
      } else if (input === 'clear') {
        setValue([]);
      } else if (input !== '=') {
        console.log('Value Test : ', value);
        setValue((prevValue) => [...prevValue, input]);
        (inputRef.current as any).focus();
      }
    },
    [value, result]
  );

  const inputUpdate = (value: string) => {
    setValue(value.split(''));
    (inputRef.current as any).focus();
  };
  const inputAdd = (input: string) => {
    setValue((prevValue) => [...prevValue, input]);
    (inputRef.current as any).focus();
  };

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
  );
}

export default App;
