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

  console.log(RepoArray);

  return RepoArray;
}

githubUserRepo();
