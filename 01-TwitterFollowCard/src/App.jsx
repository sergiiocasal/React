import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {

    return (
        <section className="App">
            <TwitterFollowCard
                userName="midudev" 
                name="Miguel Ángel Durán" 
                />

            <TwitterFollowCard  
                userName="pheralb"  
                name="Pablo Rodriguez" 
                />

            <TwitterFollowCard  
                userName="elonmusk" 
                name="Elon Musk" 
                />
        </section>
    )
}