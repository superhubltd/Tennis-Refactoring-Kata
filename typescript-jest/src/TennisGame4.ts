import { TennisGame } from './TennisGame';

export class TennisGame4 implements TennisGame {

  //Constant Variables
  private readonly ONE_POINT:number = 1;
  private readonly DEUCE_POINT_CHECKING:number = 3;
  private readonly POINTS:string[] = ['Love', 'Fifteen', 'Thirty', 'Forty'];
  private readonly DEUCE_POINT:string = "Deuce";
  private readonly TIE_POINT:string = "All";
  private readonly ADVANTAGE:string = "Advantage";
  private readonly WINNER:string = "Win for";
  private readonly DASH:string = "-";

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
      return this.DEUCE_POINT;

    // Check for score under DEUCE_POINT_CHECKING
    if(this.player1Score <= this.DEUCE_POINT_CHECKING && this.player2Score <= this.DEUCE_POINT_CHECKING) 
      return this.player1Score === this.player2Score ? `${this.parseScore(this.player1Score)}${this.DASH}${this.TIE_POINT}` : 
                                                       `${this.parseScore(this.player1Score)}${this.DASH}${this.parseScore(this.player2Score)}`;

    let leadingPlayer = this.player1Score > this.player2Score ? this.player1Name : this.player2Name;
    let difference = Math.abs(this.player1Score - this.player2Score);

    // Identify if the if it's a advantage or a win for the leading player
    return difference === this.ONE_POINT ?  `${this.ADVANTAGE} ${leadingPlayer}` : `${this.WINNER} ${leadingPlayer}`
  }

  wonPoint(playerName: string): void {
    if (playerName === this.player1Name)
      this.player1Score++;
    else
      this.player2Score++;
  }

  parseScore(point:number):string {
    return this.POINTS[point];
  }
}
