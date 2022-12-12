import React from 'react'
import { Timeline } from 'react-twitter-widgets'

export default function TwitterFeed() {
  return (
    <div className='container-fluid'>
    <div className='row'>
    <div className='col'>
    <Timeline
  dataSource={{
    sourceType: 'profile',
    screenName: 'OldSchoolRS'
  }}
  options={{
    height: '800',
    width: '100%'
  }}
/>
</div>
</div>
</div>
  )
}
