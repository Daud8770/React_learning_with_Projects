import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { apiUrl, filterData } from './data';
import NavBar from './components/NavBar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import Spinner from './components/Spinner';


function App() {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const[category,setCategory]=useState(filterData[0].title)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(apiUrl);
        const output = await res.json();
        console.log(output);
        setCourses(output.data);
      } catch (error) {
        toast.error("Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='min-h-screen flex-col flex bg-bgDark2'>
      <ToastContainer />
      <NavBar />
<div  className="bg-blue-950">  
 <Filter filterData={filterData} setCategory={setCategory} category={category} />
      <div className="w-11/12 max-w-[1200px] min-h-[50vh] mx-auto flex flex-wrap justify-center items-center">
      {loading ?  <Spinner /> : <Cards courses={courses} category={category} />}
      </div>
</div>

     
      
    </div>
  );
}

export default App;
