import React from 'react';
import SectionTitle from './SectionTitle';

const ChefRecommend = () => {
    return (
        <section className='mb-24' data-aos="fade-up"
        data-aos-anchor-placement="center-center">
             <SectionTitle subHeading="--You Should Try--" heading="Chef Recommends"></SectionTitle>
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
     <div className="max-w-96 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800 hover:scale-[1.10] transition-all">
	<img src="https://i.ibb.co/SnbWGRc/emy-Xo-Byi-Bym-X20-unsplash.webp" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-3xl font-semibold text-center lg:ml-5 tracking-wide">Soya Rammen</h2>
			<p className="dark:text-gray-800">Monotonectally syndicate unique total linkage.</p>
		</div>
		<button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600  border border-yellow-700 dark:text-gray-50">Add To Cart</button>
	</div>
</div>
{/* --------------------- */}
<div className="max-w-96 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800 hover:scale-[1.10] transition-all">
	<img src="https://i.ibb.co/sqmbbj2/alex-munsell-Yr4n8-O-3-UPc-unsplash.webp" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-3xl font-semibold text-center lg:ml-5 tracking-wide">Moca Steak</h2>
			<p className="dark:text-gray-800">Intrinsicly drive sticky process improvements.</p>
		</div>
		<button type="button" className="flex items-center justify-center w-full p-3 font-semibold border border-yellow-700 tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">Add To Cart</button>
	</div>
</div>
{/* --------------------- */}
<div className="max-w-96 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800 hover:scale-[1.10] transition-all">
	<img src="https://i.ibb.co/xgWPnGD/davide-cantelli-jpkfc5-d-DI-unsplash.webp" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-3xl font-semibold text-center lg:ml-5 tracking-wide">Ceaser Salad</h2>
			<p className="dark:text-gray-800">Conveniently incubate open-source users via.</p>
		</div>
		<button type="button" className="flex items-center justify-center w-full border border-yellow-700 p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">Add To Cart</button>
	</div>
</div>
{/* ---------------------- */}
     </div>
        </section>
    );
};

export default ChefRecommend;