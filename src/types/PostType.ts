import type { UserDetailType } from "./UserDetailType"

export interface PostType {
    user: UserDetailType
    postId: number
    postDescription: string
    postImage: string
    likeCount: number
    commentCount: number
    savedCount: number
    postedTime: Date | null
} 