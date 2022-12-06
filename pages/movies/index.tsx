/* eslint-disable @next/next/no-img-element */
import axios from 'axios';
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';



interface Imovie {
  id: string;
  description: string;
  url: string;
  name: string;
  category: string;
  isFavourite: boolean
}

interface Imovies {
  movies: Array<Imovie>
}
export async function getServerSideProps(){

  const {data: movies} = await axios.get(
    'https://638ef4e34ddca317d7ea4d0b.mockapi.io/api/v1/movies'
  );
  return {
    props: {
      movies: movies,
    },
  };

}



const Home: React.FC<Imovies> = ({ movies }) => {

  const router = useRouter();

   const refreshData = () => {
    router.replace(router.asPath);
  }

  async function handleSubmit(id: string, body:{isFavourite: boolean}) {
  
  const res = await axios.put(
    `https://638ef4e34ddca317d7ea4d0b.mockapi.io/api/v1/movies/${id}`,
    {
      ...body,
    }
  );
  // Check that our status code is in the 200s,
  // meaning the request was successful.
  if (res.status < 300) {
    toast.success('Movie added to watch list');
    refreshData();
  }
}
  return (
    <div>
      <Head>
        <title>Movies</title>
      </Head>
      <div className='bg-white'>
        <div className='mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
          <h2 className='text-2xl font-bold tracking-tight text-gray-900'>
            Movies
          </h2>

          <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
            {movies.map((movie) => (
              <div key={movie.id} className='group mt-12'>
                <Link
                  href={`/movies/${movie.id}`}
                  className='min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80'
                >
                  <Image
                    src={movie.url}
                    alt={movie.name}
                    className='h-full w-full object-cover object-center lg:h-full lg:w-full'
                    width={500}
                    height={500}
                  />
                </Link>
                {/* <div className='mt-4 flex justify-between'>
                  <div>
                    <h3 className='text-sm text-gray-700'>
                      <a href={product.href}>
                        <span aria-hidden='true' className='absolute inset-0' />
                        {product.name}
                      </a>
                    </h3>
                    <p className='mt-1 text-sm text-gray-500'>
                      {product.color}
                    </p>
                  </div>
                  <p className='text-sm font-medium text-gray-900'>
                    {product.price}
                  </p>
                </div> */}
                <button
                  onClick={
                    !movie.isFavourite
                      ? () => handleSubmit(movie.id, { isFavourite: true })
                      : () => handleSubmit(movie.id, { isFavourite: false })
                  }
                  type='submit'
                  className='flex w-full justify-center rounded-md border border-transparent bg-gray-900 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mt-5 mb-5'
                >
                  {!movie.isFavourite ? ' Add to watch list' : 'Remove from watch list' }
                 
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home
