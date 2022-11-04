import { FriendsDatabase } from '../data/FriendsDatabase'
import { friend } from '../types/friendsTypes'

export class FriendsBusiness {
    public async makeFriendship( friend: friend) {

        const friendsDatabase = new FriendsDatabase();
        await friendsDatabase.makeFriendship(friend)
    }

    public async deleteFriendship(id: string) {

        const friendsDatabase = new FriendsDatabase();
        await friendsDatabase.deleteFriendship(id)
    }
}