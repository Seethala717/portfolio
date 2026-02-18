import Section from "../components/section";

export default function SkillsSection() {
    const skillCategories = [
        {
            title: "Frontend",
            skills: "HTML, CSS, React JS, JavaScript",
        },
        {
            title: "Backend",
            skills: "Python",
        },
        {
            title: "Database",
            skills: "MySQL (SQL)",
        },
        {
            title: "Tools",
            skills: "VS Code, PyCharm, XAMPP, CodeWars",
        },
        {
            title: "Computer & Office Skills",
            skills: "MS Word, PowerPoint, Excel, Notepad, Data Entry, Record Management, Documentation & File Handling",
        },
        {
            title: "Soft Skills",
            skills: "Attention to Detail, Time Management, Communication, Fast Learner & Team Player",
        },
    ];

    return (
        <Section title="Skills">
            <div className="space-y-4 mt-6">
                {skillCategories.map((category) => (
                    <div key={category.title} className="bg-purple-50 border border-purple-200 p-4 rounded-xl shadow-sm">
                        <h4 className="font-medium text-gray-800 mb-1">{category.title}</h4>
                        <p className="text-gray-600">{category.skills}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
}
