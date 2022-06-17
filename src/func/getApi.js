import axios from 'axios';
import { useState } from 'react';

export function getProject(setData, setLoading, api) {

  return (
    axios
    .get(api)
    .then(result => {
      console.log('api', api, ':', result.data)
      setData(result?.data)
      setLoading(false);
    })
    .catch(error => {
      console.log('Error at', api, ':', error);
    })
  ) 
   
}