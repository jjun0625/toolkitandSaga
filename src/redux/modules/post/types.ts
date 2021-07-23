export type postType ={
    id:string;
    text:string;
    createdAt:string;
    name:string;
    username:string;
    url:string;
}


export type ItweetPostType = {
    id:string;
    createdAt:string;
    name:string;
    username:string;
}


export type postStateType = {
    data:postType[]|unknown;
    postData:postValueType | null;
    value:ItweetPostType | null;
    isLoadingPost:boolean;
    hasPostError:boolean;
    error:'';
}

export type postValueType = {
    test:string;
    username:string;
    name:string;
}
