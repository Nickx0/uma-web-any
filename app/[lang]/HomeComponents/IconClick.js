'use client'
import Image from 'next/image'
import vivlos from './lists/vivlos';
export default function IconClick(text) {
    const play = () => {
        const audio = new Audio();
        audio.crossOrigin = 'anonymous';
        audio.src = `/static/umasounds/${vivlos[Math.floor(Math.random() * vivlos.length)]}`;
        audio.play();
    };
  return (
    <div className='w-1/5'>
      <Image
      src='/static/umaicon.png'
      width={50}
      height={50}
      alt='UmaIcon'
      onClick={play}
      />
    </div>
  )
}
