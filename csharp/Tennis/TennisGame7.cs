using System;

namespace Tennis;

public class TennisGame7 : ITennisGame
{
    private int player1Score;
    private int player2Score;
    public string player1Name { get; set; }
    public string player2Name { get; set; }

    private const int ONE_POINT = 1;
    private const int DEUCE_POINT_CHECKING = 3;

    private readonly string[] POINTS = { "Love", "Fifteen", "Thirty", "Forty" };
    private const string DEUCE_POINT = "Deuce";
    private const string NORMAL_POINT_FORMAT = "{0}-{1}";
    private const string TIE_POINT = "All";
    private const string ADVANTAGE = "Advantage {0}";
    private const string WINNER = "Win for {0}";

    public TennisGame7(string player1Name, string player2Name)
    {
        this.player1Name = player1Name;
        this.player2Name = player2Name;
    }

    public void WonPoint(string playerName)
    {
        if (playerName == player1Name)
            player1Score++;
        else
            player2Score++;
    }

    public string GetScore()
    {
        // Check for Deuce
        if (player1Score == player2Score && player1Score >= DEUCE_POINT_CHECKING)
            return DEUCE_POINT;

        // Check for score under DEUCE_POINT_CHECKING
        if (player1Score <= DEUCE_POINT_CHECKING && player2Score <= DEUCE_POINT_CHECKING)
            return player1Score == player2Score ? string.Format(NORMAL_POINT_FORMAT, POINTS[player1Score], TIE_POINT) :
                                                  string.Format(NORMAL_POINT_FORMAT, POINTS[player1Score], POINTS[player2Score]);

        var leadingPlayer = player1Score > player2Score ? player1Name : player2Name;
        var difference = Math.Abs(player1Score - player2Score);

        // Identify if the if it's a advantage or a win for the leading player
        return difference == ONE_POINT ? string.Format(ADVANTAGE, leadingPlayer) :
                                         string.Format(WINNER, leadingPlayer);
    }
}