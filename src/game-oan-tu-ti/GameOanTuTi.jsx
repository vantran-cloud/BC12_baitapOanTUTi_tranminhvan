import React, { Component } from 'react'
import KeoBuaBao from './KeoBuaBao';
import ThongTinGame from './ThongTinGame';
import './GameOanTuTi.css';
import { connect } from 'react-redux';
import { actChonKeoBuaBao, actPlayGame } from '../store/actions/gameOanTuTiActions';

class GameOanTuTi extends Component {
    render() {
        const { keoBuaBao, imageSelect, chonKeoBuaBao, playGame } = this.props
        return (
            <div className="game-container text-center py-5">
                <h1 className="tilte">I'm iron man, i love you 3000 !!!</h1>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-4 player">
                            <div className="result">
                                <img className="py-5"src={imageSelect} width= "50px" alt="" />
                            </div>
                            <div className="iron">
                                <img src="./images/player.png" width="300px" alt="" />
                            </div>
                            
                            <span>
                                <img className={'keo'} src="./images/keo.png" alt="" onClick={() => chonKeoBuaBao('keo')} />
                                <img className={'bua'} src="./images/bua.png" alt="" onClick={() => chonKeoBuaBao('bua')} />
                                <img className={'bao'} src="./images/bao.png" alt="" onClick={() => chonKeoBuaBao('bao')} />
                            </span>
                        </div>
                        <div className="col-4">
                            <ThongTinGame />
                        </div>
                        <div className="col-4 player">
                            <div className="result">
                                <KeoBuaBao />
                            </div>
                            <div className="thanos">
                                <img src="./images/playerComputer.png" width="300px" alt="" />
                            </div>
                            
                        </div>
                    </div>

                    <button className="btn btn-success mt-5" onClick={() => playGame()}>Play game</button>
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = state => ({
    keoBuaBao: state.gameOanTuTiReducer.keoBuaBao,
    imageSelect: state.gameOanTuTiReducer.imageSelect,
});

const mapDispatchToProps = dispatch => ({
    chonKeoBuaBao: keoBuaBao => {
        dispatch(actChonKeoBuaBao(keoBuaBao));
    },
    
    playGame: () => {
        dispatch(actPlayGame());
    },
});

export default  connect(mapStateToProps,mapDispatchToProps)(GameOanTuTi);