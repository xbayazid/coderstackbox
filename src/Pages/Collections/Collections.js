import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import CollectionCard from '../../components/Cards/CollectionCard'
import Loading from '../Loading/Loading';

const Collections = () => {

    const url = `http://localhost:5000/collections`;

  /* Load Advertise Item  */
  const { data: projects = [], isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const res = await axios.get(url);
      return res.data;
    },
  });
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
        {
            projects.map(project =><CollectionCard props={project}/>)
        }
        
    </div>
  )
}

export default Collections