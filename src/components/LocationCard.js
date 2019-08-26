import React from "react";

export default function LocationCard(props) {

  return (
    <div className="ui cards">
      <div className="ui card">
        <div className="content">
          <div className="header">{props.data.name}</div>
          <div className="meta">{props.data.type}</div>
          <div className="description">
            Residents: {props.data.residents.length}
          </div>
        </div>
      </div>
    </div>
    )
}
