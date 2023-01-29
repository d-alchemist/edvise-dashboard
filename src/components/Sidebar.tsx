import { nanoid } from 'nanoid';
import { bottomSidebarOptions, topSidebarOptions } from './sidebarItems';
import SidebarCalendar from '../assets/images/calendar.png';

export default function Sidebar() {
	return (
		<div
			id="sidebar"
			className="bg-white h-screen md:block shadow-xl w-30 md:w-60 lg:w-60 overflow-x-hidden transition-transform duration-300 ease-in-out fixed"
			x-show="sidenav"
		>
			<div className="space-y-6 md:space-y-6 mt-10">
				<div className="ml-8">
					<svg
						width="111"
						height="34"
						viewBox="0 0 111 34"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M28.4481 7.65118V3.57951H27.3919H6.40247V7.65118L9.53238 12.3775L11.2799 15.0172L13.1555 12.182L9.53238 6.70942H25.3182L20.4431 14.0704L17.4253 9.51351L9.53238 21.4417V21.4364L6.40247 26.1653V30.237H7.46132H28.4481V26.1653L28.0284 25.5316V25.5289L23.5733 18.7994L21.6951 21.6372L25.3182 27.1071H9.53238L17.4253 15.1842L20.4457 19.7461L27.118 9.66236L28.4481 7.65118Z"
							fill="#0BA8E0"
						/>
						<path
							d="M48.4727 26.9143V23.6839H39.5481V18.3729H47.5419V15.2794H39.5481V10.1326H48.4727V6.90222H36.0439V26.9143H48.4727Z"
							fill="#0BA8E0"
						/>
						<path
							d="M56.2414 27.2702C58.2946 27.2702 60.0467 26.3668 60.868 24.8063L61.087 26.9143H64.1532V6.54633H60.8406V15.1151C59.992 13.7737 58.322 12.9798 56.433 12.9798C52.354 12.9798 49.8901 15.9912 49.8901 20.2071C49.8901 24.3957 52.3266 27.2702 56.2414 27.2702ZM56.9806 24.2041C54.6536 24.2041 53.23 22.5067 53.23 20.0976C53.23 17.6885 54.6536 15.9638 56.9806 15.9638C59.3076 15.9638 60.8133 17.6611 60.8133 20.0976C60.8133 22.5341 59.3076 24.2041 56.9806 24.2041Z"
							fill="#0BA8E0"
						/>
						<path
							d="M70.3714 26.9143H73.6566L79.2961 13.3904H75.8467L73.3828 19.6048C72.8079 21.0832 72.3152 22.5067 72.1235 23.3554C71.9593 22.6162 71.4939 21.22 70.919 19.6048L68.5646 13.3904H65.0057L70.3714 26.9143Z"
							fill="#0BA8E0"
						/>
						<path
							d="M81.791 10.6801C82.8861 10.6801 83.7895 9.77673 83.7895 8.6543C83.7895 7.53187 82.8861 6.65583 81.791 6.65583C80.6412 6.65583 79.7378 7.53187 79.7378 8.6543C79.7378 9.77673 80.6412 10.6801 81.791 10.6801ZM80.1211 26.9143H83.461V13.3904H80.1211V26.9143Z"
							fill="#0BA8E0"
						/>
						<path
							d="M84.7763 22.8079C84.7763 25.4634 86.9117 27.2702 90.2789 27.2702C93.6189 27.2702 95.9458 25.5729 95.9458 22.8352C95.9458 20.7546 94.796 19.7143 92.5238 19.1942L90.0873 18.6193C88.9375 18.3455 88.3352 17.8527 88.3352 17.0862C88.3352 16.0733 89.1018 15.471 90.4158 15.471C91.7025 15.471 92.4691 16.2102 92.4964 17.36H95.6721C95.6447 14.7318 93.5915 12.9798 90.5527 12.9798C87.4318 12.9798 85.187 14.5676 85.187 17.2231C85.187 19.3858 86.3641 20.5356 88.8006 21.0832L91.2371 21.6581C92.4417 21.9318 92.7976 22.4246 92.7976 23.109C92.7976 24.0945 91.9489 24.7242 90.3885 24.7242C88.8554 24.7242 87.9793 23.985 87.952 22.8079H84.7763Z"
							fill="#0BA8E0"
						/>
						<path
							d="M103.444 27.2702C106.976 27.2702 109.439 25.4907 110.014 22.5341H106.921C106.537 23.8208 105.333 24.5326 103.499 24.5326C101.281 24.5326 100.022 23.328 99.7755 20.9463L109.96 20.9189V19.906C109.96 15.69 107.386 12.9798 103.334 12.9798C99.3649 12.9798 96.5999 15.909 96.5999 20.1524C96.5999 24.3409 99.4196 27.2702 103.444 27.2702ZM103.362 15.7174C105.36 15.7174 106.647 16.9493 106.647 18.8109H99.8577C100.186 16.7851 101.391 15.7174 103.362 15.7174Z"
							fill="#0BA8E0"
						/>
					</svg>
				</div>
				<div className="divide-y-2 divide-gray-100">
					<div id="menu" className="flex flex-col space-y-2 mt-4">
						{topSidebarOptions.map((option) => (
							<div className="flex group items-center">
								<span className="group-hover:border-4 h-8 rounded-3xl border-transparent border-4 -ml-1 group-hover:border-dark-blue mr-3"></span>
								<a
									href=""
									className="text-sm font-light text-secondary-text py-4 rounded-xl px-3 w-11/12 hover:bg-light-blue hover:text-dark-blue flex items-center"
									key={nanoid()}
								>
									<span className="mx-3">{option.icon}</span>
									<span className="">{option.title}</span>
								</a>
							</div>
						))}
					</div>
					<div id="menu" className="flex flex-col space-y-2 my-2 py-2">
						{bottomSidebarOptions.map((option) => (
							<div className="flex group items-center">
								<span className="group-hover:border-4 h-8 rounded-3xl border-transparent border-4 -ml-1 group-hover:border-dark-blue mr-3"></span>
								<a
									href=""
									className="text-sm font-light text-secondary-text py-4 rounded-xl px-3 w-11/12 hover:bg-light-blue hover:text-dark-blue flex items-center"
									key={nanoid()}
								>
									<span className="mx-3">{option.icon}</span>
									<span className="">{option.title}</span>
								</a>
							</div>
						))}
					</div>
				</div>
			</div>
			<div>
				<img src={SidebarCalendar} />
			</div>
		</div>
	);
}
