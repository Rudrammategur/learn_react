import './logo.css'

export default function Logo({fruitname, quantity, image, description, onSelectedClick,a}){
    return (  
    <tr>
     <td>{fruitname}</td>
     <td>{quantity}</td>
     <td><img src={image} alt={fruitname} className="fruit-image"></img></td>
     <td><button onClick={onSelectedClick} >
          ...
        </button>

        {!(description)}
    {description}
     </td>
   
   </tr> );
   }