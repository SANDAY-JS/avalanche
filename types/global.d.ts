type LiveInfoType = {
    eventName?: string;
    date: string;
    time?: string;
    place?: string;
    detail?: string;
    comment?: string;
}

type Member = {
    name: string;
    twitter: string;
    instagram: string;
    image: string;
    role: string;
    des?: string;
}

type News = {
    text: string;
    url?: string;
}