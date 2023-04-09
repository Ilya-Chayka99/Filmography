import {useHttp} from "../Components/hook/http.hook.jsx";

const useKinoService = () => {
  const {loading,request,error,clearError} = useHttp();
  const _apiBase = "https://api.kinopoisk.dev/v1/movie?";
  const getAllFilm = async () => {
      return await request(`${_apiBase}selectFields=id&selectFields=name&selectFields=year&selectFields=description&selectFields=rating&selectFields=poster&page=1&limit=10`);
  }
    return{
        loading,
        error,
        clearError,
        getAllFilm,
    };
}
export default useKinoService;