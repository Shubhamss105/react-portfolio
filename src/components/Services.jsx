import React from 'react'
// import Stats from './Stats'

const Services = () => {
  return (
	<div>
	  <section className="p-6 dark:bg-gray-800 dark:text-gray-100">
	<div className="container mx-auto">
		<span className="block mb-2 text-xs font-medium tracking-widest text-center uppercase dark:text-orange-400">Services</span>
		<h2 className="text-5xl font-bold text-center dark:text-gray-50">What Services I Offer</h2>
		<div className="grid gap-6 my-16 lg:grid-cols-3">
			<div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-900 hover:animate-pulse">
				<div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-purple-500 dark:text-gray-900">1</div>
				<h3 className='text-4xl font-bold text-orange-400'>
					Frontend Development
				</h3>
				<p className="text-2xl font-semibold">
					Create responsive website using pure HTML, CSS or ReactJs.
				</p>
			</div>
			<div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-900 hover:animate-pulse">
				
				<div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-purple-500 dark:text-gray-900">2</div>
				<h3 className='text-4xl font-bold text-orange-400'>
					Backend Development
				</h3>
				<p className="text-2xl font-semibold">
					Integrate the frontend with backend and Database using NodeJs and MongoDB.
				</p>
			</div>
			<div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-900 hover:animate-pulse">
				<div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-purple-500 dark:text-gray-900">3</div>
				<h3 className='text-4xl font-bold text-orange-400'>
					Blockchain Development
				</h3>
				<p className="text-2xl font-semibold">
					<b>Maxime.</b>Expedita temporibus culpa reprehenderit doloribus consectetur odio!
				</p>
			</div>
		</div>
	</div>
</section>

{/* <Stats/> */}
	</div>
  )
}

export default Services
