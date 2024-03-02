import { logo } from '../assets'

const Hero = () => {
  return (
    <header className='w-full flex flex-col justify-center items-center'>
      <nav className='flex justify-between items-center flex-row w-full mb-10 pt-3'>
        <img src={logo} alt="glean" className='w-28 object-contain' />
        <button type='button' className='violet_btn' onClick={() => window.open('https://github.com/Dhruvnet/Glean-AI-')}>
          Github
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='violet_gradient'>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Simplify the Spectrum, Illuminate the Essentials – Glean AI, Where Complexity Meets Clarity in Clear, Concise Summaries
      </h2>
    </header>
  )
}

export default Hero