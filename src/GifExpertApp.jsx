import React, {useState} from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifExpertApp = () => {
  const [categories, setCategories ] = useState(['One Punch'])

  const handleAdd = () => {
    setCategories([...categories, 'HunterXHunter'])
    console.log(categories)
  }

  return (
      <div>
        <AddCategory setCategories={ setCategories }/>

          <ol className="container_categories">
            { 
              categories.map( category =>
               (<GifGrid
                  key={category}
                  category={ category }
               /> )
               )
            }
          </ol>

      </div>
  )
}

export default GifExpertApp