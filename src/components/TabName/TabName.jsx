

export default function TabName({children, onSelect}){
    console.log("Tab Name Page gets loaded")

    return (  
        <button onClick={onSelect}>
         {children} 
        </button>
       
    );
   }