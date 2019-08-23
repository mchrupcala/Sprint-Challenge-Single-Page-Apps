import React from "react";

export default function CharacterCard(props) {
  return (
    <div className="ui card">
      <div className="image"><img src={props.data.image} /></div>

      <div className="content">
        <div className="header">{props.data.name}</div>
        <div className="meta">{props.data.location.name}</div>
        <div className="description">
          {props.data.species}
        </div>
      </div>

      {/* <div className="extra content">
        <a>
          <i aria-hidden="true" className="user icon"></i>
          16 Friends
        </a> */}
      {/* </div> */}
</div>
  );
}