import React, { Component } from 'react'
import Title from "./Title"
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'

export default class Services extends Component {
     state = {
          services: [
               {
                    icon: <FaCocktail />,
                    title: 'free cocktails',
                    info: 'Contrary to popular belief,Lorem Ipsum is not simply random text.It has roots in a piece of classical Latin literature from 45 BC, '
               }, {
                    icon: <FaHiking />,
                    title: 'free Hiking',
                    info: 'Contrary to popular belief,Lorem Ipsum is not simply random text.It has roots in a piece of classical Latin literature from 45 BC, '
               }, {
                    icon: <FaShuttleVan />,
                    title: 'free Shuttlevan',
                    info: 'Contrary to popular belief,Lorem Ipsum is not simply random text.It has roots in a piece of classical Latin literature from 45 BC, '
               }, {
                    icon: <FaBeer />,
                    title: 'free Beer',
                    info: 'Contrary to popular belief,Lorem Ipsum is not simply random text.It has roots in a piece of classical Latin literature from 45 BC, '
               }
          ]
     }
     render() {
          return (
               <section className="services">
                    <Title title="Services" />
                    <div className="services-center">
                         {this.state.services.map((item,index) => {
                              return <article key={index} className="service">
                                   <span>{item.icon}</span>
                                   <h6>{item.title}</h6>
                                   <p>{item.info}</p>
                              </article>
})}
                    </div>
               </section>
          )
     }
}

