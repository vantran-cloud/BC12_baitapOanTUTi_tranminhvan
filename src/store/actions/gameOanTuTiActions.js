import * as gameOanTuTiConstants from '../constants/gameOanTuTiConstants';

export const actChonKeoBuaBao = keoBuaBao => ({
    type: gameOanTuTiConstants.CHON_KEO_BUA_BAO,
    payload: keoBuaBao
});

export const actPlayGame = () => ({
    type: gameOanTuTiConstants.PLAY_GAME
});