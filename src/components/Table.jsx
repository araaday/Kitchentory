import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    margin-top: 30px;
    margin-left: 50px;
    margin-right: 60px;
`;

class Table extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            list: []
        }

        this.API = this.API.bind(this)
        this.API();
    }


    API() {
        fetch("https://al5cxhnxy8.execute-api.us-east-1.amazonaws.com/ingredients").then(
            (response) => response.json()
        ).then((data) => {
            console.log(data)
            this.setState({
                list: data.Items
            })
        })
    }

    render() {
        let tb_data = this.state.list.map((item) => {
            return (
                <tr key={item.ingredient}>
                    <td>{item.ingredient}</td>
                    <td>{item.weight}</td>
                    <td>{item.humidity}</td>
                    <td>{item.temperature}</td>
                    <td>{item.time}</td>
                </tr>
            )
        })
        return (
            <div>
                <Container>
                    <table className='table table-hover table-bordered table-striped'>
                        <thead className='thead-light'>
                            <tr>
                                <th>Ingredient</th>
                                <th>Weight</th>
                                <th>Humidity</th>
                                <th>Temperature</th>
                                <th>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tb_data}
                        </tbody>
                    </table>
                </Container>
            </div >
        )
    }

}


export default Table