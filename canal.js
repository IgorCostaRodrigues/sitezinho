const videoPlayer = document.getElementById('video-player');
const videoSource = document.getElementById('video-source');
const channels = [
  {
    name: 'Canal 1',
    url: 'https://playout.cdn.cartoonnetwork.com.br/playout_01/playlist-720p.m3u8',
    image: 'https://via.placeholder.com/200x100.png?text=Canal+1'
  },
  {
    name: 'Canal 2',
    url: 'https://playout.cdn.cartoonnetwork.com.br/playout_02/playlist-720p.m3u8',
    image: 'https://via.placeholder.com/200x100.png?text=Canal+2'
  },
  {
    name: 'Canal 3',
    url: 'https://playout.cdn.cartoonnetwork.com.br/playout_03/playlist-720p.m3u8',
    image: 'https://via.placeholder.com/200x100.png?text=Canal+3'
  }
];

function initialize() {
  const currentChannelIndex = parseInt(localStorage.getItem('currentChannelIndex')) || 0;
  videoSource.setAttribute('src', channels[currentChannelIndex].url);
  videoPlayer.load();
  videoPlayer.play();

  renderChannels(currentChannelIndex);
}

function renderChannels(currentChannelIndex) {
  const channelsContainer = document.querySelector('.canais');
  channelsContainer.innerHTML = '';

  channels.forEach((channel, index) => {
    const channelDiv = document.createElement('div');
    channelDiv.classList.add('canal');

    if (index === currentChannelIndex) {
      channelDiv.classList.add('ativo');
    }

    const channelLink = document.createElement('a');
    channelLink.setAttribute('href', '#');
    channelLink.addEventListener('click', () => {
      localStorage.setItem('currentChannelIndex', index);
      videoSource.setAttribute('src', channel.url);
      videoPlayer.load();
      videoPlayer.play();
      renderChannels(index);
    });

    const channelImage = document.createElement('img');
    channelImage.setAttribute('src', channel.image);
    channelImage.setAttribute('alt', channel.name);

    const channelName = document.createElement('h3');
    channelName.textContent = channel.name;

    channelLink.appendChild(channelImage);
    channelDiv.appendChild(channelLink);
    channelDiv.appendChild(channelName);
    channelsContainer.appendChild(channelDiv);
  });
}

initialize();
