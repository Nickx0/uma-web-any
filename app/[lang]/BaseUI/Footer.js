import Image from 'next/image'
import { getDictionary } from '@/lib/dictionary'

export default async function Footer(params){
  const page = await getDictionary(params.lg)
    return(
        <footer className="footer bg-[#0A2472]">
        <div className="footer-cont mx-auto w-4/5">
            <div className="flex items-center flex-col md:flex-row gap-8 py-5">   
                <div className="w-4/5 md:w-2/5 text-center">
                    <h3 className="text-white text-3xl mb-10"><bold>{page?.footer?.rightSide}</bold></h3>
                    <div className="flex justify-center items-center">
                        <a href="/" target="_blank" rel="noreferrer" className="ml-2 mr-2 lg:ml-5 lg:mr-5 flex justify-center items-center inline-block text-white text-2xl w-20 h-20 line-h-20 bg-blue-800 rounded-full text-center transition-all duration-500 ease-in hover:text-cyan-300 hover:bg-gradient-to-r from-blue-700 via-transparent to-transparent">
                        
                        <svg className="w-2/3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#fff" d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
                        </a>

                        <a href="/" target="_blank" rel="noreferrer" className="ml-2 mr-2 lg:ml-5 lg:mr-5 flex justify-center items-center inline-block text-white text-2xl w-20 h-20 line-h-20 bg-blue-800 rounded-full text-center transition-all duration-500 ease-in hover:text-cyan-300 hover:bg-gradient-to-r from-blue-700 via-transparent to-transparent">
                        
                        <svg className="w-2/3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#fff" d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z"/></svg>
                        </a>
                    </div>
                    <p className="text-2xl mt-10">{page?.footer?.rightText}</p>
                </div>
                <div className="w-4/5 md:w-3/5 flex justify-center items-center flex-col">
                    <h3 className="text-3xl mb-3">{page?.footer?.leftSide}</h3>
                    <div className='w-full lg:w-2/3' style={{borderRadius: '8px', overflow: 'hidden'}}>
                    <Image
                    src='/static/trainercard.webp'
                    width={800}
                    height={450}
                    alt='trainerCard'
                    objectFit="cover"
                    className="w-full h-full top-0 left-0 object-cover rounded-2xl"
                    />
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-2 w-full bg-[#001C55] text-center text-white py-1">
            <small><b>© 2023 Nekroz</b></small>
        </div>
    </footer>
)
}