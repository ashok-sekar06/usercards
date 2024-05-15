// import React from 'react'
export const Head = () => {

  const isLoggedIn= false;
  const vankkam= isLoggedIn ? <h1> Varuga Varuga </h1> : <h1> Nandri Meendum Varuga
  </h1>;
  const items= [ "Thing1", "Thing2", "Thing3", "Thing4"];

  return (
    <>
    <div>
        <h1 className="bannerText">Ashok Sekar's Theory</h1>
        <p className="proverb">Efforts never fails</p>
{/* <p>23+42={23 + 42} </p> */}
{vankkam}
{/* JSX Lists Paarkalaam */}
 <ul>
  {items.map((items, index) => (<li key={index}>{items} </li>))}
 </ul>

    </div>
    </>
  )
}
