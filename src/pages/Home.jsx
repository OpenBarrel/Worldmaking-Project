import ArtistCard from "../components/ArtistCard"
import { Carousel } from "react-bootstrap"
import Artists from "../constants/Artists.json"
import { useState } from "react"

export default function Home(props) {

    const [featuredArtists, setFeaturedArtists] = useState(Artists);

    return <div className="d-flex flex-column" style={{ height: "calc(100vh - 110px)" }}>
        <Carousel className="mt-4 mb-4 h-100" data-bs-theme="dark" interval={null}>
            {featuredArtists.map((artist, index) => {
                return <Carousel.Item key={index}>
                            <ArtistCard {...artist}/>
                        </Carousel.Item>
            })}
        </Carousel>
    </div>
}