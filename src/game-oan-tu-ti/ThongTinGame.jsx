import React, { Component } from 'react';
import { connect } from 'react-redux';

class ThongTinGame extends Component {
    render() {
        const { soBanThang, soBanChoi } = this.props;
        return (
            <div className="mt-5">
                <h1 className="text-success my-5">
                    Số bàn thắng: <span className="text-warning">{soBanThang}</span>
                </h1>
                <h1 className="text-success my-5">
                    Số bàn chơi: <span className="text-warning">{soBanChoi}</span>
                </h1>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    soBanThang: state.gameOanTuTiReducer.soBanThang,
    soBanChoi: state.gameOanTuTiReducer.soBanChoi,
})

export default connect(mapStateToProps)(ThongTinGame);