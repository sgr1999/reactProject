import React, { Fragment} from "react";
import { FormGroup,Form, Input, Container, Button } from "reactstrap";

const AddCourse=()=>{

    return(
        <Fragment>
            <h1 className="text-center my-3">Fill Course detail</h1>
            <Form>
                <FormGroup>
                    <label for="userId">Course Id</label>
                    <Input 
                        type="text"
                        placeholder="Enter here"
                        name="userId"
                        id="userId"
                    />
                </FormGroup>

                <FormGroup>
                    <label for="userId">Course Title</label>
                    <Input 
                        type="text"
                        placeholder="Enter here"
                        name="title"
                        id="title"
                    />
                </FormGroup>

                <FormGroup>
                    <label for="userId">Course description</label>
                    <Input 
                        type="textarea"
                        placeholder="Enter here"
                        name="description"
                        id="description"
                        style={{height:150}}
                    />
                </FormGroup>

                <Container>
                    <Button color="success">Add Course</Button>
                    <Button color="warning ml-2">clear</Button>
                </Container>
            </Form>
        </Fragment>
    );
}

export default AddCourse;