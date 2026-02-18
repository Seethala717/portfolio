import Section from "../components/section";

export default function ExperienceSection() {
    const experience = [
        {
            image: "/assets/vebbox-logo.png", // your saved logo file
            title: "Software Web Development Intern",
            company: "Vebbox Software Solutions",
            location: "Thanjavur, Tamil Nadu",
            start: "July 08, 2024",
            end: "August 09, 2024",
            description: [
                "Developed and maintained responsive websites using HTML, CSS, React.js, and JavaScript.",
                "Integrated front-end and back-end components ensuring seamless functionality.",
                "Assisted in debugging, optimizing performance, and following web development best practices.",
            ],
        },
    ];

    return (
        <Section title="Work Experience">
            <div className="space-y-6">
                {experience.map((exp) => (
                    <div
                        key={exp.title}
                        className="w-full bg-purple-50 border border-gray-200 p-6 rounded-xl hover:shadow-lg transition duration-300"
                    >
                        <div className="flex flex-col md:flex-row items-start gap-3 md:items-center justify-between w-full text-gray-500">
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                                <div className="bg-white border border-gray-200 rounded-lg p-3 flex items-center justify-center w-16 h-16">
                                    <img
                                        src={exp.image}
                                        alt={exp.company}
                                        className="object-contain w-full h-full"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-base font-medium text-gray-800">
                                        {exp.title}
                                    </h3>
                                    <div className="text-gray-700">{exp.company}</div>
                                    <div className="text-sm text-gray-500">{exp.location}</div>
                                </div>
                            </div>
                            <div className="text-sm text-gray-500">
                                {exp.start} – {exp.end}
                            </div>
                        </div>
                        <ul className="list-disc px-5 mt-6 text-gray-700 space-y-2">
                            {exp.description.map((desc) => (
                                <li key={desc}>{desc}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
}
