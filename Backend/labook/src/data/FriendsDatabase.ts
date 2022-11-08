import BaseDatabase from "./BaseDatabase";
import { friend } from '../types/friendsTypes'

export class FriendsDatabase extends BaseDatabase {
    public async makeFriendship(friend: friend) {
        await BaseDatabase.connection("labook_friends")
        .insert({
            id_user : friend.idUser,
            id_friend : friend.idFriend
        })
    }

    public async deleteFriendship(id : string) {
        await BaseDatabase.connection("labook_friends")
        .where("id_user", id)
        .del();
    }
}