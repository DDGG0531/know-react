import React, { lazy, Suspense } from "react";

// 狂
const Mock = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./mock")), 3000);
  });
});

export default function Case12() {
  return (
    <div>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Mock />
        </Suspense>
      </div>
    </div>
  );
}
