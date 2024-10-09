import React from "react"

const Card = ({numero}) => {
    console.log(numero)
    return (
        <div className="card text-bg-dark mb-3 m-1 ">
            <div className="card-body">
                <h5 className="card-title">{numero}</h5>

            </div>
        </div>
    )
}

export default Card