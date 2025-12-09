export default function Home(props) {
    return <div>
        <h1>Welcome... {sessionStorage.getItem('username') ?? ''}</h1>
    </div>
}