import "./Form.css"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import NewForm from "../../components/newForm/NewForm"

const Form = () => {
  return (
    <div className="form">
      <Sidebar/>
      <div className="formContainer">
        <Navbar/>
        <div className="formfields">
        <NewForm/>
        </div>
      </div>
    </div>
  )
}

export default Form