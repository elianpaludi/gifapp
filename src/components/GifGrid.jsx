import React, { useState, useEffect } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem'
// import { getGifs } from '../helpers/getGifs'

const GifGrid = ({ category }) => {
  const {data, loading} = useFetchGifs(category);
  return (
    <div>
        <h3 className='category-title'> {category} </h3>
        <ol className="gifs_grid">
          { loading ? <svg id="page-loader">
                        <circle cx="75" cy="75" r="20"></circle>
                        <circle cx="75" cy="75" r="35"></circle>
                        <circle cx="75" cy="75" r="50"></circle>
                        <circle cx="75" cy="75" r="65"></circle>
                      </svg> : null}
                
                {
                    data.map( img => (
                        <GifGridItem 
                            key={ img.id }
                            { ...img }
                        />
                    ))
                }
        </ol>
    </div>
  )
}

export default GifGrid