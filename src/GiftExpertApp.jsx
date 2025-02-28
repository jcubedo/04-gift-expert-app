import { useState } from 'react';
// import {GifGrid} from './components/GifGrid'
// import { AddCategory } from './components/addCategory';
import { AddCategory, GifGrid } from './components'

export const GiftExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);
  
  const onAddCategory = (newCategory) => {

    if (categories.includes(newCategory)) return;

    //setCategories( categories.push('Nueva Categoria')); // NO FUNCIONA porque muta el estado de categories
    //setCategories( cat => ['Nueva Categoria', ...cat]); // La añadimos al inicio
    //setCategories( ['Nueva Categoria', ...categories]); // La añadimos al inicio
    setCategories( [newCategory, ...categories]); // La añadimos al inicio
  }

  return (
    <>
        <h1>GiftExpertApp</h1>
    
        <AddCategory 
         //setCategories={ setCategories }
          onNewCategory={ value => onAddCategory(value) }
        />

          { categories.map(category => (
              <GifGrid key={category} category={category}/>
          ))
        }

    </>
  )
}
