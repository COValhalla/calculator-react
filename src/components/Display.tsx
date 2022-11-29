import { v4 as uuidv4 } from 'uuid';
import { Result } from '../interfaces';

type AppProps = {
  result: Result[];
  inputUpdate: (input: string) => void;
  inputAdd: (input: string) => void;
};

function Display({ result, inputUpdate, inputAdd }: AppProps) {
  const reversedResult = result.slice(0).reverse();
  return (
    <div className="h-20 w-full overflow-auto border bg-gray-800 font-light">
      {/* Column 1, string */}
      <div className="flex max-w-[300px] flex-col gap-1 text-sm">
        {reversedResult.map((item) => (
          <div key={uuidv4()} className="grid min-h-0 min-w-0 grid-cols-6 px-2">
            <button
              onClick={() => inputUpdate(item.input)}
              type="button"
              className="col-span-3  min-w-0 cursor-default overflow-hidden truncate text-left"
            >
              {item.input}
            </button>
            <p className="col-span-1 text-center">=</p>
            <button
              onClick={() => inputAdd(item.result)}
              type="button"
              className="col-span-2 min-w-0 cursor-default overflow-hidden truncate text-right"
            >
              {item.result}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Display;
