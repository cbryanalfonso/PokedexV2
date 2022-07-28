import { put, call, takeLatest } from "redux-saga/effects";
import * as ActionsCredits from "../actions/actionConsume";
import { getCredits } from "../api_requests";

//SAGA CREDITS

function* sagaGetPokemones(values) {
  try {
    //console.log("Entro al saga", values.uid);
    const creditsUser = yield call(getCredits, values.uid);
    yield put(ActionsCredits.actionSetCredits(creditsUser));
  } catch (error) {
    console.log(error);
  }
}

export default function* SagasCredits() {
  yield takeLatest(ActionsCredits.GET_CREDITS_REQUEST, sagaGetCredit);
}
