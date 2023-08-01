import Image from "next/image";
import ProfileImage from "@/public/images/profile.jpg";
import IconGithub from "./components/icons/IconGithub";
import IconLinkedin from "./components/icons/IconLinkedin";
import IconInstagram from "./components/icons/IconInstagram";

const calculateAge = (birthYear: number) => {
  return new Date().getFullYear() - birthYear;
}

export default function Home() {
  return (
    <div className="divide-y divide-zinc-300 dark:divide-zinc-700">
      <div className="space-y-2 pb-8 pt-5 md:space-x-5">
        <h1 className="md:leading-13 text-3xl font-extrabold leading-9 tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl sm:leading-10 md:text-6xl">
          Home
        </h1>
      </div>

      <div className="items-center space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
        <div className="flex flex-col items-center pt-8">
          <Image
            className="h-48 w-48 rounded-full object-cover object-center"
            src={ProfileImage}
            alt="Picture of Onur Güler"
            width={200}
            height={200}
          />
          <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">
            Onur Güler
          </h3>
          <p className="text-center text-zinc-500 dark:text-zinc-300">
            Mid-Level Software Engineer
          </p>
          <div className="flex space-x-5 pt-6">
            <a href="https://github.com/onurguler" target="_blank">
              <IconGithub className="h-8 w-8 text-emerald-500 hover:text-emerald-600" />
            </a>
            <a href="https://linkedin.com/in/onurosmanguler" target="_blank">
              <IconLinkedin className="h-8 w-8 text-emerald-500 hover:text-emerald-600" />
            </a>
            <a href="https://instagram.com/onurosmanguler" target="_blank">
              <IconInstagram className="h-8 w-8 text-emerald-500 hover:text-emerald-600" />
            </a>
          </div>
        </div>

        <div className="prose max-w-none prose-lg pt-8 pb-7 dark:prose-invert xl:col-span-2">
          <p>Hey everyone my name is Onur, I am {calculateAge(1997)} years old and I am a full-stack developer based in Turkey.</p>
          <p>I am building full stack web applications. I mostly use on backend side Microsoft Tech Stack at my work (C#, .Net, Azure Cloud, MSSQL, Entity Framework Core) and Next.js in frontend side. But I use node.js or django on my side projects, because open source is everything for me ❤️.</p>
          <p>I like computer science more than programming, so in my spare time, I work on research on software architecture and game algorithms as a hobby.</p>
          <p>Happy coding everyone 🚀 💻</p>
        </div>
      </div>
    </div>
  );
}
