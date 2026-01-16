



// constants

const BASE_CHARACTER_URL = 'https://rickandmortyapi.com/api/character';

export async function getCharacter(input, status, gender, species, page) {
  try {
    const res = await fetch(`${BASE_CHARACTER_URL}?name=${input}&page=${page}&gender=${gender}&status=${status}&species=${species}`)
    console.log(res);
    const characters = await res.json();  
    return characters  
  } catch (error) {
    console.log(error);
  }
}

