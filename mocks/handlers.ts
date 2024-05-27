import {http} from "msw";
import {loadConversations} from "./loadConversations/loadConversations";
import {checkNews} from "./checkNews/checkNews";


export const handlers = [
    http.get('**/conversations', loadConversations),
    http.post('**/check-news', checkNews),
]
