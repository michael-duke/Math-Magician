import React, { useState } from 'react';

const Quote = () => {
  const [quotes, setQuote] = useState({
    id: 1,
    author: 'Dean Schlicter',
    quote: 'Go down deep enough into anything and you will find mathematics.',
  });

  /* Generate random math quotes */
  const generateQuote = async () => {
    const response = await fetch(
      'https://random-math-quote-api.herokuapp.com/',
    );
    const { id, author, quote } = await response.json();

    setQuote({ id, author, quote });
    return { id, author, quote };
  };

  const { author, quote } = quotes;
  return (
    <>
      <section className="quote flex flex-col items-center justify-center mt-7 p-12 space-y-10">
        <figure>
          <blockquote>
            <p>
              &quot;
              {quote}
              {' '}
              &quot;
            </p>
          </blockquote>
          <figcaption>
            —
            {author}
          </figcaption>
        </figure>
        <button
          data-mdb-ripple="true"
          data-mdb-ripple-color="dark"
          type="button"
          className="p-3 font-stange font-semibold bg-slate-600 text-white uppercase rounded-md hover:bg-white hover:text-slate-600"
          onClick={generateQuote}
        >
          Get Random Quote
        </button>
      </section>
    </>
  );
};

export default Quote;
