import { ProjectGrid, ProjectItem } from "./ProjectComponent.styles";

import group1 from "../../assets/images/group1.png";
import group2 from "../../assets/images/group2.png";
import group3 from "../../assets/images/group3.png";
import group4 from "../../assets/images/group4.png";
import group5 from "../../assets/images/group5.png";
import group6 from "../../assets/images/group6.png";
import group7 from "../../assets/images/group7.png";
import group8 from "../../assets/images/group8.png";

export default function ProjectComponent() {
  return (
    <ProjectGrid>
      <ProjectItem src={group1} alt="project 1" />
      <ProjectItem src={group2} alt="project 2" />
      <ProjectItem src={group3} alt="project 3" />
      <ProjectItem src={group4} alt="project 4" />
      <ProjectItem src={group5} alt="project 5" />
      <ProjectItem src={group6} alt="project 6" />
      <ProjectItem src={group7} alt="project 7" />
      <ProjectItem src={group8} alt="project 8" />
    </ProjectGrid>
  );
}
