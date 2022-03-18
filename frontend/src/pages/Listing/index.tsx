import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { MoviePage } from "types/movie";
import { BASE_URL } from "utils/request";

function Listing() {

    // ()response => { -> Isto é uma passagem de função para outra função executar
    // FORMA ERRADA: APENAS TESTE
    // Desse executa mais de uma vez
    // axios.get(`${BASE_URL}/movies?size=12&page=0`)
    //     .then(response => {
    //         console.log(response.data)
    //     });

    // Hook: useState -> Manter estado no componente
    const [pageNumber, setPageNumber] = useState(0);

    // Hook: useEffect ->
    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=12&page=0`)
            .then(response => {
                const data = response.data as MoviePage;
                console.log(data);
                setPageNumber(data.number);
            });
    }, []);

    return (
        <>
            <p>{pageNumber}</p>
            <Pagination />
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Listing;