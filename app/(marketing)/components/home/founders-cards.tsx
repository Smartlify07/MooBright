import Image from "next/image"
import React from "react"
const team = [
  {
    id: "moses",
    name: "Moses Oladele",
    imageURL: "/home/moses.png",
    alt: "moses-oladele",
    description:
      "Oladele Moses is an Entrepreneur and Plumber with a passion for practical solutions, craftsmanship, and building valuable services. His experience in plumbing gives him a strong understanding of the technical and practical needs involved in delivering reliable solutions.\n At Moobright, Moses brings his entrepreneurial mindset and hands-on plumbing expertise to the team, contributing practical industry knowledge to the brand’s vision and operations. His understanding of plumbing and problem-solving helps Moobright develop solutions that are grounded in real-world needs.\nWith a commitment to quality, continuous learning, and purposeful innovation, Moses is focused on using his skills and experience to contribute to the growth of Moobright and the development of solutions that create real value.",
    role: "Founder",
    background: "#6FB6F3",
    bigCircleURL: "/home/green-semi-circle.svg",
  },
  {
    id: "ezekiel",
    name: "Oladele Ezekiel",
    imageURL: "/home/ezekiel.png",
    description:
      "Anuoluwapo Oladele is a passionate Fashion Designer, Creative, and Entrepreneur with a strong drive for creativity, excellence, and innovation. His experience in fashion and design has developed his ability to think creatively, pay attention to detail, and turn ideas into well-crafted and purposeful outcomes.\n As part of the Moobright team, Anuoluwapo brings a creative and entrepreneurial perspective to the brand, contributing to its vision, identity, and growth. He is passionate about building ideas that are not only visually appealing but also meaningful, practical, and impactful.\n With a commitment to continuous learning and personal development, he strives to bring fresh ideas, discipline, and excellence to every project he is involved in. His goal is to contribute to building Moobright into a distinctive and impactful brand while growing as a creative entrepreneur.",
    role: "Co-Founder",
    alt: "moses-oladele",
    background: "#FF6BB2",
    bigCircleURL: "/home/yellow-semi-circle.svg",
  },
  {
    id: "obinna",
    name: "Anosike Obinna",
    imageURL: "/home/obinna.png",
    description:
      "Anosike Obnna is a Software Engineer with a strong interest in technology, software development, and building practical digital solutions. He is focused on creating reliable and functional software while continuously developing his technical skills and understanding of emerging technologies.\nAt Moobright, Obinna serves as the Software Engineer responsible for the company’s public and internal tools and software. He builds, maintains, and improves these systems to support the company’s operations and digital presence. He is also responsible for building and maintaining the Moobright marketing website, ensuring it effectively represents the brand and its offerings.\nThrough his technical expertise and problem-solving approach, Obinna plays an important role in developing and maintaining the digital infrastructure that supports Moobright’s growth and operations.",
    role: "Co-Founder",
    alt: "moses-oladele",
    background: "#D399FF",
    bigCircleURL: "/home/purple-semi-circle.svg",
  },
  {
    id: "goodluck",

    name: "Goodluck Johnson",
    imageURL: "/home/goodluck.png",
    description:
      "Johnson Goodluck is a Product Designer and Creative with a strong passion for creating meaningful, user-focused digital experiences and building distinctive visual identities. He combines product thinking, visual design, and creativity to develop designs that are both functional and engaging.\n At Moobright, Goodluck serves as a Product Designer, contributing to the design and development of digital products and experiences that align with the brand’s vision. He is also responsible for managing the brand’s social media presence and creating visual content that communicates Moobright’s ideas, products, and identity effectively.\n Through his work across product design, visual communication, and brand content, Goodluck contributes to shaping how Moobright is experienced both digitally and publicly. He is committed to creating thoughtful designs, maintaining a consistent brand identity, and helping Moobright build a strong and recognizable presence.",
    role: "Co-Founder",
    alt: "moses-oladele",
    background: "#FF7F73",
    bigCircleURL: "/home/yellow-semi-circle.svg",
  },
]

function TeamCard({
  name,
  alt,
  imageURL,
  description,
  background,
  id,
  role,
  bigCircleURL,
}: {
  name: string
  alt: string
  imageURL: string
  description: string
  background: string
  id: string
  role: string
  bigCircleURL: string
}) {
  return (
    <div
      className="relative z-20 flex h-203.5 overflow-hidden first:rounded-l-[1.25rem] last:rounded-r-[1.25rem]"
      style={{ backgroundColor: background }}
      id={id}
    >
      <div className="relative z-1 h-203.5 w-[526px] max-w-[526px] min-w-[526px]">
        <Image
          width={526}
          height={814}
          src={imageURL}
          alt={alt}
          className="absolute top-0 left-0 z-1 h-203.5 w-[526px] max-w-[526px] object-cover"
        />
        <Image
          width={300}
          height={300}
          src={bigCircleURL}
          className="absolute top-10 left-24 -z-1 size-75 shrink-0"
          alt="semi-circle-vector"
          data-slot="big-semi-circle"
        />
        <div
          data-slot="role"
          className="absolute bottom-10 z-10 mt-auto w-[309px] px-4"
        >
          <div className="absolute top-0 left-0 -z-1 h-26 w-full bg-[#0F172A]/54 opacity-30 blur-lg"></div>

          <div className="z-20 flex h-25 w-[309px] flex-col gap-2">
            <h4 className="text-4xl font-semibold text-background">{name}</h4>
            <h6 className="text-base text-background">{role}</h6>
          </div>
        </div>
      </div>
      <div className="flex max-w-160 min-w-160 flex-col justify-between py-10 pr-6 1.5xl:max-w-185 1.5xl:min-w-185 2xl:max-w-225 2xl:min-w-225">
        <p
          data-slot="description"
          className="shrink-0 justify-self-end text-xl whitespace-pre-line text-background 2xl:text-2xl"
        >
          {description.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < description.split("\n").length - 1 && (
                <>
                  <br />
                  <br />
                </>
              )}
            </React.Fragment>
          ))}
        </p>

        <div className="flex items-center justify-between">
          <div
            data-slot="mobile-role"
            className="z-20 mt-auto flex h-25 flex-col gap-2"
          >
            <h4 className="text-4xl font-semibold whitespace-nowrap text-background">
              {name}
            </h4>
            <h6 className="text-base text-background">{role}</h6>
          </div>

          <Image
            alt="Semi circles vector"
            width={100}
            height={100}
            priority
            data-slot="semi-circle"
            className="size-25 self-end object-cover"
            src="/home/semi-circles.svg"
          />
        </div>
      </div>
    </div>
  )
}

const TeamCards = () => {
  return (
    <div className="team-grid gap-4">
      {team.map((t, i) => (
        <TeamCard {...t} key={i} />
      ))}
    </div>
  )
}

export default TeamCards
