import '../styles/Social.css'

function Social({href, alt, img}) {
    return(
        <div class="SocialButton">
            <a href={href} target="_blank" rel="noreferrer">
                <img src={img} alt={alt} title={alt}></img>
            </a>
        </div>
    ) 
}
export default Social;