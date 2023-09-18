import './App.css'
import Navbar from './Nav2/NavBar'
import PriceOptions from './PriceOptions/PriceOptions'
import Rechart from './Rechart/Rechart'

function App() {
 

  return (
    <>
      
    

    <Navbar></Navbar>
      <PriceOptions></PriceOptions>
      <br />
      <h1 className='text-5xl font-bold text-center mb-24'>Revenue Of This Year</h1>
      <Rechart></Rechart>
     {/* <DaisyNav></DaisyNav> */}
     
      
      
    </>
  )
}

export default App
