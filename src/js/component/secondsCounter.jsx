import React from "react";

const Card = ({digito}) => {
	return (
    <div className="card mb-3 bg-dark m-1" style={{width:"6rem"}}>
		  <h5 className="card-title text-center text-white">{digito}</h5>
		</div>
	);
  };

  const SecondsCounter = (props) => {
    return (
        <div className="d-flex justify-content-center " >
            <div className="card mb-3 bg-dark m-1" style={{width:"6rem"}}>
              <i className="far fa-clock text-white text-center m-2"></i>
            </div>
            <Card digito={Math.floor(props.counter/100000 %10)} />
            <Card digito={Math.floor(props.counter/10000 %10)} />
            <Card digito={Math.floor(props.counter/1000 %10)} />
            <Card digito={Math.floor(props.counter/100 %10)} />
            <Card digito={Math.floor(props.counter/10 %10)} />
            <Card digito={props.counter %10} />
        </div>
    )
  }

  

  
  export {Card, SecondsCounter};