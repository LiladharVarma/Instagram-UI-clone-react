import React from "react";
import CreatePageModal from "./CreatePageModal";

function CreatePage({ state }) {
  return (
    <>
      {state && (
        <div className="border-solid border-2 border-white w-ful h-full bg-transparent">
          <CreatePageModal status={state} />
        </div>
      )}
    </>
  );
}

export default CreatePage;
