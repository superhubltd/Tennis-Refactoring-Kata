import { TennisGame } from './TennisGame';

export class TennisGame3 implements TennisGame {
  private p2: number = 0;
  private p1: number = 0;
  public player1Name: string;
  public player2Name: string;

  constructor(p1N: string, p2N: string) {
    this.player1Name = p1N;
    this.player2Name = p2N;
  }

  getScore(): string {
    let s: string;
    if (this.p1 < 4 && this.p2 < 4 && !(this.p1 + this.p2 === 6)) {
      const p: string[] = ['Love', 'Fifteen', 'Thirty', 'Forty'];
      s = p[this.p1];
      return (this.p1 === this.p2) ? s + '-All' : s + '-' + p[this.p2];
    } else {
      if (this.p1 === this.p2)
        return 'Deuce';
      s = this.p1 > this.p2 ? this.player1Name : this.player2Name;
      return (((this.p1 - this.p2) * (this.p1 - this.p2)) === 1) ? 'Advantage ' + s : 'Win for ' + s;
    }
  }

  wonPoint(playerName: string): void {
    if (playerName === 'player1')
      this.p1 += 1;
    else
      this.p2 += 1;
  }
}
