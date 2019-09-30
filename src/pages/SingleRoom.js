import React, { Component } from 'react'
import Banner from '../components/Banner'
import Hero from '../components/Hero'
import defaultBcg from '../images/room-1.jpeg'
import { Link } from 'react-router-dom'
import { RoomContext } from '../context'
import StyledHero from '../components/StyledHero'

export default class SingleRoom extends Component {
     constructor(props) {
          super(props)
          this.state = {
               slug: this.props.match.params.slug,
               defaultBcg
}
     }

     static contextType = RoomContext
     render() {
const {getRoom} = this.context
          const room = getRoom(this.state.slug)
          if (!room) {
               return (
                    <div className="error">
                         <h3>No such room found...</h3>
                         <Link to='/rooms' className="btn-primary">go back to room</Link>
                    </div>
               )
          }
          const { name, description, capacity, price, size, extras, pets, breakfast, images } = room
          //array disstrucring....
          const [mainImg,...defaultImg]=images
          return (
               <div>
               <StyledHero img={mainImg || this.state.defaultBcg}>
                    <Banner title={`${name} room`}>
                         <Link to='/rooms' className="btn-primary">back to home</Link>
               </Banner>
                    </StyledHero>
             
                    <section className="single-room">
                         <div className="single-room-images">
                              {defaultImg.map((item, index) => {
                                 return  <img key={index} src={item} alt={name} />
                              })}
                         </div>
                         <div className="single-room-info">
                              <article className="desc">
                                   <h3>Details</h3>
                                   <p>{description}</p>
                              </article>
                              <article className="info">
                                   <h3>Info</h3>
                                   <h6>Price:${price}</h6>
                                   <h6>Size:${size} SQFT</h6>
                                   <h6>
                                        max Capacity:{" "} {
                                    capacity >1 ? `${capacity} Person`:`${capacity} People`
                                   }
                                   </h6>
                                   <h6>{pets ? "pets are allowed" : "pets are not allowed"}</h6>
                                   <h6>{breakfast&&"Free Breakfast included"}</h6>
                              </article>
                         </div>
                    </section>
                    <section>
                         <div className="room-extras">
                              <h6>extras</h6>
                              <ul className="extras">
                                   {extras.map((item, index) => {
                                        return <li key={index} >- {item}</li>
                         })}
                              </ul>
                         </div>
                    </section>
                    </div>
          )
     }
}

