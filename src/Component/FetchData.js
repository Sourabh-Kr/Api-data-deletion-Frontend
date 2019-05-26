import React,{Component} from 'react'
import axios from 'axios'
import { Buttons } from './Buttons';
export class FetchData extends Component{
    constructor(){
        super()
        this.state={
            post:[],
            error:"data is not retreived"
        }
    }
    componentDidMount(){
        
        axios.get("https://jsonplaceholder.typicode.com/posts").then(resp=>{
            
           
          this.setState({
                post:resp.data
            })
            
        }).catch()
    }
    clickHandler= (i_d)=>{
        alert("Are you sure you want to delete title no.-"+i_d)
        let update=this.state.post
       update.splice(i_d-1,1)
       //console.log(update)
       this.setState({
             post:update
        })
    }

    render(){
        const {post,error}= this.state;
        console.log(post)
        return(
            <div>
                <table className="table" style={{width:"800px",margin:"0 auto"}}>
                    <thead className="thead-dark">
                        <tr>
                            <th colspan="3">Title</th>
                                          
                        </tr>
                    </thead>
                   <tbody>
                      {
                          post.length? post.map(ele=>{
                              return(
                                  <tr>
                                      <td>{ele.id}</td>
                                      <td>{ele.title}</td>
                                      <td><Buttons handleChange={this.clickHandler} id={ele.id}/></td>
                                  </tr>
                              )

                          }):<h1 style={{color:"red"}}>{error}</h1>
                      }
                   </tbody>
                </table>
               {/* <ul> 
                    {
                        post.length? post.map(ele=>{
                            return(
                                <li key={ele.id}> Title: {ele.title}{ele.id} </li>
                                
                            )
                        }):<h1 style={{color:"red"}}>{error}</h1>
                    }
                </ul>*/}
                   
            </div>
                
            
        )
    }
}