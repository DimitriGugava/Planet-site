import "./List.css";
import { Route, Link, useParams } from "react-router-dom";

import arrow from "../../assets/arrow.svg";

type ListProps = {
  list: boolean;
  showList: () => void;
};
const List: React.FC<ListProps> = (props) => {
  const { list, showList } = props;

  return (
    <div className="planetsList">
      <div className="mercury">
        <div className="mercury_Oval"></div>
        <Link to="/planets/mercury" onClick={props.showList}>
          <div className="mercury_Text">MERCURY</div>
        </Link>
        <Link to="/planets/mercury" onClick={props.showList}>
          <img className="arrow" src={arrow} />
        </Link>
      </div>
      <div className="list_Line"></div>
      <div className="venus">
        <div className="venus_Oval"></div>
        <Link to="/planets/venus" onClick={props.showList}>
          <div className="venus_Text">VENUS</div>
        </Link>
        <Link to="/planets/venus" onClick={props.showList}>
          <img className="arrow" src={arrow} />
        </Link>
      </div>
      <div className="list_Line"></div>
      <div className="earth">
        <div className="earth_Oval"></div>
        <Link to="/planets/earth" onClick={props.showList}>
          <div className="earth_Text">EARTH</div>
        </Link>
        <Link to="/planets/earth" onClick={props.showList}>
          <img className="arrow" src={arrow} />
        </Link>
      </div>
      <div className="list_Line"></div>
      <div className="mars">
        <div className="mars_Oval"></div>
        <Link to="/planets/mars" onClick={props.showList}>
          <div className="mars_Text">MARS</div>
        </Link>
        <Link to="/planets/mars" onClick={props.showList}>
          <img className="arrow" src={arrow} />
        </Link>
      </div>
      <div className="list_Line"></div>
      <div className="jupiter">
        <div className="jupiter_Oval"></div>
        <Link to="/planets/jupiter" onClick={props.showList}>
          <div className="jupiter_Text">JUPITER</div>
        </Link>
        <Link to="/planets/jupiter" onClick={props.showList}>
          <img className="arrow" src={arrow} />
        </Link>
      </div>
      <div className="list_Line"></div>
      <div className="saturn">
        <div className="saturn_Oval"></div>
        <Link to="/planets/saturn" onClick={props.showList}>
          <div className="saturn_Text">SATURN</div>
        </Link>
        <Link to="/planets/saturn" onClick={props.showList}>
          <img className="arrow" src={arrow} />
        </Link>
      </div>
      <div className="list_Line"></div>
      <div className="uranus">
        <div className="uranus_Oval"></div>
        <Link to="/planets/uranus" onClick={props.showList}>
          <div className="uranus_Text">URANUS</div>
        </Link>
        <Link to="/planets/uranus" onClick={props.showList}>
          <img className="arrow" src={arrow} />
        </Link>
      </div>
      <div className="list_Line"></div>
      <div className="neptune">
        <div className="neptune_Oval"></div>
        <Link to="/planets/neptune" onClick={props.showList}>
          <div className="neptune_Text">NEPTUNE</div>
        </Link>
        <Link to="/planets/neptune" onClick={props.showList}>
          <img className="arrow" src={arrow} />
        </Link>
      </div>
    </div>
  );
};

export default List;
