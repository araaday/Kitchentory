import React from 'react';
import styled from 'styled-components';




class EditThreshold extends React.Component {
    handleSubmit = (event) => {
        event.preventDefault()

        var Ingredient = event.target.ingredient.value;
        var Weight = event.target.newweight.value;

        var jsonObject = {
            "ingredient": "",
            "threshold": 0
        }

        jsonObject.ingredient = Ingredient;
        jsonObject.threshold = Weight;

        var str = JSON.stringify(jsonObject);
        console.log(str);

        //

        const requestOptions = {
            method: 'PUT',
            header: { 'Content-Type': 'application/json' },
            body: str
        };
        fetch("https://al5cxhnxy8.execute-api.us-east-1.amazonaws.com/update", requestOptions).then(
            (response) => response.json()
        ).then((data) => {
            alert(data)
            window.location.reload();

        })


        //

    }
    render() {
        return (

            <form onSubmit={this.handleSubmit}>
                <h4>
                    Edit threshold
                </h4>
                <label>
                    Ingredient:
                    <input
                        type="text"
                        name="ingredient"
                    />
                </label>
                <label>
                    New Weight:
                    <input
                        type="number"
                        name="newweight"
                    />
                </label>
                <button type="submit">Edit</button>
            </form>

        )
    }
}

export default EditThreshold