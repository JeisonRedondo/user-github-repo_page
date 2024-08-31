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

function githubUserRepo(respuesta) {
  const RepoArray = [];

  for (let index = 0; index < respuesta.length; index++) {
    const descRepo = respuesta[index].description;
    const description = descRepo == null ? "No Description" : descRepo;
    let RepoObject = {
      name: respuesta[index].name,
      description: description,
      url: respuesta[index].url,
    };
    RepoArray.push(RepoObject);
  }

  return RepoArray;
}

// Necesito una funcion que me filtre los nombres en base a los caracteres que puede
// pasar el usuario

async function filterTextRepo(user, query) {
  const respuesta = await githubUser(user);

  const arrayRepos = githubUserRepo(respuesta);

  const acceptedRepos = [];

  arrayRepos.forEach((repo) => {
    let nameRepo = repo.name.toLowerCase();
    if (nameRepo.includes(query.toLowerCase())) {
      acceptedRepos.push(repo);
    }
  });
  console.log("Repos Aceptados: ", acceptedRepos);

  const responseRepo = {
    response: false,
    repos: [],
  };

  if (acceptedRepos.length > 0) {
    responseRepo.response = true;
    responseRepo.repos = acceptedRepos;
  } else {
    responseRepo.repos = arrayRepos;
  }

  return responseRepo;
}

//filterTextRepo("JeisonRedondo", "css");
export default filterTextRepo;
