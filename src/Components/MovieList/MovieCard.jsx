import { useContext, useState } from 'react';
import { movieContext } from '../../Contexts/Context';
import { getImageUrl } from "../../Utils/Cine-utility";
import CineRating from "../CineRating/CineRating";
import MovieDetails from '../MoiveDetailsModal/MovieDetails';



const MovieCard = ({ movie }) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);

    const { cardData, setCardData } = useContext(movieContext);


    const handleAddToCard = (event, movie) => {
        event.stopPropagation();
        const found = cardData.find((item) => {
            return item.id === movie.id;
        });

        if (!found) {

            setCardData([...cardData, movie])
        } else {
            alert(`${movie.title} has been added to the card already !`)
        }

    };
    function handleMovieSelection(movie) {
        setSelectedMovie(movie);
        setShowModal(true)

    };

    const handleModalClose = () => {
        setSelectedMovie(null);
        setShowModal(false);
    };





    return (

        <>

            {showModal &&
                <MovieDetails
                    movie={selectedMovie}
                    onClose={handleModalClose}
                    onCardAdd={handleAddToCard}
                ></MovieDetails>
            }
            <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
                <div onClick={() => handleMovieSelection(movie)}>
                    <img className="w-full object-cover" src={getImageUrl(movie.cover)} alt={movie.title} />
                    <figcaption className="pt-4">
                        <h3 className="text-xl mb-1"> {movie.title}</h3>
                        <p className="text-[#575A6E] text-sm mb-2"> {movie.genre} </p>

                        <div className="flex items-center space-x-1 mb-5">
                            <CineRating value={movie.rating} />
                        </div>
                    </figcaption>
                    <a onClick={(e) => handleAddToCard(e, movie)} className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                        href="#">
                        <img src="./assets/tag.svg" alt="" />
                        <span> ${movie.price} | Add to Cart</span>
                    </a>


                </div>
            </figure >
        </>);
};

export default MovieCard;