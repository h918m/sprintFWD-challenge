import axios from 'axios';
import Image from 'next/image';

interface Imovie {
  movie: {id: string;
  description: string;
  url: string;
  name: string;
  category: string;
  isFavourite: boolean;}
}


export async function getServerSideProps({ params }: any) {
  const { data } = await axios.get(
    `https://638ef4e34ddca317d7ea4d0b.mockapi.io/api/v1/movies/${params.id}`
  );
  return {
    props: {
      movie: data,
    },
  };
}

const MovieDetail: React.FC<Imovie> = ({ movie }) => {
  return (
    <div className="w-1/2 pt-5 grid grid-cols-2 gap-8 mx-auto">
      <Image src={movie.url} alt='Movie' width={500} height={500} className="" />
      <div>
        <h1>{movie.name}</h1>
        <p>{movie.description}</p>
      </div>
    </div>
  );
};

export default MovieDetail