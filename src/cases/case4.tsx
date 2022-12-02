import { useEffect, useState } from "react";

export default function Case4() {
  const [num, setNum] = useState(0);

  const help = (val: number) => {
    console.log("hi", val);
  };

  useEffect(() => {
    help(num);
  }, []);

  return <div>Case4</div>;
}
