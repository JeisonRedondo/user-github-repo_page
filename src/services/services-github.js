// Aqui colocare las llamadas de la api de github
import axios from "axios";

const githubUser = async (username) => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}`,
    );
    return response.data;
  } catch (error) {
    console.error("Error al obtener el usuario de github", error);
    return null;
  }
};

const respuesta = await githubUser("JeisonRedondo");
console.log(respuesta);
