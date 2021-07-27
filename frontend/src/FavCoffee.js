import React, { Component } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import UpdateFormModal from './UpdateFormModal'
 class FavCoffee extends Component {

    constructor(props){
        super(props);
            this.state={
                dataArray:[],
                show:false,
                title:'',
                ingredients:'',
                image_url:'',
                index:0
            }
        
    }


    componentDidMount = async () => {
        const newData = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/fav-list`)

        this.setState({
            dataArray:newData.data
        })
        console.log(newData.data)
    }

    deleteFav = async (index) => {
        const id = this.state.dataArray[index]._id

        const deletedData = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/delete/${id}`)

        this.setState({
            dataArray:deletedData.data
        })
        console.log(deletedData.data)
    }

    onChangeTitle = (e) => {
        this.setState({
            title:e.target.value
        })
        console.log(this.state.title)
    }

    onChangeIngredients = (e) => {
        this.setState({
            ingredients:e.target.value
        })
        console.log(this.state.ingredients)
    }

    onChangeImage_url = (e) => {
        this.setState({
            image_url:e.target.value
        })
        console.log(this.state.image_url)
    }


    showModal = (index) => {
        this.setState({
            index:index,
            show:true
        })
    }

    handleClose = () => {
        this.setState({
            show:false
        })
    }


    updateFav = async(e) => {
        e.preventDefault();
        const bodydata = {
            title:this.state.title,
            ingredients:this.state.ingredients,
            image_url:this.state.image_url

        }

        const updatedData = await axios.put(`${process.env.REACT_APP_BACKEND_URL}/update/${this.state.index}`, bodydata)

        this.setState({
            dataArray:updatedData.data
        })
        console.log(updatedData.data)

    }


    render() {
        return (
            <div>
                <UpdateFormModal show={this.state.show} handleClose={this.handleClose} onChangeTitle={this.onChangeTitle} onChangeIngredients={this.onChangeIngredients} onChangeImage_url={this.onChangeImage_url} updateFav={this.updateFav} />

                 {this.state.dataArray.map((element, index) => {
                    return <>

        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={element.image_url} />
        <Card.Body>
            <Card.Title>{element.title}</Card.Title>
            <Card.Text>
            {element.ingredients}
            </Card.Text>
            <Button variant="primary" onClick={() => this.deleteFav(index)}>Delete </Button>
            <Button variant="primary" onClick={() => this.showModal(index)}>Update </Button>
        </Card.Body>
        </Card>


                    </>
                })}
            </div>
        )
    }
}

export default FavCoffee
