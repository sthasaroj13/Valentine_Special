import { useState } from "react";

function App() {
  return (
    <>
      <div className="bg-gray-100">
        {/* Use the `default` breakpoint to set bg-green-500 */}
        <div className="bg-blue-500 default:bg-green-500 sm:bg-red-500 text-white default:max-w-[1440px] mx-auto px-4 py-8">
          <h1 className="text-center text-3xl font-bold">Welcome to HMS</h1>
          <p className="text-center mt-4 text-lg">
            This is a responsive layout with 1440px as the default resolution.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
