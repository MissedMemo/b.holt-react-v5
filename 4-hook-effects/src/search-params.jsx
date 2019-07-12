import React, { useState, useEffect } from "react";
import useDropDown from "./useDropDown.jsx";
import Results from "./results.jsx";
import pet, { ANIMALS } from "@frontendmasters/pet";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropDown] = useDropDown("Animal", "dog", ANIMALS);
  const [breed, BreedDropDown, setBreed] = useDropDown("Breed", "", breeds);
  const [pets, setPets] = useState([]);

  const requestPets = async () => {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal
    });

    setPets(animals || []);
  };

  useEffect(() => {
    pet.breeds(animal).then(({ breeds }) => {
      const breedNames = breeds.map(({ name }) => name);
      setBreeds([]);
      setBreed("");
      setBreeds(breedNames);
    }, console.error);
  }, [animal, setBreed]);

  return (
    <div className="search-params">
      <form
        onSubmit={e => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            onChange={e => setLocation(e.target.value)}
            placeholder="location"
          />
        </label>
        <AnimalDropDown />
        <BreedDropDown />
        <button>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
