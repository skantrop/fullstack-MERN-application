import './write.css'

export default function Write() {
    return (
        <div className="write">
            <img className="writeImg"
            src="https://i.pinimg.com/originals/8a/80/99/8a8099c1b53399dc2f22bc0ce3f940e4.png" 
            alt="" />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                    <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display: "none"}} />
                    <input type="text" placeholder="title" className="writeInput" autoFocus={true}/>
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Tell your story...."
                    type="text"
                    className="writeInput writeText"
                    ></textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    )
}
