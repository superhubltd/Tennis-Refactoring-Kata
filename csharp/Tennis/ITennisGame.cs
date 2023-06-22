namespace Tennis
{
    public interface ITennisGame
    {
        void WonPoint(string playerName);
        string GetScore();
        string player1Name { get; }
        string player2Name { get; }
    }
}

