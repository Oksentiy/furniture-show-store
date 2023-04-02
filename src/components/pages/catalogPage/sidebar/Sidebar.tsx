

import {Sorting} from "components/pages";
import {Filters} from "components/pages";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <Sorting/>
      <Filters/>
    </div>
  )
}