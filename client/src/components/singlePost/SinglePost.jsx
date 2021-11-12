import './singlepost.css'

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src="https://i.pinimg.com/originals/12/d6/8a/12d68aeeabea27504d88c415044248af.gif" alt="" 
                className="singlePostImg"
                />
                <h1 className="singlePostTitle">Lorem ipsum dolor
                <div className="singlePostEdit">
                <i className="singlePostIcon far fa-edit"></i>
                <i class="singlePostIcon far fa-trash-alt"></i>
                </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Aiz</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Dolorum laudantium repellendus voluptas aliquam nemo fuga
                    quos laboriosam, recusandae in optio exercitationem aliquid 
                    impedit quis debitis deserunt maiores facere iste obcaecati.

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Dolorum laudantium repellendus voluptas aliquam nemo fuga
                    quos laboriosam, recusandae in optio exercitationem aliquid 
                    impedit quis debitis deserunt maiores facere iste obcaecati.

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Dolorum laudantium repellendus voluptas aliquam nemo fuga
                    quos laboriosam, recusandae in optio exercitationem aliquid 
                    impedit quis debitis deserunt maiores facere iste obcaecati.

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Dolorum laudantium repellendus voluptas aliquam nemo fuga
                    quos laboriosam, recusandae in optio exercitationem aliquid 
                    impedit quis debitis deserunt maiores facere iste obcaecati.
                    </p>
            </div>
        </div>
    )
}
