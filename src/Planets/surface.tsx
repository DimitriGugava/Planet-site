import link from "../assets/link.svg";

const surface = (props: any) => {
  return (
    <div>
      <img className="planetImage" src={props.planetData.images.geology} />
      <div className="planet_Info_Box">
        <h1 className="planet_Name">{props.planetData.name}</h1>
        <p className="planet_Text">{props.planetData.geology.content}</p>
        <div className="planet_Source">
          Source:
          <a
            href={props.planetData.geology.source}
            target="_blank"
            rel="noopener noreferrer"
          >
            Wikipedia
          </a>
          <img src={link} className="link" />
        </div>
      </div>{" "}
    </div>
  );
};

export default surface;
