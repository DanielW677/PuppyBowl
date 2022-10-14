import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";

const Homepage = () => {
    const [puppy, setPuppy] = useState([]);

    useEffect(() => {
        async function puppyData () {
            try {
                const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2209-ftb-mt-web-ft/players')
                const data = await response.json();
                console.log(data.data.players)
                setPuppy(data.data.players)
                // setPuppy(data.players.name)
            } catch (error){
                console.log(error)
            }
        }
        puppyData();
    }, [])

    return (
        <div>
            <div>
                <nav className='navBar'> Welcom To the Puppy Bowl!!</nav>
            </div>
            {
                puppy && puppy.length ? puppy.map((indivPuppy, idx) => {
                    console.log(indivPuppy)
                    return <div className='rowFlex flexContainer' key={idx}>
                        <div className='puppyInfo'>
                            <p className='puppyPara'>Puppy Name: {indivPuppy.name} </p>
                        </div>
                        <div className='puppyInfo'>
                            <p className='puppyPara'> Breed: {indivPuppy.breed},</p>
                        </div>
                       <img className='img' src={indivPuppy.imageUrl} />
                    </div>
                }) : <div>No puppy bowl :(</div>
            }
    </div>
    )

}

ReactDOM.render(<Homepage />, document.getElementById('app'))