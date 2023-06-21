import { TennisGame } from './TennisGame';

export class TennisGame4 implements TennisGame {

  //Constant Variables
  private readonly ONE_POINT:number = 1;
  private readonly DEUCE_POINT_CHECKING:number = 3;
  private readonly POINTS:string[] = ['Love', 'Fifteen', 'Thirty', 'Forty'];

  private player1Score: number = 0;
  private player2Score: number = 0;
  public player1Name: string;
  public player2Name: string;

  constructor(p1Name: string, p2Name: string) {
    this.player1Name = p1Name;
    this.player2Name = p2Name;
  }

  getScore(): string {
    // Check for Deuce
    if(this.player1Score === this.player2Score && this.player1Score >= this.DEUCE_POINT_CHECKING)
      return "Deuce";

    // Check for score under DEUCE_POINT_CHECKING
    if(this.player1Score <= this.DEUCE_POINT_CHECKING && this.player2Score <= this.DEUCE_POINT_CHECKING) 
      return this.player1Score === this.player2Score ? `${this.parseScore(this.player1Score)}-All` : 
                                                       `${this.parseScore(this.player1Score)}-${this.parseScore(this.player2Score)}`;

    let leadingPlayer = this.player1Score > this.player2Score ? this.player1Name : this.player2Name;
    let difference = Math.abs(this.player1Score - this.player2Score);

    // Identify if the if it's a advantage or a win for the leading player
    return difference === this.ONE_POINT ?  `Advantage ${leadingPlayer}` : `Win for ${leadingPlayer}`
  }

  wonPoint(playerName: string): void {
    if (playerName === this.player1Name)
      this.player1Score += this.ONE_POINT;
    else
      this.player2Score += this.ONE_POINT;
  }

  parseScore(point:number):string {
    return this.POINTS[point];
  }
}
