import { WINNER_COMBOS } from "../constants"
export const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (
        boardToCheck[a] && // 0 -> X u O
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a] // devuelve el ganador
      }
    }
    return null // devuelve null si no hay ganador
  }

export const checkEndGame = (newBoard) => {
    return newBoard.every((cell) => cell) // devuelve true si todos los elementos son diferentes de null
  }