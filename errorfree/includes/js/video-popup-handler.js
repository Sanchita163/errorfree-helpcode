document.addEventListener('DOMContentLoaded', function () {
	document.querySelectorAll('.video-popup-trigger').forEach((element) => {
		element.addEventListener('click', function (e) {
			e.preventDefault(); // Prevents the default anchor behavior

			let videoUrl =
				this.closest('[data-video-url]').getAttribute('data-video-url');

			// Convert YouTube watch URL to embed URL
			const youtubeWatchUrlRegex =
				/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=)([\w\-]+)/;
			const youtubeEmbedUrlBase = 'https://www.youtube.com/embed/';
			if (youtubeWatchUrlRegex.test(videoUrl)) {
				const videoId = youtubeWatchUrlRegex.exec(videoUrl)[1];
				videoUrl = `${youtubeEmbedUrlBase}${videoId}`;
			}

			// Convert Vimeo URL to embed URL
			const vimeoUrlRegex =
				/(?:https?:\/\/)?(?:www\.)?(?:vimeo\.com\/)([\d]+)/;
			const vimeoEmbedUrlBase = 'https://player.vimeo.com/video/';
			if (vimeoUrlRegex.test(videoUrl)) {
				const videoId = vimeoUrlRegex.exec(videoUrl)[1];
				videoUrl = `${vimeoEmbedUrlBase}${videoId}`;
			}

			// Create the backdrop
			const backdrop = document.createElement('div');
			backdrop.style.cssText =
				'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0.9); z-index: 1050; display: flex; justify-content: center; align-items: center;';

			// Create the popup container
			const popup = document.createElement('div');
			popup.style.cssText =
				'max-width: 640px; width: 90%; background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); position: relative;';

			// Create the iframe for the video
			const iframe = document.createElement('iframe');
			iframe.setAttribute('autoplay', 'true');
			iframe.style.cssText = 'width: 100%; height: 360px; border: none;';
			iframe.setAttribute(
				'allow',
				'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
			);
			iframe.setAttribute('allowfullscreen', '');
			iframe.setAttribute('src', videoUrl);

			// Create the close button
			const closeButton = document.createElement('button');
			closeButton.textContent = 'Close';
			closeButton.style.cssText =
				'position: absolute; top: 10px; right: 10px; cursor: pointer;';

			// Assemble and display the popup
			popup.appendChild(iframe);
			popup.appendChild(closeButton);
			backdrop.appendChild(popup);
			document.body.appendChild(backdrop);

			// Close button functionality
			closeButton.addEventListener('click', function () {
				backdrop.remove(); // Removes the backdrop and popup from the DOM
			});
		});
	});
});
