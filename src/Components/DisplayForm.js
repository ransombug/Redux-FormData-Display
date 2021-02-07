import {Redirect, useHistory} from 'react-router-dom';
import React, { useState } from "react";
import { toast } from 'react-toastify'
import '../App.css';
import {
    FormGroup,
    Input,
    Button,
    Form,
    Label,
    InputGroup,
    InputGroupAddon,
    FormText
  } from "reactstrap";
  
//   Import Redux
import { connect } from "react-redux";
import { add } from '../Action/Forms';

const DisplayForm = ({ add }) => {

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [msg, setMsg] = useState("");

    let history = useHistory();

    const handleSubmit = (e) =>
        {
            e.preventDefault();
            toast.configure();

            if(fname === "" || lname === "" || msg === "")
              {
                 toast("Please fill all fields !", {type:"warning"})
              }

          else  {const input = {
                fname,
                lname,
                msg,
            }

            add(input);
            setFname("");
            setLname("");
            setMsg("");
            
           history.push("/dis");}
        }

    return (
      <>
       <h1 id="tex">REACT-REDUX</h1>
        <Form onSubmit={handleSubmit}>
          <FormText>Survey Form</FormText>

          <FormGroup> 
          <Label for="exampleEmail">First Name</Label>
            <InputGroup>
              <Input
                type="text" name="fname" id="fname" placeholder="Enter Here" 
                value={fname}
                onChange={(e) => setFname(e.target.value)}
              />            
            </InputGroup>
          </FormGroup>
          {/* First Name  */}

          <FormGroup>
          <Label for="exampleEmail">Last Name</Label>
            <InputGroup>
              <Input
                type="text" name="lname" id="lname" placeholder="Enter Here" 
                value={lname}
                onChange={(e) => setLname(e.target.value)}
              />            
            </InputGroup>
          </FormGroup>
          {/* Last Name  */}

          <FormGroup>
            <Label for="exampleText">Address</Label>
            <Input type="textarea" name="text" id="exampleText" placeholder="Enter your address"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            />
         </FormGroup>
         {/* Address */}

         <Button style={{marginTop:10, marginBottom:10}} outline color="primary" size="lg" block onClick={handleSubmit}>SUBMIT</Button>
         
        </Form>
        </>
        
      );
};

const mapStateToProps = (state) => ({ })

const mapDispatchToProps = (dispatch) => ({
    add : (input) => {
        dispatch(add(input));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(DisplayForm);