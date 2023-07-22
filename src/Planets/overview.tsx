import link from "../assets/link.svg";

const overview = (props: any) => {
  return (
    <div>
      <img className="planetImage" src={props.planetData.images.planet} />
      <div className="planet_Info_Box">
        <h1 className="planet_Name">{props.planetData.name}</h1>
        <p className="planet_Text">{props.planetData.overview.content}</p>
        <div className="planet_Source">
          Source:
          <a
            href={props.planetData.overview.source}
            target="_blank"
            rel="noopener noreferrer"
          >
            Wikipedia
          </a>
          <img src={link} className="link" />
        </div>
      </div>
    </div>
  );
};

export default overview;
