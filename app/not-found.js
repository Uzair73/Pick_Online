import Button from '@/components/Button'
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='flex justify-center items-center h-screen'>
    <div className="flex flex-col items-center justify-center gap-9">
      <h1 className='text-7xl font-bold tracking-widest'>404 Not Found</h1>
      <p>Your visited page not found. You may go home page.</p>
      <Link href="/"><Button btn_text={'Back to home page.'} classname={'bg-btn_color px-10 py-4 text-white rounded-md'}/></Link>
    </div>
    </div>
  )
}