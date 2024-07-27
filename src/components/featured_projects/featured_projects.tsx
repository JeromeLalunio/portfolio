import "./featured_projects.scss";

import lofiMoods01 from "../../assets/lofi_moods/01.png";
import lofiMoods02 from "../../assets/lofi_moods/02.png";
import lofiMoods03 from "../../assets/lofi_moods/03.png";

import myMusicStreamer01 from "../../assets/my_music_streamer/01.png";
import myMusicStreamer02 from "../../assets/my_music_streamer/02.png";
import myMusicStreamer03 from "../../assets/my_music_streamer/03.png";

import boilingWaters01 from "../../assets/boiling_waters/01.png";
import boilingWaters02 from "../../assets/boiling_waters/02.png";
import boilingWaters03 from "../../assets/boiling_waters/03.png";
import boilingWaters05 from "../../assets/boiling_waters/05.png";
import boilingWaters06 from "../../assets/boiling_waters/06.png";
import boilingWaters07 from "../../assets/boiling_waters/07.png";
import boilingWaters09 from "../../assets/boiling_waters/09.png";
import boilingWaters10 from "../../assets/boiling_waters/10.png";
import boilingWaters11 from "../../assets/boiling_waters/11.png";
import boilingWaters12 from "../../assets/boiling_waters/12.png";

import { project } from "../types";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function FeaturedProjects() {
  const projectsForClients: Array<project> = [
    {
      name: "Boiling waters",
      imgSrc: [
        boilingWaters01,
        boilingWaters02,
        boilingWaters03,
        boilingWaters05,
        boilingWaters06,
        boilingWaters07,
        boilingWaters09,
        boilingWaters10,
        boilingWaters11,
        boilingWaters12,
      ],
      link: "https://play.google.com/store/apps/details?id=ph.boilingwatersph.bdub&hl=en&gl=US",
      description:
        "It's a Dating app where users are able to use more advanced customized filters than other dating apps. Users can select from lists of their interests and their moral compass and they can set their non-negotiables and negotiables too.",
      alt: "BOILING_WATERS_IMAGE",
    },
  ];

  const personalProjects: Array<project> = [
    {
      name: "My Music Streamer",
      imgSrc: [myMusicStreamer01, myMusicStreamer02, myMusicStreamer03],
      link: "https://grrom.github.io/my-music-streamer",
      description:
        "It's a Music streamer that I made with react, You can search songs and play them, pretty straight forward.",
      alt: "MY_MUSIC_STREAMER_IMAGE",
    },
    {
      name: "Lofi-moods",
      imgSrc: [lofiMoods01, lofiMoods02, lofiMoods03],
      link: "https://grrom.github.io/lofi-moods",
      description:
        "An online Lofi player sorted by moods with livechat function.",
      alt: "LOFI_MOODS_IMAGE",
    },
  ];

  return (
    <main id="featured-projects">
      <ProjectsWrapper projects={projectsForClients} title="Previous Clients" />
      <ProjectsWrapper projects={personalProjects} title="Personal Projects" />
    </main>
  );
}

function ProjectsWrapper(props: { projects: Array<project>; title: string }) {
  return (
    <div>
      <span className="title">{props.title}</span>

      {props.projects.map((item) => {
        return (
          <Project
            name={item.name}
            imgSrc={item.imgSrc}
            link={item.link}
            description={item.description}
            key={item.name}
          />
        );
      })}
    </div>
  );
}

function Project(props: project) {
  return (
    <div className="project">
      <Carousel showArrows={true} showThumbs={false}>
        {props.imgSrc.map((imgSrc, index) => (
          <div>
            <img
              key={index}
              src={imgSrc}
              alt={imgSrc}
              className="project-screenshot"
            />
          </div>
        ))}
      </Carousel>
      <div className="project-details">
        <div>
          <div className="project-name">{props.name}</div>
          <p className="project-description">{props.description}</p>
        </div>
      </div>
      <a
        href={props.link}
        target="_blank"
        rel="noreferrer"
        className="project-link"
      >
        Visit
      </a>
    </div>
  );
}
