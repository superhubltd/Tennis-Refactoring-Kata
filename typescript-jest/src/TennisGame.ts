export interface TennisGame {
  wonPoint(playerName: string): void;
  getScore(): string;
  player1Name:string;
  player2Name:string;
}
