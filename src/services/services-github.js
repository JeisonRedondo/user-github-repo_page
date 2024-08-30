// Aqui colocare las llamadas de la api de github
import axios from "axios";

const githubUser = async (username) => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}/repos`,
    );
    return response.data;
  } catch (error) {
    console.error("Error getting Github User", error);
    return null;
  }
};

async function githubUserRepo() {
  const respuesta = await githubUser("JeisonRedondo");

  const RepoArray = [];

  for (let index = 0; index < respuesta.length; index++) {
    let RepoObject = {
      name: respuesta[index].name,
      description: respuesta[index].description,
      url: respuesta[index].url,
    };
    RepoArray.push(RepoObject);
  }

  return RepoArray;
}

// Necesito una funcion que me filtre los nombres en base a los caracteres que puede
// pasar el usuario

async function filterTextRepo(query) {
  const arrayRepos = await githubUserRepo();

  const acceptedRepos = [];
  arrayRepos.forEach((repo) => {
    let nameRepo = repo.name.toLowerCase();
    if (nameRepo.includes(query.toLowerCase())) {
      acceptedRepos.push(repo);
    }
  });
  console.log("Repos Aceptados: ", acceptedRepos);
}

filterTextRepo("css");
