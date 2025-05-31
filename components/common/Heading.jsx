import React from 'react'

const Heading = (props) => {
    const { p, h2, h3, h4 } = props;
    return (
        <div className='flex flex-col items-center justify-center sm:gap-2 gap-[6px] text-center'>
            {h2 && <h2 className='mb-3'>{h2}</h2>}
            {h3 && <h3>{h3}</h3>}
            {h4 && <div className='h4'>{h4}</div>}
            {p && <p className='text-text max-w-[700px] '>{p}</p>}
        </div>
    )
}

export default Heading