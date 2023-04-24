import {Sorting} from "components/pages";
import {Filters} from "components/pages";
import '../styles/sidebar.scss'

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <Sorting/>
      <Filters/>
    </div>
  )
}