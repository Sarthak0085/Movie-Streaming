import { useState } from 'react'
import Titles from '../Titles'
import { BsBookmarkStarFill, BsCaretLeftFill, BsCaretRightFill } from 'react-icons/bs'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import { Movies } from '../../data'
import { FaHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Rating from '../Rating'
import Loader from '../Notification/Loader'
import Empty from '../Notification/Empty'
import { MovieProps } from '../../types/type'
import { useDispatch, useSelector } from 'react-redux'
import { IfMovieLiked, likeMovie } from '../../context/functionality'

const TopRated = ({ isLoading, movies }: { isLoading: boolean; movies: MovieProps[]}) => {

    const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
    const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);

     const { isLoading: likeLoading} = useSelector((state) => state.userLikeMovie);
    const dispatch = useDispatch();
    const { userInfo } = useSelector((state) => state.userLogin);

    const isLiked = (movie) => {
        return IfMovieLiked(movie);
    }

    const className = "hover:bg-dry transitions text-sm rounded w-8 h-8 flex-column bg-subMain text-white "

  return (
      <div className='my-16'>
          <Titles title='Top Rated Movies' Icon={BsBookmarkStarFill} />
          {
              isLoading ? (
                  <Loader />
              ) : movies && movies.length > 0 ? (
                                <div className="mt-10">
              <Swiper
                  navigation={{ prevEl, nextEl }}
                  autoplay={true}
                  speed={1000}
                  loop={true}
                  modules={[Navigation, Autoplay]}
                  breakpoints={{
                      0: {
                          slidesPerView: 1,
                           spaceBetween: 10
                      },
                      768: {
                          slidesPerView: 2,
                           spaceBetween: 20
                      },
                      1024: {
                          slidesPerView: 3,
                           spaceBetween: 30
                      },
                      1280: {
                          slidesPerView: 4,
                           spaceBetween: 40
                      }
                  }}
              >
                  {Movies.map((movie, index) => (
                      <SwiperSlide key={index}>
                          <div className='p-4 h-rate hovered border border-border bg-dry rounded-lg overflow-hidden'>
                              <img
                                  src={movie?.image ? movie?.image : ""}
                                  alt={movie?.name}
                                  className='w-full h-full object-cover rounded-md'
                              />
                              <div className='px-4 hoveres gap-6 text-center absolute bg-black bg-opacity-70 left-0 right-0 bottom-0 top-0'>
                                  <button
                                      onClick={() => likeMovie(userInfo, dispatch, movie)}
                                      disabled={likeLoading}
                                      className={`w-12 h-12 flex-column transitions
                                      ${isLiked(movie) ? "text-subMain" : "text-white"}
                                       hover:bg-subMain rounded-full bg-white bg-opacity-30`}>
                                      <FaHeart/>
                                  </button>
                                  <Link to={`/movie/${movie?._id}`} className='font-semibold text-xl truncated line-clmap-2'>
                                      {movie?.name}
                                  </Link>
                                  <div className='flex gap-2 text-star'>
                                      <Rating value={movie.rating} />
                                  </div>
                              </div>
                          </div>
                          
                      </SwiperSlide>
                  ))}
              </Swiper>
              <div className='w-full px-1 flex-rows gap-6 pt-12'>
                  <button className={className} ref={(node) => setPrevEl(node)} >
                      <BsCaretLeftFill />
                  </button> 
                  <button className={className} ref={(node) => setNextEl(node)} >
                      <BsCaretRightFill />
                  </button> 
              </div>
          </div>
                  ) : (
                          <div className='mt-10'>
                              <Empty message="Sorry, it seems like we have deleted all the movies. Please check after sometime" />
                          </div>
              )
          } 

    </div>
  )
}

export default TopRated