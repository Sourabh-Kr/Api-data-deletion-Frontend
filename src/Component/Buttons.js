import React,{Component} from 'react'
export class Buttons extends Component{
    handleClick=()=>{
        this.props.handleChange(this.props.id)
    }
    render(){
        return(
            <div>
                <button type="button" className="btn btn-primary" onClick={this.handleClick}>Delete</button>
            </div>
        )
    }
}