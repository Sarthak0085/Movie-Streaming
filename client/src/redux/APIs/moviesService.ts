import Axios from "./Axios";

type GetAllMoviesProps = {
    category: string;
    time: string;
    language: string;
    rating: string;
    year: string;
    search: string;
    pageNumber: number;
}

// get all movies
export const getAllMoviesService = async ({
    category,
    time,
    language,
    rating,
    year,
    search,
    pageNumber
}: GetAllMoviesProps) => {
    const { data } = await Axios.get(`/movies?category=${category}&time=${time}&language=${language}&rating=${rating}&year=${year}&search=${search}&pageNumber=${pageNumber}`
    );
    return data;
}

// get movie by id service
export const getMovieByIdService = async (id: string) => {
    const { data } = await Axios.get(`/movies/${id}`);
    return data;
}

// get top rated movies service
export const getTopRatedMoviesService = async () => {
    const { data } = await Axios.get(`/movies/rated/top`);
    return data;
}

// get random movies service
export const getRandomMoviesService = async () => {
    const { data } = await Axios.get(`/movies/random/all`);
    return data;
}

// get review on movie
export const reviewToMovie = async (token: string, id: string, review) => {
    const { data } = await Axios.post(`/movies/reviews/${id}`, review, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return data;
}

// delete movie service
export const deleteMovie = async (id: string, token: string) => {
    const { data } = await Axios.delete(`/movies/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return data;
}

// delete all movie service
export const deleteAllMovie = async (token: string) => {
    const { data } = await Axios.delete(`/movies`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return data;
}


// create movie by admin service
export const createMovieByAdminService = async (movieData: any, token: string) => {
    const { data } = await Axios.post(`/movies/`, movieData, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return data;
}

// update movie by admin service
export const updateMovieByAdminService = async (id: string, movieData: any, token: string) => {
    const { data } = await Axios.put(`/movies/${id}`, movieData, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return data;
}