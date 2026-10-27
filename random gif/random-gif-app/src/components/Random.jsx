import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
const API_KEY = import.meta.env.VITE_API_KEY;

const Random = () => {
  const [gif, setgif] = useState("");
  const [loading,setLoading]=useState("false")
  async function fetchData() {
    setLoading(true)
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

    const output = await axios.get(url);
    setgif(output.data.data.images.downsized_large.url);
    setLoading(false)
  }

  useEffect(() => {
    fetchData();
  }, []);

function clickHandler(){
  fetchData();
}

  return (
    <div className="w-1/2  bg-green-500 mx-auto rounded-lg border border-black flex flex-col items-center gap-y-5 mt-4">
      <h1 className="text-3xl uppercase underline font-bold mt-3">
        A Random Gif
      </h1>

    {
      loading?(<Spinner/>):( <img src={gif} width={450} alt="Random GIF" />)
    }

      

      <button
        onClick={clickHandler}
        className="w-10/12 bg-white text-xl py-2 mb-3 rounded-lg font-bold"
      >
        Generate
      </button>
    </div>
  );
};

export default Random;