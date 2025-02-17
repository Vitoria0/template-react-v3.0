import { Box, Typography } from '@mui/material';

const Menu = () =>{ 

    return(
       <Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				flexDirection: 'column',
				background: '#030012', 
				alignItems: 'center',
				width: '100vw',
				margin: 0,
				padding: 0,
				color: '#fff',
				gap: 8,
			}}
		>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					flexDirection: 'column',
					alignItems: 'center',
					width: '100%',
					height: '100vh',
					margin: 0,
					padding: 0,
					color: '#fff',
					gap: 20, 
					transition: 'all 700ms ease-in-out',
				}}
			>
				<Box
					sx={{
						alignItems: 'center',
						width: '100%',
						gap: 3,
						margin: '0 auto',
						display: 'flex',
						justifyContent: 'center',
						flexDirection: 'column',
					}}
				> 
					<Typography color='#FFF' variant='body1' align='center' maxWidth='50rem'>
						Esse é apenas um teste de navegação
					</Typography>
				</Box> 
			</Box>
		</Box>
    )
}

export default Menu
//teste