import React from 'react'
import { Timeline } from 'react-twitter-widgets'

export default function TwitterFeed() {
  return (
    <Timeline
  dataSource={{
    sourceType: 'profile',
    screenName: 'OldSchoolRS'
  }}
  options={{
    height: '800',
    width: '1500'
  }}
/>
  )
}
