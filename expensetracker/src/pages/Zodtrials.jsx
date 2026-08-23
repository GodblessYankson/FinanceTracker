import { settings } from 'firebase/analytics'
import React from 'react'
import {z} from 'zod'

const Zodtrials = () => {

    const userSchema = z.object({
        firstName: z.string(),
        email: z.string().email(),
        //profileURL: z.string.url(),
        age: z.number ().max(20),
        friends: z.array(z.string()).max(4),
        settings: z.object({
            isSubscribed: z.boolean(),
        })
    })

    const user = {
        firstName: "Yahbless",
        email: "yanksongodbless06@gmail.com",
        //profileURL: "https://google.com",
        age: 30,
        friends: ['jod', 'Jesus', 'Yahweh', 'CHRIST'],
        settings: {
            isSubscribed: true
        }
    }
    console.log(userSchema.parse(user))

  return (
    <div>
      <p>this is zode trials</p>
    </div>
  )
}

export default Zodtrials
