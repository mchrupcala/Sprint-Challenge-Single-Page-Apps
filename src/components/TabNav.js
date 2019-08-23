import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import CharacterList from './CharacterList';
import LocationsList from "./LocationsList";
import EpisodeList from "./EpisodeList";

// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs 
// https://react.semantic-ui.com/modules/tab/
export default function TabNav() {

    const panes = [
        { menuItem: 'Characters', render: () => <Tab.Pane>Characters</Tab.Pane> },
        { menuItem: 'Locations', render: () => <Tab.Pane>Locations</Tab.Pane> },
        { menuItem: 'Episodes', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
      ]

    return (
    <div>
        <div className="ui attached tabular menu">
        <Link className="active item" to={"./CharacterList"}>Characters</Link>
        <Link className="item" to={"./LocationsList"}>Locations</Link>
        <Link className="item" to={"./EpisodeList"}>Episodes</Link>
        </div>

        {/* <div className="ui bottom attached segment active tab">
            Characters
            </div>


        <div className="ui bottom attached segment active tab">Locations</div>
        <div className="ui bottom attached segment active tab">Episodes</div> */}
    </div>
    )
};

