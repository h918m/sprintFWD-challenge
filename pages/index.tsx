import Image from 'next/image';
import profilePic from '../public/m.jpg';

export default function Home() {
  return (
    <div className='relative overflow-hidden'>
      <main>
        <div className='bg-gray-900 pt-10 sm:pt-16 lg:overflow-hidden lg:pt-8 lg:pb-14'>
          <div className='mx-auto max-w-7xl lg:px-8'>
            <div className='lg:grid lg:grid-cols-2 lg:gap-8'>
              <div className='mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left'>
                <div className='lg:py-24'>
                  <h1 className='mt-4 text-4xl font-bold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl'>
                    <span className='block'>Movies</span>
                    <span className='block text-indigo-400'>
                      Plan your next watch
                    </span>
                  </h1>
                  <p className='mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl'>
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                    qui Lorem cupidatat commodo. Elit sunt amet fugiat veniam
                    occaecat fugiat.
                  </p>
                </div>
              </div>
              <div className='mt-12 -mb-16 sm:-mb-48 lg:relative lg:m-0'>
                <div className='mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0'>
                  <Image
                    className='w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none'
                    src={profilePic}
                    alt=''
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
