import React from 'react'

export const HeaderdataCard = ({title,path}) => {
  return (
           <ul>
            <li>
            <a href={path}>{title}</a>
            </li>
        </ul>

  )
}
