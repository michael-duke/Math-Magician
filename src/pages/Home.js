import React from 'react';

const Home = () => (
  <>
    <section className="home mt-7 p-12 space-y-10">
      <h1 className="font-semibold text-2xl text-magic-blue">Welcome to our page!</h1>
      <p>
        &quot;Math Magicians&quot; is a website for all fans of mathematics. It
        is a Single Page App (SPA) that allows users to: make simple
        calculation, and read a random math-related quote.
      </p>
      <p>
        The Math Magician Project is a professional-grade web application that
        provides a user-friendly interface for basic math operations. Developed
        using modern web technologies, including React, JavaScript, HTML, and
        CSS, the project adheres to the principles of modularization, separation
        of concerns, and React&apos;s component-based architecture.
      </p>
      <div className="bg-white shadow-lg border p-4">
        <h3 className="text-xl my-3 text-magic-blue font-semibold">Perks:</h3>
        <ul className="list-disc list-inside">
          <li>Simple calculations</li>
          <li>Random math-related quote</li>
          <li>
            A sleek, intuitive design that enables users to select the desired
            operation and input operands to receive a result.
          </li>

          <li>
            Responsive and dynamic updates using React&apos;s state management
            and lifecycle methods
          </li>
          <li>Optimized accessibility for various screen sizes and devices </li>
          <li>
            Automated tests to prevent bugs and ensure that the application
            functions as intended.
          </li>
        </ul>
      </div>
    </section>
  </>
);

export default Home;
