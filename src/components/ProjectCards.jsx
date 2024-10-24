const ProjectCards = (props) => {
  const { image, name, description, linkURL } = props;

  return (
    <div className="mx-4 mt-2 grid h-full gap-x-4 text-main">
      <div className="card card-compact mx-auto w-3/4 bg-secondary transition ease-in-out hover:scale-105 hover:shadow-xl sm:w-64 lg:max-h-[95%] lg:max-w-64">
        <figure className="h-36">
          <img src={image} className="h-full w-full object-fill" alt="#" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <a
              href={linkURL}
              target="_blank"
              className="btn btn-primary bg-slate-900 text-secondary"
            >
              Link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
