import SocialIcon from './SocialIcon';

export default function ProjectHighlightCard({ project }) {
  return (
    <article className="project-highlight-card reveal">
      <a
        className="project-highlight-preview"
        href={project.liveUrl}
        target="_blank"
        rel="noreferrer"
      >
        <img src={project.preview} alt={project.previewAlt} />
      </a>

      <div className="project-highlight-copy">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>

      <div className="project-highlight-actions">
        <a
          className="button button-primary project-highlight-launch"
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
        >
          Launch
        </a>
        <a
          className="project-highlight-repo"
          href={project.repoUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${project.title} GitHub repository`}
        >
          <SocialIcon name="github" />
        </a>
      </div>
    </article>
  );
}
