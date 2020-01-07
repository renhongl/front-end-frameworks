

import React from 'react';

import { connect } from 'react-redux';
import * as actions from './actions';

function View({title, author, changeTitle, getInfor, infor}) {

    const [tit, setTit] = React.useState('');

    React.useEffect(() => {
        getInfor('pomelo');
    }, []);

    return (
        <div>
            {title}---by {author}
            <input onChange={(e) => setTit(e.target.value)}/><button onClick={() => {changeTitle(tit)}}>Change Title</button>
            <div>
                Information: {JSON.stringify(infor)}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return state.helloWorld;
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeTitle: (title) => dispatch(actions.changeTitle(title)),
        getInfor: (name) => dispatch(actions.getInfo(name)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(View);