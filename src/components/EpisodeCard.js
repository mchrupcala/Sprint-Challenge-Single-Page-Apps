import React from "react";

export default function EpisodeCard(props) {
    return (
        <div className="ui cards">
          <div className="ui card">
            <div className="content">
              <div className="header">{props.data.name}</div>
              <div className="meta">{props.data.episode}</div>
              <div className="description">
                    {props.data.air_date}
              </div>
            </div>
          </div>
        </div>
        )
}
