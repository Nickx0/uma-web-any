import Image from 'next/image'
import { getDictionary } from '@/lib/dictionary'

export default async function Home({params}) {
  const page = await getDictionary(params.lang)
  return (
    <main className="flex min-h-screen flex-col items-center pt-24">
      <h1 className='text-5xl font-bold'>{page?.home?.title}</h1>
      <Image
      src='/static/umaicon.png'
      width={50}
      height={50}
      />
      <img src='/static/umaicon.png'></img>
    </main>
  )
}
