import React, { useEffect, useState } from "react";

const jim = { name: "Jim" };

export default function Parent() {
  console.log("Parent");
  const [counter, setCounter] = useState(0);
  const [obj, setObject] = useState(jim);

  return (
    <>
      <button
        onClick={() => {
          setCounter((v) => v + 1);
          setObject({ ...jim });
        }}
      >
        click
      </button>

      <Child1 counter={counter} />

      {/* <Child2 obj={obj} /> */}
    </>
  );
}

function Child1({ counter }: { counter: number }) {
  console.log("Child1");
  useEffect(() => {
    console.log({ counter });
  }, [counter]);
  return <div>{counter}</div>;
}

// function Child2({ obj }: { obj: any }) {
//   console.log("Child2");
//   useEffect(() => {
//     console.log({ b: obj });
//   }, [obj]);
//   return <Child22 obj={obj} />;
// }

// function Child22({ obj }: { obj: any }) {
//   console.log("Child22");
//   useEffect(() => {
//     console.log({ c: obj });
//   }, [obj]);
//   return <div>物件2</div>;
// }
