import React from "react";
import Bible from "../assets/icon-bible.png";
import Devices from "../assets/devices.svg";
import { FaFacebook, FaTwitter } from "react-icons/fa";

const GetApp = () => {
	return (
		<section className="h-auto w-full">
			<div className="w-full flex justify-center my-28">
				<div className="flex flex-col gap-20">
					<figure className="flex items-center gap-2">
						<img
							src={Bible}
							alt="Bible app icon"
							width={50}
							height={50}
						/>
						<figcaption className="w-full text text-xl font-extrabold pl-4">
							Get the Bible app for:
						</figcaption>
					</figure>
					<figure>
						<img src={Devices} width={400} alt="devices" />
					</figure>

					<div className="w-full flex justify-center">
						<div className="">
							<b className="text-center text-xl">
								Share the Bible App
							</b>
							<div className="flex  justify-center gap-3">
								<FaFacebook size={30} />
								<FaTwitter size={30} />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="flex justify-center items-center">
				<span className="h-48 w-[70%] p-3 m-6 flex bg-yellow-50 rounded-[3rem] shadow-md items-center justify-center">
					<div className="flex flex-col items-center">
						<h3 className="font-extrabold text-5xl text-red-300">
							675,662,957
						</h3>
						<span className="text-2xl leading-1">App Installs</span>
					</div>
				</span>
			</div>
		</section>
	);
};

export default GetApp;
