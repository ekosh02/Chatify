import React, {useEffect} from 'react';
import axios from 'axios';
import MyStack from './src/bar/Stack';


export default function App() {

  useEffect(() => {
    axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';
  }, []);

  return (
    <MyStack/>
  );
};



