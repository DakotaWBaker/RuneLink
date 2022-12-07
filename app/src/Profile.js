import React from "react"
import { useGlobalState } from "./context/GlobalState";
import profilepic from './blank.png'
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const Profile = ({profile}) => {
  console.log(profile)
  let time = new Date(profile.date_joined)
  let year = time.getFullYear()
  let month = months[time.getMonth()]
  let day = time.getDate()
  console.log(year, month)
  return (
    <div>
      <div className="container profileContainer">
      <div className='row'>
      <div className = 'col pt-4 text-center'>
        <img className = 'pp' src = {profilepic} />
      </div>
      <div className = 'col text-start'>
        <div className = 'row'>
        <div className = 'col pt-3'>
      <h2>{profile.username}</h2>
      </div>
      </div>
      <div className = 'row'>
        <div className = 'col'>
        <p>{profile.first_name}</p>
        
      </div>
      </div>
      <div className = 'row'>
     <div className = 'col'>
      <p>{profile.rsn}</p>
      <p>{`Member since: ${month} ${day}, ${year}`}</p>
      </div>
      </div>
      </div>
      </div>
     
      <table className="table">
  <thead>
    <tr>
      <th scope = 'col'></th>
      <th scope="col">Skill</th>
      <th scope="col">Level</th>
      <th scope="col">Rank</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row skillsRow"></th>
      <td>Overall</td>
      <td>{profile.skills[0].total}</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row skillsRow"><img src='https://www.runescape.com/img/rsp777/hiscores/skill_icon_attack1.gif' /></th>
      <td>Attack</td>
      <td>{profile.skills[0].attack}</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row skillsRow"><img src='https://www.runescape.com/img/rsp777/hiscores/skill_icon_defence1.gif'/></th>
      <td>Defence</td>
      <td>{profile.skills[0].defense}</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row skillsRow"><img src='https://www.runescape.com/img/rsp777/hiscores/skill_icon_strength1.gif'/></th>
      <td>Strength</td>
      <td>{profile.skills[0].strength}</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row skillsRow"><img src='https://www.runescape.com/img/rsp777/hiscores/skill_icon_hitpoints1.gif'/></th>
      <td>Hitpoints</td>
      <td>{profile.skills[0].hitpoints}</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row skillsRow"><img src='https://www.runescape.com/img/rsp777/hiscores/skill_icon_ranged1.gif'/></th>
      <td>Ranged</td>
      <td>{profile.skills[0].ranged}</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row skillsRow"><img src='https://www.runescape.com/img/rsp777/hiscores/skill_icon_prayer1.gif'/></th>
      <td>Prayer</td>
      <td>{profile.skills[0].prayer}</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row skillsRow"><img src='https://www.runescape.com/img/rsp777/hiscores/skill_icon_magic1.gif'/></th>
      <td>Magic</td>
      <td>{profile.skills[0].magic}</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row skillsRow"><img src='https://www.runescape.com/img/rsp777/hiscores/skill_icon_cooking1.gif'/></th>
      <td>Cooking</td>
      <td>{profile.skills[0].cooking}</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row skillsRow"><img src='https://www.runescape.com/img/rsp777/hiscores/skill_icon_woodcutting1.gif'/></th>
      <td>Woodcutting</td>
      <td>{profile.skills[0].woodcutting}</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row skillsRow"><img src='https://www.runescape.com/img/rsp777/hiscores/skill_icon_fletching1.gif'/></th>
      <td>Fletching</td>
      <td>{profile.skills[0].fletching}</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row skillsRow"><img src='https://www.runescape.com/img/rsp777/hiscores/skill_icon_fishing1.gif'/></th>
      <td>Fishing</td>
      <td>{profile.skills[0].fishing}</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row skillsRow"><img className src='https://www.runescape.com/img/rsp777/hiscores/skill_icon_firemaking1.gif'/></th>
      <td>Firemaking</td>
      <td>{profile.skills[0].firemaking}</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row skillsRow"><img src='https://www.runescape.com/img/rsp777/hiscores/skill_icon_crafting1.gif'/></th>
      <td>Crafting</td>
      <td>{profile.skills[0].crafting}</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row skillsRow"><img src='https://www.runescape.com/img/rsp777/hiscores/skill_icon_smithing1.gif'/></th>
      <td>Smithing</td>
      <td>{profile.skills[0].smithing}</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row skillsRow"><img src='https://www.runescape.com/img/rsp777/hiscores/skill_icon_mining1.gif'/></th>
      <td>Mining</td>
      <td>{profile.skills[0].mining}</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row skillsRow"><img src='https://www.runescape.com/img/rsp777/hiscores/skill_icon_herblore1.gif'/></th>
      <td>Herblore</td>
      <td>{profile.skills[0].herblore}</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row skillsRow"><img src='https://www.runescape.com/img/rsp777/hiscores/skill_icon_agility1.gif'/></th>
      <td>Agility</td>
      <td>{profile.skills[0].agility}</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row skillsRow"><img src='https://www.runescape.com/img/rsp777/hiscores/skill_icon_thieving1.gif'/></th>
      <td>Thieving</td>
      <td>{profile.skills[0].thieving}</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row skillsRow"><img src='https://www.runescape.com/img/rsp777/hiscores/skill_icon_slayer1.gif'/></th>
      <td>Slayer</td>
      <td>{profile.skills[0].slayer}</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row skillsRow"><img src='https://www.runescape.com/img/rsp777/hiscores/skill_icon_farming1.gif'/></th>
      <td>Farming</td>
      <td>{profile.skills[0].farming}</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row skillsRow"><img src='https://www.runescape.com/img/rsp777/hiscores/skill_icon_runecraft1.gif'/></th>
      <td>Runecraft</td>
      <td>{profile.skills[0].runecrafting}</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row skillsRow"><img src='https://www.runescape.com/img/rsp777/hiscores/skill_icon_hunter1.gif'/></th>
      <td>Hunter</td>
      <td>{profile.skills[0].hunter}</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row skillsRow"><img src='https://www.runescape.com/img/rsp777/hiscores/skill_icon_construction1.gif'/></th>
      <td>Construction</td>
      <td>{profile.skills[0].construction}</td>
      <td></td>
    </tr>
  </tbody>
</table>
</div>

    </div>
  )
}

export default Profile