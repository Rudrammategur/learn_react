import { FRUITS } from './data'
import { useState } from 'react'
import './App.css'
import Logo from './components/logo/logo'
import TabName from './components/TabName/TabName'
import Header from './components/Header/header'



function App() {
  let TabContent = "Click on the tab to get more details";
  const [FRUIT, setfruitname] = useState();
  // function handleOnSelect(fruitname){
  //   TabContent = fruitname;
  // }
  const [description, setdescription] = useState(); 
  // function handleOnClick(Description){
  //   console.log("Description",Description);
  //   TabContent = Description;
  //}

  const tabButtons = [];
  FRUITS.forEach((FRUIT1) => {
    tabButtons.push(
      <TabName key={FRUIT1.fruitname} onSelect={() => setfruitname(FRUIT1)}>
        {FRUIT1.fruitname}
      </TabName>
    );
  });

  return (
    <>
    <Header />
    {/* {
      TabContent =( <div><p><h3>{FRUIT.fruitname}</h3> </p>
      <p><h4>Image : <img src={FRUIT.image} alt={FRUIT.fruitname} className="fruit-image"></img></h4></p>
      <p><h4>Quantity : {FRUIT.quantity} </h4></p>
      <p><h4>Quantity : {FRUIT.description} </h4></p>
    </div>)
    } */}
      <table>
        <tr>
          <th>Fruit Name </th>
          <th>Quantity</th>
          <th>Image</th>
          <th>Description</th>
        </tr>
        {FRUITS.map(FRUIT1 =>
        <Logo  key={FRUIT1.fruitname} onSelectedClick={() => setdescription(FRUIT1.description)} {...FRUIT1} ></Logo>
        )}
      </table>
      <p className="read-the-docs">j
        Click on the Vite and React logos to learn more
      </p>
      <div>
      {tabButtons}
      {/* {FRUITS.map((FRUIT1) => (
          <TabName key={FRUIT1.fruitname} onSelect={() => setfruitname(FRUIT1)}>
            {FRUIT1.fruitname}
          </TabName>
        ))} */}
      </div>
      {/* <TabName onSelect={() => setfruitname(FRUITS[0])}>{FRUITS[0].fruitname}</TabName>
      <TabName onSelect={() => setfruitname(FRUITS[1])}>{FRUITS[1].fruitname}</TabName>
      <TabName onSelect={() => setfruitname(FRUITS[2])}>{FRUITS[2].fruitname}</TabName>
      <TabName onSelect={() => setfruitname(FRUITS[3])}>{FRUITS[3].fruitname}</TabName> */}

      { FRUIT!=null ? <div><p><h3>{FRUIT.fruitname}</h3> </p>
        <p><h4>Image : <img src={FRUIT.image} alt={FRUIT.fruitname} className="fruit-image"></img></h4></p>
        <p><h4>Quantity : {FRUIT.quantity} </h4></p>
        <p><h4>Quantity : {FRUIT.description} </h4></p>
      </div> : 
      <div><p>{TabContent}</p>
    </div>
      }
      
    </>
  )
}

export default App
