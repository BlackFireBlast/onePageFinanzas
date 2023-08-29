import { useEffect,useState } from "react"
const apiKey = process.env.REACT_APP_API_KEY

 


function Video (){
    const [gifUrl,setGifUrl] = useState();
    useEffect(()=>{
        // setGifUrl( "https://imgs.search.brave.com/O1jWj5GDnSgw7PWDzvorLh51H26BVNnxb8f-G9bOlpU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ2/Mzg3MTA3OS92ZWN0/b3IvcGFuZGEtbG9n/by1pc29sYXRlZC1w/YW5kYS1vbi13aGl0/ZS1iYWNrZ3JvdW5k/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1nb1VHY0lTUHFS/UUpnR3JhLVVBcF9v/RFo0S2NqMjJic2hl/aFZSNEFfdEVFPQ")
       // fetch("https://api.giphy.com/v1/gifs/random?api_key=Rpepy3DtQhnSFPT7Cb2GtbLJLRHIreHr")
       fetch(`https://api.giphy.com/v1/gifs/search?q=saving%20money&&lang=sp&&api_key=${apiKey}`)
       .then(res => res.json())
        .then(data => {
            //Num de gifs
            let status = data.pagination.count;
            let random = Math.floor(Math.random()*status);
            let gif=data.data[random].images.downsized.url;
            setGifUrl(gif)
        })
     },[])
    return (
        <section className="video" id='somos'>
            <p className="videoTexto">
                En Coach planeamos, diseñamos y te acompañamos en tu recorrido
                hacia la Libertad Financiera
            </p>
            <div >
            <img className="gif" src={gifUrl} alt="Gif" />
            </div>
        </section>
    )
}

export default Video