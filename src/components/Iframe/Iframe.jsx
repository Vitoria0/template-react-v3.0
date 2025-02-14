import { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import ReactPlayer from 'react-player';

const IframePlayer = ({ videoUrl, onVideoEnd }) => {
	const [isPlaying, setIsPlaying] = useState(false);

	const handlePlayClick = () => {
		setIsPlaying(isPlaying => !isPlaying);
	};

	const handlePlayClickEnded = () => {
		setIsPlaying();
		onVideoEnd();
	};

	return (
		<Box
			sx={{
				position: 'relative',
				width: '100%',
				aspectRatio: '12/7',
				backgroundColor: '#1C152E80', // Fundo sólido
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				borderRadius: '8px',
				overflow: 'hidden',
			}}
		>
			{!isPlaying ? (
				<Box
					sx={{
						position: 'absolute',
						width: '80px',
						height: '80px',
						background: 'linear-gradient(45deg, #AD61FF, #14F194)',
						borderRadius: '50%',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						cursor: 'pointer',
					}}
				>
					<IconButton onClick={handlePlayClick} sx={{ color: '#1C152E' }}>
						<PlayArrowRoundedIcon sx={{ fontSize: '3rem' }} />
					</IconButton>
				</Box>
			) : (
				<Box
					sx={{
						width: '100%',
						height: '100%',
						position: 'relative',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<ReactPlayer
						url={videoUrl}
						playing={isPlaying}
						controls={true}
						width='100%'
						height='100%'
						onEnded={() => {
							handlePlayClickEnded(); // Reseta o estado para parar o vídeo
						}}
						config={{
							youtube: {
								playerVars: {
									autoplay: 1,
								},
							},
						}}
					/>
				</Box>
			)}
		</Box>
	);
};

export default IframePlayer;
