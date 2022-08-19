import Head from 'next/head'
import { useEffect } from 'react'
import { useStateContext } from '../../../components/HBOProvider'
import { useRouter } from 'next/router'
import MainLayout from '../../../components/Layouts/MainLayout'
import FeaturedMedia from '../../../components/UI/FeaturedMedia/FeaturedMedia'
import AuthCheck from '../../../components/AuthCheck'
import MediaRow from '../../../components/UI/MediaRow/MediaRow'
import LazyLoad from 'react-lazyload'
import Placeholders from '../../../components/UI/Placeholders/PlaceHolders'
import GenreNav from '../../../components/UI/GenreNav/GenreNav'
import axios from 'axios'
import { shuffleArray } from '../../../components/utilities'

export default function MediaTypePage(props) {
  const globalState = useStateContext()
  const router = useRouter()

  const showRandomMedia = () => {
    let thumbType
    return props.genresData.map((item, index) => {
      thumbType = shuffleArray(globalState.thumbTypes)[0]
      return (
        <LazyLoad
          offset={-200}
          key={item.id}
          placeholder={<Placeholders title={item.name} type={thumbType} />}
        >
          <MediaRow
            updateData={props.query.genre_id}
            title={item.name}
            type={thumbType}
            endpoint={`discover/${props.query.mediaType}?with_genres=${
              props.query.genre_id
            }&sort_by=popularity.desc&primary_release_year=2021&pag=${
              index + 1
            }`}
          />
        </LazyLoad>
      )
    })
  }

  return AuthCheck(
    <MainLayout>
      <FeaturedMedia
        mediaUrl={`https://image.tmdb.org/t/p/w1280${props.featuredData.backdrop_path}`}
        title={
          props.query.mediaType === 'movie'
            ? props.featuredData.title
            : props.featuredData.name
        }
        linkUrl={`/${props.query.mediaType}/${props.featuredData.id}`}
        type='single'
        mediaType={props.query.mediaType}
        mediaId={props.featuredData.id}
      />
      <GenreNav
        mediaType={props.query.mediaType}
        genresData={props.genresData}
      />
      {showRandomMedia()}
    </MainLayout>
  )
}

export async function getServerSideProps(context) {
  let genresData
  let featuredData

  try {
    genresData = await axios.get(
      `https://api.themoviedb.org/3/genre/${context.query.mediaType}/list?api_key=34f8aece18cbea8314f29cbe98eb1637&language=en-US`
    )
    featuredData = await axios.get(
      `https://api.themoviedb.org/3/discover/${context.query.mediaType}?primary_release_year=2021&with_genres=${context.query.genre_id}&api_key=34f8aece18cbea8314f29cbe98eb1637&language=en-US`
    )
    console.log('genresData', genresData.data)
  } catch (error) {
    console.log('Error catch', error)
  }
  console.log(genresData)

  return {
    props: {
      genresData: genresData.data.genres,
      featuredData: shuffleArray(featuredData.data.results)[0],
      query: context.query,
    },
    //   will be passed to the page component as props
  }
}
