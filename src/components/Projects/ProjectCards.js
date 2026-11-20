import React from "react";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { HiArrowUpRight } from "react-icons/hi2";

function ProjectCards(props) {
  return (
    <div className="pro-card">
      {/* Badge */}
      {props.badge && (
        <div
          className="pro-card-badge"
          style={{
            color: props.badgeColor || "#c770f0",
            border: `1px solid ${props.badgeColor || "#c770f0"}`,
            background: `${props.badgeColor || "#c770f0"}18`,
          }}
        >
          {props.badge}
        </div>
      )}

      {/* Image */}
      <div className="pro-card-img-wrap">
        <img src={props.imgPath} alt={props.title} className="pro-card-img" />
        <div className="pro-card-img-overlay" />
      </div>

      {/* Body */}
      <div className="pro-card-body">
        <h5 className="pro-card-title">{props.title}</h5>
        <p className="pro-card-desc">{props.description}</p>

        {/* Links */}
        <div className="pro-card-links">
          <a
            href={props.ghLink}
            target="_blank"
            rel="noreferrer"
            className="pro-card-btn pro-card-btn--ghost"
          >
            <BsGithub size={14} />
            <span>{props.isBlog ? "Blog" : "GitHub"}</span>
            <HiArrowUpRight size={12} />
          </a>
          {!props.isBlog && props.demoLink && (
            <a
              href={props.demoLink}
              target="_blank"
              rel="noreferrer"
              className="pro-card-btn pro-card-btn--solid"
            >
              <CgWebsite size={14} />
              <span>Live Demo</span>
              <HiArrowUpRight size={12} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCards;
