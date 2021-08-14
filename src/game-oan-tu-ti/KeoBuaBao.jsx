import React, { Component } from 'react';
import { connect } from 'react-redux';

class KeoBuaBao extends Component {
    render() {
        const { mangKeoBuaBao } = this.props;
        return (
            <div>
                {mangKeoBuaBao.map((keoBuaBao, id) => {
                    return <img className="py-5" key={id} src={keoBuaBao.hinhAnh} width="50px" alt="" />
                })}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    mangKeoBuaBao: state.gameOanTuTiReducer.mangKeoBuaBao,
})

export default connect(mapStateToProps)(KeoBuaBao);