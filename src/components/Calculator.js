import React, { useState } from 'react';
import calculate from '../logic/calculate';
import '../styles/Calculator.css';

function Calculator() {
  const [state, setState] = useState({ total: 0, next: null, operation: null });

  const handleClick = (event) => {
    const {
      target: { textContent: buttonName },
    } = event;
    const result = calculate(state, buttonName);
    setState(result);
  };

  const { total, next } = state;
  return (
    <div>
      <section className="Calculator border border-gray-500">
        <div className="grid grid-rows-6 grid-cols-4 gap-2">
          {/*  Result Display  */}
          <div className="col-span-4 bg-gray-400 text-white text-zl flex items-center justify-end m-[-4px]">
            {total || next || 0}
          </div>
          {/* First row */}
          <button
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            type="button"
            onClick={handleClick}
            className="bg-slate-200"
          >
            AC
          </button>
          <button
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            type="button"
            onClick={handleClick}
            className="bg-slate-200"
          >
            +/-
          </button>
          <button
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            type="button"
            onClick={handleClick}
            className="bg-slate-200"
          >
            %
          </button>
          <button
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            type="button"
            onClick={handleClick}
            className="bg-magic-blue/80 text-white"
          >
            &#xf7;
          </button>
          {/* Second row */}
          <button
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            type="button"
            onClick={handleClick}
            className="bg-slate-200"
          >
            7
          </button>
          <button
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            type="button"
            onClick={handleClick}
            className="bg-slate-200"
          >
            8
          </button>
          <button
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            type="button"
            onClick={handleClick}
            className="bg-slate-200"
          >
            9
          </button>
          <button
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            type="button"
            onClick={handleClick}
            className="bg-magic-blue/80 text-white"
          >
            *
          </button>
          {/* Third row */}
          <button
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            type="button"
            onClick={handleClick}
            className="bg-slate-200"
          >
            4
          </button>
          <button
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            type="button"
            onClick={handleClick}
            className="bg-slate-200"
          >
            5
          </button>
          <button
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            type="button"
            onClick={handleClick}
            className="bg-slate-200"
          >
            6
          </button>
          <button
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            type="button"
            onClick={handleClick}
            className="bg-magic-blue/80 text-white"
          >
            -
          </button>
          {/* Forth row */}
          <button
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            type="button"
            onClick={handleClick}
            className="bg-slate-200"
          >
            1
          </button>
          <button
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            type="button"
            onClick={handleClick}
            className="bg-slate-200"
          >
            2
          </button>
          <button
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            type="button"
            onClick={handleClick}
            className="bg-slate-200"
          >
            3
          </button>
          <button
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            type="button"
            onClick={handleClick}
            className="bg-magic-blue/80 text-white"
          >
            +
          </button>
          {/* Fifth row */}
          <button
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            type="button"
            onClick={handleClick}
            className="col-span-2 bg-slate-200"
          >
            0
          </button>
          <button
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            type="button"
            onClick={handleClick}
            className="bg-slate-200"
          >
            .
          </button>
          <button
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            type="button"
            onClick={handleClick}
            className="bg-magic-blue/80 text-white"
          >
            =
          </button>
        </div>
      </section>
    </div>
  );
}

export default Calculator;
