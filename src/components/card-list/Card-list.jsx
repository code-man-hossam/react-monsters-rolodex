// import { Component } from "react"
import SingleCard from "./single-card"
import "./card-list.styles.css"

const CardList = ({ monsters }) => {
   return (
      <div className="card-list">
         {monsters.map((monster) => {
            return <SingleCard monster={monster} key={monster.id} />
         })}
      </div>
   )
}

// class CardList extends Component {
//    render() {
//       const { monsters } = this.props

//       return (
//          <div className="card-list">
//             {monsters.map((monster) => {
//                return <SingleCard monster={monster} />
//             })}
//          </div>
//       )
//    }
// }

export default CardList
