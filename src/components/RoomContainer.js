import React from 'react'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList' 
import { withRoomConsumer } from '../context'
import Loading from '../components/Loading'


function RoomContainer({ context }) {
     const { rooms, loading, sortedRooms } = context
                    if (loading) {
                         return <Loading />
                    }
                    return (
                         <div>
      <RoomFilter rooms={rooms} />
     <RoomList rooms={sortedRooms} />
                         
          </div>
                    )

}


export default withRoomConsumer(RoomContainer)

// import React from 'react'
// import RoomFilter from './RoomFilter'
//  import RoomList from './RoomList' 
// import { RoomConsumer } from '../context'
// import Loading from '../components/Loading'
// export default function RoomsContainer() {
//      return (

//             <RoomConsumer>
//                {value => {
//                     const { rooms, loading, sortedRooms } = value
//                     if (loading) {
//                          return <Loading />
//                     }
//                     return (
//                          <div>
//      roomcontainer 
//      <RoomFilter rooms={rooms} />
//      <RoomList rooms={sortedRooms} />
                         
//           </div>
//                     )
//                }}
//                </RoomConsumer>
          
//      )
// }
