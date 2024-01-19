import Image from 'next/image'
import { getDictionary } from '@/lib/dictionary'
import IconClick from './HomeComponents/IconClick'
export default async function Home({params}) {
  const page = await getDictionary(params.lang)
  return (
    <main className="flex min-h-screen flex-col items-center pt-24 text-center">
      <h1 className='text-5xl font-bold'>{page?.home?.title}</h1>
      <IconClick />
    </main>
  )
}
