import BR_icon from './../assets/BR_icon.jpg';
import React from 'react'

const Result = ({codeText}) => {
  return (
    <div>
            <div className="result bg-[#282c34] p-4 shadow mt- rounded-lg">
            <div className="flex">
              <img className=" w-9 h-9 rounded-3xl " src={BR_icon} alt="" />
              <div className=" pl-2 text-lg font-semibold mb-2 pt-1 text-white">Output </div>
            </div>
                <iframe
                    className="w-full h-60 border   border-gray-700 rounded-md"
                    srcDoc={codeText}
                    title="output"
                    sandbox="allow-scripts allow-modals"
                    width="100%"
                    height="100%"
                >
                </iframe>
            </div>
        </div>
  )
}

export default Result
