import  React  from "react"
import {
    Link,
    Route
} from 'react-router-dom'


function Topic (props) {
    return <h3>{props.match.params.topicId}</h3>
}



export default function Topics ({ match }) {
    return (
    <div> 
        <h2>Topics!</h2>
        <ul>
            <li>
                <Link to={`${match.url}/rendering`}>Rendering With React!</Link>

            </li>
            <li>
                <Link to={`${match.url}/component`}>Components!</Link>
            </li>

            <li>
                <Link to={`${match.url}/props-v-state`}>Props vs States!</Link>
            </li>
        </ul>


        <hr/>


        <Route path={`${match.path}/:topicId`} component={Topic} />
        {/*use this when you want to pass your own prop into the component, instead of letting router do it.*/}
        {/* <Route path={`${match.path}/:topicId`} render={()=>{

                return <Topic name='tyler' />


        }} /> */}
        <Route exact path={match.path} render={() => {
            return <h3>Please select a topic!</h3>
            }} />
        {/* <Route path='/topics/rendering' component={Topic} />
        <Route path='/topics/components' component={Topic} />
        <Route path='/topics/props-v-state' component={Topic} /> */}


    </div>
    )
}