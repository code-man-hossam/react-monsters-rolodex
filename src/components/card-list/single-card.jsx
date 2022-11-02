// import { Component } from "react"

const SingleCard = ({ monster: { name, id, email } }) => {
   return (
      <div className="card-container">
         <img
            src={`https://robohash.org/${id}?set=set2&size=180x180`}
            alt={`monster ${name}`}
         />
         <h1>{name}</h1>
         <p>{email}</p>
      </div>
   )
}

// class SingleCard extends Component {
//    render() {
//       const { name, id, email } = this.props.monster

//       return (
//          <div className="card-container" key={id}>
//             <img
//                src={`https://robohash.org/${id}?set=set2&size=180x180`}
//                alt={`monster ${name}`}
//             />
//             <h1>{name}</h1>
//             <p>{email}</p>
//          </div>
//       )
//    }
// }

export default SingleCard
