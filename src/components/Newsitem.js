import React from 'react'
import newsimg from "./newsimg.png"

const Newsitem=(props) =>{

 
        let { title, description, imageurl, newsurl, date, author,source } = props
        return ( 
            <div className='container my-3'>
                <div className="card">
                    <div style={{display:"flex", justifyContent:"flex-end",position:"absolute",right:"0"}}>
                <span className=" badge rounded-pill bg-danger" style={{left:"90%", zIndex:"1"}}>{source}</span>
                </div>
                    <img src={imageurl ? imageurl : newsimg} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}  </h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-body-secondary">By {author ? author : "unknown"} on {new Date(date).toTimeString()}</small></p>
                        <a rel="noreferrer" href={newsurl} target='_blank' className="btn btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    
}

export default Newsitem