export type PostsType={
    id: number| null;
    post: string| null;
    likesCount: number| null;
}
export type ContactsType={
    github: string|null;
    vk: string|null;
    facebook: string|null;
    instagram: string|null;
    twitter: string|null;
    website: string|null;
    youtube: string|null;
    mainLink: string|null;
}
export type PhotosType={
    small: string|null;
    large: string|null;
}
export type ProfileType={
    userId: number |null;
    lookingForAJob: boolean;
    lookingForAJobDescription: string|null;
    fullName: string|null;
    contacts: ContactsType|null;
    photos:PhotosType|null;
    aboutMe: string|null;
}

export type ItemType = {
    "name": string,
    "id": number,
    "photos": PhotosType
    "status": string,
    "followed": boolean,
}
export type UsersType = {
    "items": Array<ItemType>,
    "totalCount": number,
    "error": null | string
}

