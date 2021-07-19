const Meme = ({meme}) => {
    
    console.log(meme);
    return <div className="meme">
        <img src={meme.url}></img>
    </div>
}
export default Meme;