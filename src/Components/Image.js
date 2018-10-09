import React from 'react';

function GetDescription(props) {
    const name = props.descr;
    return <span>Description:</span> + name ? "NO NAME" : name;
}

const Img = props => (
    <div className="card">
        <h4>
            <GetDescription descr={props.description} />
        </h4>
        <div>
            <a href={props.urlLarge}>
                <div className="card-img">
                    <img src={props.url} alt="Image cap" />
                </div>
            </a>
        </div>
        <h4>
            <span>Author:</span> {props.author}
        </h4>
    </div>
);

export default Img;