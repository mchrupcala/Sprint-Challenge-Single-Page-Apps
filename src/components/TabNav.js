import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import CharacterList from './CharacterList';
import LocationsList from "./LocationsList";
import EpisodeList from "./EpisodeList";

// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs 
// https://react.semantic-ui.com/modules/tab/




    // { menuItem: 'Characters', render: () => <Tab.Pane>
        
    //     <CharacterList />
    //     </Tab.Pane> },
    // { menuItem: 'Locations', render: () => <Tab.Pane><LocationsList /></Tab.Pane> },
    // { menuItem: 'Episodes', render: () => <Tab.Pane><EpisodeList /></Tab.Pane> },

export default function TabNav() {


    return (
        
    <div>

<Menu>
        <Menu.Item
          name='characters'
          as={NavLink} to="/characterlist"
        >
          Characters
        </Menu.Item>

        <Menu.Item
          name='locations'
          as={NavLink} to="/locationslist"
        >
          Locations
        </Menu.Item>

        <Menu.Item
          name='episodes'
          as={NavLink} to="/episodelist"
        >
          Episodes
        </Menu.Item>
      </Menu>


        {/* <Tab panes={panes} /> */}

        {/* <div className="ui attached tabular menu"> */}
        
        {/* <Link className=" item" to={"./LocationsList"}>Locations</Link>
        <Link className="item" to={"./EpisodeList"}>Episodes</Link> */}
        {/* </div> */}

        {/* <div className="ui bottom attached segment active tab"> */}
            {/* <CharacterList /> */}
            {/* </div>


        <div className="ui bottom attached segment active tab">
            <LocationsList />
        </div>
        <div className="ui bottom attached segment active tab">Episodes</div> */}
    </div>
    )
};

