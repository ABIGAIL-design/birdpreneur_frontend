import React from 'react'

export default function PageTitle(props) {
    return (
        <div className='pagetitle_wrapper mt-5'>
            <div className="page_title ">{props.title}</div>
        </div>
    )
}
