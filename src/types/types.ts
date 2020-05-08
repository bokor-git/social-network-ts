
export type PhotosType = {
    small: string
    large: string
}

export type ContactsType = {
    github?: string
    vk?: string
    facebook?: string
    instagram?: string
    twitter?: string
    website?: string
    youtube?: string
    mainLink?: string
}

export type ProfileDataType = {
    userId: number
    lookingForAJob?: boolean
    lookingForAJobDescription?: string
    fullName: string
    contacts?: ContactsType
    photos?: PhotosType
}

export type UserType = {
    name: string
    id: number
    photos: PhotosType
    status: string
    followed: boolean
}