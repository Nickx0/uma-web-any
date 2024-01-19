import { getDictionary } from '@/lib/dictionary'

export default async function Navbar(params){
  const page = await getDictionary(params.lg)
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#00072D] bg-opacity-80 p-4 flex justify-between items-center">
        <div className="text-white font-bold text-xl">
        {page?.navbar?.bk1}
        </div>
  
        {/* Bloque 2: Enlaces */}
        <div className="flex space-x-4">
          <a href="#" className="text-white hover:text-gray-300">{page?.navbar?.pg1}</a>
          <a href="#" className="text-white hover:text-gray-300">{page?.navbar?.pg2}</a>
          <a href="#" className="text-white hover:text-gray-300">{page?.navbar?.pg3}</a>
          <a href="#" className="text-white hover:text-gray-300">{page?.navbar?.pg4}</a>
        </div>
      </nav>
    );
  };
