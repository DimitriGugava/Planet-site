import React, { useState } from "react";
import "./Planets.css";
import menu from "../assets/menu.svg";
import data from "../data.json";
import List from "./List/List";
import { Route, Switch, useParams, Link } from "react-router-dom";
import Structure from "./structure";
import Surface from "./surface";
import Overview from "./overview";

const Planets = (props: any) => {
  const [list, setList] = useState(false);
  const [showStructure, setShowStructure] = useState(true);
  const [showSurface, setShowSurface] = useState(false);
  const [showOverview, setShowOverview] = useState(false);

  const showMeStructure = () => {
    setShowStructure(true);
    setShowSurface(false);
    setShowOverview(false);
  };

  const showMeSurface = () => {
    setShowStructure(false);
    setShowSurface(true);
    setShowOverview(false);
  };

  const showMeOverview = () => {
    setShowStructure(false);
    setShowSurface(false);
    setShowOverview(true);
  };

  const showList = () => {
    setList(!list);
  };

  const { planet, page } = useParams<{ planet: string; page: string }>();
  const planetData = data.find((p) => p.name.toLowerCase() === planet);

  console.log(planetData);
  if (!planetData) return <p>Planet not found</p>;

  return (
    <div className="main_Container">
      <div className="header_Box">
        <h1 className="header_Text">THE PLANETS</h1>
        <img className="menu_Bar" src={menu} onClick={showList} />
      </div>
      <></>
      <div className="thin_Header_Line"></div>
      {!list ? (
        <>
          <div className="options">
            <div onClick={showMeOverview}>
              <a className="overview">OVERVIEW</a>
            </div>

            <div onClick={showMeStructure}>
              <a className="structure"> STRUCTURE</a>
            </div>
            <div onClick={showMeSurface}>
              <a className="surface">SURFACE</a>
            </div>
          </div>

          <div className="option_Thin_Line"></div>

          {showOverview ? <Overview planetData={planetData} /> : ""}
          {showStructure ? <Structure planetData={planetData} /> : ""}
          {showSurface ? <Surface planetData={planetData} /> : ""}

          <div className="facts_Box">
            <div className="rotation_Time_Box">
              <a className="rotation_Time_text">ROTATION TIME</a>
              <a className="rotation_Time">{planetData.rotation}</a>
            </div>
            <div className="revolution_Time_Box">
              <a className="revolution_Time_text">REVOLUTION TIME</a>
              <a className="revolution_Time">{planetData.revolution}</a>
            </div>
            <div className="radius_Box">
              <a className="radius_text">RADIUS</a>
              <a className="radius">{planetData.radius}</a>
            </div>
            <div className="average_Temp_Box">
              <a className="average_Temp_text">AVERAGE TEMP</a>
              <a className="average_Temp">{planetData.temperature}</a>
            </div>
          </div>
        </>
      ) : (
        <List list={list} showList={showList} />
      )}
    </div>
  );
};

export default Planets;
