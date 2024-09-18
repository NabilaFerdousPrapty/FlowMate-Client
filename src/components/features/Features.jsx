import team from "../../assets/teamImg.jpg"
import collab from "../../assets/teamCollaboration.jpg"
import task from "../../assets/task management.jpg"
import secure from "../../assets/secure.jpg"
import time from "../../assets/timeline.jpg"
import sucess from "../../assets/sucess.jpg"
const Features = () => {
    return (
      
<div>
    <section className="p-4 lg:p-8 dark:bg-gray-100 dark:text-gray-800">
        <div className="container mx-auto space-y-12">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">Discover the Power of Seamless Teamwork</h2>
                <p className="text-lg text-gray-600 dark:text-gray-700">
                    FlowMate offers essential tools that empower your team to collaborate effortlessly, manage tasks, and stay organized, no matter where you are.
                </p>
            </div>
            
            {/* Feature 1 */}
            <div className="flex flex-col overflow-hidden rounded-md shadow-md lg:flex-row hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <img src={collab} alt="Team Collaboration" className="h-80 dark:bg-gray-500 aspect-video" />
                <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
                    <span className="text-xs uppercase text-blue-500">Seamless Collaboration</span>
                    <h3 className="text-3xl font-bold">Work Together in Real-Time</h3>
                    <p className="my-6 dark:text-gray-600">
                        Collaborate with your team instantly with real-time updates, file sharing, and project management tools designed to keep everyone in sync.
                    </p>
                    <a href="#" className="mt-2 text-blue-500 hover:underline">Explore Collaboration Features →</a>
                </div>
            </div>

          {/* section 2 */}
		<div className="flex flex-col overflow-hidden rounded-md shadow-md lg:flex-row-reverse hover:shadow-lg transition-shadow duration-300 cursor-pointer">
			<img src={team} alt="Remote Work" className="h-80 dark:bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
				<span className="text-xs uppercase text-green-500">Remote Teams</span>
				<h3 className="text-3xl font-bold">Stay Connected from Anywhere</h3>
				<p className="my-6 dark:text-gray-600">
					Whether your team is in the office or remote, FlowMate keeps everyone connected with integrated video conferencing and chat features.
				</p>
				<a href="#" className="mt-2 text-green-500 hover:underline">Learn More About Remote Work →</a>
			</div>
		</div>

		{/* Feature 3 */}
		<div className="flex flex-col overflow-hidden rounded-md shadow-md lg:flex-row hover:shadow-lg transition-shadow duration-300 cursor-pointer">
			<img src={task} alt="Project Management" className="h-80 dark:bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
				<span className="text-xs uppercase text-yellow-500">Task Management</span>
				<h3 className="text-3xl font-bold">Keep Projects on Track</h3>
				<p className="my-6 dark:text-gray-600">
					Manage your tasks efficiently with FlowMate’s intuitive task management features, helping you assign, track, and complete projects with ease.
				</p>
				<a href="#" className="mt-2 text-yellow-500 hover:underline">Discover Task Management Tools →</a>
			</div>
		</div>

		{/* Feature 4 */}
		<div className="flex flex-col overflow-hidden rounded-md shadow-md lg:flex-row-reverse hover:shadow-lg transition-shadow duration-300 cursor-pointer">
			<img src={secure} alt="File Sharing" className="h-80 dark:bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
				<span className="text-xs uppercase text-red-500">Secure File Sharing</span>
				<h3 className="text-3xl font-bold">Share Files with Confidence</h3>
				<p className="my-6 dark:text-gray-600">
					Share important documents and files securely with your team using FlowMate's encrypted file sharing feature.
				</p>
				<a href="#" className="mt-2 text-red-500 hover:underline">Start Sharing Files →</a>
			</div>
		</div>

		{/* Feature 5 */}
		<div className="flex flex-col overflow-hidden rounded-md shadow-md lg:flex-row hover:shadow-lg transition-shadow duration-300 cursor-pointer">
			<img src={time} alt="Project Timelines" className="h-80 dark:bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
				<span className="text-xs uppercase text-purple-500">Project Timelines</span>
				<h3 className="text-3xl font-bold">Visualize Your Workflow</h3>
				<p className="my-6 dark:text-gray-600">
					Keep track of project progress
					visually with Gantt charts and timelines, ensuring every team member stays on schedule and meets deadlines.
				</p>
				<a href="#" className="mt-2 text-purple-500 hover:underline">Explore Project Timelines →</a>
			</div>
		</div>

		{/* Feature 6 */}
		<div className="flex flex-col overflow-hidden rounded-md shadow-md lg:flex-row-reverse hover:shadow-lg transition-shadow duration-300 cursor-pointer">
			<img src={sucess} alt="Team Motivation" className="h-80 dark:bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
				<span className="text-xs uppercase text-teal-500">Team Motivation</span>
				<h3 className="text-3xl font-bold">Boost Team Morale</h3>
				<p className="my-6 dark:text-gray-600">
					Keep your team motivated and engaged with collaborative tools, feedback systems, and performance tracking integrated into FlowMate.
				</p>
				<a href="#" className="mt-2 text-teal-500 hover:underline">Learn More About Team Motivation →</a>
			</div>
		</div>
        </div>
    </section>
</div>

     
    );
};

export default Features;


