import Head from 'next/head'
import { useEffect, useState } from 'react'
import axios from 'axios'
import AuthCheck from '../../components/AuthCheck'
import MainLayout from '../../components/Layouts/MainLayout'
import CastInfo from '../../components/UI/CastInfo/CastInfo'
import FeaturedMedia from '../../components/UI/FeaturedMedia/FeaturedMedia'
import MediaRow from '../../components/UI/MediaRow/MediaRow'
import { useRouter } from 'next/router'
import LazyLoad from 'react-lazyload'
import Placeholders from '../../components/UI/Placeholders/PlaceHolders'

export default function SingleMediaPage(props) {
  const router = useRouter()
  // const [mediaData, setMediaData] = useState(false)
  //   const { id } = router.query
  console.log(props)

  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://api.themoviedb.org/3/movie/${props.query.id}?api_key=34f8aece18cbea8314f29cbe98eb1637&language=en-US`
  //     )
  //     .then(function (response) {
  //       setMediaData(response.data)
  //       console.log(response, 'Success Response for ' + mediaData.title)
  //     })
  //     .catch(function (error) {
  //       // console.log('Error Response For ' + props.title)
  //       console.log(error)
  //     })
  // }, [mediaData])

  return AuthCheck(
    <MainLayout>
      <FeaturedMedia
        title={
          props.query.mediaType === 'movie'
            ? props.mediaData.title
            : props.mediaData.name
        }
        mediaUrl={`https://image.tmdb.org/t/p/original${props.mediaData.backdrop_path}`}
        location='text'
        linkUrl={`/`}
        type='single'
      />
      <LazyLoad
        offset={-400}
        placeholder={<Placeholders title='Movies' type='large-v' />}
      >
        <MediaRow
          title='Similar To This'
          type='small-v'
          mediaType={props.query.mediaType}
          endpoint={`${props.query.mediaType === 'movie' ? 'movie' : 'tv'}/${
            props.query.id
          }/similar?`}
        />
      </LazyLoad>
      <CastInfo mediaId={props.query.id} mediaType={props.mediaType} />
    </MainLayout>
  )
}

export async function getServerSideProps(context) {
  let mediaData
  try {
    mediaData = await axios.get(
      `https://api.themoviedb.org/3/${context.query.mediaType}/${context.query.id}?api_key=34f8aece18cbea8314f29cbe98eb1637&language=en-US`
    )
  } catch (error) {
    console.log(error)
  }

  return {
    props: { mediaData: mediaData.data, query: context.query },
    //   will be passed to the page component as props
  }
}
