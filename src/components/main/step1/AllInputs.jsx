import React from 'react'
import Input from './Input'

const AllInputs = () => {
  return (
    <div className='flex flex-col gap-6'>
        <Input
              type={"text"}
              inputName={"Name"}
              inputPlaceHolder={"e.g. Stephen King"}
            />
            <Input
              type={"text"}
              inputName={"Email Address"}
              inputPlaceHolder={"e.g. stephenking@lorem.com"}
            />

            <Input
              type={"tel"}
              inputName={"Phone Number"}
              inputPlaceHolder={"e.g. +1 234 567 890"}
            />

    </div>
  )
}

export default AllInputs