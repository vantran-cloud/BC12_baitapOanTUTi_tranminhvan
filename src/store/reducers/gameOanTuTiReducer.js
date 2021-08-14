import * as gameOanTuTiConstants from '../constants/gameOanTuTiConstants';

// tạo 1 state mặc định
const initialState = {
    mangKeoBuaBao: [
        {
            id: 1,
            hinhAnh: './images/keo.png',
        }
    ],
    
    keoBuaBao: 'keo', 
    imageSelect: './images/keo.png', // cho mặc định ban đầu là kéo
    soBanThang: 0,
    soBanChoi: 0,
};

const gameOanTuTiReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case gameOanTuTiConstants.CHON_KEO_BUA_BAO:
            return { ...state, imageSelect: `./images/${payload}.png`, keoBuaBao: payload }

        case gameOanTuTiConstants.PLAY_GAME:
            state.soBanChoi += 1;
            const mangKeoBuaBaoRandom = [];
                const randomNum = Math.floor(Math.random() * 3) + 1;
                let keoBuaBaoRandom = {};
                // hangle random kéo búa bao pcplayer
                if(randomNum === 1) {
                    keoBuaBaoRandom = {
                        id: randomNum,
                        hinhAnh: './images/keo.png'
                    }
                } else if(randomNum === 2) {
                    keoBuaBaoRandom = {
                        id: randomNum,
                        hinhAnh: './images/bua.png'
                    }
                } else {
                    keoBuaBaoRandom = {
                        id: randomNum,
                        hinhAnh: './images/bao.png'
                    }
                }


                // handle số bàn thắng
                if(state.keoBuaBao === 'bua' && randomNum === 1) {
                    
                    state.soBanThang += 1;
                } else if(state.keoBuaBao === 'bao' && randomNum === 2) {
                    state.soBanThang += 1;
                    
                } else if(state.keoBuaBao === 'keo' && randomNum === 3) {
                    state.soBanThang += 1;
                }
             
                mangKeoBuaBaoRandom.push(keoBuaBaoRandom);

            return { ...state, mangKeoBuaBao: mangKeoBuaBaoRandom };
        default:
            return state;
    }
    
}

export default gameOanTuTiReducer;