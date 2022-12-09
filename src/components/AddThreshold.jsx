import React from 'react';
import styled from 'styled-components';



class AddThreshold extends React.Component {
    handleSubmit = (event) => {
        event.preventDefault()

        var Ingredient = event.target.ingredient.value;
        var Weight = event.target.weight.value;

        var jsonObject = {
            "ingredient": "",
            "weight_threshold": 0
        }

        jsonObject.ingredient = Ingredient;
        jsonObject.weight_threshold = Weight;

        var str = JSON.stringify(jsonObject);
        console.log(str);

        //

        const requestOptions = {
            method: 'PUT',
            header: { 'Content-Type': 'application/json' },
            body: str
        };
        fetch("https://al5cxhnxy8.execute-api.us-east-1.amazonaws.com/thresholds", requestOptions).then(
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
                    Add a threshold
                </h4>
                <label>
                    Ingredient:
                    <input
                        type="text"
                        name="ingredient"
                    />
                </label>
                <label>
                    Weight:
                    <input
                        type="number"
                        name="weight"
                    />
                </label>
                <button type="submit">Add</button>
            </form>

        )
    }
}

export default AddThreshold