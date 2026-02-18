import Section from "../components/section";

export default function EducationSection() {
    return (
        <Section title="Education">
            <div className="w-full border border-gray-200 p-6 rounded-xl hover:shadow-lg transition">
                <div className="flex flex-col md:flex-row items-start gap-3 md:items-center justify-between w-full text-gray-500">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                            <img
                                src="/assets/arasu-logo.png"  // <-- Your college logo here
                                alt="Arasu Engineering College Logo"
                                width={40}   // Adjust size as needed
                                height={40}
                                className="rounded-full"
                            />
                        </div>
                        <div>
                            <h3 className="text-base font-medium text-gray-800">
                                Bachelor of Engineering in Computer Science
                            </h3>
                            <div>Arasu Engineering College, Kumbakonam, Tamil Nadu</div>
                        </div>
                    </div>
                    <div>2021 - 2025</div>
                </div>
                <p className="mt-6 text-gray-500">
                    Cumulative GPA: 8.17/10.0
                </p>
            </div>
        </Section>
    );
}
