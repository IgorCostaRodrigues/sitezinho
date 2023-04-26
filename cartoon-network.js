const player = document.getElementById("player1");
const videoSource = "https://playout.cdn.cartoonnetwork.com.br/playout_01/playlist-720p.m3u8";

if (Hls.isSupported()) {
  const hls = new Hls();
  hls.loadSource(videoSource);
  hls.attachMedia(player);
  hls.on(Hls.Events.MANIFEST_PARSED, () => {
    player.play();
  });
} else if (player.canPlayType("application/vnd.apple.mpegurl")) {
  player.src = videoSource;
  player.addEventListener("loadedmetadata", () => {
    player.play();
  });
}
