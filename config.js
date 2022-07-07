module.exports = {
    app: {
        px: '.',
        token: 'OTkzNTQ1ODc4NDAzMDM5NDEy.G7x4HR.q4m6LNaDa7D4YnGVlln8lTa8rhj_nntQC4ovYQ',
        playing: 'by Teo`#0001 ❤️ | .help'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
