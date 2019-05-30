import React, { Component } from "react";
import SaveButton from "../SaveButton/SaveButton";
import AddTagsButton from "../AddTagsButton/AddTagsButton";

class NewNote extends Component {
    state = {

    }

    //Jen's code to save the note goes here
    handleClick = () => {
        alert("click");
    }

    render(){ 
        return(
            <form>            
                <div className="form-group">
                    <label for="newEntry" className="sr-only">New Entry</label>
                    <textarea className="form-control" id="newEntry" rows="5"></textarea>
                </div>
                <AddTagsButton></AddTagsButton>
                <SaveButton onClick={this.handleClick}></SaveButton>
            </form>
        )
    }
}

export default NewNote;