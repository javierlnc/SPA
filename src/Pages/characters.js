import getHash from '../Utils/getHash'
import getData from '../Utils/getData';

const character = async() => {
    const id = getHash();
    const character = await getData(id);
    const view = `
    <div class="Characters-Inner">
        <article class="character-card">
            <img src="${character.image}" alt="${character.name}">
            <h2>${character.name}</h2>
        </article>
        <article class="character-card">
            <h3>Episodios: ${character.episode.length}</h3>
            <h3>Status: ${character.status}</h3>
            <h3>Especie: ${character.species}</h3>
            <h3>Genero: ${character.gender}</h3>
            <h3>Origen: ${character.origin.name}</h3>
            <h3>Ultima Ubicacion: ${character.location.name}</h3>
        </article>


    </div>
    `;
    return view;
}
export default character;