import Count from "./count";
import { Button } from "./Button";

function App() {
  // let [count, setCount] = useState(0)
  // if you want to add classes you use className instead of class
  // if you want to add two or more divisions you need to wrap them in a div

  return <div 
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '25%'
    }}
  > 
    {/* using division doesn't necessitate the usage of the fragment */}
    {/* do this if you do not plan or intend to add more elements */}
    <Count />
    {/* <Count></Count> */}
    <Button />
    
  </div>
  

}

export default App

// in react a component is a function that returns JSX
// always want to split the UI into separate components