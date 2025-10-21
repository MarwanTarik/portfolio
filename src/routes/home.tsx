import { Project, type projectProps } from '@/components/Project';
import { getGithubUrl, getLinkedinUrl, getSummary } from '@/lib/utils'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/home')({
  component: Home,
})

function Home() {

  return (
    <div className='home flex flex-col justify-center items-center gap-16 font-mono mx-auto max-w-7xl px-8 pb-16'>
      <HomeIntroComponnent />
      <HomeSummaryComponnent />
      <HomeProjectsComponennent />
    </div>
  )
}

function HomeIntroComponnent() {
  const linkedinUrl = getLinkedinUrl();
  const githubUrl = getGithubUrl();

  return (
    <div className='home-about w-full mt-12 flex flex-col justify-center items-center gap-4'>
        <div className='text-primary flex flex-col max-w-xl justify-center text-center px-4'>
          <p className='text-2xl'>Hey There I'm</p>
          <p className='text-6xl font-bold'>Marwan Tarik</p>
          <p className='text-lg leading-relaxed max-w-md mx-auto'>
            A Software Engineer experienced in Web Development and Cloud Computing: 2x AWS Certified
          </p>
        </div>

        <div className='flex gap-6 mt-2'>
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
    <div className='home-summary rounded-2xl w-full py-12 px-8 bg-secondary text-secondary-foreground flex flex-col'>
      <div className='text-center mx-auto max-w-4xl mb-8'>
        <p className='font-extrabold text-4xl mb-6'> About </p>
        <p className='font-normal text-lg leading-relaxed'> { summary } </p>
      </div>
      
      <button
        type="button"
        className="bg-primary text-primary-foreground px-8 py-2.5 rounded-lg text-base font-semibold hover:opacity-90 transition-opacity self-end"
      >
        More...
      </button>
    </div>
  )
}

function HomeProjectsComponennent() {
  const github = getGithubUrl()

  const projects: projectProps[] = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application with payment integration and real-time inventory management",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      github: github,
      live: "https://ecommerce-demo.example.com",
      jobTitle: "Full-Stack"
    },
    {
      title: "Task Management System",
      description: "Collaborative task management tool with real-time updates and team workflows",
      tags: ["TypeScript", "Express", "MongoDB", "Socket.io"],
      github: github,
      live: "https://tasks.example.com",
      jobTitle: "Backend"
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather dashboard with forecasts and historical data visualization",
      tags: ["React", "TailwindCSS", "OpenWeather API"],
      github: github,
      live: "https://weather.example.com",
      jobTitle: "Frontend"
    }
  ]


  return (
    <div className='projects w-full h-fit mb-6'>
      <div className='w-full h-fit p-6 rounded-lg bg-secondary mb-8'>
        <p className='font-extrabold font-mono text-3xl text-secondary-foreground'>Projects</p>
      </div>
      
      <div className='flex gap-6 flex-wrap'>
        {
          projects.map((project) => (
            <Project 
              key={project.title}
              title={project.title}
              description={project.description}
              tags={project.tags}
              github={project.github}
              live={project.live}
              jobTitle={project.jobTitle}
            />
          ))
        }
      </div>
    </div>
  )
}