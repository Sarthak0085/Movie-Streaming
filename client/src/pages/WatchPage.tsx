import { Link, useParams } from "react-router-dom"
import { Movies } from "../data";
import { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { FaCloudDownloadAlt, FaHeart, FaPlay } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getMovieById } from "../redux/actions/moviesAction";
import { RiMovie2Line } from "react-icons/ri";
import Loader from "../components/Notification/Loader";
import { IfMovieLiked, likeMovie } from "../context/functionality";

const WatchPage = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const { isLoading, isError, movie } = useSelector((state) => state.getMovieById);

    const { isLoading: likeLoading } = useSelector((state) => state.userLikeMovie);
    const { userInfo } = useSelector((state) => state.userLogin);

    const isLiked = IfMovieLiked(movie);

    useEffect(() => {
        dispatch(getMovieById(id));
    }, [dispatch, id])

    // const movie = Movies.find((movie) => movie.name === name);
    const [play, setPlay] = useState(false);

    return (
        <div className="container mx-auto bg-dry p-6 mb-12">
            <div className="flex-btn flex-wrap mb-6 gap-2 bg-main rounded border border-gray-800 p-6">
                {
                    !isError && (
                          <>
                    <Link to={`/movie/${movie?._id}`} className="md:text-xl text-sm flex gap-3 items-center font-bold text-dryGray">
                    <BiArrowBack />{" "}{movie?.name}
                </Link>
                <div className="flex-btn sm:w-auto w-full gap-5">
                                <button
                                     onClick={() => likeMovie(dispatch, userInfo, movie)}
                                    disabled={likeLoading}
                                    className={`bg-white hover:bg-subMain
                                     ${isLiked ? "text-subMain" : "text-white"}
                                      transitions bg-opacity-30 rounded px-3 py-4 text-sm`}>
                        <FaHeart />
                    </button>
                    <button className="bg-subMain flex-rows gap-2 hover:bg-main transitions bg-opacity-30 text-white rounded px-3 py-4 text-sm">
                        <FaCloudDownloadAlt /> Download
                    </button>
                </div>
                </>
                    )
              }

                {/* Watch Video  */}
                {
                    play ?
                        (
                            <video controls autoPlay={play} className="w-full h-full rounded">
                                <source src={movie?.video ? movie?.video : ""} type="video/mp4" title={movie?.name} />
                            </video>
                        ) : (
                            <div className="w-full h-screen rounded-lg overflow-hidden relative">
                                {
                                    isLoading ?
                                        (
                                            <div className='w-full gap-6 flex-column min-h-screen'>
                                                <Loader />
                                            </div>
                                        ) :
                                        isError ?
                                            (
                                                <div className='w-full gap-6 flex-column min-h-screen'>
                                                    <div className='flex-column w-24 h-24 p-5 mb-4 rounded-full bg-main text-subMain text-6xl'>
                                                        <RiMovie2Line />
                                                    </div>
                                                    <p className='text-border text-md'>
                                                        {isError}
                                                    </p>
                                                </div>
                                            ) :
                                            (
                                                <>
                                                    <div className="absolute left-0 bottom-0 right-0 top-0 bg-main bg-opacity-30 flex-column">
                                                        <button
                                                            onClick={() => setPlay(true)}
                                                            className="text-subMain bg-white flex-column border border-subMain hover:bg-main w-20 h-20 font-medium text-xl rounded-full"
                                                        >
                                                            <FaPlay />
                                                        </button>
                                                    </div>
                                                    <img
                                                        src={
                                                            movie?.image ?
                                                                movie?.image
                                                                : `1.jpg`
                                                        }
                                                        alt={movie?.name}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </>
                                            )
                                }

                            </div>
                        )
                }
            </div>
        </div>
    )
}

export default WatchPage