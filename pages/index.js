import Head from 'next/head'
// import { useEffect } from 'react'
// import { useStateContext } from '../components/HBOProvider'
// import { useRouter } from 'next/router'
import MainLayout from '../components/Layouts/MainLayout'
import FeaturedMedia from '../components/UI/FeaturedMedia/FeaturedMedia'
import AuthCheck from '../components/AuthCheck'
import MediaRow from '../components/UI/MediaRow/MediaRow'
import LazyLoad from 'react-lazyload'
import Placeholders from '../components/UI/Placeholders/PlaceHolders'

export default function Home() {
  return AuthCheck(
    <MainLayout>
      <FeaturedMedia
        mediaUrl='https://www.youtube.com/embed/NYH2sLid0Zc?autoplay=1&loop=1&start=16'
        title='Mortal Kombat'
        location='In theaters and HBO MAX. Streaming throughout May 23.'
        linkUrl='/movie/460465'
        type='front'
        mediaType={'movie'}
        mediaId={460465}
      />
      <LazyLoad
        offset={-400}
        placeholder={<Placeholders title='Movies' type='large-v' />}
      >
        <MediaRow
          title='Movies'
          type='large-v'
          endpoint='discover/movie?sort_by=popularity.desc&primary_release_year=2021'
        />
      </LazyLoad>

      <LazyLoad
        offset={-400}
        placeholder={<Placeholders title='Series' type='small-h' />}
      >
        <MediaRow
          title='Series'
          mediaType='series'
          type='small-h'
          endpoint='discover/tv?sort_by=popularity.desc&first_air_date_year=2021'
        />
      </LazyLoad>

      <LazyLoad
        offset={-400}
        placeholder={<Placeholders title='Action' type='small-v' />}
      >
        <MediaRow
          title='Action'
          type='small-v'
          endpoint='discover/movie?with_genres=28&primary_release_year=2021'
        />
      </LazyLoad>

      <LazyLoad
        offset={-400}
        placeholder={<Placeholders title='Horror' type='small-v' />}
      >
        <MediaRow
          title='Horror'
          type='small-v'
          endpoint='discover/movie?with_genres=27&primary_release_year=2021'
        />
      </LazyLoad>

      <LazyLoad
        offset={-400}
        placeholder={<Placeholders title='Animated' type='large-h' />}
      >
        <MediaRow
          title='Animated'
          type='large-h'
          endpoint='discover/movie?with_genres=16&primary_release_year=2021'
        />
      </LazyLoad>

      <LazyLoad
        offset={-400}
        placeholder={<Placeholders title='Sci-fi' type='small-v' />}
      >
        <MediaRow
          title='Sci-fi'
          type='small-v'
          endpoint='discover/movie?with_genres=878&primary_release_year=2021'
        />
      </LazyLoad>
    </MainLayout>
  )
}
