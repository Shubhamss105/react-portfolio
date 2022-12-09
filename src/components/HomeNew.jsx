import React from 'react'
import { Container, Icon } from 'semantic-ui-react'
import image from '../img/home_bg.png'

const HomeNew = () => {
  return (
    <Container>
      <section className="bg-white dark:text-black" id='home'>
	<div className="container flex flex-col justify-center p-1 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl">Hey! I Am
				{/* <span className="dark:text-violet-400">senectus</span>erat pharetra */}
			</h1>
            <h1 className='text-6xl font-bold leading-none text-orange-400'>Shubham Singh</h1>
			<p className="mt-2 mb-8 text-lg sm:mb-12">Full Stack Developer
				{/* <br className="hidden md:inline lg:hidden"/>turpis pulvinar, est scelerisque ligula sem */}
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <button type="button" className="px-8 py-3 font-semibold rounded-full bg-purple-500 hover:bg-purple-600 text-white cursor-pointer">Download CV</button>
			</div>

            <h4 className='text-orange-400'>FOLLOW ME</h4>
                <div>
    <Icon circular name='instagram' />
    <Icon circular name='whatsapp' />
    <Icon circular name='github' />
    <Icon circular name='linkedin' />
  </div>
		</div>
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src={image} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
	</div>
</section>
    </Container>
  )
}

export default HomeNew
