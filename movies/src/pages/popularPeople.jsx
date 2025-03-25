import React from "react";
import { getPopPeople } from "../api/tmdb-api";
import PageTemplate from '../components/templatePeopleListPage';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/spinner';

const PopPeoplePage = () => {

  const { data, error, isPending, isError } = useQuery({
    queryKey: ['popPeople'],
    queryFn: getPopPeople,
  })

  if (isPending) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }

  const people = data.results;

  return (
    <PageTemplate
      title="Popular Actors"
      searchPrompt="Actors"
      people={people}
    />
  );
};
export default PopPeoplePage;