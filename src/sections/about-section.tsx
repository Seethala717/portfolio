import Section from "../components/section";

export default function AboutSection() {
    return (
        <Section title="About">
            <div className="text-sm/6.5">
                <p>
                   I’m <strong>Seethala Devi</strong>, an aspiring Full Stack Developer with a strong passion for designing
        intuitive and visually appealing front-end interfaces. I specialize in creating responsive, user-friendly
        websites and web applications that provide seamless digital experiences.
                </p>
                <p className="mt-5">
                     On the backend, I have basic knowledge of server-side technologies, which allows me to understand
        how front-end and back-end systems work together. I am eager to grow my full-stack skills by
        building complete applications that are both functional and beautiful.
                </p>
            </div>
        </Section>
    );
}