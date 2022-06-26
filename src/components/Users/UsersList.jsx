import Card from "../UI/Card"
import classes from './UserList.module.css'

const UsersList = props =>{
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user, id) => <li key={id}>{user.username} ({user.age} years old)</li>)}
      </ul>
    </Card>
  )
}

export default UsersList