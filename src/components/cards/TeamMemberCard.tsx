import Image from "next/image";

interface TeamMemberCardProps {
  name: string;
  title: string;
  specialty: string;
  headshot: string;
  linkedin?: string;
}

export function TeamMemberCard({ name, title, specialty, headshot, linkedin }: TeamMemberCardProps) {
  return (
    <div className="text-center">
      <div className="mb-6 mx-auto w-48 h-48 overflow-hidden rounded-full shadow-asp-lg">
        <Image
          src={headshot}
          alt={name}
          width={400}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="font-bold text-lg text-asp-blue">{name}</h3>
      <p className="text-gray-500 text-sm mt-1">{title}</p>
      {specialty && (
        <p className="text-asp-blue-light font-bold text-xs uppercase tracking-wider mt-1">
          {specialty}
        </p>
      )}
      {linkedin && (
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 text-gray-400 hover:text-asp-blue transition-colors"
          aria-label={`${name} on LinkedIn`}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
      )}
    </div>
  );
}
