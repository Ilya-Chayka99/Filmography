import {useHttp} from "../Components/hook/http.hook.jsx";

const useKinoService = () => {
  const {loading,request,error,clearError} = useHttp();
  const _apiBase = "https://api.kinopoisk.dev/v1/movie";
  const getFilm = async (id) => {
      return await request(`${_apiBase}/${id}`);
  }
    return{
        loading,
        error,
        clearError,
        getFilm,
    };
}
export default useKinoService;