export interface Photo {
    id: string;
    url: string;
    author: string;
}

export const mockedPhoto: Photo[] = [
    {
        id: "1",
        url: "https://images.pexels.com/photos/30843770/pexels-photo-30843770/free-photo-of-snygg-kvinna-i-hatt-som-star-i-blomsterfalt.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        author: "Mysan"
    },
    {
        id: "2",
        url: "https://images.pexels.com/photos/30781837/pexels-photo-30781837/free-photo-of-vinter.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        author: "Kevin"
    },
    {
        id: "3",
        url: "https://images.pexels.com/photos/30851210/pexels-photo-30851210.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        author: "Calle"
    }
]