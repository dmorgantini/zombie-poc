describe("TileSheets", function () {

    var cafe;
    beforeEach(function () {
        cafe = new Cafe();

    });

    it("should be able to play a Song", function () {
    });

    describe("when song has been paused", function () {
        beforeEach(function () {
            player.play(song);
            player.pause();
        });

        it("should indicate that the song is currently paused", function () {
            expect(player.isPlaying).toBeFalsy();

            // demonstrates use of 'not' with a custom matcher
            expect(player).not.toBePlaying(song);
        });

        it("should be possible to resume", function () {
            player.resume();
            expect(player.isPlaying).toBeTruthy();
            expect(player.currentlyPlayingSong).toEqual(song);
        });
    });

});