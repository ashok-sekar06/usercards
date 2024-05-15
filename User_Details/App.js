// import { Fragment } from "react";
// import { LevelOne } from "./components/LevelOne";

import { ArraySamp } from "./components/ArraySamp";

// import { ChildProps } from "./components/ChildProps";
// import { StuProps } from "./components/StuProps";

// import { Head } from "./components/Head";

function App() {
const items =[
  { id: 1, name: "Item 1"},
  { id: 2, name: "Item 2"},
  { id: 3, name: "Item 3"},
]


  return (
    <>
  {/* <div> 
     <div>Ashok is trying to learning</div>
    <LevelOne /> 
    </div> */}
    {/* <Head /> */}

    {/* <StuProps name="Ajith" age={25} isMarried={true} />
    <StuProps name="Ashok" age={23} isMarried={false} />
    <StuProps name="Jeswanth" age={13} isMarried={false} />
    <StuProps name="Jensihwar" age={10} isMarried={true} />
    <StuProps name="Munisaamy" />

    <ChildProps> 
    <p> We are form Kalavai</p>
    <p> It is in Ranipet District</p> 
    <p> Proud to be here...</p>
    </ChildProps> */}
    <ArraySamp items={items} />
    </>
);
}

export default App;
