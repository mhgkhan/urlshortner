import React from 'react'

const Table = ({heading1, heading2, value1, value2}) => {
    return (
        <table className='w-full mt-3 text-lg rounded-md' border={1}>
            <thead >
                <tr className='bg-blue-100 font-bold'>

                    <th className=" w-[50%] text-wrap break-all border border-1 border-blue-400 rounded-md">{heading1}</th>
                    <th className=" w-[50%] text-wrap break-all border border-1 border-blue-400 rounded-md">{heading2}</th>

                </tr>
            </thead>
            <tbody>
                <tr className='text-center bg-yellow-200 font-normal'>

                    <td className=" w-[50%] text-wrap break-all border border-1 border-blue-400 rounded-md">{value1}</td>
                    <td className=" w-[50%] text-wrap break-all border border-1 border-blue-400 rounded-md">{value2}</td>

                </tr>
            </tbody>
        </table>
    )
}

export default Table