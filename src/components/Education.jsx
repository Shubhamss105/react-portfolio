import React from 'react'

const Education = () => {
  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container max-w-5xl px-4 py-12 mx-auto">
		<div className="grid gap-4 mx-4 sm:grid-cols-12">
			<div className="col-span-12 sm:col-span-3">
				<div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-orange-400">
					<h3 className="text-3xl font-semibold">Education</h3>
					{/* <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-400">Vestibulum diam nunc</span> */}
				</div>
			</div>
			<div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
				<div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
					<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-orange-400">
						<h3 className="text-xl font-semibold tracking-wide">B-Tech(CSE) </h3>
						<time className="text-xs tracking-wide uppercase dark:text-orange-400">Dec 2020- July 2024</time>
						<p className="mt-3">I'm pursuing Bachelor of Technology from Computer Science and Engineering Branch in ABES Institute of Technology, Ghaziabad.</p>
					</div>
					<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-orange-400">
						<h3 className="text-xl font-semibold tracking-wide">Intermediate</h3>
						<time className="text-xs tracking-wide uppercase dark:text-orange-400">May 2019</time>
						<p className="mt-3">Pursued intermediate from RPM Academy, Gorakhpur from Mathematics and Science stream and secured 89.8 percentage in it.</p>
					</div>
					<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-orange-400">
						<h3 className="text-xl font-semibold tracking-wide">High School</h3>
						<time className="text-xs tracking-wide uppercase dark:text-orange-400">May 2017</time>
						<p className="mt-3">Pursued High School from N.S Children Academy, Gorakhpur and secured 10 CGPA.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
    </div>
  )
}

export default Education
