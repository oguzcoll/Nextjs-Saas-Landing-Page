import ArrowIcon from '@/assets/arrow-right.svg';
import cogImage from '@/assets/cog.png';
import Image from 'next/image';
import cylinderImage from '@/assets/cylinder.png';
import noodleImage from '@/assets/noodle.png';
export const Hero = () => {
  return (
    <section className='pt-8 pb-20 md:pt-5 md:pb-10 bg-hero-radial-bg overflow-x-clip'>
      <div className='container'>
        <div className='md:flex items-center'>
          <div className='md:w-[478px]'>
            <div className='tag'>Version 2.0 is here</div>

            <h1 className='bg-gradient-to-b from-black font-bold text-5xl  md:text-7xl tracking-tighter to-[#001E80]  text-transparent bg-clip-text mt-6'>
              {' '}
              Pathway to Productivity
            </h1>
            <p className='text-[#010D3E] text-xl mt-6 tracking-tight'>
              Celebrate the joy of accomplishment with an app designed to track
              your progress, motivate your efforts, and celebrate your
              successes.
            </p>
            <div className=' flex gap-2 items-center mt-[30px]'>
              <button className='btn btn-primary'>Get for free</button>
              <button className='btn btn-text gap-1'>
                <span className='whitespace-nowrap'>Learn more</span>
                <ArrowIcon className='h-5 w-5' />
              </button>
            </div>
          </div>
          {/* Image */}
          <div className='mt-20 md:mt-0 md:h-[648px] md:flex-1 relative'>
            <Image
              src={cogImage}
              alt='Cog Image'
              className='md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0'
            />
            <Image
              src={cylinderImage}
              alt='Cog Image'
              width={220}
              height={220}
              className='hidden md:block absolute -top-8 -left-32 md:absolute'
            />
            <Image
              src={noodleImage}
              alt='Cog Image'
              width={220}
              className='hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg] '
            />
          </div>
        </div>
      </div>
    </section>
  );
};
