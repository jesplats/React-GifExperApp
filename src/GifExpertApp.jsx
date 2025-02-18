import { useState } from "react";
import { AddCategory, GifGrid } from './Components';
import './App.css';



export const GifExpertApp = () => {

  const [categories, setcategories] = useState(['one puch man', 'dragon ball']);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setcategories([...categories, newCategory]);
  }

  //<AddCategory setcategories={setcategories}/>
  return (
    <>

      <AddCategory
        OnNewCategory={onAddCategory}

      />

      {categories.map((category) => (
        <GifGrid
          key={category}
          Category={category}
        />
      ))}


    </>
  )
}


