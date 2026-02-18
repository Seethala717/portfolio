export default function ProjectsSection() {
  return (
    <section className="max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-4xl md:text-5xl font-semibold text-center mb-12">
  Projects
</h2>


      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Project 1 */}
        <div className="bg-purple-50 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
          <h3 className="text-lg font-semibold mb-3">🚑 IoT-Based Ambulance Tracking | Final Year Project</h3>
          <p className="text-gray-700 text-sm mb-3">
            Designed and developed an IoT-based system to monitor patient vital signs in real-time during ambulance transport.
          </p>
          <p className="text-gray-700 text-sm mb-3">
            Integrated health sensors to track heart rate, body temperature, and implemented real-time GPS ambulance tracking.
          </p>
          <p className="text-gray-700 text-sm">
            Enabled secure transmission of patient health data to hospitals for faster decision-making.
          </p>
        </div>

        {/* Project 2 */}
        <div className="bg-purple-50 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
          <h3 className="text-lg font-semibold mb-3">🏥 Hospital Website | July 2024</h3>
          <p className="text-gray-700 text-sm mb-3">
            Designed a responsive, user-friendly hospital website using HTML, CSS, Bootstrap, and JavaScript.
          </p>
          <p className="text-gray-700 text-sm">
            Implemented intuitive patient interfaces for accessing services, doctor profiles, and appointment scheduling.
          </p>
        </div>

        {/* Project 3 */}
        <div className="bg-purple-50 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
          <h3 className="text-lg font-semibold mb-3">🔒 Secure Login & Signup (SecureLogin) | Dec 2024</h3>
          <p className="text-gray-700 text-sm mb-3">
            Developed a secure user authentication system allowing safe login and signup.
          </p>
          <p className="text-gray-700 text-sm">
            Implemented web-based authentication best practices to protect user data.
          </p>
        </div>
      </div>
    </section>
  );
}
