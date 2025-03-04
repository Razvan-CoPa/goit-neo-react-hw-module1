import FriendListItem from "./FriendsListItem";

const FriendList = ({friends}) => {
    return (
        <ul>
            {friends.map((friend) => {
                return <FriendListItem 
                key={friend.id}
                avatar = {friend.avatar}
                name = {friend.name}
                isOnline = {friend.isOnline}
            
                />
            })}
        </ul>
    );
}

export default FriendList;