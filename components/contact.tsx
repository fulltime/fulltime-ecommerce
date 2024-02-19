
import * as React from "react";

const Contact = () => {
  return (
    <div className="items-start bg-gray-800 flex max-w-[569px] flex-col p-8 max-md:px-5">
      <div className="items-stretch self-stretch flex justify-between gap-4 max-md:max-w-full max-md:flex-wrap">
        <div className="text-gray-400 text-base items-stretch border border-[color:var(--gray,#ABB2BF)] grow justify-center py-2 border-solid">
          Name
        </div>
        <div className="text-gray-400 text-base items-stretch border border-[color:var(--gray,#ABB2BF)] grow justify-center py-2 border-solid">
          Email
        </div>
      </div>
      <div className="text-gray-400 text-base items-stretch border border-[color:var(--gray,#ABB2BF)] self-stretch justify-center mt-4 py-2 border-solid max-md:max-w-full">
        Title
      </div>
      <div className="text-gray-400 text-base items-stretch border border-[color:var(--gray,#ABB2BF)] self-stretch mt-4 pt-2 pb-24 border-solid max-md:max-w-full">
        Message
      </div>
      <div className="text-white text-base font-medium whitespace-nowrap items-stretch border border-[color:var(--primary,#9BD839)] aspect-[1.9189189189189189] justify-center mt-4 px-4 py-2 border-solid self-start">
        Send
      </div>
    </div>
  );
}

