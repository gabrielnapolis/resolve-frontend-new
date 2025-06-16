
export type GetSupportHubArticleResponse = {
    id: string
    title: string
    content: string
    category: string
    authors: {
        name: string
        img: string
    }[]
    starred: boolean
    updateTime: string
    createdBy: string
    timeToRead: number
    viewCount: number
    commentCount: number
    tableOfContent: {
        id: string
        title: string
        level: number
    }[]
}
