import React from "react";
import Bibleflip from "../assets/Bibleflip.jpg";
import { IoHeartOutline } from "react-icons/io5";
import { IoStar, IoStarHalf } from "react-icons/io5";
import GetApp from "./GetApp";

const Content = () => {
	return (
		<>
			<main className="min-w-full h-[70vh]">
				<div className="flex flex-col h-full justify-center items-center text-[#c94646]">
					<small className="w-[56em] border-red-400">HONOR GOD</small>

					<span className="w-[45em]">
						<p className="text-7xl my-4 w-[11em]">
							With all my heart I will praise you, O Lord my God.
							I will give glory to your name forever,
						</p>

						<small className="">PSALMS 86:12 NLT</small>
					</span>

					<p className="w-[45em]">
						Make this Psalm your prayer today, and give God whatever
						worship comes to mind.
					</p>
				</div>
			</main>

			<section className="h-auto m-6 p-10 bg-yellow-50 rounded-[3rem] shadow-md">
				<div className="h-auto w-56 bg-white rounded-3xl shadow-md">
					<figure className="relative">
						<img
							src={Bibleflip}
							className="p-4 h-60 rounded-[2rem] "
							alt="photowallpaper"
						/>
						<figcaption className="absolute w-full text-white top-[1.6em] left-[9em]">
							31 days
						</figcaption>

						<IoHeartOutline
							size={25}
							color="white"
							className="absolute bottom-[1.7em] left-[1.5em] cursor-pointer svg-love"
						/>
					</figure>

					<div className="pl-5 leading-tight p-1">
						<h2 className="font-extrabold">The Word of God</h2>
						<small>
							The Bible explained | Real Insight. Real Jesus.
						</small>

						<div className="flex justify-end m-2 pr-2">
							<IoStar size={12} color="red" />
							<IoStar size={12} color="red" />
							<IoStar size={12} color="red" />
							<IoStar size={12} color="red" />
							<IoStarHalf size={12} color="red" />
						</div>
					</div>
					<div className="p-3">
						<button
							type="button"
							className="text-white bg-red-500 w-full p-1 rounded-2xl"
						>
							start plan
						</button>
					</div>
				</div>
			</section>

            <GetApp />
		</>
	);
};

export default Content;
