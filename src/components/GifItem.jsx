import React from 'react'

// export const GifItem = ( props ) => {
//   console.log(props);
export const GifItem = ( { title, url, id }) => {
//   console.log({ title, url, id });
  
  return (
    <div className="card">
        <img src={ url } alt={ title }/>
        <p>{ title }</p>
    </div>
  )
}
