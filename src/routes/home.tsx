import { getGithubUrl, getLinkedinUrl, getSummary } from '@/lib/utils'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/home')({
  component: Home,
})

function Home() {

  return (
    <div className='home flex flex-col justify-center items-center gap-24 font-mono mx-48'>
      <HomeIntroComponnent />
      <HomeSummaryComponnent />
    </div>
  )
}

function HomeIntroComponnent() {
  const linkedinUrl = getLinkedinUrl();
  const githubUrl = getGithubUrl();

  return (
    <div className='home-about w-full mt-16 flex flex-col justify-center items-center gap-6'>
        <div className='text-primary flex flex-col max-w-xl justify-center text-center px-4'>
          <p className='text-2xl'>Hey There I'm</p>
          <p className='text-6xl font-bold'>Marwan Tarik</p>
          <p className='text-lg leading-relaxed max-w-md mx-auto'>
            A Software Engineer experienced in Web Development and Cloud Computing: 2x AWS Certified
          </p>
        </div>

        <div className='flex gap-6 mt-4'>
          <a href={linkedinUrl} target='_blank' rel='noopener noreferrer'>
            <img src='../../public/linkedin-svgrepo-com.svg' alt='linkedin' className='w-6 hover:opacity-80 transition-opacity cursor-pointer' />
          </a>
          
          <a href={githubUrl} target='_blank' rel='noopener noreferrer'>
            <img src='../../public/github-brands-solid-full.svg' alt='github' className='w-6 hover:opacity-80 transition-opacity cursor-pointer'/>
          </a>
        </div>
    </div>
  )
}

function HomeSummaryComponnent() {
  const summary = getSummary();

  return (
    <div className='home-summary rounded-2xl w-full h-full pt-8 py-16 gap-6 bg-primary text-primary-foreground flex flex-col items-end'>
      <div className='text-center m-auto max-w-4xl px-8'>
        <p className='font-extrabold text-4xl mb-4'> About </p>
        <p className='font-normal text-lg leading-relaxed'> { summary } </p>
      </div>
      
      <button
        type="button"
        className="bg-background text-foreground px-6 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity mr-8"
      >
        More...
      </button>
    </div>
  )
}