import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState([ 'One Punch', 'Dragon Ball' ]);

    //console.log(categories);
    const onAddCategory = ( newCategory ) => {
        
        if ( categories.includes(newCategory) ) return;
        
        //console.log( newCategory );
        setCategories([ newCategory,...categories ]);
          
        // categories.push('Valorant');
        // setCategories(['Valorant',...categories]);
        // setCategories([...categories,'Valorant']);
        // setCategories( cat => [...categories,'Valorant'])
    };

    return(
        <>
           {/* titulo */}
           <h1>GifExpertApp</h1>
           {/* <input></input> */}
           <AddCategory 
                // setCategories = { setCategories }
                onNewCategory = { (event) => onAddCategory(event) }
            
            />
           {/* <button onClick={ () => onAddCategory() }> */}
           <button onClick={ onAddCategory }>
                Agregar
           </button>
           {/* input */}

            {/* listado de gif */}
            <ol>
                { 
                    categories.map( ( category ) => {
                    
                        return (
                            <div key={ category }>
                                <h3>{ category }</h3>
                                <li>{ category }</li> 
                            </div>
                        )
                    
                    }) 
                }
                
            </ol>
                {/* gif item */}

        </>
    )
};