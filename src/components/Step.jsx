import React from 'react'

const Step = ({stepNo , stepName}) => {
  return (
    <div className="flex gap-4 items-center">
        <span className="border bg-[hsl(206,94%,87%)] text-sm font-bold h-9 w-9 rounded-full flex items-center justify-center">
          {stepNo}
        </span>
        <div className="leading-5">
          <p className="text-[#ffffffb3]">STEP {stepNo}</p>
          <p className="font-[500] tracking-[1px] text-[hsl(0,100%,100%)]">
            {stepName}
          </p>
        </div>
      </div>
  )
}

export default Step