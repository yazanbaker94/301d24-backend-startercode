import React, { Component } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

 class Main extends Component {
     constructor(props){
         super(props);
             this.state={
                 dataArray:[],
             }
         
     }

     componentDidMount = async () => {
         const newData = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/retreive`)

         this.setState({
             dataArray:newData.data
         })
         console.log(newData.data)
        
     }


     addToFav = async (data) => {
         await axios.post(`${process.env.REACT_APP_BACKEND_URL}/create`, data)
     }
    render() {
        return (
            <div>
                {this.state.dataArray.map(element => {
                    return <>

        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={element.image_url} />
        <Card.Body>
            <Card.Title>{element.title}</Card.Title>
            <Card.Text>
            {element.ingredients}
            </Card.Text>
            <Button variant="primary" onClick={() => this.addToFav(element)}>Add to Fav</Button>
        </Card.Body>
        </Card>


                    </>
                })}
            </div>
        )
    }
}

export default Main
