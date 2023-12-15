import Image from 'next/image'
import { getDictionary } from '@/lib/dictionary'

export default async function Home({params}) {
  const page = await getDictionary(params.lang)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className='text-3xl font-bold'>{page?.home?.title}</h1>
    </main>
  )
}
