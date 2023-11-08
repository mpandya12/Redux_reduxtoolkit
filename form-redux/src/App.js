
import "./App.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  Container,
  Row,
  Col,
  Button,
  Form as BootstrapForm,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { submitData } from "./Action/Action";
import { v4 as uuidV4 } from "uuid";
import ItemList from "./List";

function App() {
const dispatch=useDispatch()
// const item=useSelector((state)=>state.items.item)
const items = useSelector((state) => state.items.items);
console.log(items);
const initalvalue={

  name:"",
 username:"",
 password:"",
 phone:"",
 

}
const handelsubmit=(values)=>{
   dispatch(submitData({...values,id:uuidV4()}))
   
   console.log("submitted data");
}
  return (
    <div className="App">
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <Formik
                  initialValues={initalvalue}   
                  onSubmit={handelsubmit}        
            >
              
              {({values ,handleSubmit}) => (
                <Form className="p-5" onSubmit={handleSubmit}>
                 
                  <div className="container-fluid bg-dark text-light py-3 ">
                    <header className="text-center">
                      <h1 className="display-6">Register From</h1>
                    </header>
                  </div>
                  <div className="container my-2 bg-dark w-100 text-light p-2">
                    <BootstrapForm.Group>
                      <label>Name</label>
                      <Field type="text" name="name" className="form-control" value={values.name}/>
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="text-danger"
                      />
                    </BootstrapForm.Group>

                    <BootstrapForm.Group>
                      <label>username</label>
                      <Field
                        type="text"
                        name="username"
                        className="form-control"
                        value={values.username}
                      />
                    </BootstrapForm.Group>
                    <BootstrapForm.Group>
                    <label>Password</label>
                    <Field
                      type="password"
                      name="password"
                      className="form-control"
                      value={values.password}
                    />
                  
                  </BootstrapForm.Group>

                 

                  
                  <BootstrapForm.Group>
                    <label>Phone</label>
                    <Field
                      type="number"
                      name="phone"
                      className="form-control"
                      value={values.phone}
                    />
                   
                  </BootstrapForm.Group>

               

            

                    <Button type="submit" variant="primary" className="box">
                      Submit
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
<ItemList/>
       
      </Container>
      
    </div>
  );
}

export default App;
