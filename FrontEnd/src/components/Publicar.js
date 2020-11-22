import React from 'react';
import '../styles/Post.css';
import {Form,Button} from 'react-bootstrap';

export default class Publicar extends React.Component {
    render() {
        return (
            <div>
                        <div className="">
                            <div className="caja">
                            </div>
                            <div className="comentario">
                                <div className="Form">
                                    <Form>
                                        <Form.Group>
                                            <Form.Control type="txt" placeholder="Enter your commentary" />
                                              <Form.File id="exampleFormControlFile1" label="" />     
                                        </Form.Group>
                                        <Button variant="success" type="submit">
                                            Publicar
                                        </Button>
                                    </Form>
                                </div>
                            </div>
                        </div>
          </div>
        )
    }
}
